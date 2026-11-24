// Cloudflare Worker — My Financial Life V4.22
// This worker reads only Pegadaian's public Harga Emas page. It returns a price
// ONLY if a structured payload explicitly identifies Tabungan Emas and a
// buyback/sell value. It intentionally fails closed rather than guessing.
const SOURCE = 'https://pegadaian.co.id/harga-emas';
const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Cache-Control': 'no-store' };
function json(body, status=200) { return new Response(JSON.stringify(body), {status, headers:{...cors,'Content-Type':'application/json; charset=utf-8'}}); }
function findPrice(node, depth=0) {
  if (!node || depth>12) return null;
  if (Array.isArray(node)) { for (const x of node) { const r=findPrice(x,depth+1); if(r) return r; } return null; }
  if (typeof node !== 'object') return null;
  const flat=JSON.stringify(node).toLowerCase();
  const productText=[node.product,node.productName,node.name,node.label,node.title,node.instrument,node.type].filter(x=>typeof x==='string').join(' ').toLowerCase();
  const isTabungan=productText.includes('tabungan emas') || (flat.includes('tabungan emas') && (flat.includes('buyback')||flat.includes('harga jual')));
  if (isTabungan) {
    const keys=['buybackPrice','buyback','sellPrice','hargaJual','harga_jual','sellingPrice'];
    for (const k of keys) { const n=Number(node[k]); if(Number.isFinite(n)&&n>1000) return {buybackPrice:n,source:'Pegadaian • halaman harga emas',updatedAt:node.updatedAt||node.updated_at||new Date().toISOString()}; }
  }
  for (const v of Object.values(node)) { const r=findPrice(v,depth+1); if(r) return r; }
  return null;
}
export default { async fetch(request) {
  if(request.method==='OPTIONS') return new Response(null,{headers:cors});
  if(request.method!=='GET') return json({error:'Method not allowed'},405);
  try {
    const response=await fetch(SOURCE,{headers:{'User-Agent':'Mozilla/5.0 MyFinancialLife price-check','Accept':'text/html,application/xhtml+xml'},cf:{cacheTtl:300,cacheEverything:true}});
    if(!response.ok) return json({error:'Pegadaian page HTTP '+response.status},502);
    const html=await response.text();
    const scripts=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>m[1]);
    for(const raw of scripts){
      const candidates=[raw.trim()];
      const matches=raw.match(/\{[\s\S]*\}/g)||[]; candidates.push(...matches);
      for(const candidate of candidates){try{const parsed=JSON.parse(candidate);const found=findPrice(parsed);if(found)return json(found)}catch{}}
    }
    return json({error:'Harga khusus Tabungan Emas tidak ditemukan dalam data terstruktur halaman publik. Tidak ada harga yang ditebak; gunakan input manual Tring.'},503);
  } catch(e) { return json({error:'Gagal mengakses halaman publik Pegadaian: '+String(e).slice(0,160)},502); }
}};

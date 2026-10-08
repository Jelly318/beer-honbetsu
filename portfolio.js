
const sampleDialog=document.getElementById('sampleDialog');
document.querySelectorAll('[data-demo]').forEach(el=>el.addEventListener('click',event=>{event.preventDefault();sampleDialog.querySelector('p').textContent=el.dataset.demo==='info'?'営業時間・席数は架空の設定です。実際の所在地はなく、来店案内・地図はありません。購入・予約もできません。':'オンラインショップへの導線のデモです。架空店舗の制作サンプルのため、購入・注文・予約はできません。';sampleDialog.showModal();}));
sampleDialog.addEventListener('click',event=>{if(event.target===sampleDialog){const r=sampleDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)sampleDialog.close();}});

if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target);}}),{threshold:.06});
 document.documentElement.classList.add('js-reveal');document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}

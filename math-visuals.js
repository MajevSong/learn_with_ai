'use strict';
window.MathVisuals=(()=>{
 const n=v=>{const x=Math.abs(v)<1e-9?0:v;return Number(x.toFixed(3)).toLocaleString('tr-TR',{maximumFractionDigits:3});};
 const types={
  'mat-tyt-19':'parabola','mat-tyt-20':'parabola','mat-ayt-01':'parabola','mat-ayt-02':'parabola','mat-ayt-03':'parabola',
  'mat-tyt-geo-06':'circle','mat-ayt-06':'circle','mat-ayt-07':'circle','mat-ayt-08':'circle','mat-ayt-09':'circle','mat-ayt-10':'circle',
  'mat-ayt-13':'tangent','mat-ayt-14':'tangent','mat-ayt-15':'tangent'
 };
 const sliders={
  parabola:[['a','a · dikey katsayı',-2,2,.25,1],['h','h · yatay öteleme',-3,3,.25,0],['k','k · dikey öteleme',-3,3,.25,0]],
  circle:[['theta','θ · yönlü açı (derece)',-360,720,1,30]],
  tangent:[['x0','x₀ · teğet noktası',-2,2,.1,1],['dx','Δx · iki noktanın yatay uzaklığı',.05,1,.05,1]]
 };
 const titles={parabola:'Parabolün grafiğini değiştir',circle:'Birim çemberde açı ve koordinatlar',tangent:'Kesenden teğete: değişim hızı'};
 const intros={parabola:'y = a(x − h)² + k grafiğinde katsayıları değiştir. Tepe noktası, kökler ve görüntü kümesi arasındaki bağı izle.',circle:'Noktanın x koordinatı cos θ, y koordinatı sin θ olur. Açıyı değiştirerek işaretleri, eksen açılarını ve periyodikliği incele.',tangent:'y = x² için iki nokta arasındaki ortalama değişim hızını, ilk noktadaki teğet eğimiyle karşılaştır. Δx küçülürken neyin değiştiğini izle.'};
 function render(l){const type=types[l.id];if(!type)return '';return `<section class="math-demo" data-math-demo="${type}"><h3>${titles[type]}</h3><p>${intros[type]}</p><div class="math-demo-controls">${sliders[type].map(([id,label,min,max,step,value])=>`<label><span>${label}<output data-math-output="${id}">${n(value)}</output></span><input type="range" data-math-input="${id}" aria-label="${label}" min="${min}" max="${max}" step="${step}" value="${value}"></label>`).join('')}</div><div class="math-demo-stage" data-math-stage></div><div class="math-demo-legend" data-math-legend></div><div class="math-demo-result" data-math-result role="status" aria-live="polite"></div><p class="math-demo-note" data-math-note></p></section>`;}
 function graph(id,xmin,xmax,ymin,ymax){
  const x=52,y=24,w=500,h=280,X=v=>x+(v-xmin)/(xmax-xmin)*w,Y=v=>y+(ymax-v)/(ymax-ymin)*h;
  let grid='';
  for(let v=Math.ceil(xmin);v<=xmax;v++)grid+=`<path d="M${X(v)} ${y}v${h}" stroke="#e9edf2"/><text x="${X(v)}" y="${Y(0)+17}" text-anchor="middle" font-size="9" fill="#7c8da0">${v}</text>`;
  for(let v=Math.ceil(ymin);v<=ymax;v++)grid+=`<path d="M${x} ${Y(v)}h${w}" stroke="#e9edf2"/>${v?`<text x="${X(0)-8}" y="${Y(v)+3}" text-anchor="end" font-size="9" fill="#7c8da0">${v}</text>`:''}`;
  const open=`<svg viewBox="0 0 600 350" role="img" aria-label="Koordinat düzleminde fonksiyon grafiği"><defs><clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}"/></clipPath></defs>${grid}<path d="M${x} ${Y(0)}h${w}m-6-4 6 4-6 4M${X(0)} ${y+h}V${y}m-4 6 4-6 4 6" fill="none" stroke="#8395a8" stroke-width="1.5"/><text x="566" y="${Y(0)+4}" font-size="12" fill="#4d6480">x</text><text x="${X(0)+8}" y="16" font-size="12" fill="#4d6480">y</text>`;
  const curve=(f,color='#587ba1')=>`<polyline clip-path="url(#${id})" points="${Array.from({length:241},(_,i)=>{const v=xmin+(xmax-xmin)*i/240;return X(v)+','+Y(f(v));}).join(' ')}" fill="none" stroke="${color}" stroke-width="2.6"/>`;
  const line=(m,b,color,dash='')=>`<path clip-path="url(#${id})" d="M${X(xmin)} ${Y(m*xmin+b)}L${X(xmax)} ${Y(m*xmax+b)}" fill="none" stroke="${color}" stroke-width="2" ${dash?'stroke-dasharray="'+dash+'"':''}/>`;
  const point=(a,b,label,color='#b28a49')=>`<g clip-path="url(#${id})"><circle cx="${X(a)}" cy="${Y(b)}" r="4.5" fill="${color}"/><text x="${X(a)+8}" y="${Y(b)-9}" font-size="11" fill="${color}">${label}</text></g>`;
  return {X,Y,open,curve,line,point};
 }
 function parabola(v){const {a,h,k}=v,g=graph('math-parabola',-5,5,-5,5),f=x=>a*(x-h)**2+k;
  const svg=g.open+g.curve(f)+g.point(h,k,`${a===0?'P':'T'}(${n(h)}; ${n(k)})`)+'</svg>';
  let text,roots;
  if(a===0){text=`a = 0: Bu grafik parabol değildir; y = ${n(k)} sabit fonksiyonudur.\nGörüntü kümesi: {${n(k)}}.`;roots=k===0?'Her gerçek sayı köktür.':'Gerçek kök yoktur.';}
  else{const r=-k/a;text=`Tepe noktası: (${n(h)}; ${n(k)}). Kollar ${a>0?'yukarı':'aşağı'} açılır.\n${a>0?'En küçük':'En büyük'} değer: ${n(k)}. Görüntü kümesi: ${a>0?'['+n(k)+', ∞)':'(−∞, '+n(k)+']'}.`;roots=r<0?'Gerçek kök yoktur.':r===0?`Çift katlı kök: x = ${n(h)}.`:`Kökler: x₁ = ${n(h-Math.sqrt(r))}, x₂ = ${n(h+Math.sqrt(r))}.`;}
  return {svg,text:`y = ${n(a)} · (x − (${n(h)}))² + (${n(k)})\n${text}\n${roots}`,note:'Tanım kümesi ℝ’dir. Grafik penceresi −5 ile 5 arasını gösterir; pencere dışındaki kısımlar çizimde kesilir. Ondalıklı kökler yaklaşık gösterilir.',legend:[['#587ba1','Fonksiyon'],['#b28a49',a===0?'İşaretli nokta':'Tepe noktası']]};
 }
 function radian(theta){if(theta===0)return '0';let a=Math.abs(theta),b=180;while(b){const r=a%b;a=b;b=r;}const num=theta/a,den=180/a,top=num===1?'π':num===-1?'−π':num+'π';return den===1?top:top+'/'+den;}
 function circle(v){const angle=v.theta*Math.PI/180,c=Math.cos(angle),s=Math.sin(angle),cx=220,cy=170,r=125,px=cx+r*c,py=cy-r*s,base=((v.theta%360)+360)%360,drawAngle=v.theta%360,arc=drawAngle*Math.PI/180;
  const svg=`<svg viewBox="0 0 600 350" role="img" aria-label="Birim çember üzerinde ${v.theta} derecelik açının sinüs ve kosinüsü"><path d="M65 ${cy}h310M${cx} 20v300" stroke="#9aabbd"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="#f7f9fc" stroke="#a3b4c6" stroke-width="1.5"/><path d="M${cx} ${cy}H${px}V${py}M${cx} ${py}H${px}" fill="none" stroke="#80a49b" stroke-dasharray="5 4"/><path d="M${cx} ${cy}L${px} ${py}" stroke="#bc9752" stroke-width="2.5"/>${drawAngle?`<path d="M${cx+32} ${cy}A32 32 0 ${Math.abs(drawAngle)>180?1:0} ${drawAngle<0?1:0} ${cx+32*Math.cos(arc)} ${cy-32*Math.sin(arc)}" fill="none" stroke="#bc9752" stroke-width="2"/>`:''}<circle cx="${px}" cy="${py}" r="5" fill="#587ba1"/><text x="${cx+r+10}" y="${cy+18}" font-size="12" fill="#4c6580">1</text><text x="${cx-r-19}" y="${cy+18}" font-size="12" fill="#4c6580">−1</text><text x="${cx+8}" y="${cy-r-8}" font-size="12" fill="#4c6580">1</text><text x="${cx+8}" y="${cy+r+19}" font-size="12" fill="#4c6580">−1</text><text x="397" y="117" font-size="16" fill="#4c6580">θ = ${v.theta}°</text><text x="397" y="147" font-size="14" fill="#4c6580">cos θ = ${n(c)}</text><text x="397" y="175" font-size="14" fill="#4c6580">sin θ = ${n(s)}</text><text x="397" y="215" font-size="12" fill="#7a8c9e">P = (cos θ, sin θ)</text></svg>`;
  return {svg,text:`θ = ${v.theta}° = ${radian(v.theta)} radyan. Esas ölçü: ${base}°.\nP noktasının koordinatları: (${n(c)}; ${n(s)}).\ncos²θ + sin²θ = 1. tan θ = ${Math.abs(c)<1e-9?'tanımsız':n(s/c)}.`,note:'Pozitif açı saat yönünün tersine, negatif açı saat yönünde ölçülür. Yayda tam turlar çizilmez; tam tur sayısı açı etiketine dahildir. θ ve θ + 360° aynı noktayı verir. Koordinatlar yaklaşık gösterilir; eksen üzerindeki sıfırlar yuvarlama hatasından arındırılır.',legend:[['#bc9752','Yarıçap = 1'],['#80a49b','Eksenlere izdüşümler'],['#587ba1','P noktası']]};
 }
 function tangent(v){const {x0,dx}=v,avg=2*x0+dx,der=2*x0,g=graph('math-tangent',-3.4,3.4,-1.5,10.5);
  const svg=g.open+g.curve(x=>x*x)+g.line(avg,x0*x0-avg*x0,'#7ba195','6 4')+g.line(der,-x0*x0,'#bc9752')+g.point(x0,x0*x0,'A','#bc9752')+g.point(x0+dx,(x0+dx)**2,'B','#7ba195')+'</svg>';
  return {svg,text:`A = (${n(x0)}; ${n(x0*x0)}), B = (${n(x0+dx)}; ${n((x0+dx)**2)}).\nKesen eğimi = [f(x₀ + Δx) − f(x₀)] / Δx = 2x₀ + Δx = ${n(avg)}.\nTeğet eğimi = f′(x₀) = 2x₀ = ${n(der)}.\nİki eğim arasındaki fark: ${n(dx)}.`,note:'Bu modelde f(x) = x² ve Δx > 0’dır. Δx sağdan sıfıra yaklaşırken kesen eğimi teğet eğimine yaklaşır. Türev, bölüme doğrudan Δx = 0 yazmakla bulunmaz; limit alınır.',legend:[['#587ba1','y = x²'],['#7ba195','Kesen AB'],['#bc9752','A noktasındaki teğet']]};
 }
 function bind(root){root.querySelectorAll('[data-math-demo]').forEach(el=>{const type=el.dataset.mathDemo;function draw(){const values={};el.querySelectorAll('[data-math-input]').forEach(input=>{values[input.dataset.mathInput]=Number(input.value);el.querySelector('[data-math-output="'+input.dataset.mathInput+'"]').textContent=n(Number(input.value));});const state=({parabola,circle,tangent})[type](values);el.querySelector('[data-math-stage]').innerHTML=state.svg;el.querySelector('[data-math-result]').textContent=state.text;el.querySelector('[data-math-note]').textContent=state.note;el.querySelector('[data-math-legend]').innerHTML=state.legend.map(([color,label])=>`<span style="--line-color:${color}">${label}</span>`).join('');}el.querySelectorAll('[data-math-input]').forEach(input=>input.addEventListener('input',draw));draw();});}
 return {render,bind};
})();

(()=>{var C=Object.defineProperty;var E=t=>C(t,"__esModule",{value:!0});var M=(t,n)=>()=>(n||(n={exports:{}},t(n.exports,n)),n.exports),B=(t,n)=>{for(var u in n)C(t,u,{get:n[u],enumerable:!0})};var k=M(O=>{E(O);B(O,{default:()=>S});async function S(t){t.innerHTML=`
        <div>
            <div id='TS'></div>
            <div id='float'></div>
        </div>
    `,T()}});var P=M($=>{E($);B($,{default:()=>N});var D=new Set;function N(){let t;do t=Math.random().toString(36).substring(2);while(D.has(t));return D.add(t),t}});var p={image:"images/Typescript.png",alt:"Typescript Image"};function v(t){t.innerHTML=`
    <div class='float'>
       <h2>Color Hex Tool</h2>
       <div class='logo'>
            <img src=${p.image} alt=${p.alt} >
       </div>
    </div>
  `}function x(t){t.innerHTML=`
            <div class='container'>
                <h1 class='titler'>ColorApp</h1>
                <p>Lighten / Darken</p>
                <label for="hex">Color (Hex)</label>
                <input type="text" name="hex" id="hexInput" 
                    placeholder="#000000" value="#c6d5ac"/>
                <div class="toggle">
                    <p id="lightenText" 
                        class="toggle-text">Lighten</p>
                    <div id="toggleBtn" class="toggle-btn">
                        <div class="inner-circle"></div>
                    </div>
                    <p id="darkenText" 
                        class="toggle-text unselected">Darken</p>
                </div>
                <label for="slider" id="sliderText">0%</label>
                <input type="range" min="0" max="100" value="0"
                    class="slider" id="slider" name="slider" />
                <p>Input Color</p>
                <div id="inputColor" class="box"></div>
                <p id='alteredColorText'>Altered Color</p>
                <div id="alteredColor" class="box"></div>
            </div>
        `;let n=document.getElementById("hexInput"),u=document.getElementById("inputColor"),h=document.getElementById("alteredColor"),f=document.getElementById("alteredColorText"),b=document.getElementById("sliderText"),a=document.getElementById("slider"),L=document.getElementById("lightenText"),y=document.getElementById("darkenText"),d=document.getElementById("toggleBtn");d?.addEventListener("click",()=>{d.classList.contains("toggled")?(d.classList.remove("toggled"),L.classList.remove("unselected"),y.classList.add("unselected")):(d.classList.add("toggled"),L.classList.add("unselected"),y.classList.remove("unselected")),H()}),n?.addEventListener("keyup",()=>{let l=n.value;if(!m(l))return;let e=l.replace("#","");u.style.backgroundColor="#"+e,H()});let m=l=>{if(!l)return n.style.backgroundColor="red",!1;n.style.backgroundColor="white";let e=l.replace("#","");return e.length===3||e.length===6},A=l=>{if(!m(l))return null;let e=l.replace("#","");e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);let o=parseInt(e.substring(0,2),16),s=parseInt(e.substring(2,4),16),r=parseInt(e.substring(4,6),16);return isNaN(o)||isNaN(s)||isNaN(r)?null:{r:o,g:s,b:r}},G=(l,e,o)=>{let s=("0"+l.toString(16)).slice(-2),r=("0"+e.toString(16)).slice(-2),c=("0"+o.toString(16)).slice(-2);return"#"+s+r+c},R=(l,e)=>{let{r:o,g:s,b:r}=A(l),c=Math.floor(parseInt(e)/100*255),I=g(o,c),q=g(s,c),F=g(r,c);return G(I,q,F)},H=()=>{a.value=0 .toString(),b.innerText="0%",h.style.backgroundColor=n.value,f.innerText=`Altered Color ${n?.value}`},g=(l,e)=>Math.min(255,Math.max(0,l+e));a?.addEventListener("input",()=>{if(!m(n.value))return null;b.textContent=`${a.value}%`;let l=d?.classList.contains("toggled")?-a.value:a.value,e=R(n.value,l.toString());h.style.backgroundColor=e,f.innerText=`Altered Color ${e}`})}function T(){let t=document.querySelector("#TS"),n=document.querySelector("#float");t&&x(t),n&&v(n)}var j=async()=>(await Promise.resolve().then(()=>k())).default,U=async()=>(await Promise.resolve().then(()=>P())).default,w=document.querySelector("#app");Promise.all([j(),U()]).then(([t,n])=>{w.id=n(),t(w)});})();
//# sourceMappingURL=index.js.map

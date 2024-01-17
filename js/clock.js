nt()

setInterval(nt, 1000);

function nt(){
    const date = new Date();

    const hour = date.getHours()%12;
    const min = date.getMinutes();
    const sec =date.getSeconds();

    const hDeg = hour*(360/12) + min*(360/12/60);
    const mDeg = min*(360/60);
    const sDeg = sec*(360/60);

    const hourElemnet = document.querySelector('#hr');
    const minElemnet = document.querySelector('#mn');
    const secElemnet = document.querySelector('#sc');

    hourElemnet.style.transform = `rotate(${hDeg}deg)`;
    minElemnet.style.transform = `rotate(${mDeg}deg)`;
    secElemnet.style.transform = `rotate(${sDeg}deg)`;
}

let str =document.getElementById('change');
function btn(n){

    if(n==0){
        str.href=("css/clock"+n+".css"); // href="css/clock0.css"
    }
    if(n==1){
        str.href=("css/clock"+n+".css");
    }
}
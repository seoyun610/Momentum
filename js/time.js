// 메인에 뜨는 시계
// <h2 id="clock">00:00:00</h2>

const h2 = document.getElementById("clock");

function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");
    h2.innerText=`${hour} : ${min} : ${sec}`;
}
getClock();
setInterval(getClock,1000);
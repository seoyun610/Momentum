const h1 = document.getElementById("h1")

const loginForm = document.getElementById("Login");
const inputLogin = document.querySelector("input");

const btnLogin = document.getElementById("submit");

//className 상수화
const CLASS_HIDDEN = 'hidden';
const KEY_USERNAME = 'userName';

function clickLogin(event){

    event.preventDefault();

    //loginForm 숨긴다
    loginForm.classList.add(CLASS_HIDDEN);
    const userName = inputLogin.value;


    localStorage.setItem(KEY_USERNAME,userName);

    displayGreeting(userName);
}
function displayGreeting(argName){
    //h1은 보여주고
    h1.classList.remove(CLASS_HIDDEN);
    h1.innerText = `${argName}님,반가워요`;
}

const localUsername = localStorage.getItem(KEY_USERNAME);
if (localUsername === null){
    loginForm.classList.remove(CLASS_HIDDEN);
    loginForm.addEventListener("submit",clickLogin);
}else{
    loginForm.classList.add(CLASS_HIDDEN);
    displayGreeting(localUsername);

}
//버튼 이벤트리스너 등록
loginForm.addEventListener("submit",clickLogin);



const quotes=[
    {
        quote:"성공하려면 당신을 찾아오는 모든 도전을 다 받아들여야 한다. 마음에 드는 것만 골라 받을 수는 없다.",
        author:"마이크 가프카"
    },{
        quote:"성취의 크기는 목표를 이루기 위해 당신이 극복해야 했던 장애물의 크기로 잰다.",
        author:"부커 T. 워싱턴"
    },{
        quote:"실패는 성공을 맛내는 양념이다",
        author:"트루먼 카포티"
    },{
        quote:"성공한 전사는 면도날 같은 초점을 지닌 평범한 사람이다.",
        author:"브루스 리"
    },{
        quote:"애초에 처한 상황의 포로가 되기를 거부할 때 성공으로 가는 첫 발을 내딛은 것이다",
        author:"마크케인"
    },{
        quote:"성공이란 당신 자신, 당신이 하는 일, 그 일을 하는 방식을 좋아하는 것이다.",
        author:"마야 앤젤루"
    },{
        quote:"마치지 않고 죽어도 되는 일만 내일로 미뤄라. ",
        author:"파블로 피카소"
    },{
        quote:"성공한 사람이 되려고 노력하기보다 가치있는 사람이 되려고 노력하라",
        author:"알버트 아인슈타인"
    },{
        quote:"열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다",
        author:"윈스턴 처칠"
    },{
        quote:"추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
        author:"월트 디즈니"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
//console.log(quotes[Math.floor(Math.random()*quotes.length)]);
const q = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerHTML=q.quote
author.innerHTML=q.author



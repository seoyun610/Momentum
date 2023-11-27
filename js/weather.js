

function onSuccess (position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    console.log(position.coords.temp);

    const latitude = position.coords.latitude
    const longitude = position.coords.longitude;
    const temp = position.coords.temp;
    const API_KEY = '92f314e26ea7c95587e7802fac91b31b';
    console.log('당신이 위치한 곳은 '+latitude + '와' + longitude);
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    fetch(url).then(response => response.json())
    .then((data) => {
        console.log(data.name, data.weather[0].description, data.main.temp);
        const span1 = document.querySelector('#span1');
        const span2 = document.querySelector('#span2');
        const span3 = document.querySelector('#span3');
        const span4 = document.querySelector('#span4');
        //const city = document.querySelector('#weatherBox span:nth-child(3)');
        //const temp = document.querySelector('#weatherBox span:last-child');
        //const city = document.querySelector('#weather span:last-child');

        //weather.innerText=data.weather[0].description;
        //city.innerText=data.name;
        //temp.innerText=(data.main.temp-32)/1.8;

        let weatherArr = ['sun','cloud','rain','snow','normal'];
        let weatherdescription = data.weather[0].description; //날씨값 ex) 구름, 비, 바람 등.. 영어로 출력

        span1.innerText=weatherdescription; //날씨
        span2.innerText=data.name; //지역
        //날씨 이미지 셋팅
        for(let i=0; i<weatherArr.length;i++){
            console.log("배고파: "+`./img/weather/${weatherArr[i]}.png`);
            console.log("i: "+i);
            if(weatherdescription.includes(weatherArr[i])){
                const weaImage = document.createElement("img");
                weaImage.src = `./img/weather/${weatherArr[i]}.png`;
                span4.appendChild(weaImage);
                break;
            }

            if(i==weatherArr.length-1){ //마지막까지 없으면 보통사진 띄우기
                const weaImage = document.createElement("img");
                weaImage.src = `./img/weather/${weatherArr[weatherArr.length-1]}.png`;
                span4.appendChild(weaImage);
            }

            span3.innerText = Math.round(data.main.temp-273.15);
          
        }//for end
    })

}

function onFail () {
    console.log('위치를 찾을 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onSuccess,onFail);
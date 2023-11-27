const images=["1.png","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];

const image = images[Math.floor(Math.random()*images.length)];
console.log(image[0]);




const bgImage = document.createElement("img");


//bgImage.src = `img/${image}`;

//console.log(bgImage);

// document.body.appendChild(bgImage);

//let src = `img/${image}`;
//document.body.style.backgroundImage = src;

const imgUrl = `url('img/${image}')`;

document.body.style.backgroundImage = imgUrl;


const img = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg"
]

const main = document.getElementById('mainBody');
const blurImg = document.getElementById('blurImg');

const chosenImg = img[Math.floor(Math.random() * img.length)]
console.log("어떤 img ???? ??", chosenImg);
const backgroundImg = document.createElement("img"); 

backgroundImg.src = `img/${chosenImg}`; //폴더명도 같아야한다.
console.log(backgroundImg);

blurImg.appendChild(backgroundImg); //마지막 자식요소로 들어간다. 반대의 개념인 prepend를 사용하게 되면 맨 앞에 자식요소로 들어간다.


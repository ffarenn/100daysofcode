// read -> realise -> write -> Reshape
// think twice - code once

const number = document.querySelector('.count-number');

const btn = document.querySelector('.generator');

// btn.addEventListener('click', generateNumber);

// function generateNumber() {
//     const rand = Math.floor(Math.random()*100+1);
//     number.innerHTML = rand;
// }


const randomNumber = () => {
    const num = Math.floor(Math.random() * 100 + 1)
    number.innerHTML = num
}

btn.addEventListener('click', randomNumber);
var count = [0, 0, 0, 0, 0, 0];
let firstImg = getRandomInt(0, 6);
document.querySelectorAll('.img')[firstImg].classList.add('--select');
var lastImg = firstImg + 1;

function go() {
    var randomAudio = getRandomInt(1, 7);
    var randomImg = getRandomInt(1, 7);
    if (lastImg == randomImg){
        if(randomImg == 6){
            randomImg = 1;
        } else {
            randomImg++;
        }
    }

    currentEl = document.querySelector(".--select");
    currentEl.classList.remove('--select');

    let nextEl = document.querySelector("#img" + randomImg);
    nextEl.classList.add('--select');

    let countEl = document.querySelector("#vl" + lastImg);
    count[lastImg-1] = countEl.innerText = Number(count[lastImg-1]) + 1;

    lastImg = randomImg;

    var audio = document.getElementById('audio' + randomAudio);
    audio.play();
};

document.addEventListener('click', go);
document.addEventListener('keydown', go);


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
  }


  const snowContainer = document.getElementById('snow');

  const images = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png',
    'img/6.png'
];

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const randomImage = images[Math.floor(Math.random() * images.length)];
    snowflake.style.backgroundImage = `url('${randomImage}')`;

    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.top = "-40px";
    snowflake.style.width = snowflake.style.height = getRandomInt(8, 10) + 'vh';

    snowContainer.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

setInterval(createSnowflake, 1000);
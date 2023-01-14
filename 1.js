const LoginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit (event) {
  event.preventDefault();
  LoginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  painGreeting();
}

function painGreeting() {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = "hello! " + userName;
  // `hello ${변수명}` <---이것도 문자열이랑 변수를 합쳐서 문자열로 표기 `이건 백틱이라고 함
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);
if(saveUsername === null) {
  LoginForm.classList.remove(HIDDEN_CLASSNAME);
  LoginForm.addEventListener("submit", onLoginSubmit);

} else {
  painGreeting();
}

//------------------------greeting---------------------------

const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock()
setInterval(getClock, 1000);

//--------------------------clock-----------------------------

const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "-Nelson Mandela-",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "-Walt Disney-",
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "-Eleanor Roosevelt-",
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "-Oprah Winfrey-",
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "-James Cameron-",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "-John Lennon-",
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "-Franklin D. Roosevelt-",
  },
  {
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "-Margaret Mead-",
  },
  {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "-Robert Louis Stevenson-",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "-Eleanor Roosevelt-",
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "-Benjamin Franklin-",
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    author: "-Helen Keller-",
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "-Aristotle-",
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "-Anne Frank-",
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "-Ralph Waldo Emerson-",
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[ Math.floor(Math.random() * quotes.length)];
  // mate.round--반올림  mate.ceil--올림  mate.floor--내림])

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//---------------------------quote-----------------------------

const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg"
];
const randomImg =  images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${randomImg}`;
document.body.appendChild(bgImg);

//----------------------------bgimg------------------------------

function onGeoOk(position) {
  console.log(position);
}
function onGeoError() {
  alert("위치를 찾지 못했습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//getCurrentPosition 은 2개의 인자를 필요로 함 하나는 모든게 잘 됐을 때 실행 될 함수, 다른 하나는 에러가 발생했을 때 실행 될 함수
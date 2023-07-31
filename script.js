 // variables
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputcontrol = email.parentElement;
    const errorDisplay = inputcontrol.querySelector('error');

    errorDisplay.innerText = message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('sucess');

}

const setsucess = element => {
  
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector('.error');

    errorDisplay.innerText = ' ';
    inputcontrol.classList.add('sucess');
    inputcontrol.classList.remove('error');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const password = password.value.trim();


    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setsucess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setsucess(password);
    }
};



 const homeBtn = document.getElementById("home");
 const generalBtn = document.getElementById("genral");
 const politicsBtn = document.getElementById("politics");
 const worldbtn = document.getElementById("world");
 const businessBtn = document.getElementById("business");
 const travelbtn = document.getElementById("travel");
 const sportsBtn = document.getElementById("sport");
 const entertainmentBtn = document.getElementById("entertainment");
 const technologyBtn = document.getElementById("technology");
 const weatherBtn = document.getElementById("weather");
 const breaking = document.getElementById("breaking");
 const searchBtn = document.getElementById("searchBtn");
 
 
 
 const newsQuery = document.getElementById("newsQuery");
 const newsType = document.getElementById("newsType");
 const newsdetails = document.getElementById("newsdetails");
 
 // Array
 var newsDataArr = [];
 
 // apis 
 const API_KEY = "a0c1c6b32cdf40dd85753cf6a060f220"
 const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
 const POLITICS_NEWS = "http://newsapi.org/v2/top-headlines?country=in&apikey=";
 const BREAKING_NEWS="http://newsapi.org/v2/top-headlines?country=breaking&apikey=";
 const TRAVEL_NEWS = "http://newsapi.org/v2/top-headlines?country=travel&apikey=";
 const  WORLD_NEWS= "http://newsapi.org/v2/top-headlines?country=worldnews&apikey=";
 const WEATHER_NEWS="http://newsapi.org/v2/top-headlines?country=weather&apikey=";
 const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
 const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
 const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
 const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
 const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
 const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";
 
 window.onload = function() {
     newsType.innerHTML="<h4>Headlines</h4>";
     fetchHeadlines();
 };
 
 
 generalBtn.addEventListener("click",function(){
     newsType.innerHTML="<h4>General news</h4>";
     fetchGeneralNews();
 });
 
 businessBtn.addEventListener("click",function(){
     newsType.innerHTML="<h4>Business</h4>";
     fetchBusinessNews();
 });
 
 sportsBtn.addEventListener("click",function(){
     newsType.innerHTML="<h4>Sports</h4>";
     fetchSportsNews();
 });
 
 entertainmentBtn.addEventListener("click",function(){
     newsType.innerHTML="<h4>Entertainment</h4>";
     fetchEntertainmentNews();
 });
 
 technologyBtn.addEventListener("click",function(){
     newsType.innerHTML="<h4>Technology</h4>";
     fetchTechnologyNews();
 });
 
 searchBtn.addEventListener("click",function(){
     newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
     fetchQueryNews();
 });
 
 const fetchHeadlines = async () => {
     const response = await fetch(HEADLINES_NEWS+API_KEY);
     newsDataArr = [];
     if(response.status >=200 && response.status < 300) {
         const myJson = await response.json();
         newsDataArr = myJson.articles;
     } else {
         // handle errors
         console.log(response.status, response.statusText);
         newsdetails.innerHTML = "<h5>No data found.</h5>"
         return;
     }
 
     displayNews();
 }
 
 
 const fetchGeneralNews = async () => {
     const response = await fetch(GENERAL_NEWS+API_KEY);
     newsDataArr = [];
     if(response.status >=200 && response.status < 300) {
         const myJson = await response.json();
         newsDataArr = myJson.articles;
     } else {
         // handle errors
         console.log(response.status, response.statusText);
         newsdetails.innerHTML = "<h5>No data found.</h5>"
         return;
     }
 
     displayNews();
 }
 
 const fetchBusinessNews = async () => {
     const response = await fetch(BUSINESS_NEWS+API_KEY);
     newsDataArr = [];
     if(response.status >=200 && response.status < 300) {
         const myJson = await response.json();
         newsDataArr = myJson.articles;
     } else {
         // handle errors
         console.log(response.status, response.statusText);
         newsdetails.innerHTML = "<h5>No data found.</h5>"
         return;
     }
 
     displayNews();
 }
 
 const fetchEntertainmentNews = async () => {
     const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
     newsDataArr = [];
     if(response.status >=200 && response.status < 300) {
         const myJson = await response.json();
         console.log(myJson);
         newsDataArr = myJson.articles;
     } else {
         // handle errors
         console.log(response.status, response.statusText);
         newsdetails.innerHTML = "<h5>No data found.</h5>"
         return;
     }
 
     displayNews();
 }
 
 const fetchSportsNews = async () => {
     const response = await fetch(SPORTS_NEWS+API_KEY);
     newsDataArr = [];
     if(response.status >=200 && response.status < 300) {
         const myJson = await response.json();
         newsDataArr = myJson.articles;
     } else {
         // handle errors
         console.log(response.status, response.statusText);
         newsdetails.innerHTML = "<h5>No data found.</h5>"
         return;
     }
 
     displayNews();
 }
 
 const fetchTechnologyNews = async () => {
     const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
     newsDataArr = [];
     if(response.status >=200 && response.status < 300) {
         const myJson = await response.json();
         newsDataArr = myJson.articles;
     } else {
         // handle errors
         console.log(response.status, response.statusText);
         newsdetails.innerHTML = "<h5>No data found.</h5>"
         return;
     }
 
     displayNews();
 }
 
 const fetchQueryNews = async () => {
 
     if(newsQuery.value == null)
         return;
 
     const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
     newsDataArr = [];
     if(response.status >= 200 && response.status < 300) {
         const myJson = await response.json();
         newsDataArr = myJson.articles;
     } else {
         //error handle
         console.log(response.status, response.statusText);
         newsdetails.innerHTML = "<h5>No data found.</h5>"
         return;
     }
 
     displayNews();
 }
 
 function displayNews() {
 
     newsdetails.innerHTML = "";
 
     // if(newsDataArr.length == 0) {
     //     newsdetails.innerHTML = "<h5>No data found.</h5>"
     //     return;
     // }
 
     newsDataArr.forEach(news => {
 
         var date = news.publishedAt.split("T");
         
         var col = document.createElement('div');
         col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";
 
         var card = document.createElement('div');
         card.className = "p-2";
 
         var image = document.createElement('img');
         image.setAttribute("height","matchparent");
         image.setAttribute("width","100%");
         image.src=news.urlToImage;
 
         var cardBody = document.createElement('div');
         
         var newsHeading = document.createElement('h5');
         newsHeading.className = "card-title";
         newsHeading.innerHTML = news.title;
 
         var dateHeading = document.createElement('h6');
         dateHeading.className = "text-primary";
         dateHeading.innerHTML = date[0];
 
         var discription = document.createElement('p');
         discription.className="text-muted";
         discription.innerHTML = news.description;
 
         var link = document.createElement('a');
         link.className="btn btn-dark";
         link.setAttribute("target", "_blank");
         link.href = news.url;
         link.innerHTML="Read more";
 
         cardBody.appendChild(newsHeading);
         cardBody.appendChild(dateHeading);
         cardBody.appendChild(discription);
         cardBody.appendChild(link);
 
         card.appendChild(image);
         card.appendChild(cardBody);
 
         col.appendChild(card);
 
         newsdetails.appendChild(col);
     });
        let signup = document.querySelector(".signup");
        let login = document.querySelector(".login");
        let slider = document.querySelector(".slider");
        let formSection = document.querySelector(".form-section");
        
        signup.addEventListener("click", () => {
            slider.classList.add("moveslider");
            formSection.classList.add("form-section-move");
        });
        
        login.addEventListener("click", () => {
            slider.classList.remove("moveslider");
            formSection.classList.remove("form-section-move");
        });
 
 }
 
 
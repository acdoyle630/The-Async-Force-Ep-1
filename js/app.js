/*jshint esversion: 6*/

// New Hope Planets
let planetList1 = null;

//Empire Planets
let planetList2 = null;

//Jedi Planets
let planetList3 = null;

function reqListener(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData);
  const vadarName = document.querySelector('#person4Name');
  vadarName.innerHTML = requestData.name;
}

const oReq = new XMLHttpRequest();

oReq.addEventListener('load', reqListener);
oReq.open('GET','http://swapi.co/api/people/4/');
oReq.send();

function getWorld(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData);
  const home = document.querySelector('#person4HomeWorld');
  home.innerHTML = requestData.name;
}

const oReq1 = new XMLHttpRequest();

oReq1.addEventListener('load', getWorld);
oReq1.open('GET', 'http://swapi.co/api/planets/1/');
oReq1.send();

function person14(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData);
  const name = document.querySelector('#person14Name');
  name.innerHTML = requestData.name;
}

const oReq2 = new XMLHttpRequest();

oReq2.addEventListener('load', person14);
oReq2.open('GET', 'http://swapi.co/api/people/14/');
oReq2.send();

function person14Species(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData);
  const species = document.querySelector('#person14Species');
  species.innerHTML = requestData.name;
}

const oReq3 = new XMLHttpRequest();

oReq3.addEventListener('load', person14Species);
oReq3.open('GET', 'http://swapi.co/api/species/1/');
oReq3.send();

const films = document.querySelector('#films');


//Add New Hope
function getHope(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData);
  const filmsLi1 = document.createElement('h2');
  filmsLi1.id = 'hope';
  planetList1 = filmsLi1;
  planetList1.innerHTML = requestData.title;
  films.appendChild(planetList1);
}


//request New Hope
const oReq4 = new XMLHttpRequest();
oReq4.addEventListener('load', getHope);
oReq4.open('GET', 'http://swapi.co/api/films/1/');
oReq4.send();

//Alderaan
function hopePlanets(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData);
  const hopePlanetsList = document.createElement('li');
  hopePlanetsList.innerHTML = requestData.name;
  hope.appendChild(hopePlanetsList);
}

//Yavin IV
function hopePlanet2(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData);
  const hopePlanet2 = document.createElement('li');
  hopePlanet2.innerHTML = requestData.name;
  hope.appendChild(hopePlanet2);
}

//Tatooine
function hopePlanet3(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData);
  const hopePlanet3 = document.createElement('li');
  hopePlanet3.innerHTML = requestData.name;
  hope.appendChild(hopePlanet3);
}

//Request Tatooine
const oReq9 = new XMLHttpRequest();
oReq9.addEventListener('load',hopePlanet3);
oReq9.open('GET', 'http://swapi.co/api/planets/1/');
oReq9.send();

//Request Alderaan
const oReq8 = new XMLHttpRequest();
oReq8.addEventListener('load', hopePlanet2);
oReq8.open('GET', 'http://swapi.co/api/planets/3/');
oReq8.send();

//Request Yavin IV
const oReq7 = new XMLHttpRequest();
oReq7.addEventListener('load', hopePlanets);
oReq7.open('GET', 'http://swapi.co/api/planets/2/' );
oReq7.send();


//Add Empire
function getEmpire(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData);
  const filmsLi2 = document.createElement('h2');
  filmsLi2.innerHTML = requestData.title;
  films.appendChild(filmsLi2);
}

//Request Empire
const oReq5 = new XMLHttpRequest();
oReq5.addEventListener('load', getEmpire);
oReq5.open("GET", 'http://swapi.co/api/films/2/');
oReq5.send();

function getJedi(){
  const requestData = JSON.parse(this.responseText);
  console.log('reqData', requestData);
  const filmsLi3 = document.createElement('h2');
  filmsLi3.innerHTML = requestData.title;
  films.appendChild(filmsLi3);
}

const oReq6 = new XMLHttpRequest();

oReq6.addEventListener('load', getJedi);
oReq6.open('GET', 'http://swapi.co/api/films/3/');
oReq6.send();


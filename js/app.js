/*jshint esversion: 6*/

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

function getFilms(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData);
  //const films = document.querySelector('#films');
 //films.innerHTML = requestData;
}

const oReq4 = new XMLHttpRequest();

oReq4.addEventListener('load', getFilms);
oReq4.open('GET', 'http://swapi.co/api/films/');
oReq4.send();
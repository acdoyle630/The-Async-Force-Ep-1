/*jshint esversion: 6*/

function reqListener(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData.name);
  return (requestData.name);
}

const oReq = new XMLHttpRequest();

oReq.addEventListener('load', reqListener);
oReq.open('GET','http://swapi.co/api/people/4/');
oReq.send();

const vadarName = document.querySelector('#person4Name');
vadarName.innerHTML = this
.responseText;
'use strict'

const color =  document.getElementsByClassName('color');
const label = document.getElementsByTagName('label');
var colors = new Array();
var paleteKeppS = [];
const paletteName = document.getElementById('txtMyPalette');
var i = 0;
 
 
function paleteGenerator() {  
  colors = [];
  for(let i = 0; i < color.length; i++) {
		const colorPalette = Math.floor(Math.random() * 16777215).toString(16);
    colors.push(`#${colorPalette}`);
		color[i].style.background = `#${colorPalette}`;
		color[i].classList.add('fade-in');
		setTimeout(() => color[i].classList.remove('fade-in'), 400);
    const spans = document.getElementsByTagName('span');    
	}
 
}
 
function paleteKeep() {
  if(colors.length > 0) {
    paleteKeppS.push({seleccion: colors});
    showKeepP(colors);
    i++;
  } else {
    alert("No hay colores para guardar.");

   }  
}

function showKeepP() {
  const divParent = document.querySelector('.containerShowRun');
  let paleteSpace = document.createElement('div');
  myPaletteCard.setAttribute("id", "card"+i);
  myPaletteCard.classList.add("card");
  divParent.appendChild(myPaletteCard);

  
  let myLabelCard = document.createElement('label');
  myLabelCard.setAttribute("id", "myNamePalette"+i);
  

  document.querySelector('#card'+i).appendChild(myLabelCard);
  document.getElementById('myNamePalette'+i).innerHTML = myPalettes[i].name;



  for(let j = 0; j < paleteKeppS[i].seleccion.length; j++) {
    let seleccionDiv = document.createElement('div');
    seleccionDiv.setAttribute("style", `background-color: #${paleteKeppS[i].seleccion[j]}`);
    seleccionDiv.classList.add("color-stick");

    document.querySelector('#card'+i).appendChild(myColorsDiv);

   
  }  

  
}



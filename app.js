const hShadowLength = document.querySelector(".h-shadow-length");
const vShadowLength = document.querySelector(".v-shadow-length");
const blurRadius = document.querySelector(".blur-radius");
const spreadRadius = document.querySelector(".spread-radius");
const shadowColor = document.querySelector(".input-color");

const selectColor = document.querySelector(".box-color");
const borderRadius = document.querySelector(".border-radius");
const height = document.querySelector(".height");
const width = document.querySelector(".width");

const boxColor = document.querySelector(".box-color-value");
const radiusValue = document.querySelector(".radius-value");
const widthValue = document.querySelector(".width-value");
const heightValue = document.querySelector(".height-value");
const element = document.querySelector(".square");

const hValueShadow = document.querySelector(".horizontal-shadow");
const vValueShadow = document.querySelector(".vertical-shadow");
const valueBlur = document.querySelector(".value-blur");
const valueRadius = document.querySelector(".value-radius");
const valueColor = document.querySelector(".value-color");
const generateShadow = document.querySelector(".code-shadow");
const generateBox = document.querySelector(".code-box");


let xValue = 0;
let yValue = 0;
let blurValue = 6;
let spreadValue = 0;
let colorValue = "";


// box Shadow Options

hShadowLength.addEventListener("input", (e) => { 
    hValueShadow.innerHTML = e.target.value;
    xValue = e.target.value;
    element.style.boxShadow = `${xValue}px ${yValue}px ${blurValue}px  ${spreadValue}px ${colorValue}`;
    generateShadow.innerHTML = `Border Shadow ${xValue}px ${yValue}px ${blurValue}px  ${spreadValue}px ${colorValue}`;
});
vShadowLength.addEventListener("input", (e) => { 
    vValueShadow.innerHTML = e.target.value;
    yValue = e.target.value;
    element.style.boxShadow = `${xValue}px ${yValue}px ${blurValue}px  ${spreadValue}px ${colorValue}`;
    generateShadow.innerHTML = `Border Shadow ${xValue}px ${yValue}px ${blurValue}px  ${spreadValue}px ${colorValue}`;
});
blurRadius.addEventListener("input", (e) => { 
    valueBlur.innerHTML = e.target.value;
    blurValue = e.target.value;
    element.style.boxShadow = `${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
    generateShadow.innerHTML = `Border Shadow ${xValue}px ${yValue}px ${blurValue}px  ${spreadValue}px ${colorValue}`;
});
spreadRadius.addEventListener("input", (e) => { 
    valueRadius.innerHTML = e.target.value;
    spreadValue = e.target.value;
    element.style.boxShadow = `${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
    generateShadow.innerHTML = `Border Shadow ${xValue}px ${yValue}px ${blurValue}px  ${spreadValue}px ${colorValue}`;
});
shadowColor.addEventListener("input", (e) => { 
    valueColor.innerHTML = e.target.value;
    colorValue = e.target.value;
    element.style.boxShadow = `${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
    generateShadow.innerHTML = `Border Shadow ${xValue}px ${yValue}px ${blurValue}px  ${spreadValue}px ${colorValue}`;
});


// box propertis

  selectColor.addEventListener("input", (e) => {
    boxColor.innerHTML = e.target.value;
    element.style.backgroundColor = e.target.value;
  });

  borderRadius.addEventListener("input", (e) => {
    radiusValue.innerHTML = e.target.value;
    element.style.borderRadius = `${e.target.value}px`;
  });

  width.addEventListener("input", (e) => {
    widthValue.innerHTML = e.target.value;
    element.style.width = `${e.target.value}px`;
  });

  height.addEventListener("input", (e) => {
    heightValue.innerHTML = e.target.value;
    element.style.height = `${e.target.value}px`;
  });

 
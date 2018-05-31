window.onload = function() {

  let domText = document.getElementById('text'),
      domUpperBtn = document.getElementById('toUpper'),
      domLowerBtn = document.getElementById('toLower'),
      domBigFontSizeBtn = document.getElementById('bigFont'),
      domSmallFontSizeBtn = document.getElementById('smallFont'),
      domChangeColorBtn = document.getElementById('changeColor');

  domLowerBtn.onclick = function() {
    domText.innerHTML = domText.textContent.toLocaleLowerCase()
  }

  domUpperBtn.onclick = function() {
    domText.innerHTML = domText.textContent.toUpperCase()
  }

  domBigFontSizeBtn.onclick = function(){
    let size = window.getComputedStyle(domText).fontSize; //get value of fonteSize
    size = size.slice(0, size.length-2); //delete 'px'
    size = parseFloat(size) + 2; //get new fonteSize 
    domText.style.fontSize = size + 'px'; //set new size
  }

  domSmallFontSizeBtn.onclick = function(){
    let size = window.getComputedStyle(domText).fontSize; 
    size = size.slice(0, size.length-2); 
    size = parseFloat(size) - 2; 
    domText.style.fontSize = size + 'px';
  }

  domChangeColorBtn.onclick = function(){
    let rgb = getRandomColor();
    domText.style.color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    domText.style.borderColor = 'black'; //doesn't change border color
  }

  function getRandomColor() {
    let numbers = [];
    for(let i = 0; i < 3; i++) {
      numbers[i] = getRndInteger(0, 255); 
    }
    return numbers;
  }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

}
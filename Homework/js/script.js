window.onload = function() {

  let domCircleContainer = document.getElementById('circleContainer'),
    domAddBbtn = document.getElementById('addCircle');

  let Circle = function(rgbColor){
    let self = this;
    this.dom = document.createElement('div');
    this.dom.classList.add('circle');
    this.dom.style.backgroundColor = `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
    this.dom.onclick = function(){
      self.dom.remove();
    } 
  }

  domAddBbtn.onclick = function(){
    domCircleContainer.appendChild(new Circle(getRandomColor()).dom);
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
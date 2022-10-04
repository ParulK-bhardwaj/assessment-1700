// input form variables and assign initial value as aplaceholder at start 
const widthInput = document.getElementById('width-input');
widthInput.value = 100;
const heightInput = document.getElementById('height-input');
heightInput.value = 100;
const colorInput = document.getElementById('color-input');
colorInput.value = '#000000';

// input display variables and set the HTML content same as input value
const widthDisplay = document.getElementById('width-display');
widthDisplay.innerHTML = `${widthInput.value}px`;
const heightDisplay = document.getElementById('height-display');
heightDisplay.innerHTML = `${heightInput.value}px`;
const colorDisplay = document.getElementById('color-display');
colorDisplay.innerHTML = `${colorInput.value}`;

// color box variable 
const colorBox = document.getElementById('color-box');

// to have the initial value assigned to color box style to not have 0 width 0 height box 
colorBox.style.width = `${widthInput.value}px`;
colorBox.style.height = `${heightInput.value}px`;
colorBox.style.backgroundColor = `${colorInput.value}`;

// Added the eventListener so when an input is put in the update function is called
widthInput.addEventListener('input', update);
heightInput.addEventListener('input', update);
colorInput.addEventListener('input', update);

// update function to update the inputDisplay and the colorBox
function update(e) {
    widthDisplay.innerHTML = `${widthInput.value}px`;
    heightDisplay.innerHTML = `${heightInput.value}px`;
    colorDisplay.innerHTML = `${colorInput.value}`;

    colorBox.style.width = `${widthInput.value}px`;
    colorBox.style.height = `${heightInput.value}px`;
    colorBox.style.backgroundColor = `${colorInput.value}`;
}
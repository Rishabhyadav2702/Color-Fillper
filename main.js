const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color');
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}

btn.innerText='Change Color Backgroud color'
btn.style.padding='10px';
btn.style.borderRadius='5px';
btn.style.border='2px blue solid';
btn.style.margin='10px'
btn.style.color='white'
btn.style.backgroundColor='transparent'


btn.addEventListener("click", function () {
        let hexcolor = '#'
        for(let i = 0; i < 6 ; i++ ){
            hexcolor += hex[getRandomNumber()]
        }
        color.textContent = hexcolor;
        document.body.style.background = hexcolor
})
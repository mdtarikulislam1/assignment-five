

// click new question page
document.getElementById('new-page').addEventListener('click',function(){
    window.location.href='question.html'
})

// change color
document.getElementById('change-color').addEventListener('click',function(){
    let color = ['red','blue','yellow','green','pink']
    let colorChange = color[Math.floor(Math.random()*color.length)];
    const id = document.getElementById('change-bg').style.backgroundColor=colorChange

})
// disabled
const btn = document.getElementById('btn');
const plus = document.getElementById('plus');
const mainas =document.getElementById('mainas')
let changemainas = parseInt(mainas.innerText)
let changeplus = parseInt(plus.innerText);

btn.addEventListener('click', function() {
    changeplus = changeplus + 1;
    plus.innerText = changeplus;
    changemainas = changemainas - 1;
    mainas.innerText=changemainas


});
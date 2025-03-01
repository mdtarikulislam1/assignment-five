

// click new question page
document.getElementById('new-page').addEventListener('click', function () {
    window.location.href = 'question.html'
})

// change color
document.getElementById('change-color').addEventListener('click', function () {
    let color = ['red', 'blue', 'yellow', 'green', 'pink']
    let colorChange = color[Math.floor(Math.random() * color.length)];
    const id = document.getElementById('change-bg').style.backgroundColor = colorChange

})
// disabled
const buttons = document.querySelectorAll('.btn');
const plus = document.getElementById('plus');
const mainas = document.getElementById('mainas');

let changemainas = parseInt(mainas.innerText);
let changeplus = parseInt(plus.innerText);
const nai = document.getElementById('history-list')

let historylist = document.getElementById
('history-list')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        this.disabled = true;
        buttons[i].style.backgroundColor='gray'
        changeplus = changeplus + 1;
        plus.innerText = changeplus;
        changemainas = changemainas - 1;
        mainas.innerText = changemainas;
        let parentdiv = this.closest('.parent')
        let title = parentdiv.querySelector('h4').innerText;
    
        let newitem = document.createElement('p');
        if(i === buttons.length-1){
            alert('congrates !!! you have completed all the current task')
        }

        alert('board update succesfully')

        // time
        let time = new Date()
        let hour = time.getHours();
        let minutes = time.getMinutes()
        let second = time.getSeconds();
        let ampm = hour >= 12 ? ' pm' : ' am'
        let currenttime = `${hour} : ${minutes} : ${second} : ${ampm}`


        newitem.classList.add('history-style')
        newitem.innerText = 'you have completed the task ' + title + ' at ' + currenttime;
        historylist.appendChild(newitem)
        newitem.style.display = 'block'
    });
}
document.getElementById('clear-history').addEventListener('click', function () {
    historylist.innerText=''

})
let date = new Date()
let newtime = document.getElementById('date')
newtime.innerText=date.toDateString()

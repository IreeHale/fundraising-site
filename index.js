let close = document.querySelector('.close');
let modalOpen = document.querySelector('.modal-container');
let reward = document.getElementById('reward1');
let reward2 = document.getElementById('reward2');
let reward3 = document.getElementById('reward3');
let thankyou = document.getElementById('thankyou-container');
let thankyouBtn = document.getElementById('ty-btn');
let radio1 = document.getElementById('radio1');
let pledge1 = document.getElementById('pledge1');
let radio2 = document.getElementById('radio2');
let pledge2 = document.getElementById('pledge2');
let donation1 = document.getElementById('donation2');


/*Open modal with a click and close with a click*/
close.addEventListener('click', () => {
    modalOpen.style.display = 'none';
});

reward.addEventListener('click', () => {
    modalOpen.style.display = 'block';
});

reward2.addEventListener('click', () => {
    modalOpen.style.display = 'block';
});

reward3.addEventListener('click', () => {
    modalOpen.style.display = 'block';
});



/*Pledge with no reward*/

radio1.checked = false;

radio1.addEventListener('click', () =>{
    pledge1.style.borderColor = "hsl(176, 50%, 47%)";
});

radio1.addEventListener('click', () => {
    thankyou.style.display = 'block';
});

/*$25 Pledge with reward*/
radio2.checked = false;

radio2.addEventListener('click', () =>{
    pledge2.style.borderColor = "hsl(176, 50%, 47%)";
});

radio2.addEventListener('click', () =>{
    thankyou.style.display = 'block';
});

/*$75 Pledge with reward*/



/*Thank you modal functionality*/

thankyouBtn.addEventListener('click', () => {
    thankyou.style.display = 'none';
});

thankyou.addEventListener('click', () => {
    thankyou.style.display = 'none';
});

function newFunction() {
    radio2.addEventListener('click', () => {
        pledge2.borderColor = "hsl(176, 50%, 47%)";
    });
}


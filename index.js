let reward = document.getElementById('reward1');
let reward2 = document.getElementById('reward2');
let reward3 = document.getElementById('reward3');
let close = document.querySelector('.close');
let modalOpen = document.querySelector('.modal-container');
let radio1 = document.getElementById('radio1');
let pledge1 = document.getElementById('pledge1');
let radio2 = document.getElementById('radio2');
let pledge2 = document.getElementById('pledge2');
let donation1 = document.getElementById('donation-amount2');
let radio3 = document.getElementById('radio3');
let pledge3 = document.getElementById('pledge3');
let donation2 = document.getElementById('donation-amount3');
let thankyou = document.getElementById('thankyou-container');
let thankyouBtn = document.getElementById('ty-btn');



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
    thankyou.style.display = 'block';
});

/*$25 Pledge with reward*/
radio2.checked = false;
donation1.style.display = 'none';

radio2.addEventListener('click', () =>{
    donation1.style.display='block';
    pledge2.style.borderColor = "hsl(176, 50%, 47%)";
});

/*$75 Pledge with reward*/
radio3.checked = false;
donation2.style.display = 'none';

radio3.addEventListener('click', () =>{
    pledge3.style.borderColor = "hsl(176, 50%, 47%)";
    donation2.style.display = 'block';
});


/*Thank you modal functionality*/

thankyou.addEventListener('click', () => {
    thankyou.style.display = 'none';
});

thankyouBtn.addEventListener('click', () => {
    thankyou.style.display = 'none';
    radio1.checked = false;
    pledge1.style.borderColor = 'hsl(0,0%,83%)';
});
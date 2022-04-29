let book = document.getElementById('book');
let back = document.getElementById('back');
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
let amount1 = document.getElementById('donation2')
let next1 = document.getElementById('next2')
let radio3 = document.getElementById('radio3');
let pledge3 = document.getElementById('pledge3');
let donation2 = document.getElementById('donation-amount3');
let next3 = document.getElementById('next3');
let thankyou = document.getElementById('thankyou-container');
let thankyouBtn = document.getElementById('ty-btn');



/*Open modal with a click and close with a click*/
close.addEventListener('click', () => {
    modalOpen.style.display = 'none';
});

modalOpen.style.display = 'none';

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

next1.addEventListener('click', () =>{
    let amount1 = document.getElementById('donation2');
    if(amount1.value > '24'){
        thankyou.style.display = 'block';
    }else if (amount1.value < ' ') {
        alert('You must make a donation of $25 or more to receive your Bamboo stand.');
    }
});

/*$75 Pledge with reward*/
radio3.checked = false;
donation2.style.display = 'none';

radio3.addEventListener('click', () =>{
    pledge3.style.borderColor = "hsl(176, 50%, 47%)";
    donation2.style.display = 'block';
});

next3.addEventListener('click', () =>{
    let amount2 = document.getElementById('donation3');
    if(amount2.value > '74'){
        thankyou.style.display = 'block';
    }else if (amount2.value < ' ') {
        alert('You must make a donation of $75 or more to receive your Bamboo stand.');
    }
});


/*Thank you modal functionality*/
thankyou.addEventListener('click', () => {
    thankyou.style.display = 'none';
});

thankyouBtn.addEventListener('click', () => {
    thankyou.style.display = 'none';
    radio1.checked = false;
    pledge1.style.borderColor = 'hsl(0,0%,83%)';

    radio2.checked = false;
    donation1.style.display = 'none';
    pledge2.style.borderColor = 'hsl(0,0%,83%)';

    radio3.checked = false;
    donation2.style.display = 'none';
    pledge3.style.borderColor = 'hsl(0,0%,83%)';
});
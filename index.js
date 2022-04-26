let close = document.querySelector('.close');
let modalOpen = document.querySelector('.modal-container');
let reward = document.getElementById('reward1');
let reward2 = document.getElementById('reward2');
let reward3 = document.getElementById('reward3');
let thankyou = document.getElementById('thankyou-container');
let thankyouBtn = document.getElementById('ty-btn');
let radio1 = document.getElementById('radio1');
let pledge1 = document.getElementById('pledge1');


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
radio1.addEventListener('click', () =>{
    pledge1.style.borderColor = "hsl(176, 50%, 47%)";

    radio1.addEventListener('click', () => {
        thankyou.style.display = 'block';
    });
});

/*Thank you modal functionality*/

thankyouBtn.addEventListener('click', () => {
    thankyou.style.display = 'none';
});

thankyou.addEventListener('click', () => {
    thankyou.style.display = 'none';
});


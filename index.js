let modal = document.querySelector('.modal-container');
let close = document.querySelector('.close');

close.addEventListener('click', () => {
    modal.style.display = 'none';
});


let reward = document.getElementById('reward1');
let modalOpen = document.querySelector('.modal-container');

reward.addEventListener('click', () => {
    modalOpen.style.display = 'block';
});

let reward2 = document.getElementById('reward2');

reward2.addEventListener('click', () => {
    modalOpen.style.display = 'block';
});

let reward3 = document.getElementById('reward3');

reward3.addEventListener('click', () => {
    modalOpen.style.display = 'block';
});
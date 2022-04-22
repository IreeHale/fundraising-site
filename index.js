let modal = document.querySelector('.modal-container');
let close = document.querySelector('.close');
let reward = document.getElementById('reward1');
let modalOpen = document.querySelector('.modal-container');
let reward2 = document.getElementById('reward2');
let reward3 = document.getElementById('reward3');


close.addEventListener('click', () => {
    modal.style.display = 'none';
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
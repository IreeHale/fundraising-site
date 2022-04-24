let close = document.querySelector('.close');
let modalOpen = document.querySelector('.modal-container');
let reward = document.getElementById('reward1');
let reward2 = document.getElementById('reward2');
let reward3 = document.getElementById('reward3');


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
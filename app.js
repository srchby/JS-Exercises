const btn = document.querySelector('.button')
const btns = document.querySelectorAll('.button')

btn.addEventListener('click', () => {
    console.log('click');
    document.body.style.backgroundColor = 'Red'
})
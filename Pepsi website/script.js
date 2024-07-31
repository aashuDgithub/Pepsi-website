const A = document.querySelector('.A');
const B = document.querySelector('.B');
const C = document.querySelector('.C');
const blue = document.querySelector('.blue');
const grey = document.querySelector('.grey');
const black = document.querySelector('.black');

A.addEventListener('click', ()=>{
    blue.style.opacity = '1'
    blue.style.transform = 'rotate(0deg)'

    grey.style.opacity = '0'
    grey.style.transform = 'rotate(-90deg)'
    black.style.opacity = '0'
    black.style.transform = 'rotate(-90deg)'
})

B.addEventListener('click', ()=>{
    grey.style.opacity = '1'
    grey.style.transform = 'rotate(0deg)'

    black.style.opacity = '0'
    black.style.transform = 'rotate(-90deg)'
    blue.style.opacity = '0'
    blue.style.transform = 'rotate(-90deg)'
})

C.addEventListener('click', ()=>{
    black.style.opacity = '1'
    black.style.transform = 'rotate(0deg)'

    blue.style.opacity = '0'
    blue.style.transform = 'rotate(-90deg)'
    grey.style.opacity = '0'
    grey.style.transform = 'rotate(-90deg)'
})

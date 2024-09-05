// let creamBtn = document.getElementById("cream-btn");
// let serumBtn = document.getElementById("serum-btn");
// let eyeBtn = document.getElementById("eye-btn");
// let cream = document.getElementById("cream");
// let serum = document.getElementById("serum");
// let eye = document.getElementById("eye");
// let home = document.getElementById("home");
// let pages = [cream, serum, eye, home];

// creamBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     for (let i = 0; i < pages.length; i++) {
//         console.log(pages[i])
//         pages[i].style.display = 'none';
//         cream.style.display = 'block'
//     }
// })

// serumBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     for (let i = 0; i < pages.length; i++) {
//         console.log(pages[i])
//         pages[i].style.display = 'none';
//         serum.style.display = 'block'
//     }
// })

// eyeBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     for (let i = 0; i < pages.length; i++) {
//         console.log(pages[i])
//         pages[i].style.display = 'none';
//         eye.style.display = 'block'
//     }
// })






let more = document.getElementsByClassName("more");
let less = document.getElementsByClassName("less");
let text = document.getElementsByClassName("ingr-text");

console.log(more)
more[0].addEventListener('click', (e) => { 
    e.preventDefault()  
    if (text[0].style.display == "none") {
        text[0].style.display = "inline";
        more[0].style.display = 'none'
        less[0].style.display = 'block'

    }
})
less[0].addEventListener('click', (e) => { 
    e.preventDefault() 
console.log(text[0].style.display);
    
    if (text[0].style.display == "inline") {
        text[0].style.display = "none";
        less[0].style.display = 'none'
        more[0].style.display = 'block'

    }
})
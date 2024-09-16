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



let a = document.getElementsByClassName("a")
let q = document.getElementsByClassName("q")

const buttonGroup = document.getElementsByClassName("button-group");
 
const buttonGroupPressed = (e) => {
     if (e.target.className == "q") {
        console.log(e.target.parentElement.children[1].style.display)
        if (e.target.parentElement.children[1].style.display == "" || e.target.parentElement.children[1].style.display == "none"){
            e.target.parentElement.children[1].style.display = "block"
            console.log(e.target.parentElement.children[1].style.display)
        }else{
            e.target.parentElement.children[1].style.display = "none"
            console.log(e.target.parentElement.children[1].style.display)

        }
    }else if(e.target.className == "a"){
        if(e.target.parentElement.children[1].style.display == "block"){
            e.target.parentElement.children[1].style.display = "none"
            console.log(e.target.parentElement.children[1].style.display)
        }
    }

    
}
for (let index = 0; index < buttonGroup.length; index++) {
    buttonGroup[index].addEventListener('click', buttonGroupPressed);
}




// review popup
const button = document.getElementsByClassName('submitbtn');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close1');
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault()
  popup.style.display = 'flex';
  form.reset()

})



// Close popup when the close button is clicked
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
  
  // Close popup when clicking outside of it
  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
  
const slides = document.querySelector('.slides')
const images = document.querySelectorAll('.slides img');

// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = images[0].clientWidth;
console.log(counter);

//set start image

slides.style.transform = ' translateX(' +(-size*counter)+ 'px)';

//buttons functions
nextBtn.addEventListener('click' , ()=>{
    if(counter >=8)return
    counter++;
    slides.style.transform = 'translateX('+(-size*counter)+'px)';
    slides.style.transition = 'transform 0.3s ease-in-out';
    console.log(counter);

})

prevBtn.addEventListener('click' , ()=>{
    if(counter <=0) return;
    counter--;
    slides.style.transform = 'translateX('+(-size*counter)+'px)';
    slides.style.transition = 'transform 0.3s ease-in-out';
    console.log(counter);
    
})

//contidions
slides.addEventListener('transitionend' , ()=>{
    if(counter ===0){
        counter = 7;
        slides.style.transform = 'translateX('+(-size*counter)+'px)';
        slides.style.transition = "none";
        console.log(counter)

    }
    if(counter === 8){
        counter = 1
        slides.style.transform = 'translateX('+(-size*counter)+'px)'
        slides.style.transition = "none"
        console.log(counter);
    }

})
//button styles
function scaleDownP(){
   document.getElementById('prevBtn').style.fontSize = "280%"
}

function scaleDownN(){
    document.getElementById('nextBtn').style.fontSize = "280%"
}

function scaleBack(){
    document.getElementById('prevBtn').style.fontSize = "300%"
    document.getElementById('nextBtn').style.fontSize = "300%"

}



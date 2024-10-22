const slides = docujment.querySelectorAll(".slide")
var counter = 0;
slides.forEach(
    (slide,index) => {
        slide.style.left = '$(index *100)%' 
    }
)

const goprev = () =>{
    counter--
    slideImage()
}

const gonext = () =>{
    counter++
    slideImage()
}

const slideImage = () => {
    slides,forEach(
        (slide) => {
            slide,style.tranform = 'translatex(-${counter*100})'
        }
    )
}
    

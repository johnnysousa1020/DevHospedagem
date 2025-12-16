const carousel = document.getElementById("carousel")
         
function scrollCarouselLeft(){
    carousel.scrollBy({ left: -260, behavior: "smooth" })
}

function scrollCarouselRight(){
    carousel.scrollBy({ left: 260, behavior: "smooth" })
}
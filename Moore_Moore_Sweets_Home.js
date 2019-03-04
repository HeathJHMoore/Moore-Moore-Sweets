/*let carouselObject = document.getElementById("Photo-Carousel");
let carouselImageURL = document.getElementById("Carousel-image");
carouselObject.addEventListener('click', () => {
carouselImageURL.src = "Cake_Photos/Chocolate_Strawberry_Cake.JPEG"
});
*/

jQuery(".Carousel-image").hide();
//jQuery(".welcome").hide();
//jQuery(".Carousel-image").
jQuery(".Carousel-image").fadeIn(2200);

jQuery("#welcome").hide();

jQuery(window).scroll(function() {
    jQuery("#welcome").fadeIn(2200);
})

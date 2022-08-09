const swiperReviews = document.querySelector('.swiper-reviews')
if (swiperReviews) {
    const swiper = new Swiper('.swiper-reviews', {
        // Optional parameters
        autoHeight:true,
  
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },


    });
}
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
// $(document).ready(function(){
//     $(".mobilemenu").hide()
//     $('.tgl').click(function(){
//         $(".mobilemenu").slideToggle()
//     })
// })
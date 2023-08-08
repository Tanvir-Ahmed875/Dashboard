




$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 3000,
    });


    


});


var filter_container = ".filter-content";
var mixer = mixitup(filter_container,{
    load: {
        filter: '.web-development'
    }
});



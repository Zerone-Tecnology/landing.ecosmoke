function openModal($el) {
    $(".on-front-desc.active").removeClass("active");
    var _target = $el.attr('aria-label');
    $(".modal_content[aria-target='"+_target+"']:not(.active)").addClass("active");
}
$(".btn-more-info").click(function(){
    openModal($(this));
});
$(".btn-add-cart").click(function(){
    openModal($(this));
});
$(".btn-more-info-6").click(function(){
    openModal($(this));
});
$(".btn-add-cart-6").click(function(){
    openModal($(this));
});
$(".btn-more-info-7").click(function(){
    openModal($(this));
});
$(".btn-add-cart-7").click(function(){
    openModal($(this));
});

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 'auto' 
});

$(".navToggle").click(function(){
    $(this).toggleClass("open");
    $("nav").toggleClass("open");
});

$(".btn-next").click(function(){
    $(".swiper-pagination-bullet-active").next().click();
});

$(".btn-more-colse-modal").click(function() {
    $(".on-front-desc.active").removeClass("active");
});
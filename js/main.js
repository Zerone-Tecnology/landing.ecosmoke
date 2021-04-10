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


$(".navToggle").click(function(){
    $(this).toggleClass("open");
    $("nav").toggleClass("open");
});

$(".btn-next, .btn-next_act").click(function(){
    $(".swiper-pagination-bullet-active").next().click();
});

$(".btn-more-colse-modal").click(function() {
    $(".on-front-desc.active").removeClass("active");
});

$(".navToggle").click(function(){
    if ($(this).hasClass('open')) {
        $(".menu-text").html("ЗАКРЫТЬ");
    } else {
        $(".menu-text").html("МЕНЮ");
    }
});

$(".menulist>li").click(function(){
    $("li.active").removeClass("active");
    $(this).addClass("active");
    $(".navToggle.open").click();
    $(".swiper-pagination-bullet")[$(this).index()].click();
});

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 'auto',
});

var startScroll, touchStart, touchCurrent;
swiper.slides.on('touchstart', function (e) {
    startScroll = this.scrollTop;
    touchStart = e.targetTouches[0].pageY;
}, true);
swiper.slides.on('touchmove', function (e) {
    touchCurrent = e.targetTouches[0].pageY;
    var touchesDiff = touchCurrent - touchStart;
    var slide = this;
    var onlyScrolling = 
            ( slide.scrollHeight > slide.offsetHeight ) &&
            (
                ( touchesDiff < 0 && startScroll === 0 ) ||
                ( touchesDiff > 0 && startScroll === ( slide.scrollHeight - slide.offsetHeight ) ) ||
                ( startScroll > 0 && startScroll < ( slide.scrollHeight - slide.offsetHeight ) )
            );
    if (onlyScrolling) {
        e.stopPropagation();
    }
}, true);

swiper.on('slideChange', function () {
    console.log(swiper.activeIndex);
    if(swiper.activeIndex != 0 && swiper.activeIndex != 1){
        $('nav').addClass('white');
    } else {
        $('nav').removeClass('white');
    }
});

$('#sw').html($(window).width() + 'x' + $(window).height());
$(".exit-page").on("scroll mousewheel touch", function(e){
    e.preventDefault();
})
$(".enter-page").on("scroll mousewheel touch", function(e){
    e.preventDefault();
})

$(".nav-link").on('click', function(e){
    redirect_url = this.href;
    e.preventDefault();
    // console.log(this.textContent, this.href, redirect_url);
    $(".exit-page").animate({
        width: "200%",
        height: "800%",
        left: "-50%",
        bottom: "-80%",
    },800);
    $(".loader").animate({
        opacity: 1
    },800);
    setTimeout(function(){
        window.location.href = redirect_url;
    }, 850)
});



$(document).ready(function(){
    $(".enter-page").animate({
        width: "100px",
        height: "100px",
        left: "-100px",
        bottom: "-100px",
    },800);
    $(".loader").animate({
        opacity: 0
    },800);
});
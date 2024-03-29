function loading(){
    var tl = gsap.timeline();

tl.to("#yellow1",{
    top: "-100%",
    // delay: 0.2,
    duration: 0.5,
    ease: "expo.out"
},)

tl.from("#yellow2",{
    top: "100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out"
}, "anim")

tl.to("#loader h1",{
    duration: 0.5,
    delay: 0.6,
    color: "black"
}, "anim")

tl.to("#loader",{
    opacity: 0
})

tl.to("#loader",{
    display: "none"
})

}

loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var elem = document.querySelectorAll('.elem');
var page2 = document.querySelector("#page2");
elem.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var dataImg = ele.getAttribute("data-img");
        page2.style.backgroundImage = `url(${dataImg})`;
    })
})


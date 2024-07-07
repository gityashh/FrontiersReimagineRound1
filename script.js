locomotiveScrolltrigger();
landingpageanimations();
loaderanimations();

function locomotiveScrolltrigger() {
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
function landingpageanimations() {
  gsap.from("#foot h1",{
    y:"-100%",
    stagger:0.3,
    duration:2,
    ease:"expo.out",
    scrollTrigger:{
      scroller:"#main",
      trigger:"#window",
      scrub:4,
      start: 'top -500%',
      end: 'top -560%',
    }
  })
  
  gsap.to("#elems",{
    x:"-77.7%", // Adjust the end position
    scrollTrigger: {
        scroller:"#main",
        trigger: "#carousel",
        start: "top 0%", // Adjust the start position
        end: "top -600%",
        scrub: 2,
        pin:true,// Smoothly animate on scroll
      },
})


gsap.to(".scroll",{
  scale:0, // Adjust the end position
  scrollTrigger: {
      scroller:"#main",
      trigger: ".scroll",
      start: "top 0%", // Adjust the start position
      end: "top 0%",
      scrub:2,
      
    },
})


var elems = document.querySelectorAll(".elem")
elems.forEach(element => {
  element.addEventListener("mouseenter",function () {
    console.log(element.id);
    document.querySelector(`.${element.id}`).style.height = "25px";
    document.querySelector(`.${element.id}`).style.width = "25px";
  })
  element.addEventListener("mouseleave",function () {
    document.querySelector(`.${element.id}`).style.height = "0px";
    document.querySelector(`.${element.id}`).style.width = "0px";
  })
});


document.querySelector("nav").addEventListener("mouseleave",function(dets){
  gsap.to(".scroll",{
      scale:1,
      duration:0.2
  })
})
document.querySelector("nav").addEventListener("mouseenter",function(dets){
  gsap.to(".scroll",{
      scale:0,
      duration:0.2
  })
})

document.querySelector("#elems").addEventListener("mousemove",function(dets){
  gsap.to(".scroll",{
      x: dets.pageX - 898,
      y: dets.pageY - 300,
  })
})


gsap.to("#line",{
    x:"50%",
    scrollTrigger: {
        scroller:"#main",
        trigger: "nav",
        start: "top 0%", // Adjust the start position
        end: "top -1300%", // Adjust the end position
        scrub: 2,
       
      },
})
}
function loaderanimations() {
  document.querySelector(".logoflex").addEventListener("mousemove",function(dets){
    gsap.to("#leftinner",{
        x: dets.pageX - 898,
        y: dets.pageY - 450,
        
    })
})

document.querySelector(".logoflex").addEventListener("mousemove",function(dets){
    gsap.to("#bigS",{
        x: dets.pageX - 820,
        y: dets.pageY - 453,
        delay:0.04
    })
})
document.querySelector(".logoflex").addEventListener("mousemove",function(dets){
  gsap.to("#leftbottom",{
      x: dets.pageX - 964,
      y: dets.pageY - 444,
      delay:0.06
  })
})
document.querySelector(".logoflex").addEventListener("mousemove",function(dets){
  gsap.to("#rightlens",{
      x: dets.pageX - 890,
      y: dets.pageY - 454,
      delay:0.08
  })
})
document.querySelector(".logoflex").addEventListener("mousemove",function(dets){
  gsap.to("#toplens",{
      x: dets.pageX - 961.5,
      y: dets.pageY - 464,
      delay:0.1
  })
})
document.querySelector(".logoflex").addEventListener("mousemove",function(dets){
  gsap.to("#middle",{
      x: dets.pageX - 1013.75,
      y: dets.pageY - 471.5,
      delay:0.12
  })
})
document.querySelector(".logoflex").addEventListener("mousemove",function(dets){
  gsap.to("#lefthand",{
      x: dets.pageX - 1077,
      y: dets.pageY - 460,
      delay:0.14
  })
})
document.querySelector(".logoflex").addEventListener("mousemove",function(dets){
  gsap.to("#righthand",{
      x: dets.pageX - 988,
      y: dets.pageY - 458.5,
      delay:0.16
  })
})


var tl = gsap.timeline()

tl.to("#ctr",{
    y:"-34%",
    duration:2,
    ease:"power4.inOut",
    delay:1
})
.to("#ctr",{
    y:"-=30%",
    duration:2,
    ease:"power4.inOut",
    delay:0.5
})
.to("#ctr",{
    y:"-=30%",
    duration:2,
    ease:"power4.inOut",
    delay:0.5
})
.to("#loader",{
  y:"-100%",
  duration:1.5,
  ease:"power4.inOut",
  delay:0.5
})
.from("nav",{
  y:"-100%",
  duration:.5,
  ease:"expo.inOut",
})

}




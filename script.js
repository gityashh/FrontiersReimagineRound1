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

gsap.from("#elems",{
    opacity:0,
    delay:2,
    duration:5
})


gsap.from("nav",{
    y:"-100%",
    delay:2,
    duration:2
})

gsap.to("#elems",{
    x:"-77.8%", // Adjust the end position
    scrollTrigger: {
        scroller:"#main",
        trigger: "#carousel",
        start: "top 0%", // Adjust the start position
        end: "top -600%",
        scrub: 2,
        pin:true,
        markers:true // Smoothly animate on scroll
      },
})


gsap.to("#line",{
    x:"50%",
    scrollTrigger: {
        scroller:"#main",
        trigger: "nav",
        start: "top 0%", // Adjust the start position
        end: "top -1300%", // Adjust the end position
        scrub: 2,
        markers:true // Smoothly animate on scroll
      },
})

document.querySelectorAll(".elem").addEventListener("mouseenter",function (dets) {
    console.log(dets);
})
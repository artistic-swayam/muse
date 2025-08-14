

const tl = gsap.timeline();
const link=document.querySelector(".link");

//animations
function loader(){
  gsap.from(".clip-top,.clip-bottom",2,{
    delay:1,
    height:"50vh",
    ease:"power4.inOut"
})
gsap.to(".marque",3.5,{
    delay:0.75,
    top:"50%",
    ease:"power4.inOut"
})
gsap.from(".clip-top .marque,.clip-bottom .marque",5,{
    delay:1,
    left:"100%",
    ease:"power3.inOut"
})
gsap.from(".clip-center .marque",5,{
    delay:1,
    left:"-50%",
    
    ease:"power3.inOut"
})
//

gsap.to(".clip-top",2,{
    delay:6,
    clipPath:"inset(0 0 100% 0)",
    ease:"power4.inOut"
})
gsap.to(".clip-bottom",2,{
    delay:6,
    clipPath:"inset(100% 0 0 0)",
    ease:"power4.inOut"
})
gsap.to(".clip-top .marque,.clip-bottom .marque,.clip-center .marque span",1,{
    delay:6,
    opacity:0,
    ease:"power2.inOut",
    onComplete: () => {
    console.log("Animation finished!");
    document.querySelector(".clip-center").style.background= "transparent";
    document.querySelector(".center").style.color= "rgb(224, 222, 222)";
    
  }
})
}
loader();

//debugging and action play
document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".show-reel");
    video.play().catch(() => {
      console.log("Autoplay blocked. User interaction required.");
    });
  });
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".show-reel");

  // Play video on user interaction
  const playVideo = () => {
    video.play().then(() => {
      console.log("Video playback started.");
    }).catch((error) => {
      console.log("Video playback failed:", error);
    });
  };
  let clip=document.querySelector(".clip-center");
  // Trigger play on any user interaction
  document.addEventListener("click", playVideo);
  document.addEventListener("touchstart", playVideo);
  document.addEventListener("keydown", playVideo);
});


//shery js
// Shery.makeMagnet(".logo" /* Element to target.*/, {

//    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//    duration: 1,
//  });
// Shery.mouseFollower();9

//lenis
gsap.registerPlugin(ScrollTrigger);
const splitTypes = document.querySelectorAll(".reveal");
splitTypes.forEach((char,i)=>{

  const text = new SplitType(char,{types:"chars"});
  console.log(text);
  gsap.from(text.chars,{
    scrollTrigger:{
      trigger:char,
      start:"top 80%",
      end:"top 20%",
      scrub:true,

    },
    stagger:0.1,
    opacity:0.2,
  })
})


const lenis = new Lenis();

// Listen for the scroll event and log the event data9ppe+w8pww+8euu8errr88iruee+o98e7wep8ipree+uppw78p98pp+wurpup+puepr
lenis.on('scroll', (e) => {
  console.log(e);
});
// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// Register the plugin
gsap.registerPlugin(SplitText);

// Hover handler

const elements = document.querySelectorAll(".hover-animate");

elements.forEach((el) => {
  let splitText;

  el.addEventListener("mouseenter", () => {
    splitText = new SplitType(el, { types: "chars" });

    gsap.from(splitText.chars, {
      opacity:0,
      y: 10,
      stagger: 0.04,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  el.addEventListener("mouseleave", () => {
    if (splitText) splitText.revert(); // Reset original DOM
  });
});

const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  const hoverCircle = btn.querySelector('.hover-circle');

  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    hoverCircle.style.left = `${x - 50}px`;
    hoverCircle.style.top = `${y - 50}px`;
    hoverCircle.style.transformOrigin = `50% 50%`;
  });

  btn.addEventListener('mouseleave', () => {
    hoverCircle.style.transformOrigin = `center center`;
  });
});

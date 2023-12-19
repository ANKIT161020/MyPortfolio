const gridItems = document.querySelectorAll(".grid-items");
const timeline = gsap.timeline({
    onComplete: () => {
      document.querySelector(".opening").style.display = "none";
    }
  });

gridItems.forEach((element) => {
  timeline.from(
    element,
    {
        opacity:-5,
        scale:Math.random()*2,
        duration: 2 + Math.random() * 2,
    },
    "0"
  );
  element.addEventListener('mouseenter', () => {
    gsap.to(element, { scale: 1.1});
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, { scale: 1});
  });
});

timeline.to(".opening .before", {
    y:"150%",
    ease: "power1.inOut", 
    duration:2
    },
    "1.5")
  .to(".opening .after", { 
    y:"-150%",
    ease: "power1.inOut",
    duration:2
  },
  "1.5");
  

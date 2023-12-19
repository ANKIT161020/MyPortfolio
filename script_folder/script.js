let heroimg = document.querySelector(".mainimg-icon")
let xValue =0,yValue=0;
let animationsComplete = false;

window.addEventListener("mousemove", (e) => {
  if(animationsComplete){
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
  
    update();
  }
});

update();

function update() {
    let speedx = heroimg.dataset.speedx;
    let speedy = heroimg.dataset.speedy;
    heroimg.style.transform = `translateX(calc( -50% + ${
      xValue * speedx
    }px)) translateY(calc( -40% + ${yValue * speedy}px))`;
}

const timeline = gsap.timeline({
    onComplete: () => {
      animationsComplete = true;
      document.querySelector(".opening").style.display = "none";
    }
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

timeline.from(".mainimg-icon",{
  y:"translate(0,50%)",
  duration:2,
},"1.5")
.from(".text1",{
  left:"80%",
  duration:2,
},"1.5")

timeline.to(".ankit, .ankit1",{
  left:"28%" ,
  opacity:1,
  ease: "power2.inOut",
  duration:2,
},'1')
.to(".bhanushali, .bhanushali1",{
  left:"20%",
  opacity:1,
  ease: "power1.inOut",
  duration:2,
},'1')
let h1 = document.querySelector("#page1 h1");
let h1Text = h1.textContent;

let split_h1 = h1Text.split("");
let clutter = "";
let half = split_h1.length / 2;

split_h1.forEach((e, idx) => {
  if (idx < half) {
    clutter += `<span class="firstHalf">${e}</span>`;
  } else {
    clutter += `<span class ="secHalf">${e}</span>`;
  }
});
h1.innerHTML = clutter;

let navtl = gsap.timeline();
let sidebar_tl = gsap.timeline();

navtl.from("nav h2", {
  opacity: 0,
  x: -14,
  duration: 1,
}); // '>' responsible to start animation after the previous one  ( default)
navtl.from(
  "#page1 h1 .firstHalf",
  {
    y: 70,
    stagger: 0.15,
    duration: 0.5,
    opacity: 0,
  },
  ">-0.2"
);
navtl.from(
  "#page1 h1 .secHalf",
  {
    y: 70,
    stagger: -0.15,
    duration: 0.5,
    opacity: 0,
  },
  "<"
);
// '<' position parameter correctly starts this animation *at the same time* as the previous one (.firstHalf).

sidebar_tl.pause();

sidebar_tl.from(".sidebar", {
  x: "30vw",
  duration: 0.4,
  opacity: 0,
});
sidebar_tl.from(
  ".sidebar h3",
  {
    x: 100,
    stagger: 0.2,
    duration: 0.5,
    opacity: 0,
    ease: "power1.Out",
  },
  ">-0.1"
);

document.querySelector("#menu").addEventListener("click", () => {
  sidebar_tl.play();
});

document.querySelector("#close").addEventListener("click", () => {
  sidebar_tl.reverse();
});

// page 2

window.addEventListener("wheel", (dets) => {
  let dir = dets.deltaY;
  console.log(dir);

  if (dir > 0) {
    gsap.to("#textCont h2", {
      transform : 'translateX(-200%)' ,
      duration: 5,
      repeat: -1,
      ease: "none",
    });

    gsap.to("#textCont i", {
      rotate: 180,
      duration: 0.4,
      ease: "none",
    });
  }
  else if(dir <= 0){
     gsap.to("#textCont h2", {
      transform : 'translateX(100%)' ,
      duration: 5,
      repeat: -1,
      ease: "none",
    });

    gsap.to("#textCont i", {
      rotate: 360,
      duration: 0.4,
      ease: "none",
    });
  }
});

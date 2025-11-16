

let cursor = document.querySelector(".cursor")
let div = document.querySelector("#main")



div.addEventListener("mousemove" , (dets) => {
    

    gsap.to(".cursor" , {
        x : dets.x ,
        y : dets.y,
        xPercent : -50 ,
        yPercent : -50 ,
        duration : 2,
        ease : "power2.out"
    })
    
})


let cursor = document.querySelector(".cursor")
let main = document.querySelector("#main")
let imgCont = document.querySelector("#imgCont")



main.addEventListener("mousemove" , (dets) =>{
    gsap.to(cursor, {
    x : dets.x , 
    y : dets.y, 
    xPercent : -50,
    yPercent : -50 ,
    duration : 1
    })
})

imgCont.addEventListener("mouseenter" , (dets) =>{
    cursor.textContent = "View More"
    
    gsap.to( cursor , {
        scale : 3
    })
})

imgCont.addEventListener("mouseleave" , () => {
    cursor.textContent = ""
     gsap.to(cursor , {
         scale : 1 
     })
})

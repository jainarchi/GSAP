gsap.to("#box1" , {
    x: 800,
    delay: 1 ,
    duration : 2 ,
    repeat : -1,
    yoyo : true

})

gsap.from("#box2" , {
    x: 1000 ,
    delay: 1 ,
    duration : 1 ,
    borderRadius: "50%" ,

})


// timeline 

let tl = gsap.timeline();


tl.to('#b1' , {
    delay : 0.5 ,
    duration: 1 ,
    left : "50%",
    y : "50vh",
    position : "fixed" ,
    opacity : 1 ,
    rotate : 360

})
tl.to('#b2' , {
    duration : 0.8 ,
    position :"fixed" ,
    right : "50%" ,
    y : "50vh" ,
    opacity : 1 ,
    

})
tl.to('#b3' , {
    duration : 1,
    position : 'relative' , 
    left : "50%",
    bottom : "50vh",
    opacity : 1 ,
    
})

tl.to('#b4' , {
    duration : 1 ,
    position : 'relative',
    right : '50%',
    bottom : "50vh" ,
    opacity : 1 ,
    rotate : 360 
})
tl.from('#text span' , {
    y : 50 ,
    opacity : 0 ,
    duration : 0.5 ,
    stagger : 0.3 
})
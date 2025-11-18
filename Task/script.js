gsap.from('nav h3' , {
    y : -8,
    opacity : 0 ,
   stagger : 0.3
})

let Text_tl = gsap.timeline();

Text_tl.from('#page1 h1' , {
    delay : 0.4 ,
    y : 50 , 
    stagger : 0.4,
    opacity : 0 ,
    duration : 1
    
})

function cardAnimation(){
    
let tl = gsap.timeline( { 
    scrollTrigger :{
    trigger : '#page2',
    scroller : 'body',
    markers : true ,
    markerStart: "white",
    start : 'top 60%' ,
    end : 'top 0%',
    scrub : true 
   }});

tl.from('.first' , {
   x : -200,
   duration: 0.5,
   opacity: 0 ,
} , '1')
tl.from(".sec" , {
  x : 200,
   duration: 0.5,
   opacity: 0 
} , '1')
tl.from('.third' , {
  x : -200,
   duration: 0.5,
   opacity: 0 
} , '2')
tl.from(".four" , {
      x : 200,
   duration: 0.5,
   opacity: 0 
} , '2')

}

cardAnimation();
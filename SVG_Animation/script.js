let path = "M 10 100 Q 500 100 980 100";

let finalPath = "M 10 100 Q 500 100 980 100";

let string = document.querySelector("#string");



string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 980 100`;
  
  console.log(path);
  
  gsap.to("svg path", {
    attr: { d: path },
    duration : 0.8 ,
    ease : "power3.out"
   
  });

    gsap.to(".ball" , {
    x : dets.x ,
    y : dets.y ,
    xPercent : -50,
    yPercent : -50,
    duration : 0.4,
  
  })
     

});


string.addEventListener("mouseleave" , function(){
    
    gsap.to("svg path" , {
        attr : {d : finalPath},
        duration : 2 ,
        ease: "elastic.out(1,0.2)",

    })

})




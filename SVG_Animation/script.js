let path = "M 10 100 Q 500 100 980 100";

let finalPath = "M 10 100 Q 500 100 980 100";

let string = document.querySelector("#string");



string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 980 100`;
  
  console.log(path);
  
  gsap.to("svg path", {
    attr: { d: path },
    duration : 0.2 ,
    ease : "power3.out"
    
   
  });

  

});


string.addEventListener("mouseleave" , function(){
    
    gsap.to("svg path" , {
        attr : {d : finalPath},
        duration : 8 ,
        ease: "elastic.out(1,0.2)",


    })
})




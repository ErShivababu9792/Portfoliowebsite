const body=document.getElementById("main")
const swipe=document.getElementById("swipe");
let x=10;
swipe.addEventListener("click",()=>{
    if(x==10){
          swipe.style.marginLeft="25px"
          crsr.style.display="none";
          x=20;
         

    }
    else{
        swipe.style.marginLeft="5px";
        crsr.style.display="block";
        x=10;

    }
  
})

let main=document.getElementById("main")
let crsr=document.getElementById("cursor");
main.addEventListener("mousemove",function(details){
  crsr.style.left=details.x +"px";
  crsr.style.top=details.y+"px";
})


const boxes = document.querySelectorAll('.box');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = container.getBoundingClientRect();
  const x = e.clientX - left - width / 2;
  const y = e.clientY - top - height / 2;

  boxes.forEach((box) => {
    const rotateX = (y / height) * 5; // Adjust rotation sensitivity
    const rotateY = (x / width) * 10;

    box.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  });
});

container.addEventListener('mouseleave', () => {
  boxes.forEach((box) => {
    box.style.transform = 'rotateX(0) rotateY(0)';
  });
});





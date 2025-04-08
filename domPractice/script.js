const bG=document.getElementById("body")


function changeImage(){
    const dom = document.getElementById("title");


    

    const image=document.getElementById("dino");

    if(image.src.includes("dinosaur.png")){
    image.src ="city.png";
    dom.textContent = "DOM Practice & Testing"
    dom.style.color = "red";
    bG.style.backgroundColor = "cyan";
}
   
    else{image.src = "dinosaur.png";
        dom.style.color = "black";
        bG.style.backgroundColor = "pink"

    }       
    }

   
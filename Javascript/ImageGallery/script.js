var images = ["./assets/1.jpg", "./assets/2.jpg", "./assets/3.jpg", "./assets/4.jpg", "./assets/5.jpg", "./assets/6.jpg"]
var index = 0

function nextimage(){
    index++;
    if(index >= images.length){
        index = 0
    }
    document.querySelector("img").setAttribute("src", images[index])
}

function previmage(){
    index--;
    if(index < 0){
        index = images.length - 1
    }
    document.querySelector("img").setAttribute("src", images[index])
}
var images = ["./assets/background1.jpg", "./assets/background2.jpg", "./assets/background3.jpg"]
var index = 0

function rotateimage(){
    var imagelink = "url('" + images[index] + "')"
    document.querySelector("body").style.backgroundImage = imagelink
    index++;
    if(index >= images.length){
        index = 0
    }
}

setInterval(rotateimage, 3000)
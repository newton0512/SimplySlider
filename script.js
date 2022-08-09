let offset = 0;
const sliderLine = document.querySelector('.slider-line');
imagesArray = ['1.JPG', '2.jpg', '3.jpg', '4.jpg', 'Wood.jpg', 'Smoke.jpg', 'Brick.jpg', 'Arrow.jpg'];

function addImages(){
    sliderLine.style.width = 256 * imagesArray.length;
    for (let i = 0; i < imagesArray.length; ++i) {
        let image = document.createElement("img");
        image.className = "fancybox";
        image.src = "images/" + imagesArray[i];
        sliderLine.appendChild(image);
    }
}
addImages();

document.querySelector('.slider-next').addEventListener('click', function (){
    offset += 256;
    if (offset>(imagesArray.length - 1)*256){
        offset = 0;
    }
    sliderLine.style.left = -offset +'px';
})

document.querySelector('.slider-prev').addEventListener('click', function (){
    offset -= 256;
    if (offset<0){
        offset = (imagesArray.length - 1)*256;
    }
    sliderLine.style.left = -offset +'px';
})
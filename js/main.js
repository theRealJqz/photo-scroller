function viewContent(){
    const content = document.querySelector("#linebreak");
    content.scrollIntoView({behavior: "smooth"});
}

function createText(){
    const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit Maecenas non fermentum dolor Sed eros orci molestie quis lectus ac placerat porttitor quam Nullam quis nulla dui Integer tempor egestas dolor aliquet finibus ligula efficitur eu Proin id ultrices ante mollis rhoncus ligula Praesent consectetur pellentesque felis eu vestibulum augue placerat eget. Suspendisse luctus lorem mauris quis tristique mi congue commodo Nam posuere tristique diam a faucibus tellus aliquet et In varius volutpat est a tempor. Quisque ac enim fringilla sem fermentum efficitur at ullamcorper tellus. Integer nulla augue, ornare quis lectus eget, egestas pharetra tortor. Donec viverra nisl dictum mauris mollis iaculis. Nullam lacus est, tempus eu augue vel, venenatis condimentum nisl. Mauris maximus leo massa. Mauris laoreet ipsum et lacinia tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
    const textArr = text.split(" ");
    const newText = textArr.splice(0, (Math.random()*20)+10);
    return newText.join(" ")+".";
}

function createSlide(){
    const slides = document.getElementById("slides");
    const slidePosition = slides.childElementCount + 1;
    const container = document.createElement("div");
    container.innerHTML = `
    <div class="slide" id=${slidePosition}>
        <div class="content-image" style="background-image: url(https://source.unsplash.com/random?sig=${Math.random()*100}/1600x900)"></div>
        <div class="caption">photo ${slidePosition}</div>
        <div class="description">${createText()}</div>
    </div>
    `
    return slides.appendChild(container)
}

function createMultiSlides(num){
    for(let i=0; i< num; i++){
        createSlide();
    }
}

(function () {
    createMultiSlides(2);
  })();
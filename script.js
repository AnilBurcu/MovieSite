const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=> {
    let clickCounter = 0;
    const widthRatio = Math.floor(window.innerWidth / 300);
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click",function() {
        clickCounter++;
        if(itemNumber - (4 + clickCounter) + (4-widthRatio) >= 0) {
            

            movieLists[i].style.transform = `translateX(${movieLists[i].
                computedStyleMap().get("transform")[0].x.value-300}px)`;

        } else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
        
    });
        
});

/*  Dark Mode */

const ball = document.querySelector(".toggle-ball");

const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title")


ball.addEventListener("click",function(){
    items.forEach((item)=> item.classList.toggle("active"))
})

//select movie poster orginal image
let moviePoster = document.querySelector('.movie-poster');
//console.log(moviePoster)
//select modal window layer
let modal = document.querySelector('.#myModal');
// select close button
let closeBtn = document.querySelector('.closeBtn');
//select modal window image
let modalImage = document.querySelector('.movie-poster-modal');
moviePoster.addEventListener ('click', ()=> {
console.log('image clicked'); 
 modal.computedStyleMap.display = 'block';
 modalImage.src = moviePoster.src

});

closeBtn.addEventListener('click', () => {
    modal.computedStyleMap.display = 'none';

})

window.addEventListener('click', (event) => {
    if(event.target=== modal) {
        modal.computedStyleMap.display = 'none';
    } 
});
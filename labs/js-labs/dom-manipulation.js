//https://drive.google.com/file/d/1XY5u3c23aFo06fHXYNZX9HeB3ljONlyq/view?usp=sharing



document.addEventListener("DOMContentLoaded", function(event)
{
// Random quote of the day generator
const randomQuote = function() {
document.querySelector('#quote-of-the-day').textContent =
`"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};
randomQuote();
//
document.querySelector('#main-title').textContent =
'Something Shorter'
//
document.querySelector('body').style.backgroundColor = 'red'
//
const favoriteThings =
document.querySelectorAll('#favorite-things > li')
document.querySelector('#favorite-things').removeChild(favoriteThings[favoriteThings.length - 1])
//
document.querySelectorAll('.special-title').forEach((item) =>
{
item.style.fontSize = '2rem'
})
//
document.querySelectorAll('#past-races > li').forEach((item)
=> {
if(item.textContent.trim() === 'Chicago'){
document.querySelector('#past-races').removeChild(item)
}
})
//
const li = document.createElement('li')


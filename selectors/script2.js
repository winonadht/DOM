let titles = document.querySelectorAll('.important');

titles.forEach(title =>{
    title.setAttribute('title','This is an important item');
})

let allimage = document.querySelectorAll('img');
allimage.forEach(function(image) {
    if (!image.classList.contains('important')) {
        image.style.display = 'none';
    }
}); 

let paragraphes = document.querySelectorAll('p');
paragraphes.forEach(paragraphe => { 
    if (!paragraphe.className) paragraphe.style.color = getRandomColor ();
    console.log('Contenu',paragraphe.textContent, '| Classe:', paragraphe.ClassName);
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`; 
}



    

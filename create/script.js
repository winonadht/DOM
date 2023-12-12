function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b}`; 
}

let apprenants = ["alice", "julien", "alexis", "cassidy", "winona", "hanen", "jeremy"];
shuffleArray(apprenants);

let article = document.querySelector('article');

apprenants.forEach(apprenant => {
    const section = document.createElement('section');
    section.style.backgroundColor = getRandomColor();
    section.textContent = apprenant;
    section.innerHTML = `<p>${apprenant}</p>`;
    article.appendChild(section);
});

function getContrastClass(bgColor) {
    let rgb = bgColor.substring(4, bgColor.length - 1).split(',');
    let luminance = 0.299 * parseInt(rgb[0]) + 0.587 * parseInt(rgb[1]) + 0.114 * parseInt(rgb[2]);
}
 function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1 ));
        [array[i]], array[j] = [array[j], array[i]];
    }
 }
const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
//fonction qui calcule le temps a partir du moment ou on ouvre la page ainsi que les instant ou on clique sur les carrés

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}
const creatediv = (e) => {
    console.log(e);
    let div = document.createElement('div');
    div.className = "displayedsquare";
    div.classList.add(e.target.classList[1]);
    let wrapper = document.querySelector('.displayedsquare-wrapper');
    wrapper.appendChild(div);

}
const information = (e) => {
    let ul = document.querySelector('ul');
    let li = document.createElement ('li');
    let sentence = "[" + getElapsedTime() + "] Created a new " + e.target.classList[1] + " square";
    li.innerHTML = sentence;
    ul.appendChild(li);

}





const actionSquares = document.querySelectorAll('.actionsquare')
console.log(actionSquares);
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
  actionSquare.addEventListener('click', creatediv);
  actionSquare.addEventListener('click', information);
}



// pour(fo) chaque élément(let actionSquare) de actionSquares
// si cet élément a été cliqué , ça lance la fonction clickOnSquare


document.body.addEventListener('keypress' , (e) => {
    console.log('Key pressed:', e.key);
});








console.log(document.title);
document.title = "Modifying the DOM";
document.body.style.backgroundColor = "#FF69B4";
document.body.style.backgroundColor = "rgb(255,67,98)";
let deuxiemeElementEnfant = document.body.children;
for ( let enfant of deuxiemeElementEnfant) {
    console.log(enfant);

}

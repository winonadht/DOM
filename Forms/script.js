
// commande pour afficher le prénom
let firstnameInput = document.getElementById('firstname');
let displayFirstname = document.getElementById('display-firstname');
firstnameInput.addEventListener('keyup', function(event){
    let inputValue = event.target.value;
    displayFirstname.textContent = inputValue;
});
// commande pour verifier l'âge
let ageInput = document.getElementById('age');
let hardTruthSection = document.getElementById('a-hard-truth');
ageInput.addEventListener('keyup', function(event){
let ageValue = parseInt(event.target.value);
if (ageValue < 18) {
    hardTruthSection.style.visibility = 'hidden';
} else { 
    hardTruthSection.style.visibility = 'visible';
}
});

let passwordInput = document.getElementById('pwd');
let confirmPasswordInput = document.getElementById('pwd-confirm');
// pour vérifier le mot de passe 
function validatePassword() {
    let passwordValue = passwordInput.value;
    let confirmPasswordValue = confirmPasswordInput.value;
    if (passwordValue.length < 6 || passwordValue !== confirmPasswordValue) {
        passwordInput.style.border = '2px solid red';
        confirmPasswordInput.style.border = '2px solid red'; 
    } else {
        passwordInput.style.border = '';
        confirmPasswordInput.style.border = '';
    }
    }

passwordInput.addEventListener('keyup', validatePassword);
confirmPasswordInput.addEventListener('keyup', validatePassword);


    
//pour choisir le mode sombre 
let darkModeSelector = document.getElementById('toggle-darkmode');
darkModeSelector.addEventListener('change', function(){
    if (darkModeSelector.value === 'dark') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = ''; 
        document.body.style.color = '';
    

    }
});



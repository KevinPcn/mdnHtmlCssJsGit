let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, coment tu vas ';


/**
 * comments
 */
// comments on a line

/**
 * structures conditionnelles
 */

// let iceCream = 'chocolate';
// if(iceCream === 'chocolate'){
//     alert ('j\'adore la glace chocolat');
// }else{
//     alert ('Oh, mais j\'aurai préféré du chocolat');
// }



// alert ('Bonjour!');

function multiply(num1,num2){
    let result = num1 * num2;
    return result;
}

/**
 * event
 */


myHeading.addEventListener('click',function(){
    alert('Aie, arretes de cliquer');
})
//equivalence d'ecriture de fonction
let myLi = document.querySelector('li');
myLi.addEventListener('click', function() {
    alert('oui tu click sur une liste!');
});


/**
 * changer image avec event
 */

//Assigner le selecteur 'img' à la une variable 'clickImage'
let clickImage = document.querySelector('img');

//creer un evenenement click sur la variable 'clickImage'
clickImage.addEventListener('click',function(){
    //chercher l'attribut 'src' et le mettre dans une variable 'srcImage'
    let srcImage = clickImage.getAttribute('src');
    //Si l'attribut de srcImage === 'images/firefox-icon.png'
    if(srcImage === 'images/firefox-icon.png'){
        //en cliquant dessus la 'srcImage' change et deviens 'images/macron.jpg'
        clickImage.setAttribute('src','images/macron.jpg');
    }else{
        //sinon la 'srcImage' change et devient 'images/firefox-icon.png' 
        clickImage.setAttribute('src','images/firefox-icon.png');
    }
})
//assigner le selecteur 'button' à une variable myButton
let myButton = document.querySelector('button');
//creation d'une fonction 'setUserName
function setUserName(){
    //afficher un prompt qui prose une question qui sera stocké dans la variable 'myName'
    let myName = prompt('quel est votre nom?');
    //localStorage garde en memoire ce que le user a ecris dans variable 'myName'
    localStorage.setItem('nom', myName);
    //le 'h1' qui est dans variable 'myHeading' change et rajoute ce que user a mis dans 'myName'
    myHeading.textContent = 'Mozilla is cool!' + myName;
}
// Si rien dans la memoir dans la memoire je lance function 'setUserName()'
if (!localStorage.getItem('nom')){
    setUserName();
    //Sinon la memoire affiche le nom qui a deja été changé
}else{
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla est cool, ' + storedName + ', n\'est-ce pas ?'
}
//event sur 'myButton', qui en cliquant relance la function 
myButton.addEventListener('click',function(){
    setUserName();
})
//definir un nombre aleatoire entre 1 et 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');//<p> proposition precedentes
let lastResult = document.querySelector('.lastResult');//<p> defini si gagné ou perdu 
let lowOrHi = document.querySelector('.lowOrHi');//<p> dis si plus petit ou plus grand

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();// mets le curseur directement dans le champ d'ecriture

function checkGuess(){
    //declaration de 'userguess' qui definit sa valeur par ce qui a été saisi par l'user
    //j'utilise la methode NUMBER pour assurer qu'il entre bien un nombre 
    let userGuess = Number(guessField.value);
    // si 'guessCount' === 1 (1ere proposition), alors le <p class=guesses> va ecrire la proposition precedente ainsi qu'un espace 
    if (guessCount === 1) {
      guesses.textContent = 'Propositions précédentes: ';
    }
    guesses.textContent += userGuess + ' ';
  //si le nombre ecris par user est === au nombre à trouvé
    if (userGuess === randomNumber) {
      lastResult.textContent = 'Bravo, vous avez trouvé le nombre !'; //change le <p> lastResult
      lastResult.style.backgroundColor = 'green'; //change le style en vert si gagné
      lowOrHi.textContent = '';// n'affiche rien vu que c'est le bon nombre trouvé
      setGameOver();// lance la fonction perdu
      //Sinon Si le joueur arrive à 10 devinettes
    } else if (guessCount === 10) {
       lastResult.textContent = '!!! PERDU!!!';// le <p> lastResult affiche qu'il a perdu
       setGameOver();//lance la fonction perdu
       //sinon (il est donc à moins de 10 essais) et les 2 conditions précedentes renvoie FALSE donc on passe à la suite
    } else {
       lastResult.textContent = 'Faux!';//vu qu'il est à moins de 10 et qu il n' a pas trouvé le <p> lastResult lui dit que c'est faux
       lastResult.style.backgroundColor = 'red';// et le fond est rouge
       //Si son nombre est inferieur au nombre à trouve
       if (userGuess < randomNumber) {
        //le <p> 'lowOrHi change et lui est dit que son nombre est trop petit
        lowOrHi.textContent = 'Le nombre saisi est trop petit !';
        //Sinon Si son nombre est superieur
       } else if (userGuess > randomNumber) {
        //le <p> 'lowOrHi' lui ecrit que son nombre est trop grand
        lowOrHi.textContent = 'Le nombre saisi est trop grand !';
       }
    }

  /* a chaque fois qu'une condition est verifié */
    guessCount++; /**guessCount s'incremente de 1 */
    guessField.value = '';/**guessField vide le formulaire */
    guessField.focus();/**et la fonction focus replace le curseur sur le formulaire */
  }
  //event click sur l'input class=guessSubmit qui declenche la fonction checkGuess
  guessSubmit.addEventListener('click', checkGuess);

  //fonction perdu
  function setGameOver() {
    guessField.disabled = true;//desactive l'entrée de texte
    guessSubmit.disabled = true;// desactive le bouton
    resetButton = document.createElement('button');//cree un nouvel element button
    resetButton.textContent = 'Start new game';// button ou il est ecrit de jouer
    document.body.appendChild(resetButton);// et l'ajoute en bas du document body
    resetButton.addEventListener('click', resetGame);// event sur ce button qui si on clique declenchera la fonction resetGame() 
  }
  //function reset
  function resetGame() {
    guessCount = 1;// retourne a 1 tentative
  //resetParas reinitialise la div et ces <p> 
    let resetParas = document.querySelectorAll('.resultParas p');
//la boucle parcours tout les <p> de la div resultParas 
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';// et vide les <p> de la div resultParas
    }
    //supprime le bouton resetButton qui a declenché cette fonction meme
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;// reactive le formulaire
    guessSubmit.disabled = false;// reactive l input submit
    guessField.value = '';// vide le champ d ecriture
    guessField.focus();// et remet le curseur sur le chambps d ecriture
  
    lastResult.style.backgroundColor = 'white';// enleve les couleur vert ou rouge et remet a blanc
  
    randomNumber = Math.floor(Math.random() * 100) + 1;// recherche un autre nombre aleatoire
  }


//test
  let theName = 'Bingo';
  theName;
  let hello = ' dit bonjour!';
  hello;
  let greeting = theName + hello;
  greeting;
  theName += ' dis bonjour';
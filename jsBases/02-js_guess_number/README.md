https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps/A_first_splash

Je vous demande de créer un jeu simple de devinette de nombre. Le jeu choisit aléatoirement un nombre entre 1 et 100, puis il met le joueur au défi de le deviner en 10 tentatives maxi. À chaque tour, le joueur doit être informé s'il a deviné ou non le bon nombre — si ce n'est pas le cas, le jeu lui indique si son estimation est trop basse ou trop élevée. Le jeu doit également rappeler au joueur les nombres déjà proposés. Le jeu se termine quand le joueur a deviné le nombre mystère, ou s'il a épuisé ses 10 chances. À la fin du jeu, le joueur a la possibilité de débuter une nouvelle partie.


boucle for

for (let i = 1 ; i < 21 ; i++) { console.log(i) }
Copy to Clipboard
Que s'est-il passé ? Les nombres de 1 à 20 s'affichent dans la console. C'est à cause de la boucle. Une boucle : for prend trois valeurs d'entrée (arguments)

Une valeur de départ : Dans ce cas, nous commençons un compte à 1, mais cela pourrait être n'importe quel nombre. Vous pouvez remplacer i par n'importe quel nom (ou presque...), mais i est utilisé par convention car il est court et facile à retenir.
Une condition de fin : Ici, nous avons spécifié i < 21 la boucle continuera jusqu'à ce que i ne soit plus inférieur à 21. Quand i atteindra ou dépassera 21, la boucle s'arrêtera.
Un incrémenteur : Nous avons spécifié i++, ce qui signifie "ajouter 1 à i". La boucle sera exécutée une fois pour chaque valeur de i, jusqu'a ce que i atteigne une valeur de 21 (comme indiqué ci-dessus). Dans ce cas, nous imprimons simplement la valeur de i sur la console à chaque itération en utilisant console.log().
<<<<<<< HEAD
let button = document.querySelector(".switch") //Variable pour selectionner dans le DOM l'élément qui à pour classe "switch"
let icon = document.querySelector(".icon")  //Variable pour selectionner dans le DOM l'élément qui à pour classe "icon"
let all = document.querySelectorAll("*")  //Variable pour selectionner dans le DOM, TOUS les élements
let click = false; //! Un booléen pour savoir si le titre a été cliqué ou non
let p = document.querySelector("p") //Variable pour selectionner dans le DOM, l'élément "p"
let oldText = p.innerText; // Cette variable n'est là que pour conserver l'ancien texte et le restituer au besoin.

//Fonction pour clicker sur le bouton
button.addEventListener("click",function(){

    //Changer icone en  soleil 
    icon.classList.toggle("fa-moon");

    // si click est vrai (car égal à false) alors remplacer le texte que contient le "p" par "Pour passer en mode clair" 
    if(click == false)  {
        p.innerText = "Pour passer en mode clair";
        click = !click; //? à chaque click le booleen passe à son inverse (pour faire le re click)

    //sinon garder le texte d'origine de "p"
    }else{
        p.innerText = oldText;
        click = !click; //? à chaque click le booleen passe à son inverse (pour faire le re click)
    }

    //!Ecriture ternaire de la condition ci dessus
    /*p.innerText = click ? 'Pour passer en mode clair': "Pour passer au thème sombre";
    click = !click;*/ 

    //Appliquer ou retirer la classe darkmode sur l'ensemble des elements du document 
    all.forEach(function(element){
        element.classList.toggle("darkmode");
    });
    
})


=======
let button = document.querySelector(".switch") //Variable pour selectionner dans le DOM l'élément qui à pour classe "switch"
let icon = document.querySelector(".icon")  //Variable pour selectionner dans le DOM l'élément qui à pour classe "icon"
let all = document.querySelectorAll("*")  //Variable pour selectionner dans le DOM, TOUS les élements
let click = false; //! Un booléen pour savoir si le titre a été cliqué ou non
let p = document.querySelector("p") //Variable pour selectionner dans le DOM, l'élément "p"
let oldText = p.innerText; // Cette variable n'est là que pour conserver l'ancien texte et le restituer au besoin.

//Fonction pour clicker sur le bouton
button.addEventListener("click",function(){

    //Changer icone en  soleil 
    icon.classList.toggle("fa-moon");

    // si click est vrai (car égal à false) alors remplacer le texte que contient le "p" par "Pour passer en mode clair" 
    if(click == false)  {
        p.innerText = "Pour passer en mode clair";
        click = !click; //? à chaque click le booleen passe à son inverse (pour faire le re click)

    //sinon garder le texte d'origine de "p"
    }else{
        p.innerText = oldText;
        click = !click; //? à chaque click le booleen passe à son inverse (pour faire le re click)
    }

    //!Ecriture ternaire de la condition ci dessus
    /*p.innerText = click ? 'Pour passer en mode clair': "Pour passer au thème sombre";
    click = !click;*/ 

    //Appliquer ou retirer la classe darkmode sur l'ensemble des elements du document 
    all.forEach(function(element){
        element.classList.toggle("darkmode");
    });
    
})


>>>>>>> 4fa2e52f0d68df7722984ddeb2f8ec9d1d13eba4

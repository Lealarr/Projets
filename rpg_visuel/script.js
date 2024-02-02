// Déclaration de l'objet hero
let hero = {
    s_nom : "Luffy",            //nom du personnage hero
    n_pv : 100,                  //point de vie du personnage hero
    n_attaque : 12,              //point d'attaque du personnage hero
    saluer(ennemie){            //fonction saluer
        console.log(" Salutation " + ennemie.s_nom + " je suis " + this.s_nom + " ! "); 
    },
    ficheDePersonnage(){        //fonction qui affiche les détails du personnage hero
        return "Nom : " + this.s_nom + " | PdV : " + this.n_pv;
    },
    soin(n_soin){               //fonction de soin du personnage hero
        this.n_pv = this.n_pv + n_soin;
    },
    attaquer(ennemie){          //fonction d'attaque du personnage hero
        ennemie.n_pv -= this.n_attaque;
    }

};
// Déclaration de l'objet ennemie
let ennemie = {
    s_nom : "Goku",            //nom du personnage ennemie
    n_pv : 100,                   //point de vie du personnage ennemie
    n_attaque : 10,              //point d'attaque du personnage ennemie
    saluer(ennemie){            //fonction de salutation
        console.log(" Salutation " + ennemie.s_nom + " je suis " + this.s_nom + " ! ");
    },
    ficheDePersonnage(){        //fonction qui affiche les détails du personnage ennemie
        return " Nom : " + this.s_nom + " | PdV : " + this.n_pv;
    },
    soin(n_soin){               //fonction de soin du personnage ennemie
        this.n_pv = this.n_pv + n_soin;
    },
    attaquer(ennemie){          //fonction d'attaque du personnage ennemie
        ennemie.n_pv -= this.n_attaque;
    }
};

// affiche les informations du hero dans le HTML
const element_hero_nom = document.querySelector("#hero .name");
element_hero_nom.innerText =  hero.s_nom; //affiche le nom du hero

const element_hero_pv = document.querySelector("#hero .pv");
element_hero_pv.innerText = "PV : " +hero.n_pv; //affiche les PV du hero

const element_hero_attaque = document.querySelector("#hero .attack")
element_hero_attaque.innerText = "ATK : " +hero.n_attaque; //affiche l'attaque du hero

// affiche les informations de l'ennemie dans le HTML
const element_ennemie_nom = document.querySelector("#ennemy .name");
element_ennemie_nom.innerText =  ennemie.s_nom; //affiche le nom de l'ennemie

const element_ennemie_pv = document.querySelector("#ennemy .pv");
element_ennemie_pv.innerText = "PV : " +ennemie.n_pv; //affiche les PV de l'ennemie

const element_ennemie_attaque = document.querySelector("#ennemy .attack")
element_ennemie_attaque.innerText = "ATK : " +ennemie.n_attaque; //affiche l'attaque de l'ennemie

//soin du hero en cliquant sur le button soigner
const hero_btn_soin = document.querySelector("#hero .btn_soin");
hero_btn_soin.addEventListener("click",function(){
    hero_btn_soin.style.setProperty("background-color","pink");
    setTimeout(function(){
        hero_btn_soin.style.removeProperty("background-color");
    },100);
    hero.soin(10);
    Draw();
})
function Draw(){    
    element_hero_pv.innerText = "PV : " +hero.n_pv;   
    element_hero_attaque.innerText = "ATK : " +hero.n_attaque;
    element_ennemie_pv.innerText = "PV : " +ennemie.n_pv;
    element_ennemie_attaque.innerText = "ATK : " +ennemie.n_attaque;
}
//attaque du hero sur les PV de l'ennemie
const hero_btn_attaque = document.querySelector("#hero .btn_attack");
hero_btn_attaque.addEventListener("click",function(){
    hero.attaquer(ennemie);
    const image = document.querySelector("#hero img");
    image.classList.add("attaquer");
    image.setAttribute("src", "punching.gif") 
    setTimeout(function(){
        image.classList.remove("attaquer");
        image.setAttribute("src", "luffy-mugen.gif")
    },500);
    hero_btn_attaque.style.setProperty("background-color","yellow");
    setTimeout(function(){
        hero_btn_attaque.style.removeProperty("background-color");
    },100);  
    Draw();
});

//soin de l'ennemie avec le boutton soigner
const ennemie_btn_soin = document.querySelector("#ennemy .btn_soin");
ennemie_btn_soin.addEventListener("click", function(){
    ennemie_btn_soin.style.setProperty("background-color","pink");
    setTimeout(function(){
        ennemie_btn_soin.style.removeProperty("background-color");
    },100);
    ennemie.soin(10);
    Draw();
});
//attaque de l'ennemie sur les PV du hero
const ennemie_btn_attaque = document.querySelector("#ennemy .btn_attack");
ennemie_btn_attaque.addEventListener("click",function(){
    ennemie.attaquer(hero);
    const image = document.querySelector("#ennemy img"); 
    image.classList.add("attaquer"); 
    image.setAttribute("src", "gokuatk.gif")
    setTimeout(function(){
        image.classList.remove("attaquer");
        image.setAttribute("src", "gokurun.gif")
    },500); 
    ennemie_btn_attaque.style.setProperty("background-color","yellow");
    setTimeout(function(){
        ennemie_btn_attaque.style.removeProperty("background-color");
    },100);     
    Draw();
});











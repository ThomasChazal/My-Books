let alire = document.getElementById("alire");
let lu = document.getElementById("lu");

document
.getElementById("ajouter")
.addEventListener('click', 

function () {

    let lien = document.getElementById("lien").value;
    let titre = document.getElementById("titre").value;

    if(lien=="" || titre=="") {
      alert("Les deux champs doivent être rempli")
    } else {
      document.getElementById("titre1").style.visibility="visible";
      // Lorsqu'on clique, on rend l'élément visible
      document.getElementById("pretexte").style.visibility="hidden";
      

      alire.insertAdjacentHTML("afterbegin",`<li>${titre}
      <button id=${titre} class="icon" onClick=marquerLu(this.id)>Check</button>
      <button id=${titre} onClick=supprimer(this.id) class="icon"  href="#">Delete</button>
      <a href=${lien} target="blank"><button class="icon" href="buy">Buy</button></a>
    </li>`);
      document.getElementById('lien').value=""
      document.getElementById('titre').value=""
    // On va placer des variables à l'intérieur des strings
    // Ici, le += AJOUTE les livres les uns après les autres, sans le =, il écrase à chaque fois la précédente saisie.
    // Le ${titre} permet de laisser le champ d'écriture vide pour y ajouter les noms qu'on veut chaque fois qu'on tapera des titres de livre sur la page html.

    // insertAdjacentHTML et l'ordre qui suit, permet de mettre les titres de livres tout en HAUT, chaque fois qu'on en ajoute un.


    };

});

function supprimer(id) {
  document.getElementById(id).parentElement.outerHTML="";
  // Chaque fois que l'on clique sur SUPPRIMER, on vide le HTML
};

function marquerLu (id) {

  document.getElementById("titre2").style.visibility="visible";
  supprimer(id);
  lu.insertAdjacentHTML("afterbegin",`<li>${id}
      <button id=${id} onClick=supprimer(this.id) class="icon">Delete</button>
    </li>`);
};






$(document).ready(main);

// Fonction principale
function main(){

		
	var choixVies = Number(prompt("choisir le nombre de tentatives"));
	var afficherVies = $(".count").text(choixVies);
	var nbmyst = parseInt((Math.random() * (100 - 1)) + 1);
	

	function clickValider(){

		
		var contenu = $("input").val(); // Récupérer le contenu de mon input
	// Comparer ce contenu au nombre mystère.
		if(contenu==nbmyst){
			alert("You WON!, Play again?");
			demarrerPartie();
			// Sinon s'il est supérieur
		} else if(contenu > nbmyst){
			alert("Perdu, votre nombre est trop Grand!");
			partieActualiser();
			partiePerdu();		
			// Sinon s'il est inférieur// Afficher une alert Perdu, votre nombre est trop petit
		} else {
			alert("Perdu, votre nombre est trop Petit!" );
			partieActualiser();
			partiePerdu();			
		}	

	};


$("button").on('click', function(){
		clickValider();
	});


// revenir aux conditions initiales
	function demarrerPartie(){
		choixVies = Number(prompt("choisir le nombre de tentatives"));
		 afficherVies = $(".count").text(choixVies);
		nbmyst = parseInt((Math.random() * (100 - 1)) + 1);
	};

	
	function partiePerdu(){
		if(choixVies===0){
			alert("Game Over");
			demarrerPartie();
		}
	};

	function partieActualiser(){
		choixVies--;
		$(".count").text(choixVies);
	};




}
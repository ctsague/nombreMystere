$(document).ready(main);

// Fonction principale
function main(){	
	
	var vies;
	var nbmyst;

// revenir aux conditions initiales
	function demarrerPartie(){
		vies = 3;
		nbmyst = Math.round(Math.random() * 51); //nombres entiers entre 0 et 50
		$(".decompter").text(vies);
		$("input").val(0);
	};
	
	function partiePerdu(){
		if(vies===0 ){
			alert("Game Over");
			demarrerPartie();
		}
	};

	function partieActualiser(){
		vies--;
		$(".decompter").text(vies);
	};

	demarrerPartie();
	
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

	$('.jouer').on('click', function(){
		clickValider();
	});

	
}




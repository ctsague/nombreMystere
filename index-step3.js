$(document).ready(main);

// Fonction principale
function main(){	
	
	var vies = 3;
	var nbmyst = parseInt(Math.random()*51); //nombres entiers entre 0 et 50
	
	// == Fonction clickValider == 
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


	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
	$('.jouer').on('click', function(){
		clickValider();
	});

// revenir aux conditions initiales
	function demarrerPartie(){
		vies = 3;
		nbmyst = Math.round(Math.random() * 51); 
		$(".decompter").text(vies);
		//$("input").reset();
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


	
}




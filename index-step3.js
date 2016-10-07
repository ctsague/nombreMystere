$(document).ready(main);

// Fonction principale
function main(){	
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.
	var vies = 3;
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.
	var nbmyst = parseInt(Math.random()*51); //on veut des nombres entre 0 et 50
	console.log(nbmyst);
	

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){
		// Récupérer le contenu de mon input
		var contenu = $("input").val();
	// Comparer ce contenu au nombre mystère.
	/*
		Si le contenu est égal : 
		- afficher une alert Gagné
		- démarrer une nouvelle partie
	*/
		if(contenu==nbmyst){
			alert("You WON!, Play again?");
			demarrerPartie();

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand	
		} else if(contenu > nbmyst){
			alert("Perdu, votre nombre est trop Grand!");
			// Dans les cas où c'est perdu, diminuer le nombre de tentatives
			// Actualiser la zone html affichant le nombre de tentatives
			//vies--;
			//$(".decompter").text(vies);
			partieActualiser();
			partiePerdu();
				/*if(vies==0) {
					alert("Game OVER!!!");
					demarrerPartie();
				}*/
				//$("input").val(" ");
	
			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit
		} else {
			alert("Perdu, votre nombre est trop Petit!" );
			// Dans les cas où c'est perdu, diminuer le nombre de tentatives
			// Actualiser la zone html affichant le nombre de tentatives
			//vies--;
			//$(".decompter").text(vies);
			PartieActualiser();
			partiePerdu();
					/*if(vies==0) { 
						alert("Game OVER!!!");
						demarrerPartie();
						 }*/
		}

			/*if(vie===0){
				altert("vous avez perdu");
				$('.decompter').text(vie);
				location.reload();
			}*/

			/* 
				Si le nb de tentatives est égal à 0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère		 */		
	}
	// /Fin == Fonction clickValider == 

	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
	$('.jouer').on('click', function(){
		clickValider();
	});

// revenir aux conditions initiales
	function demarrerPartie(){
		vies = 3;
		nbmyst = Math.round(Math.random() * 51); 
		console.log(nbmyst);
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

	function PartieActualiser(){
		vies--;
		$(".decompter").text(vies);
	};

	
	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'

		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
	*/
}




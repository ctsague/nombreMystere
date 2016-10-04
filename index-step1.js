$(document).ready(main);

// Fonction principale
function main(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){
		
		// Récupérer le contenu de mon input
		var contenu = $("#input").val();
		
		// Comparer ce contenu à un nombre que vous choisissez
			// Si le contenu est égal
			// Afficher une alert Gagné
		
			if (contenu ==='34'){
				alert("Gagné !");
			// Sinon,
			// Afficher une alert Perdu
				
			} else {
				alert("Perdu");
			}
	// /Fin == Fonction clickValider == 
	
	}	
	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
	$("button").on('click', function(){
		clickValider();
	});
		



}



	



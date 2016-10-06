$(document).ready(pied);

// Fonction principale
function pied(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'

	// Stocker un nombre ENTIER généré "aléatoirement"
	var stock = Math.round(Math.random() * 51);
	
	function clickValider(){

		// Récupérer le contenu de mon input
		var contenu = $('input').val();
		console.log(stock);
		//console.log(stock);

		// Comparer ce contenu à ce nombre
			// Si le contenu est égal
			// Afficher une alert Gagné
		if (contenu ==stock){
			alert("Gagné !");
			// Sinon s'il est supérieur
		} else  if (contenu > stock){
			// Afficher une alert Perdu, votre nombre est trop grand
			alert('Perdu !, votre nombre est trop grand');
			// Sinon s'il est inférieur
			} else if (contenu < stock){
			// Afficher une alert Perdu, votre nombre est trop petit
				alert('Perdu, votre nombre est trop petit');
			}
		
	// /Fin == Fonction clickValider == 
	}
			


	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
	$("button").on('click',function(){
		clickValider();
	});



}
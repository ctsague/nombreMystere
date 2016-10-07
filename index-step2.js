$(document).ready(pied);

// Fonction principale
function pied(){

	// Stocker un nombre ENTIER généré "aléatoirement"
	var stock = Math.round(Math.random() * 51);
	
	function clickValider(){
		// Récupérer le contenu de mon input
		var contenu = $('input').val();
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
	}; 
	
	$("button").on('click',function(){
		clickValider();
	});
};
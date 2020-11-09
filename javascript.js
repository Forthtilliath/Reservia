function goto(link) {
	document.location.href = link;
	
	// Si le lien correspond à un element du menu
	switch(link) {
		case "#accommodations" : 
		case "#activities" :
			// On lui ajoute la classe active
			addActive(link.substring(1));
			break;
	}
}

function validForm() {
	document.getElementById("form_search").submit();
}

function getPage() {
	// On récupère le lien de la page
	var current_url = document.location.href;
	// On récupère uniquement la portion derrière le dernier slash de l'url courante
	var queue_url = current_url.substring( current_url.lastIndexOf( "/" )+1 );
	
	// Si le lien dispose d'une ancre
	var anchor_pos = queue_url.search("#");
	if( anchor_pos > -1 ) {
		// On récupère l'id de l'ancre
		var anchor_id = queue_url.substring( anchor_pos + 1 ); // +1 pour retirer le #
		
		// On ajoute la classe active
		addActive(anchor_id);
	}
	
	console.log( "Queue_url = " + queue_url );
	console.log( " Search() = " + queue_url.search("#"));
	console.log( " Left() = " + queue_url.substring( queue_url.search("#")+1 ) );
}

/****************************************************
 * Ajoute la classe active à un element du menu		*
 ****************************************************/
function addActive(link) {
	// On sélectionne tous les éléments du menu nav
	var list_li = document.querySelectorAll("header > div > nav > ul > li");
	// Pour chaque élément du menu
	for (var i = 0; i < list_li.length; i++) {
		// On retire la classe active
		list_li[i].classList.remove("active");
	}
	// On ajoute la classe active correspondant au lien
	document.getElementById("to_"+link).classList.add("active");
}

// Au chargement de la page, on active l'élément du menu si l'url dispose d'une ancre
window.onload = getPage;

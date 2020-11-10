var ele_menu = [
	"accommodations",
	"activities" ];
	
/****************************************************
 * Redirige la page vers une autre page ou vers une	*
 * 	ancre (dans ce cas, on active l'élement du menu	*
 ****************************************************/
function goto(link) {
	document.location.href = link;
	
	// Si le lien correspond à un element du menu, on l'active
	addActive(link.substring(1));
}

/****************************************************
 * Valide le formulaire afin d'activer l'action		*
 ****************************************************/
//~ // Devenu inutile avec le changement du span en button
//~ function validForm() {
	//~ //document.getElementById("form_bt_submit").submit();
	//~ document.getElementById("form_search").submit();
//~ }

/****************************************************
 * On récupère l'ancre pour rendre actif le menu	*
 ****************************************************/
function getAnchor() {
	// On récupère l'ancre (il se peut qu'il n'y en ait pas)
	var anchor = window.location.hash;
	// On vérifie s'il existe une ancre
	if( anchor.length > 0 ) {
		// On récupère l'id de l'ancre
		var anchor_id = anchor.substring( 1 ); // +1 pour retirer le #
		// On ajoute la classe active
		addActive(anchor_id);
	}
}

/****************************************************
 * Ajoute la classe active à un element du menu		*
 ****************************************************/
function addActive(link) {
	// Si le lien fait parti du menu
	if( ele_menu.includes(link) ) {
		// On sélectionne tous les éléments du menu nav
		var list_li = document.querySelectorAll("header > nav > ul > li");
		// Pour chaque élément du menu
		for (var i = 0; i < list_li.length; i++) {
			// On retire la classe active
			list_li[i].classList.remove("active");
		}
		// On ajoute la classe active correspondant au lien
		document.getElementById("to_"+link).classList.add("active");
	}
}

// Au chargement de la page, on active l'élément du menu si l'url dispose d'une ancre
window.onload = getAnchor;

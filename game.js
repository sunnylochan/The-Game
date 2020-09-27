alert("Je bent ontvoerd en word naar een gebouw gebracht op een van de bovenste verdiepingen. Wanneer de ontvoerders even weggaan probeer je te ontsnappen.");

var deuren = prompt("Je ziet 2 deuren. Welke deur neem je? de eerste of de tweede?");
if ( deuren == "de eerste"){
	alert("Je maakt de deur open en komt 2 trappen tegen");
	var trappen = prompt("Welke trap neem je? De eerste of de tweede?");
	if (trappen == "de eerste"){
		alert("Au! je loopt iets te snel van de trap af en breekt je been. Je bent af");
	}

	else if ( trappen == "de tweede"){
	alert("Je komt in een grote ruimte terecht.");
	alert("Je ziet een tafel staan. op die tafel ligt een hamer. Je pakt de hamer op en gaat verder naar beneden");
	
	var gevecht = prompt("Je komt 1 van de ontvoerders tegen. Ga je vechten met hem of ga je vluchten?");
	if (gevecht == "vechten" ){
			alert("Je gaat volop de strijd aan en slaat hem neer. Lekker gedaan")
		
	
	}


	var raam = prompt("Je bent nog een verdieping lager gekomen. Je ziet een raam. Ga je de raam breken met je hamer en eruit springen?")
		if (raam == "ja"){
			alert("Je springt uit het raam en je bent ontsnapt! Gefeliciteerd!")
		}
	else if (raam == "nee"){
		alert("Je loopt verder naar beneden en komt op de begane grond terecht")
		alert("Je loopt rustig door de voordeur naar buiten. Je bent ontsnapt! Gefeliciteerd!")
	}
	

}


}

else if ( deuren == "de tweede"){
	alert("Oh nee! je loopt per ongeluk recht in de handen van een ontvoerder. Je bent af.");
}

else if ( gevecht == "vluchten"){
		alert("Je probeert zo hard weg te rennen dat je struikelt over je eigen benen... game over.")
	}






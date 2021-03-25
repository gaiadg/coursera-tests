(function (){

	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

	for ( var i = 0; i < names.length; i++) {

	  var firstLetterCapital = names[i].charAt(0);
	  var firstLetter = firstLetterCapital.toLowerCase();
	  var namesToRun = names[i];

	  if ( firstLetter == "j")
	  {
	  	byeSpeaker.speak(namesToRun);
	  } else {
	  	helloSpeaker.speak(namesToRun);
	  }
	}

}) ();
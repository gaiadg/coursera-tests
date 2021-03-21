(function (){

	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

	var name = "GAIA";

	for ( var i = 0; i < names.length; i++) {

	  // STEP 11:
	  // Retrieve the first letter of the current name in the loop.
	  // Use the string object's 'charAt' function. Since we are looking for
	  // names that start with either upper case or lower case 'J'/'j', call
	  // string object's 'toLowerCase' method on the result so we can compare
	  // to lower case character 'j' afterwards.
	  // Look up these methods on Mozilla Developer Network web site if needed.

	  var firstLetterCapital = names[i].charAt(0);
	  var firstLetter = firstLetterCapital.toLowerCase();

	  // STEP 12:
	  // Compare the 'firstLetter' retrieved in STEP 11 to lower case
	  // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
	  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
	  // name in the loop.
	  if ( firstLetter == "j")
	  {
	  	console.log ("many j");

	    // byeSpeaker.xxxx
	  } else {
	  		  	console.log ("not j");
	    // helloSpeaker.xxxx
	  }
	}

}) ();
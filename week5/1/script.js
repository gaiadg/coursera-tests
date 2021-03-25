// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);
console.log ("hello");

document.addEventListener("DOMContentLoaded",
  function (event) {
		function sayHello(event) {
			this.textContent = "Said it!";
			var name = document.getElementById("name").value;
			var message = "<h2>Hello " + name + "!</h2>";

			document.getElementById("content").innerHTML = message;

			if ((name === "Toby") || (name === "toby")) {
				var title = document.querySelector("#title").textContent;
				title += " & Lovin' it!";
				document.querySelector("h1").textContent = title;
			}
	}

	document.querySelector("button").addEventListener("click", sayHello);
	document.querySelector("body").addEventListener("mousemove",
		function (event){
			if (event.shiftKey === true) {
				console.log ("x is: " + event.clientX);
				console.log ("y is: " + event.clientY);
				}
			else {
				console.log ("lol");
			}
		}
	);
});
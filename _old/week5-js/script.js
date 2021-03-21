// var message = "in global";
// console.log ("global: message = " + message);



// var a =  function  () {
// 	var message = "inside a";
// 	console.log ("a: message = " + message);
// 	b ();
// }

// function b () {
// 	console.log("b: message = " + message);
// }

// a ();

// console.log (a);
// console.log (b);

// var x 
// x = 5;
// console.log (x);
//  if (x == undefined) {
//  	console.log ("x is undefined")
//  }
//  else {
//  	console.log(x)
//  }


// var string = "Hello";
// string += " World";
// string = string + " World!"
// console.log(string);

// console.log ((5 + 4) / 3);
// console.log (undefined / 5);
// function test1 (a) {
// 	console.log( a / 5);
// }
// test1();

// var x = 4, y = 4;
// if (x == y) {
// 	console.log ("x is equal to y");
// }

// var x = "4", y = 4;
// if (x == y) {
// 	console.log ("x is equal to y");
// }


// if (x === y) {
// 	console.log ("x is equal to y");
// }
// else {
// 	console.log("x is not strictly equal to y");
// }

// 

// function a() {
// 	return {
// 		name: "Yaakov"
// 	};
// }

// console.log(a());


// var sum = 0;
// for (var i = 0; i < 10; i++) {
// 	console.log( i );
// 	sum = sum + i;
// }

// console.log("sum of 0 through 9 is : " + sum);


// function OrderChickenWith(sideDish) {
// 	sideDish = sideDish || "whatev";
// 	console.log ("Chicken with " + sideDish);
// }

// OrderChickenWith("noodles");


// var toby = new Object();
// toby.favFood = "fish";
// toby.furColor = "Brown";
//  console.log (toby);
//  console.log (toby.favFood);
//  console.log ("Toby's favorite food is " + toby.favFood);
//  console.log (toby["furColor"])

// var weirdBehaviour = "nothing he does makes sense";
// toby[weirdBehaviour] = "nothing he does makes sense";
// toby.weirdBehaviour = "nothing he does makes sense";

// console.log("Why does he do it? " + toby.weirdBehaviour );

// var toby = {
// 	furColor: "Brown",
// 	toys: 5,
// 	favFood: {
// 		morning: "fish",
// 		day: "kibble",
// 		anytime: "treatos"
// 		},
// 	nickname: "tobino",
// 	"what does he do": "sleeps all day"
// };
// console.log (toby);
// console.log(toby.favFood.morning);

// function multiply(x,y) {
// 	return x * y;
// }
// console.log(multiply(5,3));
// multiply.version ="v.1.0.0";
// console.log(multiply.toString());
// console.log(multiply.version);


// function makeMultiplier(multiplier) {
// 	var myFunct = function (x) {
// 		return multiplier * x;

// 	}
// 	return myFunct;
// }


// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));

// var a = 7;
// var b = a;

// console.log("a:" + a);
// console.log("b:" + b);

// b = 5;
// console.log("after b update:");
// console.log("a:" + a);
// console.log("b:" + b);


// var a = { x: 7};
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b update:");
// console.log(a);
// console.log(b);


// function imChangingValues (firstValue) {
// 	console.log("inside function imChangingValues: here's the first value");
// 	console.log(firstValue)

// 	firstValue = "1";
// 	console.log("after i became: " + firstValue);
// }

// secondValue = "2";
// imChangingValues(secondValue);
// console.log("after i've changed value: " + secondValue);


// function changeObject(objectValue) {
// 	console.log ("we're inside the function");
// 	console.log ("before");
// 	console.log (objectValue);

// 	objectValue.x = 5;
// 	console.log("after:");
// 	console.log(objectValue);
// }

// newObjectValue = { x: 10};
// changeObject(newObjectValue);
// console.log("we're changing objects");
// console.log(newObjectValue);


// function test() {
// 	console.log(this);
// 	this.myName = "Yaakov";
// }

// test ();
// console.log(myName);



var cat = ["Toby", "brown fur", "fish"];
console.log(cat);

for (var i = 0; i < cat.length; i++) {
	console.log("Hello " + cat[i]);
}

cat[100] = "PAWS IN THE AIR";
for (var i = 0; i < cat.length; i++) {
	console.log("Hello " + cat[100]);
}

















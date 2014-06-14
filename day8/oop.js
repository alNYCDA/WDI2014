//My First Object Literal
var lawnmower = {
	brand: "rush",
	color: "red",
	age: 4,
	powerSource: "solar",
	bladeType: "3 triple Sharp",
	isInUse: false
}

var garage = {

	walls: 3,
	doors: 1,
	isOpen : false,
	wallColor: "blue",
	automaticDoor: true,
	attachedToHouse: false

}

//My Second object with Constructor

function Car(brand){
	//attribute
	this.brand = brand;
	
	//method
	this.run = function(){

		//All my method procedures go here
		return "I am running!!! d._-b";

	}
}

var myAwesomeCar = new Car("lamborgini"); 

console.log(myAwesomeCar.brand);
console.log(myAwesomeCar.run());

// Adding attributes and methods via Prototype
Car.prototype.color = "black";
Car.prototype.stopRunning = function(){
	return "I am stopping from running :(";
}

var myAwesomeCar2 = new Car("Toyota");
Car.prototype.color = "blue";
myAwesomeCar2.color = "brown"
console.log(myAwesomeCar2.color)









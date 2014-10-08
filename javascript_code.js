
function myOBJ() {

	this.myFunction = function (){
		console.log("function called");
		return this;
	}

}

var object = new myOBJ();
object.myFunction().myFunction();
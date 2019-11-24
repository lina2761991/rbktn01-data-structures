var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
		var child = new Tree (value)
		this.children.push(child)
};

treeMethods.contains = function(target) {

	if (this.value === target) {
		return true
	}

	for (var j = 0; j < this.children.length; j++) {
		if(this.children[j].contains(target)){
			return true
		}
	}

	return false
			
};



var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};







		
	


/*
 * Complexity: What is the time complexity of the above functions?
 */
 // var that = this.children;

	// if (that === []) {

	// 	// if (this.children.includes(target) === true){

	// 	// 	return true;
	// 	// }

	// 	return false

	// }





	// for (var i = 0; i < that.length; i++) {

	// 	if (typeof that[i] === "object"){

	// 		this.contains (target, children[i]);
	// 	} 

	// 	if (this.children[i] === target) {
	// 		return true;
	// 	}


	// }

	// return false
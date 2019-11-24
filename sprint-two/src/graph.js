

// Instantiate a new graph
var Graph = function() {
this.nodes = [[]];

console.log(this.nodes)
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.nodes[0][0] = 0;
	this.nodes[0].push(node);
	this.nodes.push([node]);

	for (var i = 1; i < this.nodes.length-1; i++) {
		this.nodes[i].push(0);
		this.nodes[this.nodes.length - 1].push(0)	
	}
	this.nodes[this.nodes.length - 1].push(0)

	// var k = 0;

	// for (var i = 1; i < this.nodes.length; i++) {

	// 	this.nodes[i].push(0)
	// }

	// this.nodes.push([node]);

	// while (k <= this.nodes.length - 1){

	// 	this.nodes[this.nodes.length -1].push(0);
	// 	k =  k + 1;
	// }

	// return this.nodes

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {


	for (var i = 0; i < this.nodes.length; i++) {

		if(this.nodes[i][0] === node){
			return true
		}
		
	}

	return false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

	var toDelete2;

	for (var i = 0; i < this.nodes.length; i++) {


		if (this.nodes[0][i] === node){
			toDelete2 = i;
		}

		if(this.nodes[i][0] === node){
			this.nodes.splice(i,1);	
		}


	}
	for (var i = 0; i < this.nodes.length; i++) {

		this.nodes[i].splice(toDelete2,1);
	}


	// for (var i = 0; i < this.nodes.length; i++) {

	// 	if(this.nodes[0][i] === node){
			
	// 		//this.nodes[0].splice(i,1)

	// 		toDelete2 = i;
	// 		this.nodes[toDelete2].splice(i,1);	

	// 	}

	// }



	// for (var i = 0; i <  this.nodes.length; i++) {

	// 	 this.nodes[i].splice(toDelete,1);
	// }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	var from, to;


		for (var i = 0; i < this.nodes.length; i++) {

			if(this.nodes[i][0] === fromNode){
				from = i;	
			}

			if(this.nodes[i][0] === toNode){
				to = i ;
			}	
		}

  return this.nodes[from][to] === 1
		
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

	for (var i = 0; i < this.nodes.length; i++) {

			if(this.nodes[i][0] === fromNode){
				from = i;	
			}

			if(this.nodes[i][0] === toNode){
				to = i ;
			}	
		}

	  this.nodes[from][to] = 1;
	  this.nodes[to][from] = 1

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

	for (var i = 0; i < this.nodes.length; i++) {

			if(this.nodes[i][0] === fromNode){
				from = i;	
			}

			if(this.nodes[i][0] === toNode){
				to = i ;
			}	
		}

	  this.nodes[from][to] = 0;
	  this.nodes[to][from] = 0;

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

	// for (var i = 0; i < this.nodes.length; i++) {
	// 	for (var j = 0; j < this.nodes.length; j++) {
	// 		cb(this.nodes[i][j])
	// 	}
	// }

	for (var i = 1; i < this.nodes.length; i++) {

			cb(this.nodes[i][0])
	}


};

/*
 * Complexity: What is the time complexity of the above functions?
 */



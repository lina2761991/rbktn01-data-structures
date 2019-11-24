var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
//do tail = new node 
  	list.tail = Node(value);

  	if (list.head  === null) {

  		list.head = Object.create(list.tail);
  		list.head.value = list.tail.value
  			
  	}
	  	list.head.next = list.tail.value

  };

  list.removeHead = function() {
  
  	var fhead = list.head.value;
  	list.head.value = list.head.next
  	return fhead;
  };



  list.contains = function(target) {

  	if (list.head.value=== target || list.tail.value=== target ) {
  		return true;
  	} 

  	return false

  	

  };

  return list;
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

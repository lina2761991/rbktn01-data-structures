

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  console.log(this._storage.set);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v, k);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
   return  this._storage.get(index, k);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var value = this.retrieve(k)

   this._storage[index][value] = undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var add = this._storage.set(index, {k : v});
//   return add

//   console.log(this._storage.set(index, {k : v}));

// };

// HashTable.prototype.retrieve = function(k) {
// 	var result
//   var index = getIndexBelowMaxForKey(k, this._limit);
  
//    result = this._storage.get(index);
//    return result[k]
// };

// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//      this._storage.set(index,undefined);
// };

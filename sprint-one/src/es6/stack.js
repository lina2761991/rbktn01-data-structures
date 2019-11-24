class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {}
  }






push (value) {

    var arr = Object.keys(this.storage);

    if (arr.length === 0) {

      this.storage[1] = value;

    } else {
      var maximum = Math.max(...arr) + 1;

      this.storage[maximum] = value;
    }

    return value
  };

pop () {

    var arr = Object.keys(this.storage);
    var maximum = Math.max(...arr);

    var result = this.storage[maximum];

    delete this.storage[maximum];

    return result
  };

size () {
    return Object.keys(this.storage).length;

  };

}



'use strict';

var Node = function(data){
  this.next = null;
  this.data = data;
};

Node.prototype.appendToTail = function(data){
  var n = this;
  var end = new Node(data);

  while (n.next !== null) {
    n = n.next;
  }

  n.next = end;
};

Node.prototype.deleteNode = function(data) {
  var n = this;

  if (n.data === data) {
    n.next = n.next.next;
  }

  while (n.next !== null) {
    if (n.next.data === data) {
      n.next = n.next.next;
      return;
    }
    n = n.next;
  }
};

Node.prototype.elementAt = function(index) {
  var n = this;
  var count = 0;

  while (count !== index) {
    if (n.next === null) {
      return null;
    }

    n = n.next;
    count++;
  }

  return n.data;
};

Node.prototype.removeDuplicates = function() {
  var data = [];
  var n = this;

  while (n !== null) {
    if (data[n.next.data]) {
      n.next = n.next.next; //delete node
    }
    else {
      data[n.next.data] = true;
    }

    n = n.next;
  }
};

module.exports = Node;

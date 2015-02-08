'use strict';

var Node = require('./node');

var Stack = function() {
  this.top = null;
  this.bottom = null;
};

Stack.prototype.push = function(item) {
  var node = new Node(item);

  if (this.top) {
    node.min = Math.min(node.data, this.top.data);
    node.next = this.top;
    this.top = node;
  } else {
    this.top = node;
    this.top.min = this.top.data;
    this.bottom = this.top;
  }
};

Stack.prototype.pop = function() {
  if (!this.top) {
    return null;
  }

  var node = this.top;
  this.top = this.top.next;

  return node.data;
};

Stack.prototype.min = function(){
  return this.top.min;
};

module.exports = Stack;

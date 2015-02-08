'use strict';

var Node = require('./node');

var Queue = function() {
  this.front = null;
  this.back = null;
};

Queue.prototype.enqueue = function(item) {
  var node = new Node(item);
  if (!this.front) {
    this.front = node;
    this.back = this.front;
  } else {
    this.back.next = node;
    this.back = node;
  }
};

Queue.prototype.dequeue = function() {
  if (this.front) {
    var node = this.front;
    this.front = this.front.next;
    return node.data;
  } else {
    return null;
  }
};

module.exports = Queue;

/* globals describe, it, beforeEach */
'use strict';

var expect = require('chai').expect,
    Stack = require('../src/stack'),
    stack = null;

describe('Stack', function(){
  beforeEach(function(){
    stack = new Stack();
  });

  describe('#constructor', function(){
    it('creates a new stack', function(){
      expect(stack).to.exist();
    });
  });

  describe('#push', function(){
    it('adds an item onto the stack', function(){
      stack.push('Hello, Mr. Stack...');
      expect(stack.top.data).to.equal('Hello, Mr. Stack...');
    });

    it('pushes existing items down the stack', function(){
      stack.push('item1');
      stack.push('item2');
      stack.push('item3');
      expect(stack.top.next.next.data).to.equal('item1');
      expect(stack.top.next.data).to.equal('item2');
      expect(stack.top.data).to.equal('item3');
    });
  });

  describe('#pop', function() {
    it('returns the first item on the stack', function(){
      stack.push('a');
      stack.push('b');
      stack.push('c');

      expect(stack.pop()).to.equal('c');
    });

    it('removes the first item from the stack', function(){
      stack.push('a');
      stack.push('b');
      stack.push('c');

      stack.pop();

      expect(stack.top.data).to.equal('b');
    });
  });

  describe('#min', function(){
    it('returns the minimum (smallest value) item in the stack', function(){
      stack.push(5);
      stack.push(9);
      stack.push(2);
      stack.push(0);
      stack.push(99);

      expect(stack.min()).to.equal(0);

      stack.pop();
      stack.pop();

      expect(stack.min()).to.equal(2);
    });
  });
});

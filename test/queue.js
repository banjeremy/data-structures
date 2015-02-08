/* globals describe, it, beforeEach */
'use strict';

var expect = require('chai').expect,
    Queue = require('../src/queue'),
    queue = null;

describe('Queue', function(){
  beforeEach(function(){
    queue = new Queue();
  });

  describe('#constructor', function(){
    it('creates a new queue', function(){
      expect(queue).to.exist();
    });
  });

  describe('#enqueue', function(){
    it('adds an item onto the back of the queue', function(){
      queue.enqueue('hey, i\'m first!');
      queue.enqueue('i\'m not far behind!');
      queue.enqueue('i\'m last :(');

      expect(queue.back.data).to.equal('i\'m last :(');
    });
  });

  describe('#dequeue', function(){
    it('returns the first item in the queue', function(){
      queue.enqueue('hey, i\'m first!');
      queue.enqueue('i\'m not far behind!');
      queue.enqueue('i\'m last :(');

      expect(queue.dequeue()).to.equal('hey, i\'m first!');
    });

    it('removes an item from the front of the queue', function(){
      queue.enqueue('hey, i\'m first!');
      queue.enqueue('i\'m not far behind!');
      queue.enqueue('i\'m last :(');

      queue.dequeue();

      expect(queue.front.data).to.equal('i\'m not far behind!');
    });
  });
});

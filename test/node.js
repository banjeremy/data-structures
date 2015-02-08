/* globals describe, it, beforeEach */
'use strict';

var expect = require('chai').expect;
var Node = require('../src/node');


describe('Node', function() {
  var linkedList;

  beforeEach(function(){
    linkedList = new Node('');
  });

  describe('#constructor', function(){
    it ('takes some data as an argument', function(){
      linkedList = new Node('hello!');

      expect(linkedList).to.not.equal(null);
      expect(linkedList.data).to.equal('hello!');
    });
  });

  describe('#appendToTail', function(){
    it('appends a node to the tail of the list', function(){
      linkedList.appendToTail('fin');

      expect(linkedList.elementAt(1)).to.equal('fin');
    });
  });

  describe('#elementAt', function(){
    it('gets the value of a node at an index', function(){
      linkedList.appendToTail('some other');
      linkedList.appendToTail('values');

      expect(linkedList.elementAt(1)).to.equal('some other');
      expect(linkedList.elementAt(2)).to.equal('values');
    });
  });

  describe('#deleteNode', function(){
    it('deletes a node from the list', function(){
      linkedList.appendToTail('delete me!');
      linkedList.deleteNode('delete me!');

      expect(linkedList.elementAt(1)).to.equal(null);
    });

    it('does nothing if the node was not found', function(){
      linkedList.deleteNode('not in there');
      expect(linkedList.elementAt(0)).to.equal('');
    });
  });

  describe('#removeDuplicates', function(){
    it('removes any duplicates from the linked list', function(){
      linkedList.appendToTail('Hello,');
      linkedList.appendToTail('Mr.');
      linkedList.appendToTail('Jackson!');
      linkedList.appendToTail('Hello,');
      linkedList.appendToTail('Mrs.');
      linkedList.appendToTail('Jackson!');

      linkedList.removeDuplicates();

      expect(linkedList.elementAt(0)).to.equal('');
      expect(linkedList.elementAt(1)).to.equal('Hello,');
      expect(linkedList.elementAt(2)).to.equal('Mr.');
      expect(linkedList.elementAt(3)).to.equal('Jackson!');
      expect(linkedList.elementAt(4)).to.equal('Mrs.');
      expect(linkedList.elementAt(5)).to.equal(null);
    });
  });
});

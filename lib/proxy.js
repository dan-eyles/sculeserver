/**
 * Copyright (c) 2013, Dan Eyles (dan@irlgaming.com)
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of IRL Gaming nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL IRL Gaming BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Module namespace
 */
module.exports = {
    proxy: {
        classes:   {},
        variables: {},
        objects:   {}
    },
    scule: null
};

module.exports.proxy.classes.DataStructureProxy = function() {

    this.get = function(key) {
        throw 'unsupported operation';
    };

    this.set = function(key, value) {
        throw 'unsupported operation';
    };

    this.unset = function(key, value) {
        throw 'unsupported operation';
    };

    this.contains = function(key) {
        throw 'unsupported operation';
    };

    this.push = function(value) {
        throw 'unsupported operation';
    };

    this.pop = function() {
        throw 'unsupported operation';
    };

    this.peek = function() {
        throw 'unsupported operation';
    };

    this.clear = function() {
        throw 'unsupported operation';
    };

    this.count = function() {
        throw 'unsupported operation';
    };

    this.increment = function(value) {
        throw 'unsupported operation';
    };

    this.decrement = function(value) {
        throw 'unsupported operation';
    };

    this.find = function(query, conditions) {
        throw 'unsupported operation';
    };

    this.update = function(query, updates, conditions, upsert) {
        throw 'unsupported operation';
    };

    this.remove = function(query, conditions) {
        throw 'unsupported operation';
    };

    this.countq = function(query, conditions) {
        throw 'unsupported operation';
    };

    this.save = function(object) {
        throw 'unsupported operation';
    };

};

module.exports.proxy.classes.CollectionProxy = function(name) {

    module.exports.proxy.classes.DataStructureProxy.call(this);

    this.collection = module.exports.scule.factoryCollection('scule+nodejs://' + name);

    this.find = function(query, conditions) {
        return this.collection.find(query, conditions);
    };

    this.update = function(query, updates, conditions, upsert) {
        return this.collection.update(query, updates, conditions, upsert);
    };

    this.remove = function(query, conditions) {
        return this.collection.remove(query, conditions);
    };

    this.countq = function(query, conditions) {
        return this.collection.count(query, conditions);
    };

    this.save = function(object) {
        return this.collection.save(object);
    };

    this.clear = function() {
        this.collection.clear();
    };

};

module.exports.proxy.classes.AtomicCounterProxy = function(initial) {
  
    module.exports.proxy.classes.DataStructureProxy.call(this);
  
    this.struct  = module.exports.scule.getAtomicCounter(initial);
    this.initial = initial;
    if (this.initial === undefined) {
        this.initial = 0;
    }

    this.increment = function(value) {
        this.struct.increment(value);
    };

    this.decrement = function(value) {
        this.struct.decrement(value);
    };

    this.clear = function() {
        this.struct.count = this.initial;
    };

    this.count = function() {
        return this.struct.getCount();
    };

};

module.exports.proxy.classes.HashTableProxy = function(capacity) {
    
    module.exports.proxy.classes.DataStructureProxy.call(this);
    
    this.struct = module.exports.scule.getHashTable(capacity);
    
    this.get = function(key) {
        return this.struct.get(key);
    };

    this.set = function(key, value) {
        return this.struct.put(key, value);
    };

    this.unset = function(key) {
        this.struct.remove(key);
    };

    this.contains = function(key) {
        return this.struct.contains(key);
    };

    this.clear = function() {
        this.struct.clear();
    };

    this.count = function() {
        return this.struct.getLength();
    };

};

module.exports.proxy.classes.HashMapProxy = function(capacity) {
    
    module.exports.proxy.classes.DataStructureProxy.call(this);
    
    this.struct = module.exports.scule.getHashMap(capacity);
    
    this.get = function(key) {
        return this.struct.get(key);
    };

    this.set = function(key, value) {
        return this.struct.put(key, value);
    };

    this.unset = function(key) {
        this.struct.remove(key);
    };

    this.contains = function(key) {
        return this.struct.contains(key);
    };

    this.clear = function() {
        this.struct.clear();
    };

    this.count = function() {
        return this.struct.getLength();
    };

};

module.exports.proxy.classes.LRUCacheProxy = function(capacity) {
    
    module.exports.proxy.classes.DataStructureProxy.call(this);
    
    this.struct = module.exports.scule.getLRUCache(capacity);
    
    this.get = function(key) {
        return this.struct.get(key);
    };

    this.set = function(key, value) {
        return this.struct.put(key, value);
    };

    this.unset = function(key) {
        this.struct.remove(key);
    };

    this.contains = function(key) {
        return this.struct.contains(key);
    };

    this.clear = function() {
        this.struct.clear();
    };

    this.count = function() {
        return this.struct.getLength();
    };

};

module.exports.proxy.classes.BitSetProxy = function(capacity) {

    module.exports.proxy.classes.DataStructureProxy.call(this);
    
    this.struct = module.exports.scule.getBitSet(capacity);

    this.get = function(key) {
        return this.struct.get(key);
    };

    this.set = function(key, value) {
        return this.struct.set(key);
    };

    this.unset = function(key) {
        this.struct.unset(key);
    };

    this.contains = function(key) {
        return this.struct.get(key);
    };

    this.clear = function() {
        this.struct.zeroFill();
    };

    this.count = function() {
        return this.struct.getLength();
    };

};

module.exports.proxy.classes.BloomFilterProxy = function(capacity) {

    module.exports.proxy.classes.DataStructureProxy.call(this);
    
    this.struct = module.exports.scule.getBloomFilter(capacity);

    this.get = function(key) {
        return this.struct.query(key);
    };

    this.set = function(key, value) {
        return this.struct.add(key);
    };

    this.contains = function(key) {
        return this.struct.query(key);
    };

    this.clear = function() {
        this.struct.zeroFill();
    };

    this.count = function() {
        return this.struct.getLength();
    };

};

module.exports.proxy.classes.BinarySearchTreeProxy = function() {
    
    module.exports.proxy.classes.DataStructureProxy.call(this);
    
    this.struct = module.exports.scule.getBinarySearchTree();
    
    this.get = function(key) {
        var node = this.struct.search(key);
        if (node) {
            return node.getData();
        }
        return null;
    };

    this.set = function(key, value) {
        return this.struct.insert(key, value);
    };

    this.unset = function(key) {
        this.struct.remove(key);
    };

    this.contains = function(key) {
        return (this.struct.get(key) !== null);
    };

    this.clear = function() {
        this.struct.clear();
    };

    this.count = function() {
        return this.struct.getLength();
    };    
    
};

module.exports.proxy.classes.QueueProxy = function() {

    module.exports.proxy.classes.DataStructureProxy.call(this);
    
    this.struct = module.exports.scule.getQueue();

    this.push = function(value) {
        this.struct.enqueue(value);
    };

    this.pop = function() {
        return this.struct.dequeue();
    };

    this.peek = function() {
        return this.struct.peek();
    };

    this.clear = function() {
        this.struct.clear();
    };

    this.count = function() {
        return this.struct.getLength();
    };

};

module.exports.proxy.classes.FIFOStackProxy = function() {

    module.exports.proxy.classes.DataStructureProxy.call(this);
    
    this.struct = module.exports.scule.getFIFOStack();

    this.push = function(value) {
        this.struct.push(value);
    };

    this.pop = function() {
        return this.struct.pop();
    };

    this.peek = function() {
        return this.struct.peek();
    };

    this.clear = function() {
        this.struct.clear();
    };

    this.count = function() {
        return this.struct.getLength();
    };

};

module.exports.proxy.classes.LIFOStackProxy = function() {

    module.exports.proxy.classes.DataStructureProxy.call(this);
    
    this.struct = module.exports.scule.getLIFOStack();

    this.push = function(value) {
        this.struct.push(value);
    };

    this.pop = function() {
        return this.struct.pop();
    };

    this.peek = function() {
        return this.struct.peek();
    };

    this.clear = function() {
        this.struct.clear();
    };

    this.count = function() {
        return this.struct.getLength();
    };

};

module.exports.proxy.classes.LinkedListProxy = function() {

    module.exports.proxy.classes.DataStructureProxy.call(this);
    
    this.struct = module.exports.scule.getLinkedList();

    this.contains = function(key) {
        return this.struct.contains(key);
    };

    this.push = function(value) {
        this.struct.add(value);
    };

    this.pop = function() {
        return this.struct.trim();
    };

    this.peek = function() {
        var head = this.struct.getHead();
        if (head === null) {
            return null;
        }
        return head.getElement();
    };

    this.clear = function() {
        this.struct.clear();
    };

    this.count = function() {
        return this.struct.getLength();
    };

};

module.exports.proxy.classes.DoublyLinkedListProxy = function() {

    module.exports.proxy.classes.DataStructureProxy.call(this);
    
    this.struct = module.exports.scule.getDoublyLinkedList();

    this.contains = function(key) {
        return this.struct.contains(key);
    };

    this.push = function(value) {
        this.struct.add(value);
    };

    this.pop = function() {
        return this.struct.trim();
    };

    this.peek = function() {
        var head = this.struct.getHead();
        if (head === null) {
            return null;
        }
        return head.getElement();
    };

    this.clear = function() {
        this.struct.clear();
    };

    this.count = function() {
        return this.struct.getLength();
    };

};

/**
 * Factories a DataStructureProxy instance corresponding to the given class name
 * and using the provided options.
 * 
 * @param {String} className
 * @param {Array} options
 * @return {DataStructureProxy}
 * @throws {Error}
 */
module.exports.factoryProxy = function(className, options) {
    var name = 'get' + className + 'Proxy';
    if (!module.exports.hasOwnProperty(name)) {
        throw new Error('data structure class ' + className + ' does not exist');
    }
    return module.exports[name].apply(null, options);
};

/**
 * Returns an instance of the {LinkedListProxy} class
 * @returns {LinkedListProxy}
 */
module.exports.getLinkedListProxy = function () {
    return new module.exports.proxy.classes.LinkedListProxy();
};

/**
 * Returns an instance of the {DoublyLinkedListProxy} class
 * @returns {DoublyLinkedListProxy}
 */
module.exports.getDoublyLinkedListProxy = function () {
    return new module.exports.proxy.classes.DoublyLinkedListProxy();
};

/**
 * Returns an instance of the {HashTableProxy} class
 * @returns {HashTableProxy}
 */
module.exports.getHashTableProxy = function () {
    return new module.exports.proxy.classes.HashTableProxy();
};

/**
 * Returns an instance of the {HashMapProxy} class
 * @param {Number} size the table size
 * @returns {HashMapProxy}
 */
module.exports.getHashMapProxy = function (size) {
    return new module.exports.proxy.classes.HashMapProxy(size);
};

/**
 * Returns an instance of the {LIFOStackProxy} class
 * @returns {LIFOStackProxy}
 */
module.exports.getLIFOStackProxy = function () {
    return new module.exports.proxy.classes.LIFOStackProxy();
};

/**
 * Returns an instance of the {FIFOStackProxy} class
 * @returns {FIFOStackProxy}
 */
module.exports.getFIFOStackProxy = function () {
    return new module.exports.proxy.classes.FIFOStackProxy();
};

/**
 * Returns an instance of the {QueueProxy} class
 * @returns {QueueProxy}
 */
module.exports.getQueueProxy = function () {
    return new module.exports.proxy.classes.QueueProxy();
};

/**
 * Returns an instance of the {LRUCacheProxy} class
 * @param {Number} threshold
 * @returns {LRUCacheProxy}
 */
module.exports.getLRUCacheProxy = function (threshold) {
    return new module.exports.proxy.classes.LRUCacheProxy(threshold);
};

/**
 * Returns an instance of the {BinarySearchTreeProxy} class
 * @returns {BinarySearchTreeProxy}
 */
module.exports.getBinarySearchTreeProxy = function () {
    return new module.exports.proxy.classes.BinarySearchTreeProxy();
};

/**
 * Returns an instance of the {AtomicCounterProxy} class
 * @param {Integer} initial
 * @returns {AtomicCounterProxy}
 */
module.exports.getAtomicCounterProxy = function(initial) {
    return new module.exports.proxy.classes.AtomicCounterProxy(initial);
};

/**
 * Returns an instance of the {BitSetProxy} class
 * @param {Integer} capacity
 * @returns {BitSetProxy}
 */
module.exports.getBitSetProxy = function(capacity) {
    return new module.exports.proxy.classes.BitSetProxy(capacity);
};

/**
 * Returns an instance of the {BloomFilterProxy} class
 * @param {Integer} capacity
 * @returns {BloomFilterProxy}
 */
module.exports.getBloomFilterProxy = function(capacity) {
    return new module.exports.proxy.classes.BloomFilterProxy(capacity);
};

/**
 * Returns an instance of the {CollectionProxy} class
 * @param {String} name
 * @returns {CollectionProxy}
 */
module.exports.getCollectionProxy = function(name) {
    return new module.exports.proxy.classes.CollectionProxy(name);
};

/**
 * Sets the SculeJS module instance for the server
 * @param {Object} scule
 * @returns {Void}
 */
module.exports.setScule = function(scule) {
    module.exports.scule = scule;
};
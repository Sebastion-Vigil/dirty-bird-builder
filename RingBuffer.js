

class RingBuffer {
    constructor(max) {
        this.max = max;
        this.storage = new Array(max);
        this.pointer = 1;
    }
    insert(val) {
       this.storage[this.pointer - 1] = val;
       this.pointer += 1;
       if (this.pointer > this.max) {
           this.pointer = 1;
       }
    }
    listContents() {
        for (let i = 0; i < this.storage.length; i++) {
            console.log(this.storage[i])
        }
    }
}


const ringy = new RingBuffer(3);

ringy.insert('a');
ringy.insert('b');
ringy.insert('c');

ringy.listContents();

ringy.insert('d');
ringy.insert('e');
ringy.insert('f');

ringy.listContents();
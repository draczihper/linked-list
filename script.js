function linkedList() {

    return {
        head: null,
        tail: null,
        size: 0,

        append(value) {
            const newNode = node(value);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.size++;
        },

        prepend(value) {
            const newNode = node(value);
            newNode.next = this.head;
            this.head = newNode;
            if (!this.tail) {
                this.tail = newNode;
            }
            this.size++;
        },

        getSize() {
            return this.size;
        },

        getHead() {
            return this.head;
        },

        getTail(){
            return this.tail;
        },

        at(index) {
            if (index < 0 || index >= this.size) return null;
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current;
        },

        pop() {
            if (!this.head) return null;
            if (this.head === this.tail){
                const poppedValue = this.head.value;
                this.head = null;
                this.tail = null;
                this.size--;
                return poppedValue;
            }
            let current = this.head;
            while(current.next.next !== null) {
                current = current.next;
            }
            const poppedValue = current.next.value;
            current.next = null;
            this.tail = current;
            this.size--;
            return poppedValue;
        },

        contains(value) {
            let current = this.head;
            while(current !== null) {
                if (current.value == value) {
                    return true;
                }
                current = current.next;
            }
            return false;
        },

        find(value) {
            let current = this.head;
            while (current !== null) {
                if (current.value === value) {
                    return current;
                }
                current = current.next;
            }
            return null;
        },
        
        toString() {
            let str = "";
            let current = this.head;
            while(current !== null) {
                str += `${current.value} -> `;
                current = current.next;
            }
            return str.slice(0, -3);
        },

        insertAt(value, index) {
            if (index < 0 || index >= this.size) {
                throw new Error("Invalid index!")
            }

            if (index === 0) {
                return this.prepend(value);
            } else if (index === this.size) {
                this.append(value);
            } else {
                const newNode = node(value);
                let current = this.head;
                for(let i = 0; i < index - 1; i++) {
                    current = current.next;
                }
                newNode.next = current.next;
                current.next = newNode;
                this.size++;
            }
        },

        removeHead() {
            if (!this.head) return null

            const removedHead = this.head;
            this.head = this.head.next;
            if(!this.head) {
                this.tail = null;
            }
            this.size--;
            return removedHead.value;
        },

        removeTail() {
            if (!this.tail) return null;

            const removedTail = this.tail;
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                let current = this.head 
                whitle (current.next !== this.tail) {
                    current = current.next;
                }
                current.next = null;
                this.tail = current;
            }
            this.size--;

            return removedTail.value;
        },
         
        removeAt(index) {
            if (index < 0 || index >= this.size) {
                throw new Error("Invalid index!")
            }

            if (index == 0) {
                return this.removeHead;
            } else if (index === this.size) {
                return this.removeTail;
            } else {
                let current = this.head;
                for (let i = 0; i < index - 1; i++) {
                    current = current.next;
                }
                const removedNode = current.next;
                current.next = removedNode.next;
                this.size--;
                return removedNode.value;
            }
        },
    };
}

function node(value) {

    return {
        value,
        next: null,
    }
}


module.exports = linkedList;


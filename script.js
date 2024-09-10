function linkedList() {

    return {
        head: null,
        tail: null,
        size: 0,


        append(val) {
            const newNode = node(val);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.size++;
        },

        prepend(val) {
            const newNode = node(val);
            newNode.next = this.head;
            this.head = newNode;
            if (!this.tail) {
                this.tail = newNode;
            }
            this.size++;
        },

        size() {
            return this.size;
        },

        head() {
            return this.head;
        },

        tail(){
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
                str += `${current.value} ->`;
                current = current.next;
            }
            return str.slice(0, -3);
        },

    };
}

function node(val) {

    return {
        value: val,
        nextNode: null,
    }
}


module.exports = linkedList;


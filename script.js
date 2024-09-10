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
    };
}

function node(val) {

    return {
        value: val,
        nextNode: null,
    }
}


module.exports = linkedList;


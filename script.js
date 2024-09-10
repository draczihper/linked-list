function linkedList() {
    const node = nodeFunc();

    return {
        append: function(val) {
            if (node.nextNode == null) {
               return node.value = node(val, next);
            }
        },

        prepend: function(val) {
            return node.value = node(val, linkedList)
        },

        size: function(node) {
            let countSize = 0
            while(node.nextNode != null) {
                countSize++;
            }
            return countSize;
        },

        head: function(node) {
            return node.value;
        },

        tail: function() {
            if (node.nextNode == null) {
                return node.value;
            }
        },
    };
}

function nodeFunc(val = null, next = null) {

    return {
        value: val,
        nextNode: next,
    }
}
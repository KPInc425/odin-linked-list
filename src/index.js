const LinkedList = () => {
    let listData = {
        head: null,
    }

    
    const append = (value) => {
        // Create new node
        let newNode = createNode(value);
        // if list empty append to beginning
        if (listData.head === null) {
            listData.head = newNode;
        } else {
            // Point to current head
            let currentNode = listData.head;
            // While nextNode exists
            while (currentNode.nextNode) {
                // traverse to nextNode
                currentNode = currentNode.nextNode;
            }
            // Point to newNode from tailNode
            currentNode.nextNode = newNode;
        }
        return listData;
    }

    const prepend = (value) => {
        // Create New node with input value
        let newNode = createNode(value);
        // Null check
        if (listData.head === null) {
            listData.head = newNode;
        } else {
            // tmp variable to hold current head node
            let tmp = listData.head;
            // point head node at newNode
            listData.head = newNode;
            // Point new Head nextNode to old head node
            listData.head.nextNode = tmp;
        }

        return listData;
    }

    const size = () => {
        let count = 1; 
        let currentNode = listData.head
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
            count++;
        }

        return count;
    }

    const head = () => {
        return listData.head;
    }

    const tail = () => {
        let currentNode = listData.head; 
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    const getListData = () => {
        return listData;
    }

    const at = (index) => {
        // Point to headNode
        let currentNode = listData.head;

        for (let i = 1; i < index; i++) {
            // Traverse to nextNode
            currentNode = currentNode.nextNode;
            if (currentNode === null) {
                console.log("That index is out of range!");
                return null;
            }
        }

        return currentNode;
    }


    const pop = () => {
        let currentNode = listData.head;
        let prevNode = null;
        while (currentNode.nextNode) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        prevNode.nextNode = null;

        return listData;
    }

    const contains = (value) => {
        let currentNode = listData.head;
        if (currentNode === null) {
            return false;
        }
        if (currentNode.value === value) {
            return true;
        }
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
            if (currentNode.value === value) {
                return true;
            }
        }
        return false;

    }

    const find = (value) => {
        let currentNode = listData.head;
        let count = 1;
        if (currentNode === null) {
            return null;
        }
        if (currentNode.value === value) {
            return count;
        }
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
            count++;
            if (currentNode.value === value) {
                return count;
            }

        }
        return null;
    }

    const toString = () => {
        let currentNode = listData.head;
        if (currentNode === null) {
            return null;
        }
        let nodeString = `(${currentNode.value})`;

        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
            nodeString += ` -> (${currentNode.value})`;
        }

        nodeString += ` -> null`;

        return nodeString;
        
    }

    const insertAt = (value, index) => {
        // Create newNode
        let newNode = createNode(value);
        // Point preNode at index - 1
        let preNode = at(index - 1);
        // Point tmp variable to node currently at index
        let tmp = preNode.nextNode;
        // Point newNode to node previously at index 
        newNode.nextNode = tmp;
        // Point preNode to newNode
        preNode.nextNode = newNode;

        return listData;
    }

    const removeAt = (index) => {

        // Point to node at index
        let indexNode = at(index);
        // Check if node at index location found
        if (!indexNode) {
            return null;
        }
        // Point to node before index node
        let preNode = at(index - 1); 
        // Point to node after index node
        let postNode = indexNode.nextNode;

        // Point preNode to postNode
        preNode.nextNode = postNode;    

        return listData;
    }

    return {
        getListData,
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    }
}


const createNode = (value, nextNode) => {
    return {
        value: value,
        nextNode: nextNode || null,
    }
}










//Complete the following functions
//Displays all body nodes
const bodyNodes = () => {
    const body = document.body;
    const nodes = [];

    const traverse = (node) => {
        nodes.push(node);
        if (node.childNodes.length) {
            for (let i = 0; i < node.childNodes.length; i++) {
                traverse(node.childNodes[i]);
            }
        }
    }

    traverse(body);

    console.log(nodes);
}

bodyNodes();
function convertToKey(node) {
    let attrArray = Array.prototype.slice.call(node.attributes);
    let valueToReturn = node.nodeName.toLowerCase().toString();
    valueToReturn += attrArray.reduce((acc, curr) => acc += ("::" + curr.name + "='" + curr.value + "'"), '');
    return valueToReturn;
}
function convertToKey(node) {
    let attrArray = Array.prototype.slice.call(node.attributes);
    let valueToReturn = node.nodeName.toLowerCase().toString();
    valueToReturn += attrArray.reduce((acc, curr) => acc += ("::" + curr.name + "='" + curr.value + "'"), '');
    return valueToReturn;
}
function str2DOMElement(html) {
    var frame = document.createElement('iframe');
    frame.style.display = 'none';
    document.body.appendChild(frame);
    frame.contentDocument.open();
    frame.contentDocument.write(html);
    frame.contentDocument.close();
    var el = frame.contentDocument.body.firstChild;
    document.body.removeChild(frame);
    return el;
}

function convert() {
    var inp = document.getElementById('in').value;
    let res = convertToKey(str2DOMElement(inp));
    var out = document.getElementById('out');
    out.value = res;
}

function copy() {
    var out = document.getElementById('out');
    copyToClipboard(out);
}

function clearSelection() {
    if (window.getSelection) { window.getSelection().removeAllRanges(); }
    else if (document.selection) { document.selection.empty(); }
}

function copyToClipboard(ctrl) {
    ctrl.select();
    document.execCommand("copy");
    clearSelection();
}

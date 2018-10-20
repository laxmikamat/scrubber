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
    inp = "<div>" + inp + "</div>";
    let res = replace(str2DOMElement(inp), config, diff, common);
    var out = document.getElementById('out');
    let outS = res.outerHTML.toString();
    out.value = outS.substring(5, outS.length - 6);
}

function copy() {
    var out = document.getElementById('out');
    copyToClipboard(out);
}

function convertToKey(node) {
    let attrArray = Array.prototype.slice.call(node.attributes);
    let valueToReturn = node.nodeName.toLowerCase().toString();
    valueToReturn += attrArray.reduce((acc, curr) => acc += ('::' + curr.name + '="' + curr.value + '"'), '');
    return valueToReturn;
}

function key_convert() {
    var inp = document.getElementById('key_in').value;
    let res = convertToKey(str2DOMElement(inp));
    var out = document.getElementById('key_out');
    out.value = res;
}

function key_copy() {
    var out = document.getElementById('key_out');
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

function showDiv(toShowId) {
    if(!!converterDiv)
    converterDiv = document.getElementById('converterDiv');

    if(!!keyDiv)
    keyDiv = document.getElementById('keyDiv');

    if(!!converterDivShowButton)
    converterDivShowButton = document.getElementById('converterDivShowButton');

    if(!!keyDivShowButton)
    keyDivShowButton = document.getElementById('keyDivShowButton');

    converterDiv.style.display = "none";
    keyDiv.style.display = "none";

    converterDivShowButton.classList.remove('active');
    keyDiv.classList.remove('active');

    if (toShowId === 'converterDiv') {
        converterDiv.style.display = 'flex';
        converterDivShowButton.classList.add('active');
    } else if (toShowId === 'keyDiv') {
        keyDiv.style.display = 'flex';
        keyDivShowButton.classList.add('active');
    }
}

function elementsShareFamily(primaryEl, siblingEl) {
    if (primaryEl.tagName === siblingEl.tagName &&
        (!primaryEl.className || primaryEl.className === siblingEl.className) &&
        (!primaryEl.id || primaryEl.id === siblingEl.id)) {
        return true;
    }
    return false;
}

function getElementIndex(el) {
    var className = el.className;
    var id = el.id;

    var index = 1; // XPath is one-indexed
    var sib;
    for (sib = el.previousSibling; sib; sib = sib.previousSibling) {
        if (sib.nodeType === Node.ELEMENT_NODE && elementsShareFamily(el, sib)) {
            index++;
        }
    }
    if (index > 1) {
        return index;
    }
    for (sib = el.nextSibling; sib; sib = sib.nextSibling) {
        if (sib.nodeType === Node.ELEMENT_NODE && elementsShareFamily(el, sib)) {
            return 1;
        }
    }
    return 0;
}
function xPathFor(el) {
    var query = '';
    for (; el && el.nodeType === Node.ELEMENT_NODE; el = el.parentNode) {
        var component = el.tagName.toLowerCase();
        var index = getElementIndex(el);
        if (el.id) {
            component += '[@id=\'' + el.id + '\']';
        } else if (el.className) {
            component += '[@class=\'' + el.className + '\']';
        }
        if (index >= 1) {
            component += '[' + index + ']';
        }
        // If the last tag is an img, the user probably wants img/@src.
        if (query === '' && el.tagName.toLowerCase() === 'img') {
            component += '/@src';
        }
        query = '/' + component + query;
    }
    return query;
};
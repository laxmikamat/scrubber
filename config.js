var config = {
    'table': {
      upgradeBootstrap: false,
      buildChildren: false,
      keepAttributes: ['click'],
      keepAttributesWithValue: ['class'],
      func: function (node) {
        let ths = node.getElementsByTagName('th');
        let out = '<df-grid>';
        for (var i = 0; i < ths.length; i++) {
          out += '<df-grid-column field="" header="Header"></df-grid-column>'.replace('Header', ths[i].innerText);
        }
        out += '</df-grid>';
        return htmlToElement(out);
      },
    },
    'input': {
      upgradeBootstrap: true,
      buildChildren: false,
      keepAttributes: [],
      keepAttributesWithValue: [],
      func: function (node) {
        return htmlToElement('<df-input-container><input type="' + node.type + '"' + 'value="' + node.value +'"></df-input-container>');
      },
    },
    'button': {
      component: 'df-button',
      upgradeBootstrap: false,
      buildChildren: false,
      keepAttributes: [],
      keepAttributesWithValue: [],
    },
    'select': {
      component: 'df-select',
      upgradeBootstrap: false,
      buildChildren: true,
      keepAttributes: [],
      keepAttributesWithValue: [],
    },
    'option': {
      component: 'df-option',
      upgradeBootstrap: false,
      buildChildren: false,
      keepAttributes: [],
      keepAttributesWithValue: [],
    }
  }
  
  
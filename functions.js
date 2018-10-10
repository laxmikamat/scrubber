let diff = {

  '@media (min-width: $screen-xs-min) and (max-width: $screen-sm-max)': '@media (min-width: map-get($grid-breakpoints, xs)) and (max-width: map-get($grid-breakpoints, xs))',
  '@media (min-width: $screen-xs) and (max-width: ($screen-md-min - 1))': '@media (min-width: map-get($grid-breakpoints, xs)) and (max-width: map-get($grid-breakpoints, md)-1)',
  '@media (min-width: $screen-sm-min) and (max-width: $screen-sm-max)': '@include media-breakpoint-only(sm)',

  '@media (min-width: $screen-xs-min)': '@include media-breakpoint-up(xs)',
  '@media (min-width: $screen-sm)': '@include media-breakpoint-up(sm)',
  '@media (min-width: $screen-sm-min)': '@include media-breakpoint-up(sm)',
  '@media (min-width: $screen-md-min)': '@include media-breakpoint-up(md)',
  '@media (min-width: $screen-md)': '@include media-breakpoint-up(md)',
  '@media (min-width: $screen-md-max)': '@include media-breakpoint-up(md)',
  '@media (min-width: $screen-lg-min)': '@include media-breakpoint-up(lg)',

  '@media (max-width: ($screen-xs-min - 1))': '@include media-breakpoint-down(xs)',
  '@media (max-width: $screen-xs-max)': '@include media-breakpoint-down(xs)',
  '@media (max-width: ($screen-sm-min - 1))': '@include media-breakpoint-down(sm)',
  '@media (max-width: $screen-sm)': '@include media-breakpoint-down(sm)',
  '@media (max-width: $screen-sm-min)': '@include media-breakpoint-down(sm)',
  '@media (max-width: $screen-sm-max)': '@include media-breakpoint-down(sm)',
  '@media (max-width: $screen-md-max)': '@include media-breakpoint-down(md)',
  '@media (max-width: $screen-lg-max)': '@include media-breakpoint-down(lg)',

  '@media (max-width: $screen-xs-min - 1)': '@include media-breakpoint-down(xs)',
  '@media (max-width: $screen-md-min)': '@include media-breakpoint-down(md)',

  // bootstrap 2
  '@media (max-width: $screen-xxs)': '@include media-breakpoint-down(xs)',

  'col-*-offset-*': 'offset-*',
  'col-*-push-*': 'order-*-2',
  'col-*-pull-*': 'order-*-1',

  'panel': 'card',
  'panel-heading': 'card-header',
  'panel-title': 'card-title',
  'panel-body': 'card-body',
  'panel-footer': 'card-footer',
  'panel-primary': 'card.bg-primary.text-white',
  'panel-success': 'card.bg-success.text-white',
  'panel-info': 'card.text-white.bg-info',
  'panel-warning': 'card.bg-warning',
  'panel-danger': 'card.bg-danger.text-white',
  'well': 'card.card-body',
  'thumbnail': 'card.card-body',
  'list-inline > li': 'list-inline-item',
  'dropdown-menu > li': 'dropdown-item',
  'nav navbar > li': 'nav-item',
  'nav navbar > li > a': 'nav-link',
  'navbar-right': 'ml-auto',
  'navbar-btn': 'nav-item',
  'navbar-fixed-top': 'fixed-top',
  'nav-stacked': 'flex-column',
  'btn-default': 'btn-secondary',
  'img-responsive': 'img-fluid',
  'img-circle': 'rounded-circle',
  'img-rounded': 'rounded',
  //'.form-horizontal':         '', // @note: removed
  'radio': 'form-check',
  'checkbox': 'form-check',
  'input-lg': 'form-control-lg',
  'input-sm': 'form-control-sm',
  'control-label': 'form-control-label',
  'table-condensed': 'table-sm',
  'pagination > li': 'page-item',
  'pagination > li > a': 'page-link',
  //'.item':                     '.carousel-item', // @note: this is too much basic word
  'text-help': 'form-control-feedback',
  'pull-right': 'float-right',
  'pull-left': 'float-left',
  'center-block': 'mx-auto',
  'hidden-xs': 'd-none',
  'hidden-sm': 'd-sm-none',
  'hidden-md': 'd-md-none',
  'visible-xs': 'd-block.d-sm-none',
  'visible-sm': 'd-block.d-md-none',
  'visible-md': 'd-block.d-lg-none',
  'visible-lg': 'd-block.d-xl-none',
  'label': 'badge',
  'badge': 'badge.badge-pill',
  // twig
  'col-xs-': 'col-',
  'col-md-': 'col-lg-',
  'col-sm-': 'col-md-',
};
let common = ["form-group", "active", "alert-danger", "alert-dismissible", "close", "alert-info", "alert-link", "alert-success", "alert-warning", "badge", "bg-danger", "bg-info", "bg-primary", "bg-success", "bg-warning", "breadcrumb", "btn", "btn-block", "btn-danger", "btn-group", "btn-group-lg", "btn-group-sm", "btn-group-vertical", "btn-info", "btn-link", "btn-lg", "btn-primary", "btn-sm", "btn-success", "btn-warning", "carousel", "carousel-caption", "carousel-indicators", "carousel-inner", "clearfix", "collapse", "container", "container-fluid", "disabled", "dropdown", "dropdown-header", "dropdown-menu", "dropdown-menu-right", "dropdown-toggle", "dropup", "embed-responsive", "embed-responsive-16by9", "embed-responsive-4by3", "embed-responsive-item", "fade", "form-control", "form-group", "form-inline", "h1 - .h6", "img-thumbnail", "initialism", "input-group", "input-group-lg", "input-group-sm", "input-lg", "input-sm", "invisible", "jumbotron", "lead", "list-group", "list-group-item", "list-group-item-danger", "list-group-item-info", "list-group-item-success", "list-group-item-warning", "list-inline", "list-unstyled", "mark", "media", "media-body", "modal", "modal-body", "modal-content", "modal-footer", "modal-header", "modal-lg", "modal-sm", "nav nav-tabs", "nav nav-pills", "nav-justified", "navbar", "navbar-brand", "navbar-collapse", "navbar-nav", "navbar-text", "pagination", "pagination-lg", "pagination-sm", "pre-scrollable", "progress", "progress-bar", "progress-bar-striped", "row", "small", "sr-only", "sr-only-focusable", "tab-content", "tab-pane", "table", "table-bordered", "table-condensed", "table-hover", "text-capitalize", "text-center", "text-danger", "text-hide", "text-info", "text-justify", "text-left", "text-lowercase", "text-muted", "text-nowrap", "text-primary", "text-right", "text-success", "text-uppercase", "text-warning"];
function attributesUtility(originalNode, node, config) {
  let attrs = originalNode.attributes;
  let newNode = node.cloneNode(true);
  if (attrs && attrs.length) {
    for (var i = 0; i < attrs.length; i++) {
      if (attrs[i].name != 'class') {
        newNode.removeAttribute(attrs[i].name);
        if (config) {
          if (config.keepAttributesWithValue && config.keepAttributesWithValue.indexOf(attrs[i].name) !== -1) {
            newNode.setAttribute(attrs[i].name, attrs[i].value);
          } else if (config.keepAttributes && config.keepAttributes.indexOf(attrs[i].name) !== -1) {
            newNode.setAttribute(attrs[i].name, '');
          }
        }
      }
    }
  }
  return newNode;
}
function bootstrapUtility(node, config, common) {
  let cll = node.classList;
  if (!cll) {
    return node;
  }
  let newNode = node.cloneNode(true);
  for (i = 0; i < cll.length; i++) {
    let cl = cll[i];
    if (common && common.indexOf(cl) > -1) {
    } else if (config && config[cl]) {
      newNode.classList.remove(cl);
      newNode.classList.add(config[cl]);
    } else if (cl.toString().includes('col-')) {
      if (cl.toString().includes('-offset-')) {
        newNode.classList.remove(cl);
        cl = cl.toString()
          .split('offset')[1];
        cl = 'offset' + cl;
        newNode.classList.add(cl);
      } else if (cl.toString().includes('-push-')) {
        newNode.classList.remove(cl);
        cl = cl.toString()
          .split('push')[1];
        cl = 'order' + cl + '-2';
        newNode.classList.add(cl);
      } else if (cl.toString().includes('-pull-')) {
        newNode.classList.remove(cl);
        cl = cl.toString()
          .split('pull')[1];
        cl = 'order' + cl + '-1';
        newNode.classList.add(cl);
      } else {
        newNode.classList.remove(cl);
        cl = cl.toString()
          .replace('col-xs-', 'col-')
          .replace('col-md-', 'col-lg-')
          .replace('col-sm-', 'col-md-')
        newNode.classList.add(cl);
      }
    } else {
      newNode.classList.remove(cl);
    }
  }
  return newNode;
}
function buildChildNodes(node, newNode, elementMap, bootstrapMap, commonBootstrapClasses) {
  let _newNode = newNode.cloneNode(false);
  if (node.hasChildNodes()) {
    var children = node.childNodes;
    let _childNode = '';
    for (var i = 0; i < children.length; i++) {
      _childNode = replace(children[i], elementMap, bootstrapMap, commonBootstrapClasses);
      _newNode.appendChild(_childNode);
    }
  }
  return _newNode;
}
function replace(node, elementMap, bootstrapMap, commonBootstrapClasses) {
  if (!node || node.nodeType === Node.COMMENT_NODE)
    return document.createTextNode('');
  if (elementMap[node.nodeName.toLowerCase()]) {
    let newNode = '';
    if (elementMap[node.nodeName.toLowerCase()].func) {
      newNode = elementMap[node.nodeName.toLowerCase()].func(node);
    } else {
      newNode = document.createElement(elementMap[node.nodeName.toLowerCase()].component);
      newNode = attributesUtility(node, newNode, elementMap[node.nodeName.toLowerCase()]);
    }
    if (elementMap[node.nodeName.toLowerCase()].upgradeBootstrap) {
      newNode = bootstrapUtility(newNode, bootstrapMap, commonBootstrapClasses);
    }
    if (elementMap[node.nodeName.toLowerCase()].buildChildren) {
      newNode = buildChildNodes(node, newNode, elementMap, bootstrapMap, commonBootstrapClasses);
    }
    return newNode;
  } else if (node.nodeName.toLowerCase().includes("app")) {
    return document.createComment("// TODO " + node.nodeName.toLowerCase());
  } else {
    let newNode = node.cloneNode(false);
    newNode = attributesUtility(node, bootstrapUtility(newNode, bootstrapMap, commonBootstrapClasses), undefined);
    newNode = buildChildNodes(node, newNode, elementMap, bootstrapMap, commonBootstrapClasses);
    return newNode;
  }
}
function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}
let config = {
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
      return htmlToElement('<df-input-container><input type="' + node.type + '"></df-input-container>');
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


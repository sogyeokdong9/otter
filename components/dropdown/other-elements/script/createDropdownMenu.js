'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-dropdown-trigger');
  const items = [
    {
      "id":"1",
      "name":"Dasboard",
      "dataTheme":"light",
      "menu":[
        {
          "id":"dropdown-menu-ul-li-tmp-key-0-0",
          "name":"Repositories",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-0-1",
          "name":"Following",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-0-2",
          "name":"For you (disabled)",
          "url":"https://www.google.com/"
        }
      ]
    }
  ]
  const prefixTooltipId = 'dropdown-menu-ul-li-tmp-key';
  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    getDataDropdownTheme(i);
    for (let j = 0; j < items[i].menu.length; j++) {
      const element = items[i].menu[j];
      items[i].menu[j].id = `${prefixTooltipId}-${i}-${j}`;
      if (j === items[i].menu.length - 1) { createDrpdnMn(i, j); }
    }
  }
  function getDataDropdownTheme(idx) {
    'use strict';
    const element = trgElmn[idx];
    if ( Boolean(element.dataset.dropdownTheme) ) {
      items[idx].dataTheme = element.getAttribute('data-dropdown-theme');
    } else {
      element.setAttribute('data-dropdown-theme', items[idx].dataTheme);
    }
  }
  function createDrpdnMn(order,count) {
    'use strict';
    const makeHtmlElement = function (tagName, ...attr) {
      const element = document.createElement(tagName);
      for (let prop of attr) {
        const [key, value] = Object.entries(prop)[0];
        if (key == 'textContent' || key == 'innerText') {
          element.textContent = value;
        } else {
          element.setAttribute(key, value);
        }
      }
      return element;
    };
    const container = makeHtmlElement(
      'div', 
      { style: 'position: absolute; top: 0; left: 0; width: 100%;' }
    );
    const wrapper = makeHtmlElement(
      'div', 
      { class: `otter-dropdown otter-dropdown-show-arrow-${items[order].dataTheme} otter-dropdown-visible` },
      { style: 'min-width: auto; left: -136px; top: -188px;' }
    );
    wrapper.setAttribute('data-index-number', items[order].id);
    createArrow();
    const itemContainer = makeHtmlElement(
      'ul', 
      { class: `otter-dropdown-menu otter-dropdown-menu-root otter-dropdown-menu-vertical otter-dropdown-menu-${items[order].dataTheme}` },
      { role: 'menu' },
      { tabIndex: 0 }
    );
    itemContainer.setAttribute('data-menu-list', true);
    const groupOfItmes = [ 
      { 
        id: 1, 
        class: 'otter-dropdown-menu-item',
        role: 'menuitem',
        tabIndex: -1,
      },
      { 
        id: 2, 
        class: 'otter-dropdown-menu-item otter-dropdown-menu-item-danger',
        role: 'menuitem',
        tabIndex: -1,
      },
      { 
        id: 3, 
        class: 'otter-dropdown-menu-item otter-dropdown-menu-item-disabled',
        role: 'menuitem',
        tabIndex: -1,
      },
    ]
    const [item1, item2, item3] = groupOfItmes.map((item) =>
      makeHtmlElement(
        'li', { class: item.class }, { role: item.role }, { tabIndex: item.tabIndex } // { dataMenuId: item.dataMenuId }
      )
    );
    item1.setAttribute('data-menu-id', items[order].menu[0].id);
    item2.setAttribute('data-menu-id', items[order].menu[1].id);
    item3.setAttribute('data-menu-id', items[order].menu[2].id);
    const devider = makeHtmlElement(
      'li', 
      { class: 'otter-dropdown-menu-item-divider' },
    );
    const groupOfSpans = [null, null, null];
    const [span1, span2, span3] = groupOfSpans.map((item) =>
      makeHtmlElement(
        'span', { class: 'otter-dropdown-menu-title-content' }
      )
    );
    const groopOfAs = [ 
      { 
        id: 1, 
        href: items[order].menu[0].url,
        target: '_blank',
        rel: 'noopener noreferrer',
        textContent : items[order].menu[0].name
      },
      { 
        id: 2, 
        href: items[order].menu[1].url,
        target: '_blank',
        rel: 'noopener noreferrer',
        textContent : items[order].menu[1].name
      },
      { 
        id: 3, 
        href: items[order].menu[2].url,
        target: '_blank',
        rel: 'noopener noreferrer',
        textContent : items[order].menu[2].name
      }
    ]
    const [a1, a2, a3] = groopOfAs.map((item) =>
      makeHtmlElement(
        'a', { href: item.href }, { target: item.target }, { rel: item.rel }, { textContent: item.textContent }
      )
    );
    span1.append(a1);
    span2.append(a2);
    span3.append(a3);
    item1.append(span1);
    item2.append(span2);
    item3.append(span3);
    itemContainer.append(item1);
    itemContainer.append(item2);
    itemContainer.append(devider);
    itemContainer.append(item3);
    wrapper.append(itemContainer);
    container.append(wrapper);
    createArrow();
    function createArrow() {
      'use strict';
      createHtmlElement('div', 'otter-dropdown-arrow-light', 'otter-dropdown-show-arrow-light', 'otter-dropdown-show-arrow');
      createHtmlElement('div', 'otter-dropdown-arrow-black', 'otter-dropdown-show-arrow-black');
      createHtmlElement('div', 'otter-dropdown-arrow-silver', 'otter-dropdown-show-arrow-silver');
      createHtmlElement('div', 'otter-dropdown-arrow-gray', 'otter-dropdown-show-arrow-gray');
      createHtmlElement('div', 'otter-dropdown-arrow-white', 'otter-dropdown-show-arrow-white');
      createHtmlElement('div', 'otter-dropdown-arrow-maroon', 'otter-dropdown-show-arrow-maroon');
      createHtmlElement('div', 'otter-dropdown-arrow-red', 'otter-dropdown-show-arrow-red');
      createHtmlElement('div', 'otter-dropdown-arrow-purple', 'otter-dropdown-show-arrow-purple');
      createHtmlElement('div', 'otter-dropdown-arrow-fuchsia', 'otter-dropdown-show-arrow-fuchsia');
      createHtmlElement('div', 'otter-dropdown-arrow-green', 'otter-dropdown-show-arrow-green');
      createHtmlElement('div', 'otter-dropdown-arrow-lime', 'otter-dropdown-show-arrow-lime');
      createHtmlElement('div', 'otter-dropdown-arrow-olive', 'otter-dropdown-show-arrow-olive');
      createHtmlElement('div', 'otter-dropdown-arrow-yellow', 'otter-dropdown-show-arrow-yellow');
      function createHtmlElement(element, class1, param1, param2) {
        'use strict';
        if (wrapper.classList.contains(param1) || wrapper.classList.contains(param2)) {
          const arrowDiv = document.createElement(element);
          arrowDiv.classList.add(class1);
          wrapper.append(arrowDiv);
        }
      }
    }
    document.querySelector('body').append(container);
  }
  // createDrpdnMn(0, 3);
})();

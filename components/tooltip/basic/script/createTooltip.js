'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-tooltip-trigger');
  const items = [
    {
      "id":"1",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-0",
          "name":"tooltip1"
        }
      ]
    },
    {
      "id":"2",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-1",
          "name":"tooltip2"
        }
      ]
    },
    {
      "id":"3",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-2",
          "name":"tooltip3"
        }
      ]
    },
    {
      "id":"4",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-3",
          "name":"tooltip4"
        }
      ]
    }
  ]
  const prefixTooltipId = 'tooltip-tmp-key-';
  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    items[i].tooltip[0].id = prefixTooltipId + [i];
    items[i].tooltip[0].name = element.firstElementChild.attributes[0].value;
    createTooltip(i);
  }
  function createTooltip(order) {
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
      { style: 'position: absolute; top: 0px; left: 0px; width: 100%;' }
    );
    const wrapper = makeHtmlElement(
      'div', 
      { class: 'otter-tooltip otter-tooltip-show-arrow-black otter-tooltip-visible' },
      { style: 'min-width: auto; left: -136px; top: -188px; pointer-events: none;' },
      { role: 'tooltip' }
    );
    wrapper.setAttribute('data-index-number', items[order].id);
    createArrow();
    const itemContainer = makeHtmlElement(
      'div', 
      { class: 'otter-tooltip-content otter-tooltip-root otter-tooltip-black' },
    );
    itemContainer.setAttribute('data-item-id', items[order].tooltip[0].id);
    itemContainer.setAttribute('data-tooltip', true);
    const item = makeHtmlElement(
      'div', 
      { class: 'otter-tooltip-item otter-tooltip-title-content' },
      { textContent: items[order].tooltip[0].name }
    );
    itemContainer.append(item);
    wrapper.append(itemContainer);
    container.append(wrapper);
    createArrow();
    function createArrow() {
      'use strict';
      createHtmlElement('div', 'otter-tooltip-arrow-light', 'otter-tooltip-show-arrow-light', 'otter-tooltip-show-arrow');
      createHtmlElement('div', 'otter-tooltip-arrow-black', 'otter-tooltip-show-arrow-black');
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
})();

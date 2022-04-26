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
          "dataTheme":"black",
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
          "dataTheme":"sliver",
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
          "dataTheme":"gray",
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
          "dataTheme":"white",
          "name":"tooltip4"
        }
      ]
    },
    {
      "id":"5",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-4",
          "dataTheme":"maroon",
          "name":"tooltip5"
        }
      ]
    },
    {
      "id":"6",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-5",
          "dataTheme":"red",
          "name":"tooltip6"
        }
      ]
    },
    {
      "id":"7",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-6",
          "dataTheme":"purple",
          "name":"tooltip7"
        }
      ]
    },
    {
      "id":"8",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-7",
          "dataTheme":"fuchsia",
          "name":"tooltip8"
        }
      ]
    },
    {
      "id":"9",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-8",
          "dataTheme":"green",
          "name":"tooltip9"
        }
      ]
    },
    {
      "id":"10",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-9",
          "dataTheme":"lime",
          "name":"tooltip10"
        }
      ]
    },
    {
      "id":"11",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-10",
          "dataTheme":"olive",
          "name":"tooltip11"
        }
      ]
    },
    {
      "id":"12",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-11",
          "dataTheme":"yellow",
          "name":"tooltip12"
        }
      ]
    }
  ]
  const prefixTooltipId = 'tooltip-tmp-key-';
  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    items[i].tooltip[0].id = prefixTooltipId + [i];
    items[i].tooltip[0].dataTheme = element.getAttribute('data-tooltip-theme');
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
      { style: 'position: absolute; top: 0; left: 0; width: 100%;' }
    );
    const wrapper = makeHtmlElement(
      'div', 
      { class: `otter-tooltip otter-tooltip-show-arrow-${items[order].tooltip[0].dataTheme} otter-tooltip-visible` },
      { style: 'min-width: auto; left: -136px; top: -188px; pointer-events: none;' },
      { role: 'tooltip' }
    );
    wrapper.setAttribute('data-index-number', items[order].id);
    createArrow();
    const itemContainer = makeHtmlElement(
      'div', 
      { class: `otter-tooltip-content otter-tooltip-root otter-tooltip-${items[order].tooltip[0].dataTheme}` },
    );
    itemContainer.setAttribute('data-item-id', items[order].tooltip[0].id);
    itemContainer.setAttribute('data-tooltip-theme', items[order].tooltip[0].dataTheme);
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
      for (let i = 0; i < items.length; i++) {
        const element = items[i];
        createHtmlElement('div', `otter-tooltip-arrow-${items[i].tooltip[0].dataTheme}`, `otter-tooltip-show-arrow-${items[i].tooltip[0].dataTheme}`);
      }
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

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
          "dataColor":"black",
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
          "dataTheme":"black",
          "dataColor":"black",
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
          "dataTheme":"black",
          "dataColor":"black",
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
          "dataTheme":"black",
          "dataColor":"black",
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
          "dataTheme":"black",
          "dataColor":"black",
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
          "dataTheme":"black",
          "dataColor":"black",
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
          "dataTheme":"black",
          "dataColor":"black",
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
          "dataTheme":"black",
          "dataColor":"black",
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
          "dataTheme":"black",
          "dataColor":"black",
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
          "dataTheme":"black",
          "dataColor":"black",
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
          "dataTheme":"black",
          "dataColor":"black",
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
          "dataTheme":"black",
          "dataColor":"black",
          "name":"tooltip12"
        }
      ]
    },
    {
      "id":"13",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-12",
          "dataTheme":"black",
          "dataColor":"black",
          "name":"tooltip13"
        }
      ]
    },
    {
      "id":"14",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-13",
          "dataTheme":"black",
          "dataColor":"black",
          "name":"tooltip14"
        }
      ]
    },
    {
      "id":"15",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-14",
          "dataTheme":"black",
          "dataColor":"black",
          "name":"tooltip15"
        }
      ]
    },
    {
      "id":"16",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-15",
          "dataTheme":"black",
          "dataColor":"black",
          "name":"tooltip16"
        }
      ]
    },
    {
      "id":"17",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-16",
          "dataTheme":"black",
          "dataColor":"black",
          "name":"tooltip17"
        }
      ]
    }
  ]
  
  const prefixTooltipId = 'tooltip-tmp-key-';
  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    items[i].tooltip[0].id = prefixTooltipId + [i];
    items[i].tooltip[0].name = element.firstElementChild.dataset.tooltip;
    items[i].tooltip[0].dataColor = element.firstElementChild.dataset.tooltipColor;
    getDataTooltipTheme(i);
    getDataTooltipColor(i);
    createTooltip(i);
  }
  function getDataTooltipTheme(idx) {
    'use strict';
    const element = trgElmn[idx];
    if ( !element.dataset.tooltipTheme ) {
      element.setAttribute('data-tooltip-theme', items[idx].tooltip[0].dataTheme);
    } else {
      items[idx].tooltip[0].dataTheme = element.getAttribute('data-tooltip-theme');
    }
  }
  function getDataTooltipColor(idx) {
    'use strict';
    const element = trgElmn[idx];
    if ( !element.dataset.tooltipColor ) {
      element.setAttribute('data-tooltip-color', items[idx].tooltip[0].dataColor);
    } else {
      items[idx].tooltip[0].dataColor = element.getAttribute('data-tooltip-color');
    }
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
      { style: `background-color: ${items[order].tooltip[0].dataColor}` }
    );
    itemContainer.setAttribute('data-item-id', items[order].tooltip[0].id);
    itemContainer.setAttribute('data-tooltip-theme', items[order].tooltip[0].dataTheme);
    itemContainer.setAttribute('data-tooltip-color', items[order].tooltip[0].dataColor);
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
      createHtmlElement('div', 'otter-tooltip-arrow-black', 'otter-tooltip-show-arrow-black', 'otter-tooltip-show-arrow');
      createHtmlElement('div', 'otter-tooltip-arrow-silver', 'otter-tooltip-show-arrow-silver');
      createHtmlElement('div', 'otter-tooltip-arrow-gray', 'otter-tooltip-show-arrow-gray');
      createHtmlElement('div', 'otter-tooltip-arrow-white', 'otter-tooltip-show-arrow-white');
      createHtmlElement('div', 'otter-tooltip-arrow-maroon', 'otter-tooltip-show-arrow-maroon');
      createHtmlElement('div', 'otter-tooltip-arrow-red', 'otter-tooltip-show-arrow-red');
      createHtmlElement('div', 'otter-tooltip-arrow-purple', 'otter-tooltip-show-arrow-purple');
      createHtmlElement('div', 'otter-tooltip-arrow-fuchsia', 'otter-tooltip-show-arrow-fuchsia');
      createHtmlElement('div', 'otter-tooltip-arrow-green', 'otter-tooltip-show-arrow-green');
      createHtmlElement('div', 'otter-tooltip-arrow-lime', 'otter-tooltip-show-arrow-lime');
      createHtmlElement('div', 'otter-tooltip-arrow-olive', 'otter-tooltip-show-arrow-olive');
      createHtmlElement('div', 'otter-tooltip-arrow-yellow', 'otter-tooltip-show-arrow-yellow');
      function createHtmlElement(element, class1, param1, param2) {
        'use strict';
        if (wrapper.classList.contains(param1) || wrapper.classList.contains(param2)) {
          const arrowDiv = document.createElement(element);
          arrowDiv.classList.add(class1);
          arrowDiv.style.backgroundColor = items[order].tooltip[0].dataColor;
          wrapper.append(arrowDiv);
        }
      }
    }
    if ( items[order].tooltip[0].dataColor === items[order].tooltip[0].dataTheme ) {
      itemContainer.removeAttribute('data-tooltip-color')
      itemContainer.removeAttribute('style')
      itemContainer.previousSibling.removeAttribute('style')
      itemContainer.nextSibling.removeAttribute('style')
    }
    document.querySelector('body').append(container);
  }
})();

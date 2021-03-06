'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-tooltip-trigger');
  // const trgElmn = cntnrElmnt.querySelectorAll('.otter-tooltip-trigger:not([disabled])');
  const items = [
    {
      "id":"1",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-1",
          "dataTheme":"black",
          "dataColor":"",
          "name":"tooltip1"
        }
      ]
    },
    {
      "id":"2",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-2",
          "dataTheme":"black",
          "dataColor":"",
          "name":"tooltip2"
        }
      ]
    },
    {
      "id":"3",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-3",
          "dataTheme":"black",
          "dataColor":"",
          "name":"tooltip3"
        }
      ]
    },
    {
      "id":"4",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-4",
          "dataTheme":"black",
          "dataColor":"",
          "name":"tooltip4"
        }
      ]
    },
    {
      "id":"5",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-5",
          "dataTheme":"black",
          "dataColor":"",
          "name":"tooltip5"
        }
      ]
    },
    {
      "id":"6",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-6",
          "dataTheme":"black",
          "dataColor":"",
          "name":"tooltip5"
        }
      ]
    },
    {
      "id":"7",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-7",
          "dataTheme":"black",
          "dataColor":"",
          "name":"tooltip5"
        }
      ]
    },
    {
      "id":"8",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-8",
          "dataTheme":"black",
          "dataColor":"",
          "name":"tooltip5"
        }
      ]
    },
    {
      "id":"9",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-9",
          "dataTheme":"black",
          "dataColor":"",
          "name":"tooltip5"
        }
      ]
    },
    {
      "id":"10",
      "name":"Tooltip",
      "tooltip":[
        {
          "id":"tooltip-tmp-key-10",
          "dataTheme":"black",
          "dataColor":"",
          "name":"tooltip5"
        }
      ]
    }
  ]
  const prefixTooltipId = 'tooltip-tmp-key-';
  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    items[i].tooltip[0].id = prefixTooltipId + [i + 1];
    items[i].tooltip[0].name = element.firstElementChild.dataset.tooltip;
    getDataTooltipTheme(i);
    getDataTooltipColor(i);
    createTooltip(i);
  }
  function getDataTooltipTheme(idx) {
    'use strict';
    const element = trgElmn[idx];
    if ( Boolean(element.dataset.tooltipTheme) ) {
      items[idx].tooltip[0].dataTheme = element.getAttribute('data-tooltip-theme');
    } else {
      // element.setAttribute('data-tooltip-theme', items[idx].tooltip[0].dataTheme);
    }
  }
  function getDataTooltipColor(idx) {
    'use strict';
    const element = trgElmn[idx];
    if ( Boolean(element.dataset.tooltipColor) ) {
      items[idx].tooltip[0].dataColor = element.getAttribute('data-tooltip-color');
    } else {
      // element.setAttribute('data-tooltip-color', items[idx].tooltip[0].dataColor);
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
      const tooltipTheme = ['black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow'];
      createHtmlElement('div', 'otter-tooltip-arrow-black', 'otter-tooltip-show-arrow');
      tooltipTheme.forEach(element => createHtmlElement('div', `otter-tooltip-arrow-${element}`, `otter-tooltip-show-arrow-${element}`));
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
    function checkDataColorDataThemeSame() {
      return Boolean(items[order].tooltip[0].dataColor === items[order].tooltip[0].dataTheme);
    }
    function checkDataColorUndefined() {
      return Boolean(items[order].tooltip[0].dataColor === undefined);
    }
    if ( checkDataColorDataThemeSame() || checkDataColorUndefined() ) {
      itemContainer.removeAttribute('data-tooltip-color')
      itemContainer.removeAttribute('style')
      itemContainer.previousSibling.removeAttribute('style')
      itemContainer.nextSibling.removeAttribute('style')
    }
    document.querySelector('body').append(container);
  }
})();

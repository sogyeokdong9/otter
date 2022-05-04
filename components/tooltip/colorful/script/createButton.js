'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const items = [
    {
      "id":"1",
      "name":"button",
      "button":[
        {
          "dataIndexNumber":1,
          "dataPlacement":"rightTop",
          "dataTheme": "black",
          "dataColor": "",
          "name":"Black"
        }
      ]
    },
    {
      "id":"2",
      "name":"button",
      "button":[
        {
          "dataIndexNumber":2,
          "dataPlacement":"topLeft",
          "dataTheme": "silver",
          "dataColor": "",
          "name":"Silver"
        }
      ]
    },
    {
      "id":"3",
      "name":"button",
      "button":[
        {
          "dataIndexNumber":3,
          "dataPlacement":"topRight",
          "dataTheme": "gray",
          "dataColor": "",
          "name":"Gray"
        }
      ]
    },
    {
      "id":"4",
      "name":"button",
      "button":[
        {
          "dataIndexNumber":4,
          "dataPlacement":"rightTop",
          "dataTheme": "white",
          "dataColor": "",
          "name":"White"
        }
      ]
    },
    {
      "id":"5",
      "name":"button",
      "button":[
        {
          "dataIndexNumber":5,
          "dataPlacement":"right",
          "dataTheme": "maroon",
          "dataColor": "",
          "name":"Maroon"
        }
      ]
    },
    {
      "id":"6",
      "name":"button",
      "button":[
        {
          "dataIndexNumber":6,
          "dataPlacement":"bottomLeft",
          "dataTheme": "red",
          "dataColor": "",
          "name":"Red"
        }
      ]
    },
    {
      "id":"7",
      "name":"button",
      "button":[
        {
          "dataIndexNumber":7,
          "dataPlacement":"bottomRight",
          "dataTheme": "purple",
          "dataColor": "",
          "name":"Purple"
        }
      ]
    },
    {
      "id":"8",
      "name":"button",
      "button":[
        {
          "dataIndexNumber":8,
          "dataPlacement":"right",
          "dataTheme": "fuchsia",
          "dataColor": "",
          "name":"Fuchsia"
        }
      ]
    },
    {
      "id":"9",
      "name":"button",
      "button":[
        {
          "dataIndexNumber":9,
          "dataPlacement":"rightBottom",
          "dataTheme": "green",
          "dataColor": "",
          "name":"Green"
        }
      ]
    },
    {
      "id":"10",
      "name":"button",
      "button":[
        {
          "dataIndexNumber":10,
          "dataPlacement":"top",
          "dataTheme": "lime",
          "dataColor": "",
          "name":"Lime"
        }
      ]
    },
    {
      "id":"11",
      "name":"button",
      "button":[
        {
          "dataIndexNumber":11,
          "dataPlacement":"bottom",
          "dataTheme": "olive",
          "dataColor": "",
          "name":"Olive"
        }
      ]
    },
    {
      "id":"12",
      "name":"button",
      "button":[
        {
          "dataIndexNumber":12,
          "dataPlacement":"rightBottom",
          "dataTheme": "yellow",
          "dataColor": "",
          "name":"Yellow"
        }
      ]
    }
  ]
  function returnCheckValue( val1, val2 = 'Tooltip' ) {
    const result = val1 || val2;
    return result;
  }
  const iAmTooltip = `I'm tooltip.`;
  for (let i = 0; i < items.length; i++) {
    createButton(i);
  }
  function createButton(order) {
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
      'div'
    );
    const wrapper = makeHtmlElement(
      'button', 
      { type: 'button' },
      { class: 'otter-btn otter-btn-default otter-btn-lg otter-tooltip-trigger otter-tooltip-link otter-tooltip-close' }
    );
    wrapper.classList.add( items[order].button[0].dataTheme );
    wrapper.setAttribute('data-index-number', items[order].button[0].dataIndexNumber);
    wrapper.setAttribute('data-tooltip-theme', items[order].button[0].dataTheme);
    wrapper.setAttribute('data-tooltip-color', items[order].button[0].dataColor);
    wrapper.setAttribute('data-placement', items[order].button[0].dataPlacement);
    const item = makeHtmlElement(
      'span', 
      { textContent: items[order].button[0].name }
    );
    item.setAttribute('data-tooltip', iAmTooltip + ' ' + items[order].button[0].name );
    const icon = makeHtmlElement(
      'span', 
      { class: 'spacial-letter-down a11y-hidden' },
      { focusable: false },
      { role: 'img' },
      { textContent: '∨' }
    );
    icon.setAttribute('aria-label', 'isplay of tooltip state that open or close' );
    icon.setAttribute('aria-expanded', false );
    wrapper.append(item);
    wrapper.append(icon);
    container.append(wrapper);
    document.querySelector('.palette').append(container);
  }
})();

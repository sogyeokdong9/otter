'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-message-trigger');
  const items = [
    {
      "id":"1",
      "name":"Display normal message",
      "dataTheme":"light",
      "notice":[
        {
          "id":"message-notice-div-tmp-key-0-0",
          "name":"This is a normal message",
          "url":"https://www.google.com/"
        }
      ]
    }
  ]
  const prefixTooltipId = 'message-notice-div-tmp-key';
  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    getDataMessageTheme(i);
    for (let j = 0; j < items[i].notice.length; j++) {
      const element = items[i].notice[j];
      items[i].notice[j].id = `${prefixTooltipId}-${i}-${j}`;
      if (j === items[i].notice.length - 1) { createMessage(i, j + 1); }
    }
  }
  function getDataMessageTheme(idx) {
    'use strict';
    const element = trgElmn[idx];
    if ( Boolean(element.dataset.messageTheme) ) {
      items[idx].dataTheme = element.getAttribute('data-message-theme');
    } else {
      element.setAttribute('data-message-theme', items[idx].dataTheme);
    }
  }
  function createMessage(order,count) {
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
      { class: `otter-message otter-message-visible` },
      { style: 'min-width: auto; left: -136px; top: -188px;' }
    );
    wrapper.setAttribute('data-index-number', items[order].id);

    const itemContainer = makeHtmlElement(
      'div', 
      { class: `otter-message-notice otter-message-notice-root otter-message-notice-vertical otter-message-notice-${items[order].dataTheme}` },
      { role: 'notice' },
      { tabIndex: 0 }
    );
    itemContainer.setAttribute('data-notice-list', true);


    const item = makeHtmlElement(
      'div', 
      { class: 'otter-message-notice-item' }, 
      { role: 'noticeitem' }
    );

    item.setAttribute('data-notice-id', items[order].notice[0].id);

    const div = makeHtmlElement(
      'div', 
      { class: 'otter-message-notice-title-content otter-message-info' }
    );

    const spanContext = makeHtmlElement(
      'span', 
      { textContent: items[order].notice[0].name }
    );

    const spanContainer = makeHtmlElement(
      'span'
    )

    const iIcon = makeHtmlElement(
      'i', 
      { class: 'ottericon gg-info' },
      { role: 'image' },
    );
    iIcon.setAttribute('aria-label', 'Information icon');

    spanContainer.append(iIcon);
    div.append(spanContainer);
    div.append(spanContext);
    item.append(div);
    itemContainer.append(item);
    wrapper.append(itemContainer);
    container.append(wrapper);
    document.querySelector('body').append(container);
  }
})();

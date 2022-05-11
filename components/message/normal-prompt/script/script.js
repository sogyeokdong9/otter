'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-message-trigger');
  const message = document.querySelectorAll('.otter-message');
  const logElmnt = cntnrElmnt.querySelector('.event-log-message');
  const computedStyle = window.getComputedStyle(cntnrElmnt, null);

  document.querySelector(".otter-btn").addEventListener('click', function() {
    const items = [
      {
        "id":"1",
        "name":"Message",
        "dataTheme":"light",
        "notice":[
          {
            "id":"message-notice-div-tmp-key-0-0",
            "name":"This is a normal message",
            "type":""
          }
        ]
      }
    ]
    function returnCheckValue( val1, val2 = 'Message' ) {
      const result = val1 || val2;
      return result;
    }
    const prefixTooltipId = 'message-notice-div-tmp-key';
    for (let i = 0; i < trgElmn.length; i++) {
      const element = trgElmn[i];
      getDataMessage(i);
      getDataMessageTheme(i);
      getDataMessageType(i);
      for (let j = 0; j < items[i].notice.length; j++) {
        const element = items[i].notice[j];
        items[i].notice[j].id = `${prefixTooltipId}-${i}-${j}`;
        if (j === items[i].notice.length - 1) { createMessage(i, j + 1); }
      }
    }
    function getDataMessage(idx) {
      'use strict';
      const element = trgElmn[idx];
      items[idx].notice[0].name = returnCheckValue(element.firstElementChild.dataset.message, items[idx].notice[0].name);
    }
    function getDataMessageTheme(idx) {
      'use strict';
      const element = trgElmn[idx];
      items[idx].dataTheme = returnCheckValue(element.dataset.messageTheme, items[idx].dataTheme);
    }
    function getDataMessageType(idx) {
      'use strict';
      const element = trgElmn[idx];
      items[idx].notice[0].type = returnCheckValue(element.dataset.messageType, items[idx].notice[0].type);
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
        { class: `otter-message-notice otter-move-up-enter otter-move-up-enter-active` }
      );
      container.setAttribute('data-index-number', items[order].id);

      const wrapper = makeHtmlElement(
        'div', 
        { class: 'otter-message-notice-content' }, 
        { role: 'noticeitem' }
      );
      wrapper.setAttribute('data-notice', true);

      const itemContainer = makeHtmlElement(
        'div', 
        { class: 'otter-message-custom-content' }
      );
      itemContainer.setAttribute('data-notice-id', items[order].notice[0].id);
  
      const span = makeHtmlElement( 'span' );
  
      const icon = makeHtmlElement(
        'i', 
        { class: 'ottericon' },
        { role: 'image' },
      );

      if ( items[order].notice[0].type === "info" ) {
        icon.classList.add("gg-info");
        icon.setAttribute('aria-label', 'Information icon');
        itemContainer.classList.add("otter-message-info");
      } else if ( items[order].notice[0].type === "success" ) {
        icon.classList.add("gg-check-o");
        icon.setAttribute('aria-label', 'Success icon');
        itemContainer.classList.add("otter-message-success");
      } else if ( items[order].notice[0].type === "error" ) {
        icon.classList.add("gg-close-o");
        icon.setAttribute('aria-label', 'Error icon');
        itemContainer.classList.add("otter-message-error");
      } else if ( items[order].notice[0].type === "warning" ) {
        icon.classList.add("gg-danger");
        icon.setAttribute('aria-label', 'Warning icon');
        itemContainer.classList.add("otter-message-warning");
      } else if ( items[order].notice[0].type === "loading" ) {
        icon.classList.add("gg-spinner");
        icon.setAttribute('aria-label', 'Loading icon');
        itemContainer.classList.add("otter-message-loading");
      } else {
        icon.classList.add("gg-bell");
        icon.setAttribute('aria-label', 'Bell icon');
        itemContainer.classList.add("otter-message-default");
      }

      const spanContext = makeHtmlElement(
        'span', 
        { textContent: items[order].notice[0].name }
      );
  
      span.append(icon);
      itemContainer.append(span);
      itemContainer.append(spanContext);
      wrapper.append(itemContainer);
      container.append(wrapper);

      document.querySelector(".otter-message div").appendChild(container);

      setTimeout(() => { closeMessage() }, 5000);

      function closeMessage() {
        'use strict';
        container.classList.replace('otter-move-up-enter', 'otter-move-up-leave');
        container.classList.replace('otter-move-up-enter-active', 'otter-move-up-leave-active');
        setTimeout(() => { removeMessage(container) }, 1000);
      }
      function removeMessage( target ) {
        'use strict'
        target.remove();
      }
    }
  })
})();

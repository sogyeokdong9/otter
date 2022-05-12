'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-message-trigger');
  const message = document.querySelectorAll('.otter-message');
  document.querySelector(".otter-btn").addEventListener('click', function() {
    const items = [
      {
        "id":"1",
        "name":"Message",
        "dataTheme":"light",
        "placement":"top",
        "notice":[
          {
            "id":"message-notice-div-tmp-key-0-0",
            "name":"This is a normal message",
            "type":""
          }
        ]
      }
    ];
    this.lastChild.previousElementSibling.ariaExpanded = true;
    this.classList.replace('otter-message-close', 'otter-message-open');
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
      getDataMessagePlacement(i);
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
    function getTrgAttrPlcmnt(idx) {
      'use strict';
      const element = trgElmn[idx];
      const result = returnCheckValue(element.getAttribute('data-placement'), 'default');
      return result;
    }
    function createPlcmntClsNm(idx) {
      'use strict';
      const prefixPlcmnt = 'otter-message-placement-';
      const makePlcmntCls = prefixPlcmnt + getTrgAttrPlcmnt(idx);
      return makePlcmntCls;
    }
    function getDataMessagePlacement(idx) {
      'use strict';
      return items[idx].placement = returnCheckValue(createPlcmntClsNm(idx), items[idx].placement);
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
      message[order].classList.add(items[order].placement);
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
        { class: `otter-message-notice` }
      );
      container.setAttribute('data-index-number', items[order].id);
      function getMessageTopOrBottom() {
        'use strict';
        if ( getDataMessagePlacement(order).indexOf('top') === -1 ) {
          const messagePlacement = 'bottom';
          return messagePlacement;
        } else {
          const messagePlacement = 'top';
          return messagePlacement;
        }
      }
      if ( getMessageTopOrBottom() === "bottom") {
        message[order].firstElementChild.classList.add('btm-basis');
        container.classList.add('otter-move-down-enter', 'otter-move-down-enter-active')
      } else {
        message[order].firstElementChild.classList.add('top-basis');
        container.classList.add('otter-move-up-enter', 'otter-move-up-enter-active')
      }
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
      const expr = items[order].notice[0].type;
      switch (expr) {
        case 'info':
          icon.classList.add("gg-info");
          icon.setAttribute('aria-label', 'Information icon');
          itemContainer.classList.add("otter-message-info");
          break;
        case 'success':
          icon.classList.add("gg-check-o");
          icon.setAttribute('aria-label', 'Success icon');
          itemContainer.classList.add("otter-message-success");
          break;
        case 'error':
          icon.classList.add("gg-close-o");
          icon.setAttribute('aria-label', 'Error icon');
          itemContainer.classList.add("otter-message-error");
          break;
        case 'warning':
          icon.classList.add("gg-danger");
          icon.setAttribute('aria-label', 'Warning icon');
          itemContainer.classList.add("otter-message-warning");
          break;
        case 'loading':
          icon.classList.add("gg-spinner");
          icon.setAttribute('aria-label', 'Loading icon');
          itemContainer.classList.add("otter-message-loading");
          break;
        default:
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
      setTimeout(() => { closeMessage() }, 3000);
      function closeMessage() {
        'use strict';
        container.classList.replace('otter-move-up-enter', 'otter-move-up-leave');
        container.classList.replace('otter-move-up-enter-active', 'otter-move-up-leave-active');
        setTimeout(() => { removeMessage(container) }, 300);
      }
      function removeMessage( target ) {
        'use strict'
        const messageItem = document.querySelectorAll('.otter-message-notice');
        target.remove();
        if ( messageItem.length === 1 ) {
          trgElmn[order].classList.replace('otter-message-open', 'otter-message-close');
          trgElmn[order].lastChild.previousElementSibling.ariaExpanded = false;
        }
      }
    }
  })
})();

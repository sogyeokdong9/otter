'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-message-trigger');
  const message = document.querySelector('.otter-message');
  const loadBtn = cntnrElmnt.querySelectorAll('button[data-loading="true"]');
  const logElmnt = cntnrElmnt.querySelector('.event-log-message');
  const orizinElmn = [];
  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    orizinElmn.push(element);
  }
  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    element.addEventListener('click', function() {
      const items = [
        {
          "id":"1",
          "name":"Message",
          "dataTheme":"light",
          "dataColor":"",
          "placement":"top",
          "notice":[
            {
              "id":"message-notice-div-tmp-key-0-0",
              "name":"This is a normal message",
              "type":""
            }
          ]
        },
        {
          "id":"2",
          "name":"Message",
          "dataTheme":"light",
          "dataColor":"",
          "placement":"top",
          "notice":[
            {
              "id":"message-notice-div-tmp-key-1-0",
              "name":"This is a normal message",
              "type":""
            }
          ]
        },
        {
          "id":"3",
          "name":"Message",
          "dataTheme":"light",
          "dataColor":"",
          "placement":"top",
          "notice":[
            {
              "id":"message-notice-div-tmp-key-2-0",
              "name":"This is a normal message",
              "type":""
            }
          ]
        },
        {
          "id":"4",
          "name":"Message",
          "dataTheme":"light",
          "dataColor":"",
          "placement":"top",
          "notice":[
            {
              "id":"message-notice-div-tmp-key-3-0",
              "name":"This is a normal message",
              "type":""
            }
          ]
        },
        {
          "id":"5",
          "name":"Message",
          "dataTheme":"light",
          "dataColor":"",
          "placement":"top",
          "notice":[
            {
              "id":"message-notice-div-tmp-key-4-0",
              "name":"This is a normal message",
              "type":""
            }
          ]
        },
        {
          "id":"6",
          "name":"Message",
          "dataTheme":"light",
          "dataColor":"",
          "placement":"top",
          "notice":[
            {
              "id":"message-notice-div-tmp-key-5-0",
              "name":"This is a normal message",
              "type":""
            }
          ]
        }
      ];
      const currentActiveTrigger = {
        "index": this.getAttribute('data-index-number'),
        "type": this.getAttribute('data-message-type'),
        "placement": this.getAttribute('data-placement'),
        "theme": this.getAttribute('data-message-theme'),
        "color": this.getAttribute('data-message-color'),
        "loading": this.getAttribute('data-loading'),
        "delay": this.getAttribute('data-loading-delay'),
        "name": this.innerText,
        "message": this.firstElementChild.getAttribute('data-message')
      }
      this.lastChild.previousElementSibling.ariaExpanded = true;
      this.classList.replace('otter-message-close', 'otter-message-open');
      for (let i = 0; i < items.length; i++) {
        const element = items[i];
        console.log(element);
        this.getAttribute('data-index-number') === `${i+1}` ? messageBox(`${i}`) : null;
      }
      function messageBox(i) {
        console.log(i);
        const prefixTooltipId = 'message-notice-div-tmp-key';
        getDataMessage(i);
        getDataMessageTheme(i);
        getDataMessageColor(i);
        getDataMessageType(i);
        getDataMessagePlacement(i);
        for (let j = 0; j < items[i].notice.length; j++) {
          const element = items[i].notice[j];
          items[i].notice[j].id = `${prefixTooltipId}-${i}-${j}`;
          createMessage(i, j + 1);
          console.log(i, j + 1);
        }
        eventLog('click');
        setPrivousElmn();
      }
      // 0
      function returnCheckValue( val1, val2 = '-' ) {
        const result = val1 || val2;
        return result;
      }
      function getDataMessage(idx) {
        'use strict';
        const element = trgElmn[idx];
        return items[idx].notice[0].name = returnCheckValue(element.firstElementChild.dataset.message, items[idx].notice[0].name);
      }
      function getDataMessageTheme(idx) {
        'use strict';
        const element = trgElmn[idx];
        return items[idx].dataTheme = returnCheckValue(element.dataset.messageTheme, items[idx].dataTheme);
      }
      function getDataMessageColor(idx) {
        'use strict';
        const element = trgElmn[idx];
        return items[idx].dataColor = returnCheckValue( element.dataset.messageColor , items[idx].dataColor );
      }
      function getDataMessageType(idx) {
        'use strict';
        const element = trgElmn[idx];
        return items[idx].notice[0].type = returnCheckValue(element.dataset.messageType, items[idx].notice[0].type);
      }
      function getDataMessagePlacement(idx) {
        'use strict';
        return items[idx].placement = returnCheckValue(createPlcmntClsNm(idx), items[idx].placement);
      }
      function createPlcmntClsNm(idx) {
        'use strict';
        const prefixPlcmnt = 'otter-message-placement-';
        const makePlcmntCls = prefixPlcmnt + getTrgAttrPlcmnt(idx);
        return makePlcmntCls;
      }
      function getTrgAttrPlcmnt(idx) {
        'use strict';
        const element = trgElmn[idx];
        const result = returnCheckValue(element.getAttribute('data-placement'), 'default');
        return result;
      }
      // 1
      function createMessage(order, count) {
        'use strict';
        message.classList.add(items[order].placement);
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
          if ( 
            getDataMessagePlacement(order).indexOf('bottom') === -1 ) {
            const messagePlacement = 'top';
            return messagePlacement;
          } else {
            const messagePlacement = 'bottom';
            return messagePlacement;
          }
        }
        if ( getMessageTopOrBottom() === "bottom") {
          message.firstElementChild.classList.add('btm-basis');
          container.classList.add('otter-move-down-enter', 'otter-move-down-enter-active')
        } else {
          message.firstElementChild.classList.add('top-basis');
          container.classList.add('otter-move-up-enter', 'otter-move-up-enter-active')
        }
        const wrapper = makeHtmlElement(
          'div',
          { class: `otter-message-notice-content` },
          { role: 'noticeitem' }
        );
        wrapper.setAttribute('data-notice', true);
  
        if ( items[order].dataTheme !== ''  ) {
          wrapper.classList.add(`otter-message-notice-${items[order].dataTheme}`)
        }
  
        if ( items[order].dataColor !== items[order].dataTheme ) {
          wrapper.style.backgroundColor = items[order].dataColor;
        }
  
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
          case 'default':
            icon.classList.add("gg-bell");
            icon.setAttribute('aria-label', 'Bell icon');
            itemContainer.classList.add("otter-message-default");
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
        function checkDataColorDataThemeSame() {
          'use strict';
          const result = Boolean(items[order].dataColor === items[order].dataTheme);
          return result;
        }
        function checkDataColorUndefined() {
          'use strict';
          const result = Boolean(items[order].dataColor === undefined)
          return result;
        }
        if ( checkDataColorDataThemeSame() || checkDataColorUndefined() ) {
          wrapper.removeAttribute('data-message-color')
          wrapper.removeAttribute('style')
        }
        document.querySelector(".otter-message div").appendChild(container);
        const element = trgElmn[order];
        const MESSAGE_DELAY = element.dataset.loadingDelay ?? 3000;
            
        setTimeout(() => { closeMessage() }, MESSAGE_DELAY);
        function closeMessage() {
          'use strict';
          container.classList.replace('otter-move-up-enter', 'otter-move-up-leave');
          container.classList.replace('otter-move-up-enter-active', 'otter-move-up-leave-active');
          setTimeout(() => { removeMessage(container) }, 2500);
          eventLog('timeout');
          setPrivousElmn();
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
      // 2
      function getPrivousElmnArray() {
        'use strict';
        const logAllArray = [];
        const logCurrentArray = [];
        const logPreviousArray = [];
        const getLogItem = cntnrElmnt.querySelectorAll('.log-item-message');
        logAllArray.push(getLogItem);
        for (let i = 0; i < getLogItem.length; i++) {
          const element = getLogItem[i];
          logCurrentArray.push(element.childNodes[2].outerText);
        }
        for (let i = 0; i < logCurrentArray.length; i++) {
          const element = logCurrentArray[i];
          logPreviousArray[i] = element;
        }
        if (logAllArray.length > 0) { 
          document.querySelector('.event-log-title-message').style.display = 'block';
        }
        logPreviousArray.unshift( '-' );
        logPreviousArray.pop();
        const result = logPreviousArray;
        return result;
      }
      function setPrivousElmn() {
        'use strict';
        const getLogItem = cntnrElmnt.querySelectorAll('.log-item-message');
        for (let i = 0; i < getLogItem.length; i++) {
          const element = getLogItem[i];
          element.lastChild.textContent = getPrivousElmnArray()[i];
        }
      }
      function getStringTime() {
        'use strict';
        const time = new Date();
        const timeStr1 = time.toLocaleTimeString();
        const timeStr2 = time.getUTCMilliseconds();
        const result = `${timeStr1}:${timeStr2}`;
        return result;
      }
      function getActiveBtnElmn() {
        'use strict';
        const activeElmn = cntnrElmnt.querySelector('.otter-message-open');
        const result = activeElmn;
        return result;
      }
      function getActiveMessage() {
        'use strict';
        const activeElmn = document.querySelectorAll('.otter-message-notice');
        const result = activeElmn[activeElmn.length - 1];
        return result;
      }
      function eventLog(mouseState, i) {
        'use strict';
        const loadBtnItemIdx = returnCheckValue(currentActiveTrigger.index);
        const loadBtnItemText = returnCheckValue(currentActiveTrigger.name);
        const loadBtnItemAttr = returnCheckValue(currentActiveTrigger.placement, 'default');
        const loadBtnItemCls = returnCheckValue(getActiveBtnElmn().classList[2]);
        const loadMessageItemIdx = returnCheckValue(currentActiveTrigger.index);
        const loadMessageItemTheme = returnCheckValue(currentActiveTrigger.theme, 'light');
        const loadMessageItemText = returnCheckValue(currentActiveTrigger.message, '-');
        const loadMessageItemCls = ( mouseState === 'timeout' ) ? 'otter-move-up-leave' : 'otter-move-up-enter';
        const COUNT_LOADNING_DELAY = Number(returnCheckValue(currentActiveTrigger.delay, 3000));
        const loadMessageItemLoadingDelay = COUNT_LOADNING_DELAY.toLocaleString('en-US') || '3,000';
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
        const itemContainer = makeHtmlElement('li', { class: 'log-item-message' });
        const groopOfPairs = [
          { id: 1, name: mouseState, class: 'trigger-specified' },
          { id: 2, name: getStringTime(), class: 'log-time' },
          { id: 3, name: loadBtnItemIdx, class: 'trigger-idx' },
          { id: 4, name: loadBtnItemText, class: 'trigger-txt' },
          { id: 5, name: loadBtnItemAttr, class: 'trigger-plc' },
          { id: 6, name: loadBtnItemCls, class: 'trigger-cls' },
          { id: 7, name: loadMessageItemIdx, class: 'message-idx' },
          { id: 8, name: loadMessageItemTheme, class: 'message-theme' },
          { id: 9, name: loadMessageItemText, class: 'message-txt' },
          { id: 10, name: loadMessageItemCls, class: 'message-cls' },
          { id: 11, name: loadMessageItemLoadingDelay, class: 'message-delay' },
          { id: 12, name: 'Data is from recordLog()', class: 'previous-idx' }
        ]
        const [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12] = groopOfPairs.map((item) =>
          makeHtmlElement('span', { class: item.class }, { textContent: item.name })
        );
        itemContainer.append(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12);
        logElmnt.append(itemContainer);
      }
    })
  }
  logElmnt.insertAdjacentHTML('beforebegin', '<p class="event-log-title-message">Event Log: Message</p>');
})();

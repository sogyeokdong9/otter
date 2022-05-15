'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-message-trigger');
  const message = document.querySelector('.otter-message');
  const loadBtn = cntnrElmnt.querySelectorAll('button[data-loading="true"]');
  const logElmnt = cntnrElmnt.querySelector('.event-log-message');
  const orizinElmn = [];
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
  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    orizinElmn.push(element);
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
        "class": this.classList[2],
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
        this.getAttribute('data-index-number') === 
          `${i+1}` 
          ? messageBox(`${i}`) 
          : null;
      }
      function messageBox(i) {
        'use strict';
        const prefixTooltipId = 'message-notice-div-tmp-key';
        getDataMessage(i);
        getDataMessageTheme(i);
        getDataMessageColor(i);
        getDataMessageType(i);
        getDataMessagePlacement(i);
        for (let j = 0; j < items[i].notice.length; j++) {
          items[i].notice[j].id = `${prefixTooltipId}-${i}-${j}`;
          createMessage(i, j + 1);
        }
        eventLog('click');
        setPrivousElmn();
      }
      // meta
      function returnCheckValue( val1, val2 = '-' ) {
        return val1 || val2;
      }
      function getDataMessage(idx) {
        'use strict';
        return items[idx].notice[0].name = returnCheckValue( 
          trgElmn[idx].firstElementChild.dataset.message, 
          items[idx].notice[0].name 
        );
      }
      function getDataMessageTheme(idx) {
        'use strict';
        return items[idx].dataTheme = returnCheckValue( 
          trgElmn[idx].dataset.messageTheme, 
          items[idx].dataTheme 
        );
      }
      function getDataMessageColor(idx) {
        'use strict';
        return items[idx].dataColor = returnCheckValue( 
          trgElmn[idx].dataset.messageColor, 
          items[idx].dataColor 
        );
      }
      function getDataMessageType(idx) {
        'use strict';
        return items[idx].notice[0].type = returnCheckValue( 
          trgElmn[idx].dataset.messageType, 
          items[idx].notice[0].type 
        );
      }
      function getDataMessagePlacement(idx) {
        'use strict';
        return items[idx].placement = returnCheckValue( 
          createPlcmntClsNm(idx), 
          items[idx].placement 
        );
      }
      function createPlcmntClsNm(idx) {
        'use strict';
        return 'otter-message-placement-' + getTrgAttrPlcmnt(idx);
      }
      function getTrgAttrPlcmnt(idx) {
        'use strict';
        return returnCheckValue( 
          trgElmn[idx].getAttribute('data-placement'), 
          'default' 
        );
      }
      // message
      function createMessage(order, count) {
        'use strict';
        message.classList.add(items[order].placement);
        const container = makeHtmlElement(
          'div',
          { class: `otter-message-notice` }
        );
        container.setAttribute('data-index-number', items[order].id);
        function getMessageTopOrBottom() {
          'use strict';
          return ( getDataMessagePlacement(order).indexOf('bottom') === 
            -1 
            ? 'top' 
            : 'bottom' 
          );
        }
        getMessageTopOrBottom() === 
          "bottom" 
          ? setLocationBasisToAddClass( 'btm-basis', 'otter-move-down-enter', 'otter-move-down-enter-active' ) 
          : setLocationBasisToAddClass( 'top-basis', 'otter-move-up-enter', 'otter-move-up-enter-active' );

        function setLocationBasisToAddClass( basis, direction, state ) {
          'use strict';
          message.firstElementChild.classList.add( basis );
          container.classList.add( direction, state )
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
            setItemsNoticeTypeToAddClassSetAttr( "gg-info", 'Information icon', "otter-message-info" );
            break;
          case 'success':
            setItemsNoticeTypeToAddClassSetAttr( "gg-check-o", 'Success icon', "otter-message-success" );
            break;
          case 'error':
            setItemsNoticeTypeToAddClassSetAttr( "gg-close-o", 'Error icon', "otter-message-error" );
            break;
          case 'warning':
            setItemsNoticeTypeToAddClassSetAttr( "gg-danger", 'Warning icon', "otter-message-warning" );
            break;
          case 'loading':
            setItemsNoticeTypeToAddClassSetAttr( "gg-spinner", 'Loading icon', "otter-message-loading" );
            break;
          default:
            setItemsNoticeTypeToAddClassSetAttr( "gg-bell", 'Bell icon', "otter-message-default" );
        }
        function setItemsNoticeTypeToAddClassSetAttr( cls, desc, type ) {
          'use strict';
          icon.classList.add( cls );
          icon.setAttribute( 'aria-label', desc );
          itemContainer.classList.add( type );
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
          return Boolean(items[order].dataColor === items[order].dataTheme);
        }
        function checkDataColorUndefined() {
          'use strict';
          return Boolean(items[order].dataColor === undefined);
        }
        if ( checkDataColorDataThemeSame() || checkDataColorUndefined() ) {
          wrapper.removeAttribute('data-message-color');
          wrapper.removeAttribute('style');
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
      // log
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
        return logPreviousArray;
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
        return `${timeStr1}:${timeStr2}`;
      }
      function getActiveBtnElmn() {
        'use strict';
        return cntnrElmnt.querySelector('.otter-message-open');
      }
      function getActiveMessage() {
        'use strict';
        const activeElmn = document.querySelectorAll('.otter-message-notice');
        return activeElmn[activeElmn.length - 1];
      }
      function eventLog(mouseState, i) {
        'use strict';
        const loadBtnItemIdx = returnCheckValue(currentActiveTrigger.index);
        const loadBtnItemText = returnCheckValue(currentActiveTrigger.name);
        const loadBtnItemAttr = returnCheckValue(currentActiveTrigger.placement, 'default');
        const loadBtnItemCls = returnCheckValue(currentActiveTrigger.class);
        const loadMessageItemIdx = returnCheckValue(currentActiveTrigger.index);
        const loadMessageItemTheme = returnCheckValue(currentActiveTrigger.theme, 'light');
        const loadMessageItemText = returnCheckValue(currentActiveTrigger.message, '-');
        const loadMessageItemCls = ( mouseState === 'timeout' ) ? 'otter-move-up-leave' : 'otter-move-up-enter';
        const COUNT_LOADNING_DELAY = Number(returnCheckValue(currentActiveTrigger.delay, 3000));
        const loadMessageItemLoadingDelay = COUNT_LOADNING_DELAY.toLocaleString('en-US') || '3,000';
        
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

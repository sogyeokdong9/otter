'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const loadBtn = cntnrElmnt.querySelectorAll('button[data-loading="true"]');
  const logElmnt = cntnrElmnt.querySelector('.event-log-loading');
  const orizinElmn = [];
  for (let i = 0; i < loadBtn.length; i++) {
    const element = loadBtn[i];
    orizinElmn.push(element);
  }
  for (let i = 0; i < loadBtn.length; i++) {
    const element = loadBtn[i];
    element.addEventListener('click', function(event) {
      'use strict';
      eventLog('click' , i);
      const LOADING_DELAY = element.dataset.loadingDelay ?? 3000;
      this.classList.add('otter-btn-loading');
      if (checkButtonWithinIcons(i)) {
        this.firstElementChild.className = "otter-btn-loading-icon";
        this.firstElementChild.children[0].className = "ottericon loader";
        this.firstElementChild.children[0].ariaLabel = "Rotating loader icon";
        setTimeout(() => { recoveryData(true) }, LOADING_DELAY);
      } else {
        this.insertAdjacentHTML('afterbegin', '<span class="otter-btn-loading-icon"><i class="ottericon loader" role="img" aria-label="Rotating loader icon"></i></span>');
        setTimeout(() => { recoveryData(false) }, LOADING_DELAY);
      }
      setPrivousElmn();
      event.preventDefault();
    })
    function recoveryData( hasBeforeIcon ) {
      'use strict';
      element.classList.remove('otter-btn-loading');
      if ( hasBeforeIcon ) {
        if (checkButtonWithinIcons(i)) {
          element.firstElementChild.removeAttribute('class');
          element.firstElementChild.children[0].className = "ottericon magnifying-glass";
          element.firstElementChild.children[0].ariaLabel = "Magnifier-shaped search icon";
        }
      } else {
        element.firstElementChild.remove();
      } 
    }
  }
  function checkButtonWithinIcons(idx) {
    'use strict';
    const element = loadBtn[idx];
    const getOtterIconClass = (element.firstElementChild.innerHTML).indexOf('ottericon');
    const result = ( getOtterIconClass !== -1 ) ? true : false;
    return result; 
  }
  function getPrivousElmnArray() {
    'use strict';
    const logAllArray = [];
    const logCurrentArray = [];
    const logPreviousArray = [];
    const getLogItem = cntnrElmnt.querySelectorAll('.log-item-loading');
    const titleEventLog = document.querySelector('.event-log-title-loading');
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
      titleEventLog.style.display = 'block';
    }
    logPreviousArray.unshift( '-' );
    logPreviousArray.pop();
    const result = logPreviousArray;
    return result;
  }
  function setPrivousElmn() {
    'use strict';
    const getLogItem = cntnrElmnt.querySelectorAll('.log-item-loading');
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
  function returnCheckValue( val1, val2 = '-' ) {
    const result = val1 || val2;
    return result;
  }
  function eventLog(mouseState, i) {
    'use strict';
    const loadBtnItemIdx = returnCheckValue(orizinElmn[i].getAttribute('data-index-number'), 0);
    const loadBtnItemText = returnCheckValue(orizinElmn[i].outerText);
    const loadBtnItemAttr = returnCheckValue(orizinElmn[i].getAttribute('data-placement'));
    const loadBtnItemCls = returnCheckValue(orizinElmn[i].classList[2], orizinElmn[i].classList[1]);
    const loadBtnItemLoading = returnCheckValue(orizinElmn[i].getAttribute('data-loading'));
    const COUNT_LOADING_DELAY = Number(returnCheckValue(orizinElmn[i].getAttribute('data-loading-delay'), 3000));
    const loadBtnItemLoadingDelay = COUNT_LOADING_DELAY.toLocaleString('en-US') || '3,000';
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
    const itemContainer = makeHtmlElement('li', { class: 'log-item-loading' });
    const groopOfPairs = [
      { id: 1, name: mouseState, class: 'specified' },
      { id: 2, name: getStringTime(), class: 'log-time' },
      { id: 3, name: loadBtnItemIdx, class: 'trigger-idx' },
      { id: 4, name: loadBtnItemText, class: 'trigger-txt' },
      { id: 5, name: loadBtnItemAttr, class: 'trigger-plc' },
      { id: 6, name: loadBtnItemCls, class: 'trigger-cls' },
      { id: 7, name: loadBtnItemLoading, class: 'trigger-loading' },
      { id: 8, name: loadBtnItemLoadingDelay, class: 'trigger-loading-delay' },
      { id: 9, name: 'Data is from recordLog()', class: 'previous-idx' }
    ]
    const [item1, item2, item3, item4, item5, item6, item7, item8, item9] = groopOfPairs.map((item) =>
      makeHtmlElement('span', { class: item.class }, { textContent: item.name })
    );
    itemContainer.append(item1, item2, item3, item4, item5, item6, item7, item8, item9);
    logElmnt.append(itemContainer);
  }
  logElmnt.insertAdjacentHTML('beforebegin', '<p class="event-log-title-loading">Event Log: Loading Button</p>');
})();

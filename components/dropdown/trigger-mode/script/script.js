'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-dropdown-trigger');
  const drpdnMn = document.querySelectorAll('.otter-dropdown');

  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    let CLICK_COUNT = 0;
    element.addEventListener('click', function() {
      'use strict';
      CLICK_COUNT++;
      if (CLICK_COUNT % 2 === 0) {
        isDrpdnMnOpen(false, i);
        // mouseEventLog('click: hidden')
        // recordLog();
      } else {
        openDrpdnMn(i);
        mouseEventLog('click: visible')
        recordLog();
      }
      console.log(CLICK_COUNT);
    })
    // for (let i = 0; i < drpdnMn.length; i++) {
    //   const element = drpdnMn[i];
    //   element.addEventListener('mouseleave', function() {
    //     'use strict';
    //     isDrpdnMnOpen(false, i);
    //     // mouseEventLog('mouseleave')
    //   })
    // }
  }

  function openDrpdnMn(idx) {
    'use strict';
    for (let i = 0; i < drpdnMn.length; i++) {
      closeDrpdnMn(i);
    }
    const element = trgElmn[idx];
    const hasAttrPlcmnt = element.hasAttribute('data-placement');
    const prefixPlcmnt = 'otter-dropdown-placement-';
    const positionPlcmnt = (hasAttrPlcmnt) ? element.getAttribute('data-placement') : 'default'; //default
    if (!hasAttrPlcmnt) { element.setAttribute('data-placement', 'default'); } //default
    const makePlcmntCls = prefixPlcmnt + positionPlcmnt;
    element.lastChild.previousElementSibling.ariaExpanded = true;
    element.classList.replace('otter-dropdown-close', 'otter-dropdown-open');
    drpdnMn[idx].classList.add(makePlcmntCls);
    drpdnMn[idx].classList.replace("otter-dropdown-hidden", "otter-dropdown-visible");
    setLctDrpdnMn('in', idx);
  }
  
  function isDrpdnMnOpen(bool, idx) {
    'use strict';
    if (bool) {
      openDrpdnMn(idx);
    } else {
      closeDrpdnMn(idx);
    }
  }

  function closeDrpdnMn(idx) {
    'use strict';
    trgElmn[idx].lastChild.previousElementSibling.ariaExpanded = false;
    drpdnMn[idx].classList.replace("otter-dropdown-visible", "otter-dropdown-hidden");
    trgElmn[idx].classList.replace("otter-dropdown-open", "otter-dropdown-close");
    setLctDrpdnMn('out', idx)
  }

  function setLctDrpdnMn(loc, idx) {
    'use strict';
    const element = trgElmn[idx];
    const btnPlacement = element.dataset.placement;
    const CLIENT_WIDTH = (document.body.clientWidth);
    const CLIENT_HEIGHT = (document.body.clientHeight);
    const JUST_LEFT_AXIS = (trgElmn[idx].offsetLeft);
    const JUST_CENTER_AXIS = ((trgElmn[idx].offsetLeft) + ( (trgElmn[idx].offsetWidth) - drpdnMn[idx].offsetWidth) / 2);
    const JUST_RIGHT_AXIS = ((trgElmn[idx].offsetLeft) + ( (trgElmn[idx].offsetWidth) - drpdnMn[idx].offsetWidth));
    const ALIGN_BTM_AXIS = (trgElmn[idx].offsetTop + trgElmn[idx].offsetHeight);
    const ALIGN_TOP_AXIS = (ALIGN_BTM_AXIS - drpdnMn[idx].offsetHeight - trgElmn[idx].offsetHeight);
    const SCROLL_Y = Math.round(window.scrollY);
    function setPlacement( val, para ) {
      'use strict';
      const alignTopBasis = ( ALIGN_TOP_AXIS > 0 && ALIGN_TOP_AXIS > SCROLL_Y );
      const alignBtmBasis = ( ALIGN_BTM_AXIS > 0 && ALIGN_BTM_AXIS > SCROLL_Y && (CLIENT_HEIGHT / 1.5) > trgElmn[idx].offsetTop + drpdnMn[idx].clientHeight - trgElmn[idx].offsetHeight );
      if (btnPlacement === val) {
        drpdnMn[idx].style.minWidth = (trgElmn[idx].offsetWidth) + 'px';
        drpdnMn[idx].style.left = (loc === 'out') ? '-' + CLIENT_WIDTH + 'px' : para + 'px';
        if (btnPlacement === 'topLeft' || btnPlacement === 'top' || btnPlacement === 'topRight') {
          defineAlignBasis(alignTopBasis, ALIGN_TOP_AXIS, ALIGN_BTM_AXIS)
        } else {
          defineAlignBasis(alignBtmBasis, ALIGN_BTM_AXIS, ALIGN_TOP_AXIS)
        }
        function defineAlignBasis(axis, val1, val2) {
          if(axis) {
            drpdnMn[idx].style.top = (loc === 'out') ? '-' + CLIENT_HEIGHT + 'px' : val1 + 'px';
          } else {
            drpdnMn[idx].style.top = (loc === 'out') ? '-' + CLIENT_HEIGHT + 'px' : val2 + 'px';
          }
        }
      }
    }
    setPlacement('default', JUST_LEFT_AXIS);
    setPlacement('topLeft', JUST_LEFT_AXIS);
    setPlacement('top', JUST_CENTER_AXIS);
    setPlacement('topRight', JUST_RIGHT_AXIS);
    setPlacement('bottomLeft', JUST_LEFT_AXIS);
    setPlacement('bottom', JUST_CENTER_AXIS);
    setPlacement('bottomRight', JUST_RIGHT_AXIS);
  }

  function toStringTime() {
    'use strict';
    let result;
    const time = new Date();
    const timeStr1 = time.toLocaleTimeString();
    const timeStr2 = time.getUTCMilliseconds();
    return result = timeStr1 + ':' +timeStr2;
  }

  function getActiveBtnElmn() {
    'use strict';
    let isBtn;
    const activeElmn = cntnrElmnt.querySelector('.otter-dropdown-open');
    return isBtn = activeElmn;
  }
  
  function getActiveDrpdnMn() {
    'use strict';
    let isDrpdnMn;
    const activeElmn = document.querySelector('.otter-dropdown-visible');
    return isDrpdnMn = activeElmn;
  }

  function recordLog() {
    const logMsEvnt = [];
    const logActElmArry = [];
    const logPreElmArry = [];
    const getLog = cntnrElmnt.querySelectorAll('.log-item');
    logMsEvnt.push(getLog)

    for (let i = 0; i < getLog.length; i++) {
      const element = getLog[i];
      logActElmArry.push(element.childNodes[2].outerText);
    }
    for (let i = 0; i < logActElmArry.length; i++) {
      const element = logActElmArry[i];
      logPreElmArry[i] = element;
    }
    logPreElmArry.unshift( '-' );
    logPreElmArry.pop();
    for (let i = 0; i < getLog.length; i++) {
      const element = getLog[i];
      element.lastChild.textContent = logPreElmArry[i];
    }
  }

  function mouseEventLog(mouseState) {
    'use strict';
    const loadBtnItemText = getActiveBtnElmn().firstElementChild.innerText;
    const loadBtnItemAttr = getActiveBtnElmn().getAttribute('data-placement');
    const loadBtnItemCls = getActiveBtnElmn().classList[2];
    const loadBtnItemIdx = getActiveBtnElmn().getAttribute('data-index-number');
    const loadDrpdnMnItemText = getActiveDrpdnMn().innerText.replace(/\n\r?/g, '/');
    const loadDrpdnMnItemIdx = getActiveDrpdnMn().getAttribute('data-index-number');
    const loadDrpdnMnArrow = getActiveDrpdnMn().classList[1];
    const logElmnt = cntnrElmnt.querySelector('.event-log');
    
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

    const itemContainer = makeHtmlElement('li', { class: 'log-item' });
    const groopOfPairs = [ 
      { id: 1, name: mouseState, class: 'specified' },
      { id: 2, name: toStringTime(), class: 'log-time' },
      { id: 3, name: loadBtnItemIdx, class: 'trigger-idx' },
      { id: 4, name: loadBtnItemText, class: 'trigger-txt' },
      { id: 5, name: loadBtnItemAttr, class: 'trigger-plc' },
      { id: 6, name: loadBtnItemCls, class: 'trigger-cls' },
      { id: 7, name: loadDrpdnMnItemIdx, class: 'dropdown-idx' },
      { id: 8, name: loadDrpdnMnItemText, class: 'dropdown-txt' },
      { id: 9, name: loadDrpdnMnArrow, class: 'dropdown-arrow' },
      { id: 10, name: 'Data is from recordLog()', class: 'previous-idx' }
    ]
    const [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10] = groopOfPairs.map((item) =>
      makeHtmlElement('span', { class: item.class }, { textContent: item.name })
    );
    itemContainer.append(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10);
    logElmnt.append(itemContainer);
  }

  window.addEventListener('resize', function(){
    'use strict';
    console.log('resize event!');
    if( getActiveDrpdnMn() ) {
      const JUST_LEFT_AXIS = (getActiveBtnElmn().offsetLeft);
      const JUST_CENTER_AXIS = ((getActiveBtnElmn().offsetLeft) + ( (getActiveBtnElmn().offsetWidth) - getActiveDrpdnMn().offsetWidth) / 2);
      const JUST_RIGHT_AXIS = ((getActiveBtnElmn().offsetLeft) + ( (getActiveBtnElmn().offsetWidth) - getActiveDrpdnMn().offsetWidth));

      function defineBaseCoordinate(val) {
        'use strict';
        getActiveDrpdnMn().style.left = val + 'px';
      } 
      if ( getActiveDrpdnMn().classList.contains('otter-dropdown-placement-default') || 
        getActiveDrpdnMn().classList.contains('otter-dropdown-placement-bottomLeft') || 
        getActiveDrpdnMn().classList.contains('otter-dropdown-placement-topLeft') ) {
        defineBaseCoordinate(JUST_LEFT_AXIS);
      } else if ( getActiveDrpdnMn().classList.contains('otter-dropdown-placement-top') ||
        getActiveDrpdnMn().classList.contains('otter-dropdown-placement-bottom') ) {
        defineBaseCoordinate(JUST_CENTER_AXIS);
      } else if ( getActiveDrpdnMn().classList.contains('otter-dropdown-placement-bottomRight') ||
        getActiveDrpdnMn().classList.contains('otter-dropdown-placement-topRight' )) {
        defineBaseCoordinate(JUST_RIGHT_AXIS);
      } else {
        defineBaseCoordinate(JUST_LEFT_AXIS);
      }
    }
  });

})();

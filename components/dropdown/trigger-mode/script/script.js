'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-dropdown-trigger');
  const drpdnMn = document.querySelectorAll('.otter-dropdown');

  for (let i = 0; i < trgElmn.length; i++) {
    let CLICK_COUNT = 0;
    const element = trgElmn[i];
    element.addEventListener('click', function(event) {
      'use strict';
      CLICK_COUNT++;
      if (CLICK_COUNT % 2 === 0) {
        isDrpdnMnOpen(false, i);
        // eventLog('mouseleave')
      } else {
        openDrpdnMn(i);
        eventLog('click')
        setPrivousElmn();
      }
      event.preventDefault();
    })
  }

  function isDrpdnMnOpen(bool, idx) {
    'use strict';
    bool ? openDrpdnMn(idx) : closeDrpdnMn(idx);
  }

  function checkDrpdnMnExpanded(idx) {
    'use strict';
    const element = trgElmn[idx];
    const result = element.lastChild.previousElementSibling.ariaExpanded;
    return result;
  }

  function setDrpdnMnExpanded(idx) {
    'use strict';
    if (!checkDrpdnMnExpanded(idx)) {
      trgElmn[idx].lastChild.previousElementSibling.ariaExpanded = true;
    } else {
      trgElmn[idx].lastChild.previousElementSibling.ariaExpanded = false;
    }
  }

  function getTrgAttrPlcmnt(idx) {
    const element = trgElmn[idx];
    const result = element.getAttribute('data-placement');
    return result;
  }

  function createPlcmntClsNm(idx) {
    'use strict';
    const element = trgElmn[idx];
    const hasAttrPlcmnt = element.hasAttribute('data-placement');
    const prefixPlcmnt = 'otter-dropdown-placement-';
    const positionPlcmnt = (hasAttrPlcmnt) ? element.getAttribute('data-placement') : 'default';
    if (!hasAttrPlcmnt) { element.setAttribute('data-placement', 'default'); }
    const makePlcmntCls = prefixPlcmnt + positionPlcmnt;
    return makePlcmntCls;
  }

  function openDrpdnMn(idx) {
    'use strict';
    const element = trgElmn[idx];
    closeAllDrpdnMn();
    setDrpdnMnExpanded(idx);
    setTrgClsReplace(idx, 'otter-dropdown-close', 'otter-dropdown-open');
    setDrpdnMnClsAdd(idx, createPlcmntClsNm(idx));
    if (
      getTrgAttrPlcmnt(idx) === undefined ||
      getTrgAttrPlcmnt(idx) === '' ||
      getTrgAttrPlcmnt(idx) === 'default' ||
      getTrgAttrPlcmnt(idx) === 'bottomLeft' ||
      getTrgAttrPlcmnt(idx) === 'bottom' ||
      getTrgAttrPlcmnt(idx) === 'bottomRight' ) {
      setDrpdnMnClsRemove(idx, 'otter-slide-down-out');
      setDrpdnMnClsRemove(idx, 'otter-slide-down-in');
      setDrpdnMnClsAdd(idx, 'otter-slide-up-in');
      setDrpdnMnClsReplace(idx, "otter-slide-up-out", "otter-slide-up-in");
    } else {
      setDrpdnMnClsRemove(idx, 'otter-slide-up-out');
      setDrpdnMnClsRemove(idx, 'otter-slide-up-in');
      setDrpdnMnClsAdd(idx, 'otter-slide-down-in');
      setDrpdnMnClsReplace(idx, "otter-slide-down-out", "otter-slide-down-in");
    }
    setDrpdnMnClsReplace(idx, "otter-dropdown-hidden", "otter-dropdown-visible");
    setLctDrpdnMn('in', idx);
  }

  function closeDrpdnMn(idx) {
    'use strict';
    setDrpdnMnExpanded(idx);
    setTrgClsReplace(idx, 'otter-dropdown-open', 'otter-dropdown-close');
    setDrpdnMnClsReplace(idx, "otter-slide-up-in", "otter-slide-up-out");
    setDrpdnMnClsReplace(idx, "otter-slide-down-in", "otter-slide-down-out");
    setDrpdnMnClsReplace(idx, "otter-dropdown-visible", "otter-dropdown-hidden");
    setLctDrpdnMn('out', idx);
  }

  function closeAllDrpdnMn() {
    'use strict';
    for (let i = 0; i < drpdnMn.length; i++) {
      closeDrpdnMn(i);
    }
  }

  function setTrgClsReplace(idx, val1, val2) {
    'use strict';
    const element = trgElmn[idx];
    element.classList.replace(val1, val2);
  }

  function setDrpdnMnClsAdd(idx, val1) {
    'use strict';
    const element = drpdnMn[idx];
    element.classList.add(val1);
  }

  function setDrpdnMnClsRemove(idx, val1) {
    'use strict';
    const element = drpdnMn[idx];
    element.classList.remove(val1);
  }

  function setDrpdnMnClsReplace(idx, val1, val2) {
    'use strict';
    const element = drpdnMn[idx];
    element.classList.replace(val1, val2);
  }

  function setLctDrpdnMn(loc, idx) {
    'use strict';
    const element = trgElmn[idx];
    const getPlacement = element.dataset.placement;
    const checkArrowPointingAtCenter = element.getAttribute('data-pointer-at-center');
    const SCROLL_Y = Math.round(window.scrollY);
    const CLIENT_WIDTH = document.body.clientWidth;
    const CLIENT_HEIGHT = document.body.clientHeight;
    const GET_ARROW_POINTING_AT_CENTER_VALUE = checkArrowPointingAtCenter ? trgElmn[idx].offsetWidth / 2 : 0;
    const GET_INTER_BTN_DROPDOWN_MENU_VALUE = trgElmn[idx].offsetWidth - drpdnMn[idx].offsetWidth;
    const JUST_LEFT_AXIS = trgElmn[idx].offsetLeft + GET_ARROW_POINTING_AT_CENTER_VALUE;
    const JUST_CENTER_AXIS = trgElmn[idx].offsetLeft + ( GET_INTER_BTN_DROPDOWN_MENU_VALUE / 2 );
    const JUST_RIGHT_AXIS = trgElmn[idx].offsetLeft + GET_INTER_BTN_DROPDOWN_MENU_VALUE - GET_ARROW_POINTING_AT_CENTER_VALUE;
    const ALIGN_BTM_AXIS = trgElmn[idx].offsetTop + trgElmn[idx].offsetHeight;
    const ALIGN_TOP_AXIS = ALIGN_BTM_AXIS - drpdnMn[idx].offsetHeight - trgElmn[idx].offsetHeight;

    function setPlacement( val, para ) {
      'use strict';
      const alignTopBasis = ( ALIGN_TOP_AXIS > 0 && ALIGN_TOP_AXIS > SCROLL_Y );
      const alignBtmBasis = ( ALIGN_BTM_AXIS > 0 && ALIGN_BTM_AXIS > SCROLL_Y && (CLIENT_HEIGHT / 1.1) > trgElmn[idx].offsetTop + drpdnMn[idx].clientHeight - trgElmn[idx].offsetHeight );
      if (getPlacement === val) {
        drpdnMn[idx].style.minWidth = (trgElmn[idx].offsetWidth) + 'px';
        drpdnMn[idx].style.left = (loc === 'out') ? '-' + CLIENT_WIDTH + 'px' : para + 'px';
        if (getPlacement === 'topLeft' || getPlacement === 'top' || getPlacement === 'topRight') {
          defineAlignBasis(alignTopBasis, ALIGN_TOP_AXIS, ALIGN_BTM_AXIS)
        } else {
          defineAlignBasis(alignBtmBasis, ALIGN_BTM_AXIS, ALIGN_TOP_AXIS)
        }
        function defineAlignBasis(axis, val1, val2) {
          'use strict';
          function displayContainsClass(obj, val1, val2, class1, class2, class3 ) {
            'use strict';
            if (
              (obj.classList.contains(class1)) ||
              (obj.classList.contains(class2)) ||
              (obj.classList.contains(class3)) ) {
              obj.firstChild.style.display = val1;
              obj.lastChild.style.display = val2;
            }
          }
          if(axis) {
            drpdnMn[idx].style.top = (loc === 'out') ? '-' + CLIENT_HEIGHT + 'px' : val1 + 'px';
            displayContainsClass(drpdnMn[idx], 'block', 'none', 'otter-dropdown-show-arrow-light', 'otter-dropdown-show-arrow-black');
          } else {
            drpdnMn[idx].style.top = (loc === 'out') ? '-' + CLIENT_HEIGHT + 'px' : val2 + 'px';
            displayContainsClass(drpdnMn[idx], 'none', 'block', 'otter-dropdown-show-arrow-light', 'otter-dropdown-show-arrow-black');
            if (
              getTrgAttrPlcmnt(idx) === undefined ||
              getTrgAttrPlcmnt(idx) === '' ||
              getTrgAttrPlcmnt(idx) === 'default' ||
              getTrgAttrPlcmnt(idx) === 'bottomLeft' ||
              getTrgAttrPlcmnt(idx) === 'bottom' ||
              getTrgAttrPlcmnt(idx) === 'bottomRight' ) {
              setDrpdnMnClsRemove(idx, 'otter-slide-up-out');
              setDrpdnMnClsRemove(idx, 'otter-slide-up-in');
              setDrpdnMnClsAdd(idx, 'otter-slide-down-in');
              setDrpdnMnClsReplace(idx, "otter-slide-down-out", "otter-slide-down-in");
            } else {
              setDrpdnMnClsRemove(idx, 'otter-slide-down-out');
              setDrpdnMnClsRemove(idx, 'otter-slide-down-in');
              setDrpdnMnClsAdd(idx, 'otter-slide-up-in');
              setDrpdnMnClsReplace(idx, "otter-slide-up-out", "otter-slide-up-in");
            }
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

  function getPrivousElmnArray() {
    'use strict';
    const logAllArray = [];
    const logCurrentArray = [];
    const logPreviousArray = [];
    const getLogItem = cntnrElmnt.querySelectorAll('.log-item');
    logAllArray.push(getLogItem);
    for (let i = 0; i < getLogItem.length; i++) {
      const element = getLogItem[i];
      logCurrentArray.push(element.childNodes[2].outerText);
    }
    for (let i = 0; i < logCurrentArray.length; i++) {
      const element = logCurrentArray[i];
      logPreviousArray[i] = element;
    }
    logPreviousArray.unshift( '-' );
    logPreviousArray.pop();
    const result = logPreviousArray;
    return result;
  }

  function setPrivousElmn() {
    'use strict';
    const getLogItem = cntnrElmnt.querySelectorAll('.log-item');
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
    const result = timeStr1 + ':' +timeStr2;
    return result;
  }

  function getActiveBtnElmn() {
    'use strict';
    const activeElmn = cntnrElmnt.querySelector('.otter-dropdown-open');
    const result = activeElmn;
    return result;
  }

  function getActiveDrpdnMn() {
    'use strict';
    const activeElmn = document.querySelector('.otter-dropdown-visible');
    const result = activeElmn;
    return result;
  }

  function eventLog(mouseState) {
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
      { id: 2, name: getStringTime(), class: 'log-time' },
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
      const checkArrowPointingAtCenter = getActiveBtnElmn().getAttribute('data-pointer-at-center');
      const GET_ARROW_POINTING_AT_CENTER_VALUE = checkArrowPointingAtCenter ? getActiveBtnElmn().offsetWidth / 2 : 0;
      const GET_INTER_BTN_DROPDOWN_MENU_VALUE = getActiveBtnElmn().offsetWidth - getActiveDrpdnMn().offsetWidth;
      const JUST_LEFT_AXIS = getActiveBtnElmn().offsetLeft + GET_ARROW_POINTING_AT_CENTER_VALUE;
      const JUST_CENTER_AXIS = getActiveBtnElmn().offsetLeft + ( GET_INTER_BTN_DROPDOWN_MENU_VALUE / 2 );
      const JUST_RIGHT_AXIS = getActiveBtnElmn().offsetLeft + GET_INTER_BTN_DROPDOWN_MENU_VALUE - GET_ARROW_POINTING_AT_CENTER_VALUE;
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

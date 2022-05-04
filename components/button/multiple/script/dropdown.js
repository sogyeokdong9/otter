'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-dropdown-trigger');
  const drpdnMn = document.querySelectorAll('.otter-dropdown');
  const logElmnt = cntnrElmnt.querySelector('.event-log-dropdown');
  console.log(trgElmn);
  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    element.addEventListener('mouseenter', function() {
      'use strict';
      openDrpdnMn(i);
      eventLog('mouseenter')
      setPrivousElmn();
    })
    element.addEventListener('click', function(event) {
      'use strict';
      event.preventDefault();
    })
    for (let i = 0; i < drpdnMn.length; i++) {
      const element = drpdnMn[i];
      element.addEventListener('mouseleave', function() {
        'use strict';
        isDrpdnMnOpen(false, i);
      })
    }
  }
  function returnCheckValue( val1, val2 = '-' ) {
    const result = val1 || val2;
    return result;
  }
  function isDrpdnMnOpen(bool, idx) {
    'use strict';
    bool ? openDrpdnMn(idx) : closeDrpdnMn(idx);
  }
  function getTrgAttrPlcmnt(idx) {
    const element = trgElmn[idx];
    const result = returnCheckValue(element.getAttribute('data-placement'), 'default');
    return result;
  }
  function createPlcmntClsNm(idx) {
    'use strict';
    const element = trgElmn[idx];
    const hasAttrPlcmnt = element.hasAttribute('data-placement');
    const prefixPlcmnt = 'otter-dropdown-placement-';
    if (!hasAttrPlcmnt) { element.setAttribute('data-placement', 'default'); }
    const makePlcmntCls = prefixPlcmnt + getTrgAttrPlcmnt(idx);
    return makePlcmntCls;
  }
  function openDrpdnMn(idx) {
    'use strict';
    const element = trgElmn[idx];
    closeAllDrpdnMn();
    trgElmn[idx].lastChild.previousElementSibling.ariaExpanded = true;
    setTrgClsReplace(idx, 'otter-dropdown-close', 'otter-dropdown-open');
    setDrpdnMnClsAdd(idx, createPlcmntClsNm(idx));
    const expr = getTrgAttrPlcmnt(idx);
    switch (expr) {
      case 'topLeft':
      case 'top':
      case 'topRight':
        setDrpdnMnClsRemove(idx, 'otter-slide-up-out');
        setDrpdnMnClsRemove(idx, 'otter-slide-up-in');
        setDrpdnMnClsAdd(idx, 'otter-slide-down-in');
        setDrpdnMnClsReplace(idx, "otter-slide-down-out", "otter-slide-down-in");
        break;
      case 'leftTop':
      case 'left':
      case 'leftBottom':
        setDrpdnMnClsRemove(idx, 'otter-slide-left-out');
        setDrpdnMnClsRemove(idx, 'otter-slide-left-in');
        setDrpdnMnClsAdd(idx, 'otter-slide-right-in');
        setDrpdnMnClsReplace(idx, "otter-slide-right-out", "otter-slide-right-in");
        break;
      case 'rightTop':
      case 'right':
      case 'rightBottom':
        setDrpdnMnClsRemove(idx, 'otter-slide-right-out');
        setDrpdnMnClsRemove(idx, 'otter-slide-right-in');
        setDrpdnMnClsAdd(idx, 'otter-slide-left-in');
        setDrpdnMnClsReplace(idx, "otter-slide-left-out", "otter-slide-left-in");
        break;
      default:
        setDrpdnMnClsRemove(idx, 'otter-slide-down-out');
        setDrpdnMnClsRemove(idx, 'otter-slide-down-in');
        setDrpdnMnClsAdd(idx, 'otter-slide-up-in');
        setDrpdnMnClsReplace(idx, "otter-slide-up-out", "otter-slide-up-in");
    }
    setDrpdnMnClsReplace(idx, "otter-dropdown-hidden", "otter-dropdown-visible");
    setLctDrpdnMn('in', idx);
  }
  function closeDrpdnMn(idx) {
    'use strict';
    const element = trgElmn[idx];
    element.lastChild.previousElementSibling.ariaExpanded = false;
    setTrgClsReplace(idx, 'otter-dropdown-open', 'otter-dropdown-close');
    setDrpdnMnClsReplace(idx, "otter-slide-up-in", "otter-slide-up-out");
    setDrpdnMnClsReplace(idx, "otter-slide-down-in", "otter-slide-down-out");
    setDrpdnMnClsReplace(idx, "otter-slide-left-in", "otter-slide-left-out");
    setDrpdnMnClsReplace(idx, "otter-slide-right-in", "otter-slide-right-out");
    setDrpdnMnClsReplace(idx, "otter-dropdown-visible", "otter-dropdown-hidden");
    setLctDrpdnMn('out', idx);
  }
  function closeAllDrpdnMn() {
    'use strict';
    for (let i = 0; i < drpdnMn.length; i++) {
      closeDrpdnMn(i);
    }
  }
  function setTrgClsReplace(idx, class1, class2) {
    'use strict';
    const element = trgElmn[idx];
    element.classList.replace(class1, class2);
  }
  function setDrpdnMnClsAdd(idx, class1) {
    'use strict';
    const element = drpdnMn[idx];
    element.classList.add(class1);
  }
  function setDrpdnMnClsRemove(idx, class1) {
    'use strict';
    const element = drpdnMn[idx];
    element.classList.remove(class1);
  }
  function setDrpdnMnClsReplace(idx, class1, class2) {
    'use strict';
    const element = drpdnMn[idx];
    element.classList.replace(class1, class2);
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
    const LEFT_AXIS = JUST_RIGHT_AXIS + GET_ARROW_POINTING_AT_CENTER_VALUE - trgElmn[idx].offsetWidth;
    const RIGHT_AXIS = JUST_LEFT_AXIS - GET_ARROW_POINTING_AT_CENTER_VALUE + trgElmn[idx].offsetWidth;
    const ALIGN_BTM_AXIS = trgElmn[idx].offsetTop + trgElmn[idx].offsetHeight;
    const ALIGN_TOP_AXIS = trgElmn[idx].offsetTop - drpdnMn[idx].offsetHeight;
    const VALIGN_TOP_AXIS = trgElmn[idx].offsetTop;
    const VALIGN_MID_AXIS = trgElmn[idx].offsetTop + ( ( trgElmn[idx].offsetHeight - drpdnMn[idx].offsetHeight ) / 2 );
    const VALIGN_BTM_AXIS = trgElmn[idx].offsetTop + ( trgElmn[idx].offsetHeight - drpdnMn[idx].offsetHeight );
    function setPlacement( val, left1 ) {
      'use strict';
      const alignTopBasis = ( ALIGN_TOP_AXIS > 0 && ALIGN_TOP_AXIS > SCROLL_Y );
      const alignBtmBasis = ( ALIGN_BTM_AXIS > 0 && ALIGN_BTM_AXIS > SCROLL_Y && (CLIENT_HEIGHT / 1.1) > trgElmn[idx].offsetTop + drpdnMn[idx].clientHeight - trgElmn[idx].offsetHeight );
      const valignLeftBasis = ( VALIGN_TOP_AXIS > 0 && VALIGN_TOP_AXIS > SCROLL_Y && JUST_LEFT_AXIS - GET_ARROW_POINTING_AT_CENTER_VALUE - drpdnMn[idx].offsetWidth  > 0 );
      const valignRightBasis = ( VALIGN_TOP_AXIS > 0 && VALIGN_TOP_AXIS > SCROLL_Y && RIGHT_AXIS + drpdnMn[idx].offsetWidth  < CLIENT_WIDTH );
      if (getPlacement === val) {
        drpdnMn[idx].style.minWidth = `${drpdnMn[idx].offsetWidth}px`;
        drpdnMn[idx].style.left = (loc === 'out') ? `-${CLIENT_WIDTH}px` : `${left1}px`;
        const expr = getPlacement;
        switch (expr) {
          case 'topLeft':
          case 'top':
          case 'topRight':
            defineAlignBasis(alignTopBasis, ALIGN_TOP_AXIS, ALIGN_BTM_AXIS)
            break;
          case 'leftTop':
            defineAlignBasis(valignLeftBasis, VALIGN_TOP_AXIS, VALIGN_TOP_AXIS, LEFT_AXIS, RIGHT_AXIS);
            break;
          case 'left':
            defineAlignBasis(valignLeftBasis, VALIGN_MID_AXIS, VALIGN_MID_AXIS, LEFT_AXIS, RIGHT_AXIS);
            break;
          case 'leftBottom':
            defineAlignBasis(valignLeftBasis, VALIGN_BTM_AXIS, VALIGN_BTM_AXIS, LEFT_AXIS, RIGHT_AXIS);
            break;
          case 'rightTop':
            defineAlignBasis(valignRightBasis, VALIGN_TOP_AXIS, VALIGN_TOP_AXIS, RIGHT_AXIS, LEFT_AXIS);
            break;
          case 'right':
            defineAlignBasis(valignRightBasis, VALIGN_MID_AXIS, VALIGN_MID_AXIS, RIGHT_AXIS, LEFT_AXIS);
            break;
          case 'rightBottom':
            defineAlignBasis(valignRightBasis, VALIGN_BTM_AXIS, VALIGN_BTM_AXIS, RIGHT_AXIS, LEFT_AXIS);
            break;
          default:
            defineAlignBasis(alignBtmBasis, ALIGN_BTM_AXIS, ALIGN_TOP_AXIS);
        }
        function defineAlignBasis(axis, val1, val2, val3, val4) {
          'use strict';
          function getActiveDrpdMnClass() {
            'use strict';
            const activeDrpdMnClass = drpdnMn[idx] ? drpdnMn[idx].classList : null;
            const result = activeDrpdMnClass;
            return result;
          }
          function getActiveDrpdMnClassToString() {
            'use strict';
            const result = getActiveDrpdMnClass().toString();
            return result;
          }
          function getActiveDrpdMnHasClassString() {
            'use strict';
            const result = getActiveDrpdMnClassToString().indexOf('otter-dropdown-show-arrow');
            return result;
          }
          function displayContainsClass(obj, display1, display2 ) {
            'use strict';
            if ( getActiveDrpdMnHasClassString() !== -1 ) {
              obj.firstChild.style.display = display1;
              obj.lastChild.style.display = display2;
            }
          }
          if(axis) {
            drpdnMn[idx].style.top = (loc === 'out') ? `-${CLIENT_HEIGHT}px` : `${val1}px`;
            drpdnMn[idx].style.left = (loc === 'out') ? `-${CLIENT_WIDTH}px` : `${val3}px`;
            displayContainsClass(drpdnMn[idx], 'block', 'none');
          } else {
            drpdnMn[idx].style.top = (loc === 'out') ? `-${CLIENT_HEIGHT}px` : `${val2}px`;
            drpdnMn[idx].style.left = (loc === 'out') ? `-${CLIENT_WIDTH}px` : `${val4}px`;
            displayContainsClass(drpdnMn[idx], 'none', 'block');
            const expr = getTrgAttrPlcmnt(idx);
            switch (expr) {
              case 'topLeft':
              case 'top':
              case 'topRight':
                setDrpdnMnClsRemove(idx, 'otter-slide-down-out');
                setDrpdnMnClsRemove(idx, 'otter-slide-down-in');
                setDrpdnMnClsAdd(idx, 'otter-slide-up-in');
                setDrpdnMnClsReplace(idx, "otter-slide-up-out", "otter-slide-up-in");
                break;
              case 'leftTop':
              case 'left':
              case 'leftBottom':
                setDrpdnMnClsRemove(idx, 'otter-slide-right-out');
                setDrpdnMnClsRemove(idx, 'otter-slide-right-in');
                setDrpdnMnClsAdd(idx, 'otter-slide-left-in');
                setDrpdnMnClsReplace(idx, "otter-slide-left-out", "otter-slide-left-in");
                break;
              case 'rightTop':
              case 'right':
              case 'rightBottom':
                setDrpdnMnClsRemove(idx, 'otter-slide-left-out');
                setDrpdnMnClsRemove(idx, 'otter-slide-left-in');
                setDrpdnMnClsAdd(idx, 'otter-slide-right-in');
                setDrpdnMnClsReplace(idx, "otter-slide-right-out", "otter-slide-right-in");
                break;
              default:
                setDrpdnMnClsRemove(idx, 'otter-slide-up-out');
                setDrpdnMnClsRemove(idx, 'otter-slide-up-in');
                setDrpdnMnClsAdd(idx, 'otter-slide-down-in');
                setDrpdnMnClsReplace(idx, "otter-slide-down-out", "otter-slide-down-in");
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
    setPlacement('leftTop', LEFT_AXIS);
    setPlacement('left', LEFT_AXIS);
    setPlacement('leftBottom', LEFT_AXIS);
    setPlacement('rightTop', RIGHT_AXIS);
    setPlacement('right', RIGHT_AXIS);
    setPlacement('rightBottom', RIGHT_AXIS);
  }
  function getPrivousElmnArray() {
    'use strict';
    const logAllArray = [];
    const logCurrentArray = [];
    const logPreviousArray = [];
    const getLogItem = cntnrElmnt.querySelectorAll('.log-item-dropdown');
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
      document.querySelector('.event-log-title-dropdown').style.display = 'block';
    }
    logPreviousArray.unshift( '-' );
    logPreviousArray.pop();
    const result = logPreviousArray;
    return result;
  }
  function setPrivousElmn() {
    'use strict';
    const getLogItem = cntnrElmnt.querySelectorAll('.log-item-dropdown');
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
    const loadBtnItemIdx = returnCheckValue(getActiveBtnElmn().getAttribute('data-index-number'), 0);
    const loadBtnItemText = returnCheckValue(getActiveBtnElmn().outerText);
    const loadBtnItemAttr = returnCheckValue(getActiveBtnElmn().getAttribute('data-placement'));
    const loadBtnItemCls = returnCheckValue(getActiveBtnElmn().classList[2]);
    const loadDrpdnMnItemIdx = returnCheckValue(getActiveDrpdnMn().getAttribute('data-index-number'), 0);
    const loadDrpdnMnItemText = returnCheckValue(getActiveDrpdnMn().innerText.replace(/\n\r?/g, '/'));
    const loadDrpdnMnArrow = returnCheckValue(getActiveDrpdnMn().classList[1]);
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
    const itemContainer = makeHtmlElement('li', { class: 'log-item-dropdown' });
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
  logElmnt.insertAdjacentHTML('beforebegin', '<p class="event-log-title-dropdown">Event Log: Dropdown</p>');
  window.addEventListener('resize', function(){
    'use strict';
    if( getActiveDrpdnMn() ) {
      const getPlacement = getActiveBtnElmn() ? getActiveBtnElmn().dataset.placement : null;
      const checkArrowPointingAtCenter = getActiveBtnElmn() ? getActiveBtnElmn().getAttribute('data-pointer-at-center') : null;
      const SCROLL_Y = Math.round(window.scrollY);
      const CLIENT_WIDTH = document.body.clientWidth;
      // const CLIENT_HEIGHT = document.body.clientHeight;
      const GET_ARROW_POINTING_AT_CENTER_VALUE = checkArrowPointingAtCenter ? getActiveBtnElmn().offsetWidth / 2 : 0;
      const GET_INTER_BTN_DROPDOWN_MENU_VALUE = getActiveBtnElmn() ? getActiveBtnElmn().offsetWidth - getActiveDrpdnMn().offsetWidth : null;
      const JUST_LEFT_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetLeft + GET_ARROW_POINTING_AT_CENTER_VALUE : null;
      const JUST_CENTER_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetLeft + ( GET_INTER_BTN_DROPDOWN_MENU_VALUE / 2 ) : null;
      const JUST_RIGHT_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetLeft + GET_INTER_BTN_DROPDOWN_MENU_VALUE - GET_ARROW_POINTING_AT_CENTER_VALUE : null;
      const LEFT_AXIS = getActiveBtnElmn() ? JUST_RIGHT_AXIS + GET_ARROW_POINTING_AT_CENTER_VALUE - getActiveBtnElmn().offsetWidth : null;
      const RIGHT_AXIS = getActiveBtnElmn() ? JUST_LEFT_AXIS - GET_ARROW_POINTING_AT_CENTER_VALUE + getActiveBtnElmn().offsetWidth : null;
      // const ALIGN_BTM_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetTop + getActiveBtnElmn().offsetHeight : null;
      // const ALIGN_TOP_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetTop - getActiveDrpdnMn().offsetHeight : null;
      const VALIGN_TOP_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetTop : null;
      // const VALIGN_MID_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetTop + ( ( getActiveBtnElmn().offsetHeight - getActiveDrpdnMn().offsetHeight ) / 2 ) : null;
      // const VALIGN_BTM_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetTop + ( getActiveBtnElmn().offsetHeight - getActiveDrpdnMn().offsetHeight ) : null;
      const valignLeftBasis = ( VALIGN_TOP_AXIS > 0 && VALIGN_TOP_AXIS > SCROLL_Y && JUST_LEFT_AXIS - GET_ARROW_POINTING_AT_CENTER_VALUE - getActiveDrpdnMn().offsetWidth  > 0 );
      const valignRightBasis = ( VALIGN_TOP_AXIS > 0 && VALIGN_TOP_AXIS > SCROLL_Y && RIGHT_AXIS + getActiveDrpdnMn().offsetWidth  < CLIENT_WIDTH );
      function defineBaseCoordinate(left1, display1, display2) {
        'use strict';
        getActiveDrpdnMn().style.left = left1 + 'px';
        getActiveDrpdnMn().firstChild.style.display = display1;
        getActiveDrpdnMn().lastChild.style.display = display2;
      }
      const expr = getPlacement;
      switch (expr) {
        case 'top':
        case 'bottom':
          defineBaseCoordinate(JUST_CENTER_AXIS);
          break;
        case 'bottomLeft':
        case 'topLeft':
          defineBaseCoordinate(JUST_LEFT_AXIS);
          break;
        case 'bottomRight':
        case 'topRight':
          defineBaseCoordinate(JUST_RIGHT_AXIS);
          break;
        case 'leftTop':
        case 'left':
        case 'leftBottom':
          valignLeftBasis ? defineBaseCoordinate(LEFT_AXIS, 'block', 'none') : defineBaseCoordinate(RIGHT_AXIS, 'none', 'block'); 
          break;
        case 'rightTop':
        case 'right':
        case 'rightBottom':
          valignRightBasis ? defineBaseCoordinate(RIGHT_AXIS, 'block', 'none') : defineBaseCoordinate(LEFT_AXIS, 'none', 'block'); 
          break;
        default:
          defineBaseCoordinate(JUST_LEFT_AXIS);
      }
    }
  });
})();

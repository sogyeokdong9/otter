'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-tooltip-trigger');
  const tooltip = document.querySelectorAll('.otter-tooltip');
  const logElmnt = cntnrElmnt.querySelector('.event-log-tooltip');
  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    element.addEventListener('mouseenter', function() {
      'use strict';
      openTooltip(i);
      eventLog('mouseenter')
      setPrivousElmn();
    })
    element.addEventListener('click', function(event) {
      'use strict';
      event.preventDefault();
    })
    element.addEventListener('mouseleave', function() {
      'use strict';
      isTooltipOpen(false, i);
    })
  }
  function isTooltipOpen(bool, idx) {
    'use strict';
    bool ? openTooltip(idx) : closeTooltip(idx);
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
    const prefixPlcmnt = 'otter-tooltip-placement-';
    const positionPlcmnt = (hasAttrPlcmnt) ? element.getAttribute('data-placement') : 'default';
    if (!hasAttrPlcmnt) { element.setAttribute('data-placement', 'default'); }
    const makePlcmntCls = prefixPlcmnt + positionPlcmnt;
    return makePlcmntCls;
  }
  function openTooltip(idx) {
    'use strict';
    const element = trgElmn[idx];
    closeAllTooltip();
    element.lastElementChild.ariaLabel = 'open';
    element.lastElementChild.ariaExpanded = true;
    element.lastElementChild.firstChild.ariaLabel = 'unfold';
    setTrgClsReplace(idx, 'otter-tooltip-close', 'otter-tooltip-open');
    setTooltipClsAdd(idx, createPlcmntClsNm(idx));
    const expr = getTrgAttrPlcmnt(idx);
    switch (expr) {
      case 'bottomLeft':
      case 'bottom':
      case 'bottomRight':
        setTooltipClsRemove(idx, 'otter-slide-down-out');
        setTooltipClsRemove(idx, 'otter-slide-down-in');
        setTooltipClsAdd(idx, 'otter-slide-up-in');
        setTooltipClsReplace(idx, "otter-slide-up-out", "otter-slide-up-in");
        break;
      case 'leftTop':
      case 'left':
      case 'leftBottom':
        setTooltipClsRemove(idx, 'otter-slide-left-out');
        setTooltipClsRemove(idx, 'otter-slide-left-in');
        setTooltipClsAdd(idx, 'otter-slide-right-in');
        setTooltipClsReplace(idx, "otter-slide-right-out", "otter-slide-right-in");
        break;
      case 'rightTop':
      case 'right':
      case 'rightBottom':
        setTooltipClsRemove(idx, 'otter-slide-right-out');
        setTooltipClsRemove(idx, 'otter-slide-right-in');
        setTooltipClsAdd(idx, 'otter-slide-left-in');
        setTooltipClsReplace(idx, "otter-slide-left-out", "otter-slide-left-in");
        break;
      default:
        setTooltipClsRemove(idx, 'otter-slide-up-out');
        setTooltipClsRemove(idx, 'otter-slide-up-in');
        setTooltipClsAdd(idx, 'otter-slide-down-in');
        setTooltipClsReplace(idx, "otter-slide-down-out", "otter-slide-down-in");
    }
    setTooltipClsReplace(idx, "otter-tooltip-hidden", "otter-tooltip-visible");
    setLctTooltip('in', idx);
  }
  function closeTooltip(idx) {
    'use strict';
    const element = trgElmn[idx];
    element.lastElementChild.ariaLabel = 'close';
    element.lastElementChild.ariaExpanded = false;
    element.lastElementChild.firstChild.ariaLabel = 'fold';
    setTrgClsReplace(idx, 'otter-tooltip-open', 'otter-tooltip-close');
    setTooltipClsReplace(idx, "otter-slide-up-in", "otter-slide-up-out");
    setTooltipClsReplace(idx, "otter-slide-down-in", "otter-slide-down-out");
    setTooltipClsReplace(idx, "otter-slide-left-in", "otter-slide-left-out");
    setTooltipClsReplace(idx, "otter-slide-right-in", "otter-slide-right-out");
    setTooltipClsReplace(idx, "otter-tooltip-visible", "otter-tooltip-hidden");
    setLctTooltip('out', idx);
  }
  function closeAllTooltip() {
    'use strict';
    for (let i = 0; i < tooltip.length; i++) {
      closeTooltip(i);
    }
  }
  function setTrgClsReplace(idx, class1, class2) {
    'use strict';
    const element = trgElmn[idx];
    element.classList.replace(class1, class2);
  }
  function setTooltipClsAdd(idx, class1) {
    'use strict';
    const element = tooltip[idx];
    element.classList.add(class1);
  }
  function setTooltipClsRemove(idx, class1) {
    'use strict';
    const element = tooltip[idx];
    element.classList.remove(class1);
  }
  function setTooltipClsReplace(idx, class1, class2) {
    'use strict';
    const element = tooltip[idx];
    element.classList.replace(class1, class2);
  }
  function setLctTooltip(loc, idx) {
    'use strict';
    const element = trgElmn[idx];
    const getPlacement = element.dataset.placement;
    const checkArrowPointingAtCenter = element.getAttribute('data-pointer-at-center');
    const SCROLL_Y = Math.round(window.scrollY);
    const CLIENT_WIDTH = document.body.clientWidth;
    const CLIENT_HEIGHT = document.body.clientHeight;
    const GET_ARROW_POINTING_AT_CENTER_VALUE = checkArrowPointingAtCenter ? trgElmn[idx].offsetWidth / 2 : 0;
    const GET_INTER_BTN_TOOLTIP_VALUE = trgElmn[idx].offsetWidth - tooltip[idx].offsetWidth;
    const JUST_LEFT_AXIS = trgElmn[idx].offsetLeft + GET_ARROW_POINTING_AT_CENTER_VALUE;
    const JUST_CENTER_AXIS = trgElmn[idx].offsetLeft + ( GET_INTER_BTN_TOOLTIP_VALUE / 2 );
    const JUST_RIGHT_AXIS = trgElmn[idx].offsetLeft + GET_INTER_BTN_TOOLTIP_VALUE - GET_ARROW_POINTING_AT_CENTER_VALUE;
    const LEFT_AXIS = JUST_RIGHT_AXIS + GET_ARROW_POINTING_AT_CENTER_VALUE - trgElmn[idx].offsetWidth;
    const RIGHT_AXIS = JUST_LEFT_AXIS - GET_ARROW_POINTING_AT_CENTER_VALUE + trgElmn[idx].offsetWidth;
    const ALIGN_BTM_AXIS = trgElmn[idx].offsetTop + trgElmn[idx].offsetHeight;
    const ALIGN_TOP_AXIS = trgElmn[idx].offsetTop - tooltip[idx].offsetHeight;
    const VALIGN_TOP_AXIS = trgElmn[idx].offsetTop;
    const VALIGN_MID_AXIS = trgElmn[idx].offsetTop + ( ( trgElmn[idx].offsetHeight - tooltip[idx].offsetHeight ) / 2 );
    const VALIGN_BTM_AXIS = trgElmn[idx].offsetTop + ( trgElmn[idx].offsetHeight - tooltip[idx].offsetHeight );
    function setPlacement(val, left1) {
      'use strict';
      const alignTopBasis = ( ALIGN_TOP_AXIS > 0 && ALIGN_TOP_AXIS > SCROLL_Y ); 
      const alignBtmBasis = ( ALIGN_BTM_AXIS > 0 && ALIGN_BTM_AXIS > SCROLL_Y && (CLIENT_HEIGHT / 1.1) > trgElmn[idx].offsetTop + tooltip[idx].clientHeight - trgElmn[idx].offsetHeight );
      const valignLeftBasis = ( VALIGN_TOP_AXIS > 0 && VALIGN_TOP_AXIS > SCROLL_Y && JUST_LEFT_AXIS - GET_ARROW_POINTING_AT_CENTER_VALUE - tooltip[idx].offsetWidth  > 0 );
      const valignRightBasis = ( VALIGN_TOP_AXIS > 0 && VALIGN_TOP_AXIS > SCROLL_Y && RIGHT_AXIS + tooltip[idx].offsetWidth  < CLIENT_WIDTH );
      if (getPlacement === val) {
        tooltip[idx].style.minWidth = (tooltip[idx].offsetWidth) + 'px';
        tooltip[idx].style.left = (loc === 'out') ? '-' + CLIENT_WIDTH + 'px' : left1 + 'px';
        const expr = getPlacement;
        switch (expr) {
          case 'bottomLeft':
          case 'bottom':
          case 'bottomRight':
            defineAlignBasis(alignBtmBasis, ALIGN_BTM_AXIS, ALIGN_TOP_AXIS);
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
            defineAlignBasis(alignTopBasis, ALIGN_TOP_AXIS, ALIGN_BTM_AXIS);
        }
        function defineAlignBasis(axis, val1, val2, val3, val4) {
          'use strict';
          function getActiveTooltipClass() {
            'use strict';
            const activeTooltipClass = tooltip[idx] ? tooltip[idx].classList : null;
            const result = activeTooltipClass;
            return result;
          }
          function getActiveTooltipClassToString() {
            'use strict';
            const result = getActiveTooltipClass().toString();
            return result;
          }
          function getActiveTooltipHasClassString() {
            'use strict';
            const result = getActiveTooltipClassToString().indexOf('otter-tooltip-show-arrow');
            return result;
          }
          function displayContainsClass(obj, display1, display2 ) {
            'use strict';
            if ( getActiveTooltipHasClassString() !== -1 ) {
              obj.firstChild.style.display = display1;
              obj.lastChild.style.display = display2;
            }
          }
          if(axis) {
            tooltip[idx].style.top = (loc === 'out') ? '-' + CLIENT_HEIGHT + 'px' : val1 + 'px';
            tooltip[idx].style.left = (loc === 'out') ? '-' + CLIENT_WIDTH + 'px' : val3 + 'px';
            displayContainsClass(tooltip[idx], 'block', 'none');
          } else {
            tooltip[idx].style.top = (loc === 'out') ? '-' + CLIENT_HEIGHT + 'px' : val2 + 'px';
            tooltip[idx].style.left = (loc === 'out') ? '-' + CLIENT_WIDTH + 'px' : val4 + 'px';
            displayContainsClass(tooltip[idx], 'none', 'block');
            const expr = getTrgAttrPlcmnt(idx);
            switch (expr) {
              case 'bottomLeft':
              case 'bottom':
              case 'bottomRight':
                setTooltipClsRemove(idx, 'otter-slide-up-out');
                setTooltipClsRemove(idx, 'otter-slide-up-in');
                setTooltipClsAdd(idx, 'otter-slide-down-in');
                setTooltipClsReplace(idx, "otter-slide-down-out", "otter-slide-down-in");
                break;
              case 'leftTop':
              case 'left':
              case 'leftBottom':
                setTooltipClsRemove(idx, 'otter-slide-right-out');
                setTooltipClsRemove(idx, 'otter-slide-right-in');
                setTooltipClsAdd(idx, 'otter-slide-left-in');
                setTooltipClsReplace(idx, "otter-slide-left-out", "otter-slide-left-in");
                break;
              case 'rightTop':
              case 'right':
              case 'rightBottom':
                setTooltipClsRemove(idx, 'otter-slide-left-out');
                setTooltipClsRemove(idx, 'otter-slide-left-in');
                setTooltipClsAdd(idx, 'otter-slide-right-in');
                setTooltipClsReplace(idx, "otter-slide-right-out", "otter-slide-right-in");
                break;
              default:
                setTooltipClsRemove(idx, 'otter-slide-up-out');
                setTooltipClsRemove(idx, 'otter-slide-up-in');
                setTooltipClsAdd(idx, 'otter-slide-down-in');
                setTooltipClsReplace(idx, "otter-slide-down-out", "otter-slide-down-in");
            }
          }
        }
      }
    }
    setPlacement('default', JUST_CENTER_AXIS);
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
    if (logAllArray.length > 0) { 
      document.querySelector('.event-log-title-tooltip').style.display = 'block';
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
    const activeElmn = cntnrElmnt.querySelector('.otter-tooltip-open');
    const result = activeElmn;
    return result;
  }
  function getActiveTooltip() {
    'use strict';
    const activeElmn = document.querySelector('.otter-tooltip-visible');
    const result = activeElmn;
    return result;
  }
  function getReplaceString() {
    const element = String(getActiveBtnElmn().classList);
    let newString = element.replaceAll(' otter-btn', '').replaceAll(' otter-tooltip-trigger otter-tooltip-link otter-tooltip-open', '');
    return newString;
  }
  function eventLog(mouseState) {
    'use strict';
    const loadBtnItemText = ( Boolean(getActiveBtnElmn().firstElementChild.innerText) ) ? getActiveBtnElmn().firstElementChild.innerText : 'null';
    const loadBtnItemAttr = getActiveBtnElmn().getAttribute('data-placement');
    const loadBtnItemCls = getReplaceString();
    const loadBtnItemIdx = getActiveBtnElmn().getAttribute('data-index-number');
    const loadTooltipItemText = getActiveTooltip().innerText.replace(/\n\r?/g, '/');
    const loadTooltipItemIdx = getActiveTooltip().getAttribute('data-index-number');
    const loadTooltipArrow = getActiveTooltip().classList[1];
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
      { id: 7, name: loadTooltipItemIdx, class: 'tooltip-idx' },
      { id: 8, name: loadTooltipItemText, class: 'tooltip-txt' },
      { id: 9, name: loadTooltipArrow, class: 'tooltip-arrow' },
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
    if( getActiveTooltip() ) {
      const getPlacement = getActiveBtnElmn() ? getActiveBtnElmn().dataset.placement : null;
      const checkArrowPointingAtCenter = getActiveBtnElmn() ? getActiveBtnElmn().getAttribute('data-pointer-at-center') : null;
      const SCROLL_Y = Math.round(window.scrollY);
      const CLIENT_WIDTH = document.body.clientWidth;
      // const CLIENT_HEIGHT = document.body.clientHeight;
      const GET_ARROW_POINTING_AT_CENTER_VALUE = checkArrowPointingAtCenter ? getActiveBtnElmn().offsetWidth / 2 : 0;
      const GET_INTER_BTN_TOOLTIP_VALUE = getActiveBtnElmn() ? getActiveBtnElmn().offsetWidth - getActiveTooltip().offsetWidth: null;
      const JUST_LEFT_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetLeft + GET_ARROW_POINTING_AT_CENTER_VALUE: null;
      const JUST_CENTER_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetLeft + ( GET_INTER_BTN_TOOLTIP_VALUE / 2 ): null;
      const JUST_RIGHT_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetLeft + GET_INTER_BTN_TOOLTIP_VALUE - GET_ARROW_POINTING_AT_CENTER_VALUE: null;
      const LEFT_AXIS = getActiveBtnElmn() ? JUST_RIGHT_AXIS + GET_ARROW_POINTING_AT_CENTER_VALUE - getActiveBtnElmn().offsetWidth : null;
      const RIGHT_AXIS = getActiveBtnElmn() ? JUST_LEFT_AXIS - GET_ARROW_POINTING_AT_CENTER_VALUE + getActiveBtnElmn().offsetWidth : null;
      // const ALIGN_BTM_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetTop + getActiveBtnElmn().offsetHeight : null;
      // const ALIGN_TOP_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetTop - getActiveTooltip().offsetHeight : null;
      const VALIGN_TOP_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetTop : null;
      // const VALIGN_MID_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetTop + ( ( getActiveBtnElmn().offsetHeight - getActiveTooltip().offsetHeight ) / 2 ) : null;
      // const VALIGN_BTM_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetTop + ( getActiveBtnElmn().offsetHeight - getActiveTooltip().offsetHeight ) : null;
      const valignLeftBasis = ( VALIGN_TOP_AXIS > 0 && VALIGN_TOP_AXIS > SCROLL_Y && JUST_LEFT_AXIS - GET_ARROW_POINTING_AT_CENTER_VALUE - getActiveTooltip().offsetWidth  > 0 );
      const valignRightBasis = ( VALIGN_TOP_AXIS > 0 && VALIGN_TOP_AXIS > SCROLL_Y && RIGHT_AXIS + getActiveTooltip().offsetWidth  < CLIENT_WIDTH );
      function defineBaseCoordinate(left1, display1, display2) {
        'use strict';
        getActiveTooltip().style.left = left1 + 'px';
        getActiveTooltip().firstChild.style.display = display1;
        getActiveTooltip().lastChild.style.display = display2;
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
          defineBaseCoordinate(JUST_CENTER_AXIS);
      }
    }
  });
  logElmnt.insertAdjacentHTML('beforebegin', '<h4 class="event-log-title-tooltip">Log Event: Tooltip</h4>');
})();

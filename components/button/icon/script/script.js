'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-tooltip-trigger');
  const tooltip = document.querySelectorAll('.otter-tooltip');

  // console.log(trgElmn);

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
    trgElmn[idx].lastChild.previousElementSibling.ariaExpanded = true;
    setTrgClsReplace(idx, 'otter-tooltip-close', 'otter-tooltip-open');
    setTooltipClsAdd(idx, createPlcmntClsNm(idx));
    if (
      getTrgAttrPlcmnt(idx) === undefined ||
      getTrgAttrPlcmnt(idx) === '' ||
      getTrgAttrPlcmnt(idx) === 'default' ||
      getTrgAttrPlcmnt(idx) === 'bottomLeft' ||
      getTrgAttrPlcmnt(idx) === 'bottom' ||
      getTrgAttrPlcmnt(idx) === 'bottomRight' ) {
      setTooltipClsRemove(idx, 'otter-slide-down-out');
      setTooltipClsRemove(idx, 'otter-slide-down-in');
      setTooltipClsAdd(idx, 'otter-slide-up-in');
      setTooltipClsReplace(idx, "otter-slide-up-out", "otter-slide-up-in");
    } else {
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
    trgElmn[idx].lastChild.previousElementSibling.ariaExpanded = false;
    setTrgClsReplace(idx, 'otter-tooltip-open', 'otter-tooltip-close');
    setTooltipClsReplace(idx, "otter-slide-up-in", "otter-slide-up-out");
    setTooltipClsReplace(idx, "otter-slide-down-in", "otter-slide-down-out");
    setTooltipClsReplace(idx, "otter-tooltip-visible", "otter-tooltip-hidden");
    setLctTooltip('out', idx);
  }

  function closeAllTooltip() {
    'use strict';
    for (let i = 0; i < tooltip.length; i++) {
      closeTooltip(i);
    }
  }

  function setTrgClsReplace(idx, val1, val2) {
    'use strict';
    const element = trgElmn[idx];
    element.classList.replace(val1, val2);
  }

  function setTooltipClsAdd(idx, val1) {
    'use strict';
    const element = tooltip[idx];
    element.classList.add(val1);
  }

  function setTooltipClsRemove(idx, val1) {
    'use strict';
    const element = tooltip[idx];
    element.classList.remove(val1);
  }

  function setTooltipClsReplace(idx, val1, val2) {
    'use strict';
    const element = tooltip[idx];
    element.classList.replace(val1, val2);
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
    const ALIGN_BTM_AXIS = trgElmn[idx].offsetTop + trgElmn[idx].offsetHeight;
    const ALIGN_TOP_AXIS = ALIGN_BTM_AXIS - tooltip[idx].offsetHeight - trgElmn[idx].offsetHeight;

    function setPlacement( val, para ) {
      'use strict';
      const alignTopBasis = ( ALIGN_TOP_AXIS > 0 && ALIGN_TOP_AXIS > SCROLL_Y );
      const alignBtmBasis = ( ALIGN_BTM_AXIS > 0 && ALIGN_BTM_AXIS > SCROLL_Y && (CLIENT_HEIGHT / 1.1) > trgElmn[idx].offsetTop + tooltip[idx].clientHeight - trgElmn[idx].offsetHeight );
      if (getPlacement === val) {
        tooltip[idx].style.minWidth = (tooltip[idx].offsetWidth) + 'px';
        tooltip[idx].style.left = (loc === 'out') ? '-' + CLIENT_WIDTH + 'px' : para + 'px';
        if (getPlacement === 'topLeft' || getPlacement === 'top' || getPlacement === 'topRight' || getPlacement === 'default') {
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
            tooltip[idx].style.top = (loc === 'out') ? '-' + CLIENT_HEIGHT + 'px' : val1 + 'px';
            displayContainsClass(tooltip[idx], 'block', 'none', 'otter-tooltip-show-arrow-light', 'otter-tooltip-show-arrow-black');
          } else {
            tooltip[idx].style.top = (loc === 'out') ? '-' + CLIENT_HEIGHT + 'px' : val2 + 'px';
            displayContainsClass(tooltip[idx], 'none', 'block', 'otter-tooltip-show-arrow-light', 'otter-tooltip-show-arrow-black');
            if (
              // getTrgAttrPlcmnt(idx) === undefined ||
              // getTrgAttrPlcmnt(idx) === '' ||
              // getTrgAttrPlcmnt(idx) === 'default' ||
              getTrgAttrPlcmnt(idx) === 'bottomLeft' ||
              getTrgAttrPlcmnt(idx) === 'bottom' ||
              getTrgAttrPlcmnt(idx) === 'bottomRight' ) {
              setTooltipClsRemove(idx, 'otter-slide-up-out');
              setTooltipClsRemove(idx, 'otter-slide-up-in');
              setTooltipClsAdd(idx, 'otter-slide-down-in');
              setTooltipClsReplace(idx, "otter-slide-down-out", "otter-slide-down-in");
            } else {
              setTooltipClsRemove(idx, 'otter-slide-down-out');
              setTooltipClsRemove(idx, 'otter-slide-down-in');
              setTooltipClsAdd(idx, 'otter-slide-up-in');
              setTooltipClsReplace(idx, "otter-slide-up-out", "otter-slide-up-in");
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

  function checkBtnItemText() {
    const loadBtnItemText = getActiveBtnElmn().firstElementChild.innerText;
    const result = Boolean(loadBtnItemText);
    return result;
  }

  function eventLog(mouseState) {
    'use strict';
    console.log();
    
    const loadBtnItemText = checkBtnItemText() ? getActiveBtnElmn().firstElementChild.innerText : '(null)';
    const loadBtnItemAttr = getActiveBtnElmn().getAttribute('data-placement');
    const loadBtnItemCls = getActiveBtnElmn().classList[2];
    const loadBtnItemIdx = getActiveBtnElmn().getAttribute('data-index-number');
    const loadTooltipItemText = getActiveTooltip().innerText.replace(/\n\r?/g, '/');
    const loadTooltipItemIdx = getActiveTooltip().getAttribute('data-index-number');
    const loadTooltipArrow = getActiveTooltip().classList[1];
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
      const checkArrowPointingAtCenter = getActiveBtnElmn() ? getActiveBtnElmn().getAttribute('data-pointer-at-center'): null;
      const GET_ARROW_POINTING_AT_CENTER_VALUE = checkArrowPointingAtCenter ? getActiveBtnElmn().offsetWidth / 2 : 0;
      const GET_INTER_BTN_TOOLTIP_VALUE = getActiveBtnElmn() ? getActiveBtnElmn().offsetWidth - getActiveTooltip().offsetWidth: null;
      const JUST_LEFT_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetLeft + GET_ARROW_POINTING_AT_CENTER_VALUE: null;
      const JUST_CENTER_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetLeft + ( GET_INTER_BTN_TOOLTIP_VALUE / 2 ): null;
      const JUST_RIGHT_AXIS = getActiveBtnElmn() ? getActiveBtnElmn().offsetLeft + GET_INTER_BTN_TOOLTIP_VALUE - GET_ARROW_POINTING_AT_CENTER_VALUE: null;
      function defineBaseCoordinate(val) {
        'use strict';
        getActiveTooltip().style.left = val + 'px';
      }
      if ( getActiveTooltip().classList.contains('otter-tooltip-placement-default') ||
        getActiveTooltip().classList.contains('otter-tooltip-placement-bottomLeft') ||
        getActiveTooltip().classList.contains('otter-tooltip-placement-topLeft') ) {
        defineBaseCoordinate(JUST_LEFT_AXIS);
      } else if ( getActiveTooltip().classList.contains('otter-tooltip-placement-top') ||
        getActiveTooltip().classList.contains('otter-tooltip-placement-bottom') ) {
        defineBaseCoordinate(JUST_CENTER_AXIS);
      } else if ( getActiveTooltip().classList.contains('otter-tooltip-placement-bottomRight') ||
        getActiveTooltip().classList.contains('otter-tooltip-placement-topRight' )) {
        defineBaseCoordinate(JUST_RIGHT_AXIS);
      } else {
        defineBaseCoordinate(JUST_LEFT_AXIS);
      }
    }
  });
})();

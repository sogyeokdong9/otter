'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-tooltip-trigger');
  const tooltip = document.querySelectorAll('.otter-tooltip');

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
    } else if (
      getTrgAttrPlcmnt(idx) === 'topLeft' ||
      getTrgAttrPlcmnt(idx) === 'top' ||
      getTrgAttrPlcmnt(idx) === 'topRight' ) {
      setTooltipClsRemove(idx, 'otter-slide-up-out');
      setTooltipClsRemove(idx, 'otter-slide-up-in');
      setTooltipClsAdd(idx, 'otter-slide-down-in');
      setTooltipClsReplace(idx, "otter-slide-down-out", "otter-slide-down-in");
    } else if (
      getTrgAttrPlcmnt(idx) === 'leftTop' ||
      getTrgAttrPlcmnt(idx) === 'left' ||
      getTrgAttrPlcmnt(idx) === 'leftBottom' ) {
      setTooltipClsRemove(idx, 'otter-slide-left-out');
      setTooltipClsRemove(idx, 'otter-slide-left-in');
      setTooltipClsAdd(idx, 'otter-slide-right-in');
      setTooltipClsReplace(idx, "otter-slide-right-out", "otter-slide-right-in");
    } else {
      setTooltipClsRemove(idx, 'otter-slide-right-out');
      setTooltipClsRemove(idx, 'otter-slide-right-in');
      setTooltipClsAdd(idx, 'otter-slide-left-in');
      setTooltipClsReplace(idx, "otter-slide-left-out", "otter-slide-left-in");
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
    const LEFT_AXIS = JUST_RIGHT_AXIS - trgElmn[idx].offsetWidth;
    const RIGHT_AXIS = JUST_LEFT_AXIS + trgElmn[idx].offsetWidth;
    // const LEFT_TOP_AXIS = JUST_LEFT_AXIS + trgElmn[idx].offsetWidth;
    const ALIGN_BTM_AXIS = trgElmn[idx].offsetTop + trgElmn[idx].offsetHeight;
    const ALIGN_TOP_AXIS = trgElmn[idx].offsetTop - tooltip[idx].offsetHeight;
    const VALIGN_TOP_AXIS = trgElmn[idx].offsetTop;
    const VALIGN_MID_AXIS = trgElmn[idx].offsetTop + ( (trgElmn[idx].offsetHeight - tooltip[idx].offsetHeight) / 2);
    const VALIGN_BTM_AXIS = trgElmn[idx].offsetTop + ( (trgElmn[idx].offsetHeight - tooltip[idx].offsetHeight));

    // ALIGN_BTM_AXIS: 트리거 object의 y축 좌표 값 + 트리거 object의 높이(offsetHeight);
    // ALIGN_TOP_AXIS: 트리거 object의 y축 좌표 값 - 툴팁 object의 높이(offsetHeight); 
    function setPlacement( val, para ) {
      'use strict';
      // 0보다 크고, 현재 스크롤 위치보다 클 때
      const alignTopBasis = ( ALIGN_TOP_AXIS > 0 && ALIGN_TOP_AXIS > SCROLL_Y ); 
      // 0보다 크고, 현재 스크롤 위치보다 크고,  클라이언의 높이 >  트리거 object의 y축 좌표 값 + 툴팁의 높이 - 트리거 
      const alignBtmBasis = ( ALIGN_BTM_AXIS > 0 && ALIGN_BTM_AXIS > SCROLL_Y && (CLIENT_HEIGHT / 1.1) > trgElmn[idx].offsetTop + tooltip[idx].clientHeight - trgElmn[idx].offsetHeight );
      // const alignObjTopBasis = ( ALIGN_BTM_AXIS > 0 && ALIGN_BTM_AXIS > SCROLL_Y && (CLIENT_HEIGHT / 1.1) > trgElmn[idx].offsetTop + tooltip[idx].clientHeight - trgElmn[idx].offsetHeight );
      const valignTopBasis = ( VALIGN_TOP_AXIS > 0 && VALIGN_TOP_AXIS > SCROLL_Y && VALIGN_TOP_AXIS == tooltip[idx].offsetTop );
      const valignMidBasis = ( VALIGN_TOP_AXIS > 0 && VALIGN_TOP_AXIS > SCROLL_Y && VALIGN_TOP_AXIS == tooltip[idx].offsetTop );
      const valignBtmBasis = ( VALIGN_TOP_AXIS > 0 && VALIGN_TOP_AXIS > SCROLL_Y && VALIGN_TOP_AXIS == tooltip[idx].offsetTop );
      if (getPlacement === val) {
        tooltip[idx].style.minWidth = (tooltip[idx].offsetWidth) + 'px';
        tooltip[idx].style.left = (loc === 'out') ? '-' + CLIENT_WIDTH + 'px' : para + 'px';
        if (
          getPlacement === 'topLeft' || 
          getPlacement === 'top' || 
          getPlacement === 'topRight' || 
          getPlacement === 'default') {
          defineAlignBasis(alignTopBasis, ALIGN_TOP_AXIS, ALIGN_BTM_AXIS)
        } else if (
          getPlacement === 'bottomLeft' || 
          getPlacement === 'bottom' || 
          getPlacement === 'bottomRight') {
          defineAlignBasis(alignBtmBasis, ALIGN_BTM_AXIS, ALIGN_TOP_AXIS)
        } else if (getPlacement === 'leftTop') {
          defineAlignBasis(valignTopBasis, VALIGN_TOP_AXIS, VALIGN_TOP_AXIS)
        } else if (getPlacement === 'left' ) {
          defineAlignBasis(valignMidBasis, VALIGN_MID_AXIS, VALIGN_MID_AXIS)
        } else if (getPlacement === 'leftBottom' ) {
          defineAlignBasis(valignBtmBasis, VALIGN_BTM_AXIS, VALIGN_BTM_AXIS)
        } else if (getPlacement === 'rightTop') {
          defineAlignBasis(valignTopBasis, VALIGN_TOP_AXIS, VALIGN_TOP_AXIS)
        } else if (getPlacement === 'right' ) {
          defineAlignBasis(valignMidBasis, VALIGN_MID_AXIS, VALIGN_MID_AXIS)
        } else if (getPlacement === 'rightBottom' ) {
          defineAlignBasis(valignBtmBasis, VALIGN_BTM_AXIS, VALIGN_BTM_AXIS)
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
            console.log("1");
            tooltip[idx].style.top = (loc === 'out') ? '-' + CLIENT_HEIGHT + 'px' : val1 + 'px';
            displayContainsClass(tooltip[idx], 'block', 'none', 'otter-tooltip-show-arrow-light', 'otter-tooltip-show-arrow-black');
          } else {
            console.log("2");
            tooltip[idx].style.top = (loc === 'out') ? '-' + CLIENT_HEIGHT + 'px' : val2 + 'px';
            displayContainsClass(tooltip[idx], 'none', 'block', 'otter-tooltip-show-arrow-light', 'otter-tooltip-show-arrow-black');
            if (
              getTrgAttrPlcmnt(idx) === 'bottomLeft' ||
              getTrgAttrPlcmnt(idx) === 'bottom' ||
              getTrgAttrPlcmnt(idx) === 'bottomRight' ) {
              console.log("3");
              setTooltipClsRemove(idx, 'otter-slide-up-out');
              setTooltipClsRemove(idx, 'otter-slide-up-in');
              setTooltipClsAdd(idx, 'otter-slide-down-in');
              setTooltipClsReplace(idx, "otter-slide-down-out", "otter-slide-down-in");
            } else if (
              getTrgAttrPlcmnt(idx) === undefined ||
              getTrgAttrPlcmnt(idx) === '' ||
              getTrgAttrPlcmnt(idx) === 'default' ||
              getTrgAttrPlcmnt(idx) === 'topLeft' ||
              getTrgAttrPlcmnt(idx) === 'top' ||
              getTrgAttrPlcmnt(idx) === 'topRight' ) {
              console.log("4");
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

  function eventLog(mouseState) {
    'use strict';
    const loadBtnItemText = getActiveBtnElmn().firstElementChild.innerText;
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

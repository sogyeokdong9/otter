'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-dropdown-trigger');
  const drpdnMn = document.querySelectorAll('.otter-dropdown');

  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    element.addEventListener('mouseenter', function() {
      'use strict';
      openDrpdnMn(i);
      mouseEventLog('mouseenter')
      recordLog();
    })
    // TODO: Get the previous mouseenter data, and close the previous dropdown menu.
    for (let i = 0; i < drpdnMn.length; i++) {
      const element = drpdnMn[i];
      element.addEventListener('mouseleave', function() {
        'use strict';
        isDrpdnMnOpen(false, i);
        // mouseEventLog('mouseleave')
      })
    }
  }

  function openDrpdnMn(idx) {
    'use strict';
    // TODO: Get the previous mouseenter data, and close the previous dropdown menu.
    for (let i = 0; i < drpdnMn.length; i++) {
      closeAllDrpdnMn(i);
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
      closeAllDrpdnMn(idx);
    }
  }

  function closeAllDrpdnMn(idx) {
    'use strict';
    trgElmn[idx].lastChild.previousElementSibling.ariaExpanded = false;
    drpdnMn[idx].classList.replace("otter-dropdown-visible", "otter-dropdown-hidden");
    trgElmn[idx].classList.replace("otter-dropdown-open", "otter-dropdown-close");
    setLctDrpdnMn('out', idx)
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
    // const eventLog = cntnrElmnt.querySelector('.event-log');
    // const latestLog = eventLog.lastChild;
    // const CURRENT_ACTIVE_ELEMENT = latestLog.childNodes[2].innerText;
    // const PREVIOUS_ELEMENT = (getLog.length > 1) ? latestLog.previousSibling.childNodes[2].innerText : null;
    for (let i = 0; i < getLog.length; i++) {
      const element = getLog[i];
      logActElmArry.push(element.childNodes[2].outerText);
    }
    for (let i = 0; i < logActElmArry.length; i++) {
      const element = logActElmArry[i];
      logPreElmArry[i] = element;
    }
    logPreElmArry.unshift( null );
    logPreElmArry.pop();
    for (let i = 0; i < getLog.length; i++) {
      const element = getLog[i];
      element.lastChild.textContent = logPreElmArry[i];
    }
    // return [logActElmArry, logPreElmArry];
  }

  function mouseEventLog(mouseState) {
    'use strict';
    const loadBtnItemText = getActiveBtnElmn().firstElementChild.innerText;
    const loadBtnItemAttr = getActiveBtnElmn().getAttribute('data-placement');
    const loadBtnItemCls = getActiveBtnElmn().classList[4];
    const loadBtnItemIdx = getActiveBtnElmn().getAttribute('data-index-number');
    const loadDrpdnMnItemText = getActiveDrpdnMn().innerText.replace(/\n\r?/g, '/');
    const loadDrpdnMnItemIdx = getActiveDrpdnMn().getAttribute('data-index-number');
    const logElmnt = cntnrElmnt.querySelector('.event-log');
    const newItmElmn = document.createElement('li');
    const newItmSpn1 = document.createElement('span');
    const newItmSpn2 = document.createElement('span');
    const newItmSpn3 = document.createElement('span');
    const newItmSpn4 = document.createElement('span');
    const newItmSpn5 = document.createElement('span');
    // const newItmSpn6 = document.createElement('span');
    const newItmSpn7 = document.createElement('span');
    const newItmSpn8 = document.createElement('span');
    const newItmSpn9 = document.createElement('span');
    const newCntnt1 = document.createTextNode( mouseState );
    const newCntnt2 = document.createTextNode( toStringTime() );
    const newCntnt3 = document.createTextNode( loadBtnItemIdx );
    const newCntnt4 = document.createTextNode( loadBtnItemText );
    const newCntnt5 = document.createTextNode( loadBtnItemAttr );
    // const newCntnt6 = document.createTextNode( loadBtnItemCls );
    const newCntnt7 = document.createTextNode( loadDrpdnMnItemIdx );
    const newCntnt8 = document.createTextNode( loadDrpdnMnItemText );
    const newCntnt9 = document.createTextNode( 'Data is from recordLog()' );
    newItmElmn.classList.add('log-item');
    newItmSpn1.classList.add('specified');
    newItmSpn2.classList.add('log-time');
    newItmSpn3.classList.add('trigger-idx');
    newItmSpn4.classList.add('trigger-txt');
    newItmSpn5.classList.add('trigger-plc');
    // newItmSpn6.classList.add('trigger-cls');
    newItmSpn7.classList.add('dropdown-idx');
    newItmSpn8.classList.add('dropdown-txt');
    newItmSpn9.classList.add('previous-idx');
    newItmSpn1.append(newCntnt1);
    newItmSpn2.append(newCntnt2);
    newItmSpn3.append(newCntnt3);
    newItmSpn4.append(newCntnt4);
    newItmSpn5.append(newCntnt5);
    // newItmSpn6.append(newCntnt6);
    newItmSpn7.append(newCntnt7);
    newItmSpn8.append(newCntnt8);
    newItmSpn9.append(newCntnt9);
    newItmElmn.append(newItmSpn1);
    newItmElmn.append(newItmSpn2);
    newItmElmn.append(newItmSpn3);
    newItmElmn.append(newItmSpn4);
    newItmElmn.append(newItmSpn5);
    // newItmElmn.append(newItmSpn6);
    newItmElmn.append(newItmSpn7);
    newItmElmn.append(newItmSpn8);
    newItmElmn.append(newItmSpn9);
    logElmnt.append(newItmElmn);
  }
})();

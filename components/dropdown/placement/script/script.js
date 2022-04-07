'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-dropdown-trigger');
  const drpdnMn = document.querySelectorAll('.otter-dropdown');
  
  console.log(trgElmn);

  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    element.addEventListener('mouseenter', function() {
      'use strict';
      openDrpdnMn(i);
      mouseEventLog('mouseenter')
      recordLog();
    })
    for (let i = 0; i < drpdnMn.length; i++) {
      const element = drpdnMn[i];
      element.addEventListener('mouseleave', function() {
        'use strict';
        isDrpdnMnOpen(false, i);
        // mouseEventLog('mouseleave')
      })
    }
  }

  // createDrpdnMnTr(0, 3);
  // createDrpdnMnFo(1, 4);
  // createDrpdnMnTr(2, 3);
  // createDrpdnMnFv(3, 5);
  // createDrpdnMnFv(4, 5);
  // createDrpdnMnFo(5, 4);

  function openDrpdnMn(idx) {
    'use strict';
    for (let i = 0; i < drpdnMn.length; i++) {
      closeAllDrpdnMn(i);
    }
    const element = trgElmn[idx];
    const prefixPlcmnt = 'otter-dropdown-placement-';
    const positionPlcmnt = element.getAttribute('data-placement');
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
      const alignBtmBasis = ( ALIGN_BTM_AXIS > 0 && ALIGN_BTM_AXIS > SCROLL_Y );
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
    const arrLog = [];
    const getLog = cntnrElmnt.querySelectorAll('.log-item');
    arrLog.push(getLog);
    
    const eventLog = cntnrElmnt.querySelector('.event-log');
    if (getLog.length > 1) {
      const latestLog = eventLog.lastChild;
      const prelatestLog = latestLog.previousSibling;
      let latestActvElmn = latestLog.childNodes[2].innerText;
      let prelatestActvElmn = prelatestLog.childNodes[2].innerText;
      // console.log(latestActvElmn, prelatestActvElmn);
      return prelatestActvElmn;
    }
    // if (latestLog) {
    //   prelatestLog = latestLog.previousSibling;
    //   console.log(prelatestLog);
    // }
    // let latestActvElmn = latestLog.childNodes[2].innerText;
    // console.log(getLog);
    // console.log(latestActvElmn);
    // console.log(latestLog);
    // console.log(latestLog.childNodes[2].innerText);
    // console.log(latestLog.innerText);
    // console.log(arrLog);
    // console.log(arrLog[arrLog.length - 1]);
    // console.log('last log: ' + getLog[(getLog.length-1)]);
  }

  function mouseEventLog(mouseState) {
    'use strict';
    const loadBtnItemText = getActiveBtnElmn().firstElementChild.innerText;
    const loadBtnItemAttr = getActiveBtnElmn().getAttribute('data-placement');
    const loadBtnItemCls = getActiveBtnElmn().classList[4];
    const loadBtnItemIdx = getActiveBtnElmn().getAttribute('data-index-number');
    const loadDrpdnMnItemText = getActiveDrpdnMn().innerText;
    const loadDrpdnMnItemIdx = getActiveDrpdnMn().getAttribute('data-index-number');
    const logElmnt = cntnrElmnt.querySelector('.event-log');
    const newItmElmn = document.createElement('li');
    const newItmSpn1 = document.createElement('span');
    const newItmSpn2 = document.createElement('span');
    const newItmSpn3 = document.createElement('span');
    const newItmSpn4 = document.createElement('span');
    const newItmSpn5 = document.createElement('span');
    const newItmSpn6 = document.createElement('span');
    const newItmSpn7 = document.createElement('span');
    const newItmSpn8 = document.createElement('span');
    const newCntnt1 = document.createTextNode( mouseState );
    const newCntnt2 = document.createTextNode( toStringTime() );
    const newCntnt3 = document.createTextNode( loadBtnItemIdx );
    const newCntnt4 = document.createTextNode( loadBtnItemText );
    const newCntnt5 = document.createTextNode( loadBtnItemAttr );
    const newCntnt6 = document.createTextNode( loadBtnItemCls );
    const newCntnt7 = document.createTextNode( loadDrpdnMnItemIdx );
    const newCntnt8 = document.createTextNode( loadDrpdnMnItemText );
    newItmElmn.classList.add('log-item');
    newItmSpn1.classList.add('specified');
    newItmSpn2.classList.add('log-time');
    newItmSpn3.classList.add('trigger-idx');
    newItmSpn4.classList.add('trigger-txt');
    newItmSpn5.classList.add('trigger-plc');
    newItmSpn6.classList.add('trigger-cls');
    newItmSpn7.classList.add('dropdown-idx');
    newItmSpn8.classList.add('dropdown-txt');
    newItmSpn1.append(newCntnt1);
    newItmSpn2.append(newCntnt2);
    newItmSpn3.append(newCntnt3);
    newItmSpn4.append(newCntnt4);
    newItmSpn5.append(newCntnt5);
    newItmSpn6.append(newCntnt6);
    newItmSpn7.append(newCntnt7);
    newItmSpn8.append(newCntnt8);
    newItmElmn.append(newItmSpn1);
    newItmElmn.append(newItmSpn2);
    newItmElmn.append(newItmSpn3);
    newItmElmn.append(newItmSpn4);
    newItmElmn.append(newItmSpn5);
    newItmElmn.append(newItmSpn6);
    newItmElmn.append(newItmSpn7);
    newItmElmn.append(newItmSpn8);
    logElmnt.append(newItmElmn);
  }
})();

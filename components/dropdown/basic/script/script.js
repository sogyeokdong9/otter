'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelector('.otter-dropdown-trigger');
  const drpdnMn = document.querySelector('.otter-dropdown');

  function toStringTime() {
    'use strict';
    let result;
    const time = new Date();
    const timeStr = time.toLocaleTimeString();
    return result = timeStr;
  }

  function mouseEventLog(mouseState) {
    'use strict';
    const logElmnt = cntnrElmnt.querySelector('.event-log');
    const newItmElmn = document.createElement('li');
    const newItmSpn1 = document.createElement('span');
    const newItmSpn2 = document.createElement('span');
    const newItmSpn3 = document.createElement('span');
    const newCntnt1 = document.createTextNode( mouseState );
    const newCntnt2 = document.createTextNode( toStringTime() );
    const newCntnt3 = document.createTextNode( drpdnMn.className );
    newItmElmn.classList.add('log-item');
    newItmSpn1.classList.add('specified');
    newItmSpn2.classList.add('log-time');
    newItmSpn3.classList.add('changed-class');
    newItmSpn1.append(newCntnt1);
    newItmSpn2.append(newCntnt2);
    newItmSpn3.append(newCntnt3);
    newItmElmn.append(newItmSpn1);
    newItmElmn.append(newItmSpn2);
    newItmElmn.append(newItmSpn3);
    logElmnt.append(newItmElmn);
  }

  function setLctDrpdnMn(sign) {
    drpdnMn.style.minWidth = (trgElmn.offsetWidth) + 'px';
    drpdnMn.style.left = (sign === '-') ? '-' + (document.body.clientWidth) + 'px' : (trgElmn.offsetLeft) + 'px';
    drpdnMn.style.top = (sign === '-') ? '-' + (document.body.clientHeight) + 'px' : (trgElmn.offsetTop + trgElmn.offsetHeight) + 'px';
  }

  function isDrpdnMnOpen(bool, clsNm1, clsNm2, clsNm3, clsNm4) {
    'use strict';
    trgElmn.lastChild.previousElementSibling.ariaExpanded = bool;
    drpdnMn.classList.replace(clsNm1, clsNm2);
    trgElmn.classList.replace(clsNm3, clsNm4);
  }

  setLctDrpdnMn('-');

  trgElmn.addEventListener('mouseover', function() {
    'use strict';
    isDrpdnMnOpen(true, "otter-dropdown-hidden", "otter-dropdown-visible", "otter-dropdown-close", "otter-dropdown-open");
    setLctDrpdnMn('+');
    mouseEventLog('mouseover');
  })
  drpdnMn.addEventListener('mouseleave', function() {
    'use strict'
    isDrpdnMnOpen(false, "otter-dropdown-visible", "otter-dropdown-hidden", "otter-dropdown-open", "otter-dropdown-close");
    setLctDrpdnMn('-');
    mouseEventLog('mouseleave');
  })
})();

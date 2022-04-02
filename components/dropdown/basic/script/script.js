'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelector('.otter-dropdown-trigger');
  const drpdnMn = document.querySelector('.otter-dropdown');

  function toStringTime() {
    'use strict'
    let result;
    const time = new Date();
    const timeStr = time.toLocaleTimeString();
    return result = timeStr;
  }

  function mouseEventLog(mouseState) {
    'use strict'
    const logElmnt = cntnrElmnt.querySelector('.event-log');
    const newItmElmn = document.createElement('li');
    const newCntnt = document.createTextNode( mouseState + ': ' + toStringTime() + ' ' + drpdnMn.className );
    newItmElmn.append(newCntnt);
    logElmnt.append(newItmElmn);
  }

  function throwScrnDrpdnMn() {
    'use strict'
    drpdnMn.style.minWidth = (trgElmn.offsetWidth) + 'px';
    drpdnMn.style.left = '-' + (document.body.clientWidth) + 'px';
    drpdnMn.style.top = '-' + (document.body.clientHeight) + 'px';
  }

  throwScrnDrpdnMn();
  // previousElementSibling
  trgElmn.addEventListener('mouseover', function() {
    'use strict'
    drpdnMn.classList.replace("otter-dropdown-hidden", "otter-dropdown-visible");
    trgElmn.classList.replace("otter-dropdown-close", "otter-dropdown-open");
    trgElmn.lastChild.previousElementSibling.ariaExpanded = true;
    drpdnMn.style.minWidth = (trgElmn.offsetWidth) + 'px';
    drpdnMn.style.left = (trgElmn.offsetLeft) + 'px';
    drpdnMn.style.top = (trgElmn.offsetTop + trgElmn.offsetHeight) + 'px';
    mouseEventLog('mouseover');
  })
  drpdnMn.addEventListener('mouseleave', function() {
    'use strict'
    trgElmn.lastChild.previousElementSibling.ariaExpanded = false;
    drpdnMn.classList.replace("otter-dropdown-visible", "otter-dropdown-hidden");
    trgElmn.classList.replace("otter-dropdown-open", "otter-dropdown-close");
    mouseEventLog('mouseleave');
    throwScrnDrpdnMn();
  })
})();

'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelector('.otter-dropdown-trigger');
  const drpdnMn = document.querySelector('.otter-dropdown');

  function throwScrnDrpdnMn() {
    drpdnMn.style.minWidth = (trgElmn.offsetWidth) + 'px';
    drpdnMn.style.left = '-' + (document.body.clientWidth) + 'px';
    drpdnMn.style.top = '-' + (document.body.clientHeight) + 'px';
  }

  throwScrnDrpdnMn();

  trgElmn.addEventListener('mousemove', function() {
    console.log(drpdnMn.className);
    drpdnMn.classList.replace("otter-dropdown-hidden", "otter-dropdown-see");
    trgElmn.classList.add('otter-dropdown-open');
    drpdnMn.style.minWidth = (trgElmn.offsetWidth) + 'px';
    drpdnMn.style.left = (trgElmn.offsetLeft) + 'px';
    drpdnMn.style.top = (trgElmn.offsetTop + trgElmn.offsetHeight) + 'px';
  })
  drpdnMn.addEventListener('mouseleave', function() {
    console.log(drpdnMn.className);
    drpdnMn.classList.replace("otter-dropdown-see", "otter-dropdown-hidden");
    trgElmn.classList.remove('otter-dropdown-open');
    throwScrnDrpdnMn();
  })




})();

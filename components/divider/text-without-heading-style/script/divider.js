'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-divider');
  const txtDivider = cntnrElmnt.querySelectorAll('.otter-divider-inner-text');

  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    const txt = txtDivider[i];

    if ( getDividerStyle(i) === 'solid' ) {
      element.classList.add('otter-divider-solid');
    } else if ( getDividerStyle(i) === 'dashed') {
      element.classList.add('otter-divider-dashed');
    } else if ( getDividerStyle(i) === 'dotted') {
      element.classList.add('otter-divider-dotted');
    } else {
      console.log(element, `data-divider-style="${getDividerStyle(i)}" is null.`);
    }

    if ( getDividerSpecified(i) === 'title' ) {
      element.classList.add('otter-divider-with-text');
    } else if ( getDividerSpecified(i) === 'plain') {
      element.classList.add('otter-divider-with-text', 'otter-divider-plain' );
    } else {
      console.log(txt, `data-divider-specified="${getDividerSpecified(i)}" is null.`);
    }

    if ( getOrientation(i) === null && !checkOrientationMargin(i) ) {
      element.classList.add('otter-divider-with-text-center');
    } else if ( getOrientation(i) === 'left' ) {
      element.classList.add('otter-divider-with-text-left');
    } else if ( getOrientation(i) === 'right' ) {
      element.classList.add('otter-divider-with-text-right');
    } else {
      console.log(txt, `data-orientation="${getOrientation(i)}" is not supported.`);
    }

    if ( getOrientation(i) !== null && getOrientationMargin(i) !== null ) {
      if ( getOrientation(i) === 'left' ) {
        element.classList.add('otter-divider-no-default-orientation-margin-left');
      } else if ( getOrientation(i) === 'right' ) {
        element.classList.add('otter-divider-no-default-orientation-margin-right');
      } else {
        console.log(txt, `data-orientation="${getOrientation(i)}" is not supported.`);
      }
    }

    if ( getOrientation(i) !== null && getOrientationMargin(i) !== '0' ) {
      if ( getOrientation(i) === 'left' ) {
        txt.style.marginLeft = getOrientationMargin(i);
      } else if ( getOrientation(i) === 'right' ) {
        txt.style.marginRight = getOrientationMargin(i);
      } else {
        console.log(txt, `data-orientation="${getOrientation(i)}" is not supported.`);
      }
    }

  }

  function getOrientation(idx) {
    'use strict';
    const element = trgElmn[idx];
    const orientation = element.getAttribute('data-orientation');
    return orientation;
  }

  function getOrientationMargin(idx) {
    'use strict';
    const element = trgElmn[idx];
    const orientationMargin = element.getAttribute('data-orientation-margin');
    return orientationMargin;
  }

  function checkOrientationMargin(idx) {
    'use strict';
    const element = trgElmn[idx];
    const hasOrientation = element.getAttribute('data-orient-margin');
    return Boolean(hasOrientation);
  }

  function getDividerSpecified(idx) {
    'use strict';
    const element = trgElmn[idx];
    const dividerSpecified = element.getAttribute('data-divider-specified');
    return dividerSpecified; 
  }

  function getDividerStyle(idx) {
    'use strict';
    const element = trgElmn[idx];
    const dividerStyle = element.getAttribute('data-divider-style');
    return dividerStyle; 
  }

})();
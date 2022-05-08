'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-divider');
  const txtDivider = cntnrElmnt.querySelectorAll('.otter-divider-inner-text');

  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    const txt = txtDivider[i];
    // divider type
    if ( getDividerType(i) === null || getDividerType(i) === 'horizontal' ) {
      element.classList.add('otter-divider-horizontal');
    } else if ( getDividerType(i) === 'vertical') {
      element.classList.add('otter-divider-vertical');
    } else {
      console.log( `getDividerType: horizontal(default), vertical / `, `data-divider-type="${getDividerType(i)}" is not supported.`);
    }
    // divider style
    if ( getDividerStyle(i) === 'solid' ) {
      element.classList.add('otter-divider-solid');
    } else if ( getDividerStyle(i) === 'dashed') {
      element.classList.add('otter-divider-dashed');
    } else if ( getDividerStyle(i) === 'dotted') {
      element.classList.add('otter-divider-dotted');
    } else {
      console.log( `getDividerStyle: solid(default), dashed, dotted / `, `data-divider-style="${getDividerStyle(i)}" is null.` );
    }
    // divider specified
    if ( getDividerSpecified(i) === 'title' ) {
      element.classList.add('otter-divider-with-text');
    } else if ( getDividerSpecified(i) === 'plain') {
      element.classList.add('otter-divider-with-text', 'otter-divider-plain' );
    } else {
      console.log( `getDividerSpecified: (default), title, plain / `, `data-divider-specified="${getDividerSpecified(i)}" is null.` );
    }
    // divider orientation
    if ( getOrientation(i) === null && !checkOrientationMargin(i) ) {
      element.classList.add('otter-divider-with-text-center');
    } else if ( getOrientation(i) === 'left' ) {
      element.classList.add('otter-divider-with-text-left');
    } else if ( getOrientation(i) === 'right' ) {
      element.classList.add('otter-divider-with-text-right');
    } else {
      console.log( `getOrientation: center(default), left, right / `, `data-orientation="${getOrientation(i)}" is not supported.` );
    }
    // divider orientation margin is not null
    if ( getOrientation(i) !== null && getOrientationMargin(i) !== null ) {
      if ( getOrientation(i) === 'left' ) {
        element.classList.add('otter-divider-no-default-orientation-margin-left');
      } else if ( getOrientation(i) === 'right' ) {
        element.classList.add('otter-divider-no-default-orientation-margin-right');
      } else {
        console.log( `getOrientation: center(default), left, right / `, `data-orientation="${getOrientation(i)}" is not supported.`);
      }
    }
    // divider orientation margin is not '0'
    if ( getOrientation(i) !== null && getOrientationMargin(i) !== '0' ) {
      if ( getOrientation(i) === 'left' ) {
        txt.style.marginLeft = getOrientationMargin(i);
      } else if ( getOrientation(i) === 'right' ) {
        txt.style.marginRight = getOrientationMargin(i);
      } else {
        console.log( `getOrientation: center(default), left, right / `, `data-orientation="${getOrientation(i)}" is not supported.`);
      }
    }
  }
  function getDividerType(idx) {
    'use strict';
    const element = trgElmn[idx];
    const dividerType = element.getAttribute('data-divider-type');
    return dividerType; 
  }
  function getDividerStyle(idx) {
    'use strict';
    const element = trgElmn[idx];
    const dividerStyle = element.getAttribute('data-divider-style');
    return dividerStyle; 
  }
  function getDividerSpecified(idx) {
    'use strict';
    const element = trgElmn[idx];
    const dividerSpecified = element.getAttribute('data-divider-specified');
    return dividerSpecified; 
  }
  function getOrientation(idx) {
    'use strict';
    const element = trgElmn[idx];
    const orientation = element.getAttribute('data-orientation');
    return orientation;
  }
  function checkOrientationMargin(idx) {
    'use strict';
    const element = trgElmn[idx];
    const hasOrientation = element.getAttribute('data-orient-margin');
    return Boolean(hasOrientation);
  }
  function getOrientationMargin(idx) {
    'use strict';
    const element = trgElmn[idx];
    const orientationMargin = element.getAttribute('data-orientation-margin');
    return orientationMargin;
  }
})();
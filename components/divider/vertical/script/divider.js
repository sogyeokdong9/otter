'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('.otter-divider');
  const txtDivider = cntnrElmnt.querySelectorAll('.otter-divider-inner-text');
  const logElmnt = cntnrElmnt.querySelector('.event-log-divider');

  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    const txt = txtDivider[i];
    logDivider('divider', i)
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
  function returnCheckValue( val1, val2 = '-' ) {
    const result = val1 || val2;
    return result;
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
  function getStringTime() {
    'use strict';
    const time = new Date();
    const timeStr1 = time.toLocaleTimeString();
    const timeStr2 = time.getUTCMilliseconds();
    const result = `${timeStr1}:${timeStr2}`;
    return result;
  }
  function logDivider(info, idx) {
    'use strict';
    const loadDividerItemIdx = returnCheckValue( trgElmn[idx].getAttribute('data-index-number'), 0 );
    const loadDividerItemType = returnCheckValue( getDividerType(idx), 'horizontal' );
    const loadDividerItmeStyle = returnCheckValue( getDividerStyle(idx), 'solid' );
    const loadDividerItemSpecified = returnCheckValue( getDividerSpecified(idx));
    const loadDividerItemText = returnCheckValue( trgElmn[idx].outerText );
    const loadDividerItemOrientation = returnCheckValue( getOrientation(idx), 'center');
    const loadDividerItemOrientationMargin = returnCheckValue( getOrientationMargin(idx));

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
    const itemContainer = makeHtmlElement('li', { class: 'log-item-divider' });
    const groopOfPairs = [
      { id: 1, name: info, class: 'specified' },
      { id: 2, name: getStringTime(), class: 'log-time' },
      { id: 3, name: loadDividerItemIdx, class: 'trigger-idx' },
      { id: 4, name: loadDividerItemType, class: 'trigger-type' },
      { id: 5, name: loadDividerItmeStyle, class: 'trigger-style' },
      { id: 6, name: loadDividerItemSpecified, class: 'trigger-specified' },
      { id: 7, name: loadDividerItemOrientation, class: 'trigger-orientation' },
      { id: 8, name: loadDividerItemOrientationMargin, class: 'trigger-orientation-margin' },
      { id: 9, name: loadDividerItemText, class: 'trigger-txt' }
    ]
    const [item1, item2, item3, item4, item5, item6, item7, item8, item9] = groopOfPairs.map((item) =>
      makeHtmlElement('span', { class: item.class }, { textContent: item.name })
    );
    itemContainer.append(item1, item2, item3, item4, item5, item6, item7, item8, item9);
    logElmnt.append(itemContainer);
  }

  logElmnt.insertAdjacentHTML('beforebegin', '<p class="log-title-divider">Log: Divider</p>');
})();
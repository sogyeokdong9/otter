'use strict';

(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const trgElmn = cntnrElmnt.querySelectorAll('button');
  const logElmnt = cntnrElmnt.querySelector('.event-log-button');
  const orizinElmn = [];
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
  for (let i = 0; i < trgElmn.length; i++) {
    const element = trgElmn[i];
    logButton('button', i);
    const expr = element.dataset.buttonType;
    switch (expr) {
      case 'default':
        setClassToButtonType( element, 'otter-btn-default' );
        break;
      case 'primary':
        setClassToButtonType( element, 'otter-btn-primary' );
        break;
      case 'dashed':
        setClassToButtonType( element, 'otter-btn-dashed' );
        break;
      case 'text':
        setClassToButtonType( element, 'otter-btn-text' );
        break;
      case 'link':
        setClassToButtonType( element, 'otter-btn-link' );
        break;
      default:
        setClassToButtonType( element, 'otter-btn-default' );
    }
    function setClassToButtonType( trgt, cls, ...theArgs ) {
      trgt.classList.add( 'otter-btn', cls , ...theArgs );
    }
    element.setAttribute('data-index-number', i + 1);
    i > 5 ? element.setAttribute('disabled', '') : null;
    function returnCheckValue( val1, val2 = '-' ) {
      return val1 || val2;
    }
    function getStringTime() {
      'use strict';
      const time = new Date();
      const timeStr1 = time.toLocaleTimeString();
      const timeStr2 = time.getUTCMilliseconds();
      const result = `${timeStr1}:${timeStr2}`;
      return result;
    }
    // function isButtonDisabled( obj ) {
    //   return obj.hasAttribute('disabled') ? 'disabled' : '-';
    // }
    function logButton(info, idx) {
      'use strict';
      const loadButtonItmeIdx = returnCheckValue( i + 1 );
      const loadButtonItmeType = returnCheckValue( trgElmn[idx].getAttribute('data-button-type') );
      const loadButtonItmeText = returnCheckValue( trgElmn[idx].innerText );
      const loadButtonItmeDisabled = returnCheckValue( i > 5 ? 'disabled' : null );
      const groupOfPairs = [
        { id: 1, name: info, class: 'specified' },
        { id: 2, name: getStringTime(), class: 'log-time' },
        { id: 3, name: loadButtonItmeIdx, class: 'trigger-idx' },
        { id: 4, name: loadButtonItmeType, class: 'trigger-type' },
        { id: 5, name: loadButtonItmeText, class: 'trigger-cls' },
        { id: 6, name: loadButtonItmeDisabled, class: 'trigger-disabled' }
      ]
      const itemContainer = makeHtmlElement('li', { class: 'log-item-button' });
      const [item1, item2, item3, item4, item5, item6] = groupOfPairs.map((item) =>
        makeHtmlElement('span', { class: item.class }, { textContent: item.name })
      );
      itemContainer.append(item1, item2, item3, item4, item5, item6);
      logElmnt.append(itemContainer);
      orizinElmn.push(element);
    }
  }
  logElmnt.insertAdjacentHTML('beforebegin', '<p class="log-title-button">Log: Button</p>');
  console.log(orizinElmn);
})();

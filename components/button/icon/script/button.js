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
    const type = element.dataset.buttonType;
    switch (type) {
      case 'default':
        setClassToButton( element, 'otter-btn-default' );
        break;
      case 'primary':
        setClassToButton( element, 'otter-btn-primary' );
        break;
      case 'dashed':
        setClassToButton( element, 'otter-btn-dashed' );
        break;
      case 'text':
        setClassToButton( element, 'otter-btn-text' );
        break;
      case 'link':
        setClassToButton( element, 'otter-btn-link' );
        break;
      default:
        setClassToButton( element, 'otter-btn-default' );
    }
    if ( element.dataset.buttonBlock === 'true' ) {
      setClassToButton( element, 'otter-btn-block' );
    }
    if ( element.dataset.buttonDanger === 'true' ) {
      setClassToButton( element, 'otter-btn-dangerous' );
    }
    if ( element.dataset.buttonShape === 'circle' ) {
      setClassToButton( element, 'otter-btn-circle' );
    }
    if ( !element.innerText ) {
      setClassToButton( element, 'otter-btn-icon-only' );
    }
    if ( element.dataset.buttonTrigger === 'tooltip' ) {
      setClassToButton( element, 'otter-tooltip-trigger', 'otter-tooltip-link', 'otter-tooltip-close' );
    }
    setButtonIcon('search', 'tooltip', 'search');
    setButtonIcon('google', 'tooltip', 'link')
    function setButtonIcon(icon, role, label) {
      'use strict';
      if ( element.dataset.buttonIcon === icon ) {
        if ( element.dataset.buttonTrigger === role) {
          element.insertAdjacentHTML('afterbegin', `<span data-tooltip="${getTooltipTitle( element )}"><i class="ottericon gg-${icon}" role="img" aria-label=${label}></i></span>`);
          element.insertAdjacentHTML('beforeend', `<span class="spacial-letter-down a11y-hidden" focusable="false" role="img" aria-label="close" aria-expanded="false"><i class="ottericon gg-chevron-down" role="img" aria-label="fold"></i></span>`)
        } else {
          element.insertAdjacentHTML('afterbegin', `<span><i class="ottericon gg-${icon}" role="img" aria-label=${label}></i></span>`);
        }
      } 
    }
    if ( element.dataset.buttonSize === 'large' ) {
      setClassToButton( element, 'otter-btn-lg' );
    } else if ( element.dataset.buttonSize === 'small' ) {
      setClassToButton( element, 'otter-btn-sm' );
    } else {
      console.log(`otter-btn-md`)
    }
    function setClassToButton( trgt, cls, ...theArgs ) {
      trgt.classList.add( 'otter-btn', cls , ...theArgs );
    }
    element.setAttribute('data-index-number', i + 1);
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


    function getTooltipTitle( obj ) {
      return obj.getAttribute('data-tooltip-title');
    } 
    function isButtonDisabled( obj ) {
      const element = obj.hasAttribute('disabled');
      return element ? 'disabled' : null;
    }
    function isButtonBlock( obj ) {
      const element = obj.getAttribute('data-button-block');
      return element ? 'block' : null;
    }
    function isButtonDanger( obj ) {
      const element = obj.getAttribute('data-button-danger')
      return element ? 'danger' : null;
    }
    function getButtonSize( obj ) {
      const element = obj.getAttribute(`data-button-size`);
      return ( element === "large" ) ? `large`
            : ( element === "small" ) ? `small`
            : null
    }
    function getButtonShape( obj ) {
      const element = obj.getAttribute(`data-button-shape`);
      return ( element === "circle" ) ? `circle`
            : ( element === "round" ) ? `round`
            : null
    }
    function getButtonTrigger( obj ) {
      const element = obj.getAttribute(`data-button-trigger`);
      return ( element === "tooltip" ) ? `tooltip`
            : ( element === "dropdown" ) ? `dropdown`
            : ( element === "message" ) ? `message`
            : ( element === "link" ) ? `link`
            : null
    }
    function getButtonIcon( obj ) {
      const element = obj.getAttribute(`data-button-icon`);
      return ( element === "search" ) ? `search`
            : ( element === "google" ) ? `google`
            : ( element === "info" ) ? `info`
            : ( element === "success" ) ? `success`
            : ( element === "error" ) ? `error`
            : ( element === "danger" ) ? `danger`
            : ( element === "loading" ) ? `loading`
            : ( element === "link" ) ? `link`
            : ( element === "default" ) ? `default`
            : null
    }
    function getButtonLink( obj ) {
      return obj.getAttribute('data-button-link');
    }
    function logButton(info, idx) {
      'use strict';
      const loadButtonItmeIdx = returnCheckValue( i + 1 );
      const loadButtonItmeText = returnCheckValue( trgElmn[idx].innerText, '(context)' );
      const loadButtonItmeType = returnCheckValue( trgElmn[idx].getAttribute('data-button-type'), '(type)' );
      const loadButtonItmeDanger = returnCheckValue( isButtonDanger( trgElmn[idx] ) , '(danger)');
      const loadButtonItmeShape = returnCheckValue( getButtonShape( trgElmn[idx] ), '(shape)' );
      const loadButtonItmeDisabled = returnCheckValue( isButtonDisabled( trgElmn[idx] ), '(disabled)' );
      const loadButtonItmeBlock = returnCheckValue( isButtonBlock( trgElmn[idx] ), '(block)' );
      const loadButtonItmeSize = returnCheckValue( getButtonSize( trgElmn[idx] ), '(size)' );
      const loadButtonItmeTrigger = returnCheckValue( getButtonTrigger( trgElmn[idx] ), '(trigger)' );
      const loadTooltipTitle = returnCheckValue( getTooltipTitle( trgElmn[idx] ), '(context)' );
      const loadButtonIcon = returnCheckValue( getButtonIcon( trgElmn[idx] ), '(icon)' );
      const loadButtonLink = returnCheckValue( getButtonLink( trgElmn[idx] ), '(context)' );
      const groupOfPairs = [
        { id: 1, name: info, class: 'specified' },
        { id: 2, name: getStringTime(), class: 'log-time' },
        { id: 3, name: loadButtonItmeIdx, class: 'trigger-idx' },
        { id: 4, name: loadButtonItmeText, class: 'trigger-txt' },
        { id: 5, name: loadButtonItmeType, class: 'trigger-type' },
        { id: 6, name: loadButtonItmeDanger, class: 'trigger-dangerous' },
        { id: 7, name: loadButtonItmeShape, class: 'trigger-shape' },
        { id: 8, name: loadButtonItmeDisabled, class: 'trigger-disabled' },
        { id: 9, name: loadButtonItmeBlock, class: 'trigger-blocked' },
        { id: 10, name: loadButtonItmeSize, class: 'trigger-size' },
        { id: 11, name: loadButtonItmeTrigger, class: 'trigger-role' },
        { id: 12, name: loadTooltipTitle, class: 'tooltip-title' },
        { id: 13, name: loadButtonIcon, class: 'trigger-icon' },
        { id: 14, name: loadButtonLink, class: 'trigger-link' },
      ]
      const itemContainer = makeHtmlElement('li', { class: 'log-item-button' });
      const [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14] = groupOfPairs.map((item) =>
        makeHtmlElement('span', { class: item.class }, { textContent: item.name })
      );
      itemContainer.append(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14);
      logElmnt.append(itemContainer);
      orizinElmn.push(element);
    }
  }
  trgElmn[14].addEventListener('click', function() {
    visitPage( this.dataset.buttonLink, `_blank`)
  })
  function visitPage(url, target){
    return window.open(url, target);
  }
  logElmnt.insertAdjacentHTML('beforebegin', '<p class="log-title-button">Log: Button</p>');
})();

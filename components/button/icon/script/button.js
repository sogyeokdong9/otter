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
    // order
    // info(label)
    // log time
    // data-index-number
    const buttonInnerText = element.innerText;
    const buttonType = element.dataset.buttonType;
    const buttonDanger = element.dataset.buttonDanger;
    const buttonShape = element.dataset.buttonShape;
    // disabled
    const buttonBlock = element.dataset.buttonBlock;
    const buttonSize = element.dataset.buttonSize;
    const buttonTrigger = element.dataset.buttonTrigger;
    // data-tooltip-theme
    // data-tooltip-color
    // data-placement
    // data-tooltip-title
    // data-button-icon
    // data-link-target
    // data-button-link
    
    logButton('button', i);

    function setClassToButton( trgt, cls, ...theArgs ) {
      trgt.classList.add( 'otter-btn', cls , ...theArgs );
    }
    
    buttonSize === 'large' ? setClassToButton( element, 'otter-btn-lg' ) 
      : buttonSize === 'small' ? setClassToButton( element, 'otter-btn-sm' )
      : null;

    buttonType === 'default' ? setClassToButton( element, 'otter-btn-default' )
      : buttonType === 'primary' ? setClassToButton( element, 'otter-btn-primary' )
      : buttonType === 'dashed' ? setClassToButton( element, 'otter-btn-dashed' )
      : buttonType === 'text' ? setClassToButton( element, 'otter-btn-text' )
      : buttonType === 'link' ? setClassToButton( element, 'otter-btn-link' )
      : null;

    buttonBlock === 'true' ? setClassToButton( element, 'otter-btn-block' ) : null;

    buttonDanger === 'true' ? setClassToButton( element, 'otter-btn-dangerous' ) : null;

    !buttonInnerText ? setClassToButton( element, 'otter-btn-icon-only' ) : null;

    buttonShape === 'circle' ? setClassToButton( element, 'otter-btn-circle' )
      : buttonShape === 'round' ? setClassToButton( element, 'otter-btn-round' )
      : null;

    buttonTrigger === 'tooltip' ? setClassToButton( element, 'otter-tooltip-trigger', 'otter-tooltip-link', 'otter-tooltip-close' )
      : buttonTrigger === 'message' ? setClassToButton( element, 'otter-message-trigger', 'otter-message-link', 'otter-message-close' )
      : null

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
    setButtonIcon('search', 'tooltip', 'search');
    setButtonIcon('google', 'tooltip', 'link');

    function returnCheckValue( val1, val2 = '-' ) {
      return val1 || val2;
    }
    function getTooltipTitle( obj ) {
      'use strict';
      return obj.getAttribute('data-tooltip-title');
    } 
    function isButtonDisabled( obj ) {
      const element = obj.hasAttribute('disabled');
      return element ? 'disabled' : null;
    }
    function isButtonBlock( obj ) {
      'use strict';
      const element = obj.getAttribute('data-button-block');
      return element ? 'block' : null;
    }
    function isButtonDanger( obj ) {
      'use strict';
      const element = obj.getAttribute('data-button-danger')
      return element ? 'danger' : null;
    }
    function getButtonSize( obj ) {
      'use strict';
      return obj.getAttribute(`data-button-size`);
    }
    function getButtonShape( obj ) {
      'use strict';
      return obj.getAttribute(`data-button-shape`);
    }
    function getButtonTrigger( obj ) {
      'use strict';
      return obj.getAttribute(`data-button-trigger`);
    }
    function getTooltipTheme( obj ) {
      'use strict';
      return obj.getAttribute(`data-tooltip-theme`);
    }
    function getTooltipColor( obj ) {
      'use strict';
      return obj.getAttribute(`data-tooltip-color`);
    }
    function getTooltipPlacement( obj ) {
      'use strict';
      return obj.getAttribute(`data-placement`);
    }
    function getButtonIcon( obj ) {
      'use strict';
      return obj.getAttribute(`data-button-icon`);
    }
    function getButtonLink( obj ) {
      'use strict';
      return obj.getAttribute('data-button-link');
    }
    function getLinkTarget( obj ) {
      'use strict';
      return obj.getAttribute('data-link-target');
    }

    element.setAttribute('data-index-number', i + 1);

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
      const loadTooltipTheme = returnCheckValue( getTooltipTheme( trgElmn[idx] ), '(theme)' );
      const loadTooltipColor = returnCheckValue( getTooltipColor( trgElmn[idx] ), '(color)' );
      const loadTooltipPlacment = returnCheckValue( getTooltipPlacement( trgElmn[idx] ), '(Placement)' );
      const loadTooltipTitle = returnCheckValue( getTooltipTitle( trgElmn[idx] ), '(context)' );
      const loadButtonIcon = returnCheckValue( getButtonIcon( trgElmn[idx] ), '(icon)' );
      const loadLinkTarget = returnCheckValue( getLinkTarget( trgElmn[idx] ), '(target)' );
      const loadButtonLink = returnCheckValue( getButtonLink( trgElmn[idx] ), '(url)' );
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
        { id: 12, name: loadTooltipTheme, class: 'tooltip-theme' },
        { id: 13, name: loadTooltipColor, class: 'tooltip-color' },
        { id: 14, name: loadTooltipPlacment, class: 'tooltip-placement' },
        { id: 15, name: loadTooltipTitle, class: 'tooltip-title' },
        { id: 16, name: loadButtonIcon, class: 'trigger-icon' },
        { id: 17, name: loadLinkTarget, class: 'trigger-target' },
        { id: 18, name: loadButtonLink, class: 'trigger-link' }
      ]
      const itemContainer = makeHtmlElement('li', { class: 'log-item-button' });
      const [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18] = groupOfPairs.map((item) =>
        makeHtmlElement('span', { class: item.class }, { textContent: item.name })
      );
      itemContainer.append(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18);
      logElmnt.append(itemContainer);
      orizinElmn.push(element);
    }
    element.removeAttribute('data-button-type');
    element.removeAttribute('data-button-danger');
    element.removeAttribute('data-button-shape');
    element.removeAttribute('data-button-block');
    element.removeAttribute('data-button-size');
    element.removeAttribute('data-button-trigger');
    // element.removeAttribute('data-tooltip-theme');
    // element.removeAttribute('data-tooltip-color');
    // element.removeAttribute('data-placement');
    element.removeAttribute('data-tooltip-title');
    element.removeAttribute('data-button-icon');
    // element.removeAttribute('data-link-target');
    // element.removeAttribute('data-button-link');
  }
  function getStringTime() {
    'use strict';
    const time = new Date();
    const timeStr1 = time.toLocaleTimeString();
    const timeStr2 = time.getUTCMilliseconds();
    const result = `${timeStr1}:${timeStr2}`;
    return result;
  } 
  trgElmn[14].addEventListener('click', function() {
    'use strict';
    visitPage( this.dataset.buttonLink, this.dataset.linkTarget )
  })
  function visitPage(url, target = '_self'){
    return window.open(url, target);
  }
  logElmnt.insertAdjacentHTML('beforebegin', '<p class="log-title-button">Log: Button</p>');
})();

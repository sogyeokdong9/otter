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
    const logTime = getStringTime();
    const INDEX_NUMBER = Number(element.dataset.indexNumber);
    const buttonInnerText = element.innerText;
    const buttonType = element.dataset.buttonType;
    const buttonDanger = element.dataset.buttonDanger;
    const buttonGhost = element.dataset.buttonGhost;
    const buttonShape = element.dataset.buttonShape;
    const disabled = element.hasAttribute('disabled');
    const buttonBlock = element.dataset.buttonBlock;
    const buttonSize = element.dataset.buttonSize;
    const buttonTrigger = element.dataset.buttonTrigger;
    const tooltipTheme = element.dataset.tooltipTheme;
    const tooltipColor = element.dataset.tooltipColor;
    const placement =  element.dataset.placement;
    const tooltipTitle = element.dataset.tooltipTitle;
    const buttonIcon = element.dataset.buttonIcon;
    const linkTarget = element.dataset.linkTarget;
    const buttonLink = element.dataset.buttonLink;
    function setClassToButton( trgt, cls, ...theArgs ) {
      trgt.classList.add( 'otter-btn', cls , ...theArgs );
    }
    !buttonInnerText ? setClassToButton( element, 'otter-btn-icon-only' ) : null;
    buttonType === 'default' ? setClassToButton( element, 'otter-btn-default' )
      : buttonType === 'primary' ? setClassToButton( element, 'otter-btn-primary' )
      : buttonType === 'dashed' ? setClassToButton( element, 'otter-btn-dashed' )
      : buttonType === 'text' ? setClassToButton( element, 'otter-btn-text' )
      : buttonType === 'link' ? setClassToButton( element, 'otter-btn-link' )
      : setClassToButton( element, 'otter-btn-default' );
    buttonDanger === 'true' ? setClassToButton( element, 'otter-btn-dangerous' ) : null;
    buttonGhost === 'true' ? setClassToButton( element, 'otter-btn-background-ghost' ) : null;
    buttonShape === 'circle' ? setClassToButton( element, 'otter-btn-circle' )
      : buttonShape === 'round' ? setClassToButton( element, 'otter-btn-round' )
      : null;
    buttonBlock === 'true' ? setClassToButton( element, 'otter-btn-block' ) : null;
    buttonSize === 'large' ? setClassToButton( element, 'otter-btn-lg' ) 
      : buttonSize === 'small' ? setClassToButton( element, 'otter-btn-sm' )
      : null;
    buttonTrigger === 'tooltip' ? setClassToButton( element, 'otter-tooltip-trigger', 'otter-tooltip-link', 'otter-tooltip-close' )
      : buttonTrigger === 'message' ? setClassToButton( element, 'otter-message-trigger', 'otter-message-link', 'otter-message-close' )
      : null;
    linkTarget === '_blank' ? element.setAttribute('rel', 'external noopener noreferrer') : null;
    function setButtonIcon(icon, roles, labels) {
      'use strict';
      if ( buttonIcon === icon ) {
        if ( buttonTrigger === roles && !buttonInnerText ) {
          // element.insertAdjacentHTML('afterbegin', `<span data-tooltip="${getTooltipTitle( element )}"><i class="ottericon gg-${icon}" role="img" aria-label=${label}></i></span>`);
          const tooltip = makeHtmlElement( 'span' );
          tooltip.setAttribute('data-tooltip', tooltipTitle);
          const item = makeHtmlElement(
            'i',
            { class: `ottericon gg-${icon}` },
            { role: 'img' },
          )
          item.setAttribute('aria-label', labels);
          tooltip.append(item);
          element.append(tooltip);
          // element.insertAdjacentHTML('beforeend', `<span class="spacial-letter-down a11y-hidden" focusable="false" role="img" aria-label="close" aria-expanded="false"><i class="ottericon gg-chevron-down" role="img" aria-label="fold"></i></span>`)
          const span = makeHtmlElement(
            'span', 
            { class: 'spacial-letter-down a11y-hidden'},
            { focusable: 'false'},
            { role: 'img'}
          );
          span.setAttribute('aria-label', 'close');
          span.setAttribute('aria-expanded', 'false');
          const i = makeHtmlElement(
            'i',
            { class: `ottericon gg-chevron-down` },
            { role: 'img' }
          )
          i.setAttribute('aria-label', 'fold');
          span.append(i);
          element.append(span);
        } else {
          // element.insertAdjacentHTML('afterbegin', `<span><i class="ottericon gg-${icon}" role="img" aria-label=${label}></i></span>`);
          const container = makeHtmlElement( 'span' );
          const item = makeHtmlElement(
            'i',
            { class: `ottericon gg-${icon}` },
            { role: 'img' },
          )
          item.setAttribute('aria-label', labels);
          container.append(item);
          element.prepend(container);
        }
      } 
    }
    setButtonIcon('search', 'tooltip', 'search');
    setButtonIcon('google', 'tooltip', 'link');
    if ( buttonLink ) {
      element.addEventListener('click', function() {
        ( linkTarget === '_blank' ) ? visitPage( buttonLink, linkTarget ) 
          : visitPage( buttonLink );
      });
    }
    function returnCheckValue( val1, val2 = '-' ) {
      return val1 || val2;
    }
    element.setAttribute('data-index-number', i + 1);
    logButton('button', i);
    function logButton(info, idx) {
      'use strict';
      const loadButtonItmeIdx = returnCheckValue( i + 1 );
      const loadButtonItmeText = returnCheckValue( buttonInnerText, '(context)' );
      const loadButtonItmeType = returnCheckValue( buttonType, '(type)' );
      const loadButtonItmeDanger = returnCheckValue( buttonDanger , '(danger)' );
      const loadButtonItmeGhost = returnCheckValue( buttonGhost , '(ghost)' );
      const loadButtonItmeShape = returnCheckValue( buttonShape, '(shape)' );
      const loadButtonItmeDisabled = returnCheckValue( disabled, '(disabled)' );
      const loadButtonItmeBlock = returnCheckValue( buttonBlock, '(block)' );
      const loadButtonItmeSize = returnCheckValue( buttonSize, 'middle' );
      const loadButtonItmeTrigger = returnCheckValue( buttonTrigger, '(trigger)' );
      const loadTooltipTheme = returnCheckValue( tooltipTheme, 'black' );
      const loadTooltipColor = returnCheckValue( tooltipColor, '(color)' );
      const loadTooltipPlacment = returnCheckValue( placement, 'default' );
      const loadTooltipTitle = returnCheckValue( tooltipTitle, '(context)' );
      const loadButtonIcon = returnCheckValue( buttonIcon, '(icon)' );
      const loadLinkTarget = returnCheckValue( linkTarget, '(target)' );
      const loadButtonLink = returnCheckValue( buttonLink, '(url)' );
      const groupOfPairs = [
        { id: 1, name: info, class: 'specified' },
        { id: 2, name: logTime, class: 'log-time' },
        { id: 3, name: loadButtonItmeIdx, class: 'trigger-idx' },
        { id: 4, name: loadButtonItmeText, class: 'trigger-txt' },
        { id: 5, name: loadButtonItmeType, class: 'trigger-type' },
        { id: 6, name: loadButtonItmeDanger, class: 'trigger-dangerous' },
        { id: 7, name: loadButtonItmeGhost, class: 'trigger-ghost' },
        { id: 8, name: loadButtonItmeShape, class: 'trigger-shape' },
        { id: 9, name: loadButtonItmeDisabled, class: 'trigger-disabled' },
        { id: 10, name: loadButtonItmeBlock, class: 'trigger-blocked' },
        { id: 11, name: loadButtonItmeSize, class: 'trigger-size' },
        { id: 12, name: loadButtonItmeTrigger, class: 'trigger-role' },
        { id: 13, name: loadTooltipTheme, class: 'tooltip-theme' },
        { id: 14, name: loadTooltipColor, class: 'tooltip-color' },
        { id: 15, name: loadTooltipPlacment, class: 'tooltip-plc' },
        { id: 16, name: loadTooltipTitle, class: 'tooltip-title' },
        { id: 17, name: loadButtonIcon, class: 'trigger-icon' },
        { id: 18, name: loadLinkTarget, class: 'trigger-target' },
        { id: 19, name: loadButtonLink, class: 'trigger-link' }
      ]
      const itemContainer = makeHtmlElement('li', { class: 'log-item-button' });
      const [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19] = groupOfPairs.map((item) =>
        makeHtmlElement('span', { class: item.class }, { textContent: item.name })
      );
      itemContainer.append(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19);
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
  function visitPage(url, target = '_self'){
    return window.open(url, target);
  }
  logElmnt.insertAdjacentHTML('beforebegin', '<h4 class="log-title-button">Log: Button</h4>');
})();

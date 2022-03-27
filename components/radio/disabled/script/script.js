'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const radioLbls = cntnrElmnt.querySelectorAll('.otter-radio-wrapper');
  const toggleDisabled = document.querySelector('.otter-btn.otter-btn-primary');
  const radioName = [];

  for (let i = 0; i < radioLbls.length; i++) {
    const element = radioLbls[i];
    const spanElmn = element.querySelector('.otter-radio');
    const checkElmn = spanElmn.querySelector('.otter-radio-input');
    radioName.push(checkElmn.name);
    element.addEventListener("click", function() {
      if(allEqual(radioName)) {
        unchckAll();
      }
      addCheck(i);
    })
  }

  const allEqual = arr => arr.every( v => v === arr[0] );

  function unchckAll() {
    'use strict';
    for (let i = 0; i < radioLbls.length; i++) {
      const element = radioLbls[i];
      if (!element.hasAttribute('disabled') && !element.classList.contains('otter-radio-wrapper-disabled')) {
        element.classList.remove('otter-radio-wrapper-checked');
        element.firstElementChild.classList.remove('otter-radio-checked');
        element.firstElementChild.children[0].removeAttribute('checked');
      }
    }
  }
  function addCheck(idx) {
    'use strict';
    const element = radioLbls[idx];
    if (!element.hasAttribute('disabled') && !element.classList.contains('otter-radio-wrapper-disabled')) {
      element.classList.add('otter-radio-wrapper-checked');
      element.firstElementChild.classList.add('otter-radio-checked');
      element.firstElementChild.children[0].setAttribute('checked', 'checked');
    }
  }
  function addDisabled(idx) {
    'use strict';
    const element = radioLbls[idx];
    element.classList.toggle('otter-radio-wrapper-disabled');
    element.firstElementChild.classList.toggle('otter-radio-disabled');
    element.firstElementChild.children[0].toggleAttribute('disabled', 'disabled');
  }
  toggleDisabled.addEventListener("click", function() {
    for (let i = 0; i < radioLbls.length; i++) {
      const element = radioLbls[i];
      console.log(element);
      addDisabled(i);
    }
  })
})();
'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const form = cntnrElmnt.querySelector("form");
  const radioLbls = cntnrElmnt.querySelectorAll('.otter-radio-wrapper');
  const chckBxLbls = cntnrElmnt.querySelector('.otter-checkbox-wrapper');

  for (let i = 0; i < radioLbls.length; i++) {
    const element = radioLbls[i];
    element.addEventListener("click", function() {
      unchckAll();
      addCheck(i);
    })
  }

  function unchckAll() {
    'use strict';
    for (let i = 0; i < radioLbls.length; i++) {
      const element = radioLbls[i];
      element.classList.remove('otter-radio-wrapper-checked');
      element.firstElementChild.classList.remove('otter-radio-checked');
      element.firstElementChild.children[0].removeAttribute('checked');
    }
  }

  function addCheck(idx) {
    'use strict';
    const element = radioLbls[idx];
    element.classList.add('otter-radio-wrapper-checked');
    element.firstElementChild.classList.add('otter-radio-checked');
    element.firstElementChild.children[0].setAttribute('checked', 'checked');
  }

  chckBxLbls.addEventListener("click", toggleCheckBox);
  
  function toggleCheckBox() {
    'use strict';
    const isChecked = chckBxLbls.querySelector('.otter-checkbox input[type="checkbox"]').checked;
    const spanElmn = chckBxLbls.querySelector('.otter-checkbox');
    const checkElmn = spanElmn.querySelector('.otter-checkbox-input');
    let result; 
    if(isChecked) {
      spanElmn.classList.toggle('otter-checkbox-checked');
      checkElmn.toggleAttribute('checked');
      result = isChecked;
    } else {
      spanElmn.classList.remove('otter-checkbox-checked');
      checkElmn.removeAttribute('checked');
      result = isChecked;
    }
    return result;
  }

  function submitLog() {
    'use strict'
    const logElmnt = cntnrElmnt.querySelector('.event-log');
    const time = new Date();
    const timeStr = time.toLocaleTimeString();
    const nowClsNm = getCurrentBtnClassName();
    const newItmElmn = document.createElement('li');
    const newCntnt = document.createTextNode( nowClsNm + ", " + timeStr + " 'Danger' style: " + toggleCheckBox() );
    newItmElmn.append(newCntnt);
    logElmnt.append(newItmElmn);
    const COUNT_SUBMIT = logElmnt.querySelectorAll('li').length - 1;
    const prevLogRec = logElmnt.querySelectorAll('li')[COUNT_SUBMIT - 1].outerText;
    const prvClsNm = prevLogRec.split(',', 2)[0];
    return [prvClsNm, nowClsNm];
  }

  function getCurrentBtnClassName() {
    'use strict';
    let result;
    const chckdElmn = form.querySelector('input[name="btn-size"]:checked');
    const chckdVal = chckdElmn.value;
    return result = chckdVal;

  }
  
  form.addEventListener('submit', function(event) {
    'use strict';
    const btnElmn = cntnrElmnt.querySelectorAll('button[type="button"]');
    const [preClass, nowClass] = submitLog();
    for (let i = 0; i < btnElmn.length; i++) {
      const element = btnElmn[i];
      element.classList.remove(preClass);
      element.classList.add(nowClass);
      if (toggleCheckBox()) {
        element.classList.remove('otter-btn-dangerous');
        element.classList.add('otter-btn-dangerous');  
      } else {
        element.classList.remove('otter-btn-dangerous');
      }
    }
    event.preventDefault();
  }, false);
})();
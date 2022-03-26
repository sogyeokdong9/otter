'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const form = cntnrElmnt.querySelector("form");
  const radioLbls = cntnrElmnt.querySelectorAll('.otter-radio-wrapper');
  const chckBxLbls = cntnrElmnt.querySelectorAll('.otter-checkbox-wrapper');
  const btnElmn = cntnrElmnt.querySelectorAll('button[type="button"]');

  for (let i = 0; i < radioLbls.length; i++) {
    const element = radioLbls[i];
    element.addEventListener("click", function() {
      unchckAll();
      addCheck(i);
    })
  }

  for (let i = 0; i < chckBxLbls.length; i++) {
    const element = chckBxLbls[i];
    element.addEventListener("click", function() {
      toggleCheckBox();
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
  
  function toggleCheckBox() {
    'use strict';
    for (let i = 0; i < chckBxLbls.length; i++) {
      const element = chckBxLbls[i];
      const isChecked = element.querySelector('.otter-checkbox input[type="checkbox"]').checked;
      const spanElmn = element.querySelector('.otter-checkbox');
      const checkElmn = spanElmn.querySelector('.otter-checkbox-input');
      if(isChecked) {
        spanElmn.classList.toggle('otter-checkbox-checked');
        checkElmn.toggleAttribute('checked');
      } else {
        spanElmn.classList.remove('otter-checkbox-checked');
        checkElmn.removeAttribute('checked');
      } 
    }
  }

  function isCheckedCheckbox(id) {
    'use strict';
    let result;
    const isChecked = document.getElementById(id).checked;
    return result = isChecked;
  }

  function submitLog() {
    'use strict'
    const logElmnt = cntnrElmnt.querySelector('.event-log');
    const time = new Date();
    const timeStr = time.toLocaleTimeString();
    const nowClsNm = getCurrentBtnClassName();
    const newItmElmn = document.createElement('li');
    const newCntnt = document.createTextNode( nowClsNm + ", "
                                               + timeStr + ", Danger: "
                                               + isCheckedCheckbox('danger') + ", Disabled: " 
                                               + isCheckedCheckbox('disabled') + ", Block: " 
                                               + isCheckedCheckbox('block'));
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
    const [preClass, nowClass] = submitLog();
    for (let i = 0; i < btnElmn.length; i++) {
      const element = btnElmn[i];
      element.classList.remove(preClass);
      if (nowClass !== 'otter-btn-df') {
        element.classList.add(nowClass);
      }
      if (isCheckedCheckbox('danger')) {
        element.classList.add('otter-btn-dangerous');  
      } else {
        element.classList.remove('otter-btn-dangerous');
      }
      if (isCheckedCheckbox('block')) {
        element.classList.add('otter-btn-block');  
      } else {
        element.classList.remove('otter-btn-block');
      }
      if (isCheckedCheckbox('disabled')) {
        element.setAttribute('disabled', 'disabled');
      } else {
        element.removeAttribute('disabled');
      }
    }
    event.preventDefault();
  }, false);
})();
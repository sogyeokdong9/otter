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

  function toStringTime() {
    'use strict';
    let result;
    const time = new Date();
    const timeStr = time.toLocaleTimeString();
    return result = timeStr;
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
    'use strict';
    const logElmnt = cntnrElmnt.querySelector('.event-log');
    const nowClsNm = getCurrentBtnClassName();
    const newItmElmn = document.createElement('li');
    const newItmSpn1 = document.createElement('span');
    const newItmSpn2 = document.createElement('span');
    const newItmSpn3 = document.createElement('span');
    const newItmSpn4 = document.createElement('span');
    const newItmSpn5 = document.createElement('span');
    const newCntnt1 = document.createTextNode( nowClsNm );
    const newCntnt2 = document.createTextNode( toStringTime() );
    const newCntnt3 = document.createTextNode( "Danger: " + isCheckedCheckbox('danger') );
    const newCntnt4 = document.createTextNode( "Disabled: " + isCheckedCheckbox('disabled') );
    const newCntnt5 = document.createTextNode( "Block: " + isCheckedCheckbox('block') );
    newItmElmn.classList.add('log-item');
    newItmSpn1.classList.add('now-class');
    newItmSpn2.classList.add('log-time');
    newItmSpn3.classList.add('is-checked-danger');
    newItmSpn4.classList.add('is-checked-disabled');
    newItmSpn5.classList.add('is-checked-block');
    newItmSpn1.append(newCntnt1);
    newItmSpn2.append(newCntnt2);
    newItmSpn3.append(newCntnt3);
    newItmSpn4.append(newCntnt4);
    newItmSpn5.append(newCntnt5);
    newItmElmn.append(newItmSpn1);
    newItmElmn.append(newItmSpn2);
    newItmElmn.append(newItmSpn3);
    newItmElmn.append(newItmSpn4);
    newItmElmn.append(newItmSpn5);
    logElmnt.append(newItmElmn);
    const COUNT_SUBMIT = logElmnt.querySelectorAll('li').length - 1;
    const prevLogRec = logElmnt.querySelectorAll('li')[COUNT_SUBMIT - 1];
    const prvClsNm = prevLogRec.firstElementChild.innerText;
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
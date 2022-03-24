'use strict';
(function () {
  'use strict';
  const form = document.querySelector("form");
  const cntnrElmn = document.querySelector('.wrap');
  const btnElmn = cntnrElmn.querySelectorAll('button[type="button"]');
  const cntnrRdoLbl = document.querySelectorAll('.otter-radio-wrapper');
  const cntnrChckbxLbl = document.querySelector('.otter-checkbox-wrapper');

  for (let i = 0; i < cntnrRdoLbl.length; i++) {
    const element = cntnrRdoLbl[i];
    element.addEventListener("click", function() {
      deleteChecked();
      addChecked(i);
    })
  }

  function deleteChecked() {
    'use strict';
    for (let i = 0; i < cntnrRdoLbl.length; i++) {
      const element = cntnrRdoLbl[i];
      element.classList.remove('otter-radio-wrapper-checked');
      element.firstElementChild.classList.remove('otter-radio-checked');
      element.firstElementChild.children[0].removeAttribute('checked');
    }
  }

  function addChecked(idx) {
    'use strict';
    const element = cntnrRdoLbl[idx];
    element.classList.add('otter-radio-wrapper-checked');
    element.firstElementChild.classList.add('otter-radio-checked');
    element.firstElementChild.children[0].setAttribute('checked', 'checked');
  }


  cntnrChckbxLbl.addEventListener("click", toggleCheckBox);
  
  function toggleCheckBox() {
    'use strict';
    const isChecked = document.querySelector('.otter-checkbox input[type="checkbox"]').checked;
    const spanElmn = cntnrChckbxLbl.querySelector('.otter-checkbox');
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
    const logElmn = cntnrElmn.querySelector('.event-log');
    const time = new Date();
    const timeStr = time.toLocaleTimeString();
    const chckdElmn = form.querySelector('input[name="btn-size"]:checked');
    const chckdVal = chckdElmn.value;
    const newItmElmn = document.createElement('li');
    const newCntnt = document.createTextNode(chckdVal + ", " + timeStr);
    newItmElmn.append(newCntnt);
    logElmn.append(newItmElmn);
    const cntSbmt = logElmn.querySelectorAll('li').length - 1;
    const prvClsNm = logElmn.querySelectorAll('li')[cntSbmt - 1].outerText;
    const trnClsNm = prvClsNm.split(',', 2)[0];
  }
  
  form.addEventListener('submit', function(event) {
    'use strict';
    submitLog();
    const chckdElmn = form.querySelector('input[name="btn-size"]:checked');
    const chckdVal = chckdElmn.value;
    for (let i = 0; i < btnElmn.length; i++) {
      const element = btnElmn[i];
      element.classList.remove('otter-btn-sm', 'otter-btn-df', 'otter-btn-lg');
      element.classList.add(chckdVal);
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

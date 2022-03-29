'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const radioLbls = cntnrElmnt.querySelectorAll('.otter-radio-wrapper');
  const moreLbl = cntnrElmnt.querySelector('#more');
  const otherInp = cntnrElmnt.querySelector('#others');
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
      // Replace with css
      // if ( isChecked('more') ) {
      //   this.lastElementChild.insertAdjacentHTML('beforeend', '<span class="others-wrapper"> <label for="others">others</label> <input class="otter-input" id="others" name="others"  type="text" value="" required> </span>');
      // }
    })
  }

  function isChecked(id) {
    'use strict';
    let result;
    const isChecked = document.getElementById(id).checked;
    return result = isChecked;
  }

  otherInp.addEventListener('keyup', function(e) {
    if( isChecked('more') ) {
      if (window.event.keyCode == 13) {
        const others = document.getElementById('others').value;
        return alert(others);
      }
    } else {
      alert("Check the 'more' radio button first.");
      return false;
    }
  })

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
      console.log(element);
    }
  }
})();

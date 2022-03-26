'use strict';
(function () {
  'use strict';
  const cntnrElmnt = document.querySelector('.wrap');
  const radioLbls = cntnrElmnt.querySelectorAll('.otter-radio-wrapper');

  for (let i = 0; i < radioLbls.length; i++) {
    const element = radioLbls[i];
    element.addEventListener("click", function() {
      addCheck(i);
    })
  }

  function addCheck(idx) {
    'use strict';
    const element = radioLbls[idx];
    element.classList.add('otter-radio-wrapper-checked');
    element.firstElementChild.classList.add('otter-radio-checked');
    element.firstElementChild.children[0].setAttribute('checked', 'checked');
  }
})();
'use strict';
(function () {
  'use strict';
  const form = document.querySelector("form");
  const cntnrElmn = document.querySelector('.wrap');
  const btnElmn = cntnrElmn.querySelectorAll('button[type="button"]');
  const orgnlBtcln = [];
  for (let i = 0; i < btnElmn.length; i++) {
    const element = btnElmn[i];
    orgnlBtcln.push(element.className);
  }
  // console.log('Original button class name: ' + orgnlBtcln);
  form.addEventListener('submit', function(event) {
    'use strict';
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
    const trnClsNm = prvClsNm.split(',', 2);
    // 'Node list(li): '
    // console.log(logElmn.querySelectorAll('li')); 
    // console.log('Previous class name: ' + prvClsNm);
    // console.log('Event log split: ' + trnClsNm);
    const cntrRdoGp = cntnrElmn.querySelector('.otter-radio-group');
    const lbElmn = cntrRdoGp.querySelectorAll('.otter-radio-wrapper');
    const spElmn = cntrRdoGp.querySelectorAll('.otter-radio');
    const rdoElmn = cntrRdoGp.querySelectorAll('input[type="radio"]');
    const orgnRdcln = [];
    for (let i = 0; i < lbElmn.length; i++) {
      const element = lbElmn[i];
      orgnRdcln.push(element.className);
    }
    // console.log('Original label class name: ' + orgnRdcln);
    for (let i = 0; i < lbElmn.length; i++) {
      const eLabel = lbElmn[i], eSpan = spElmn[i], eRadio = rdoElmn[i];
      eLabel.classList.remove('otter-radio-wrapper-checked')
      eSpan.classList.remove('otter-radio-checked')
      eRadio.removeAttribute('checked');
    }
    for (let i = 0; i < btnElmn.length; i++) {
      const element = btnElmn[i];
      // console.log(element);
      // console.log(btnElmn[i].className);
      btnElmn[i].classList.remove(trnClsNm[0]);
      btnElmn[i].classList.add(chckdVal);
      // console.log(trnClsNm[0]);
      if (chckdVal === 'otter-btn-sm') {
        addClsAttr(lbElmn[0], spElmn[0], rdoElmn[0], 'otter-radio-wrapper-checked', 'otter-radio-checked', 'checked')
      } else if (chckdVal === 'otter-btn-df') {
        addClsAttr(lbElmn[1], spElmn[1], rdoElmn[1], 'otter-radio-wrapper-checked', 'otter-radio-checked', 'checked')
      } else if (chckdVal === 'otter-btn-lg') {
        addClsAttr(lbElmn[2], spElmn[2], rdoElmn[2], 'otter-radio-wrapper-checked', 'otter-radio-checked', 'checked')
      } else {
        addClsAttr(lbElmn[1], spElmn[1], rdoElmn[1], 'otter-radio-wrapper-checked', 'otter-radio-checked', 'checked')
      }
      function addClsAttr(t1, t2, t3, c1, c2, a1) {
        'use strict'
        t1.classList.add(c1);
        t2.classList.add(c2);
        t3.setAttribute(a1, a1);
      }
      // lbElmn[0].classList.add('otter-radio-wrapper-checked');
      // spElmn[0].classList.add('otter-radio-checked');
      // rdoElmn[0].setAttribute('checked', 'checked');
    }
    event.preventDefault();
  }, false);
})();

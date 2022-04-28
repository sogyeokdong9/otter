'use strict';
(function () {
  'use strict';
  const items = [
    {
      "id":"1",
      "name":"Dasboard",
      "dataTheme":"red",
      "menu":[
        {
          "id":"dropdown-menu-ul-li-tmp-key-0-0",
          "name":"Repositories",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-0-1",
          "name":"Following",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-0-2",
          "name":"For you",
          "url":"https://www.google.com/"
        }
      ]
    },
    {
      "id":"2",
      "name":"Pull Request",
      "dataTheme":"purple",
      "menu":[
        {
          "id":"dropdown-menu-ul-li-tmp-key-1-0",
          "name":"Created",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-1-1",
          "name":"Assigned",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-1-2",
          "name":"Mentioned",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-1-3",
          "name":"Review requests",
          "url":"https://www.google.com/"
        }
      ]
    },
    {
      "id":"3",
      "name":"Issue",
      "dataTheme":"fuchsia",
      "menu":[
        {
          "id":"dropdown-menu-ul-li-tmp-key-2-0",
          "name":"Created",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-2-1",
          "name":"Assigned",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-2-2",
          "name":"Mentioned",
          "url":"https://www.google.com/"
        }
      ]
    },
    {
      "id":"4",
      "name":"Explore",
      "dataTheme":"green",
      "menu":[
        {
          "id":"dropdown-menu-ul-li-tmp-key-3-0",
          "name":"Topics",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-3-1",
          "name":"Trending",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-3-2",
          "name":"Collections",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-3-3",
          "name":"Events",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-3-4",
          "name":"GitHub Sponsors",
          "url":"https://www.google.com/"
        }
      ]
    },
    {
      "id":"5",
      "name":"Overview",
      "dataTheme":"lime",
      "menu":[
        {
          "id":"dropdown-menu-ul-li-tmp-key-4-0",
          "name":"Overview",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-4-1",
          "name":"Repositories",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-4-2",
          "name":"Projects",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-4-3",
          "name":"Packages",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-4-4",
          "name":"Stars",
          "url":"https://www.google.com/"
        }
      ]
    },
    {
      "id":"6",
      "name":"Settings",
      "dataTheme":"yellow",
      "menu":[
        {
          "id":"dropdown-menu-ul-li-tmp-key-5-0",
          "name":"Public profile",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-5-1",
          "name":"Accoount",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-5-2",
          "name":"Appearance",
          "url":"https://www.google.com/"
        },
        {
          "id":"dropdown-menu-ul-li-tmp-key-5-3",
          "name":"Notifications",
          "url":"https://www.google.com/"
        }
      ]
    }
  ]
  function setClassAttr(elem1, elem2, elem3, menuId, menuLink) {
    'use strict';
    elem1.classList.add('otter-dropdown-menu-item');
    elem1.setAttribute('role', 'menuitem');
    elem1.setAttribute('tabindex', -1);
    elem1.setAttribute('role', 'menuitem');
    elem1.setAttribute('data-menu-id', menuId);
    elem2.classList.add('otter-dropdown-menu-title-content');
    elem3.setAttribute('href', menuLink);
    elem3.setAttribute('target', '_blank');
    elem3.setAttribute('rel', 'noopener noreferrer');
  }
  function chainAppend(val0, val1, val2, val3, val4, val5) {
    'use strict';
    val1.append(val0);
    val2.append(val1);
    val3.append(val2);
    val4.append(val3);
    val5.append(val4);
  }
  function createDrpdnMn(order,count) {
    'use strict';
    for(let i = 0; i < count; i++) {
      window['path' + i] = items[order].menu[i];
      window['menuId' + i] = items[order].menu[i].id;
      window['menuNm' + i] = items[order].menu[i].name;
      window['menuUrl' + i] = items[order].menu[i].url;
      // container, wrapper, itemContainer
      window['newLi' + i] = document.createElement('li');
      window['newSp' + i] = document.createElement('span');
      window['newA' + i] = document.createElement('a');
      window['newTx' + i] = document.createTextNode(items[order].menu[i].name);
    }
    const container = document.createElement('div');
    const wrapper = document.createElement('div');
    const itemContainer = document.createElement('ul');
    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    wrapper.classList.add('otter-dropdown', 'otter-dropdown-hidden');
    wrapper.setAttribute('data-index-number', items[order].id);
    createArrow();
    itemContainer.classList.add('otter-dropdown-menu', 'otter-dropdown-menu-root', 'otter-dropdown-menu-vertical', `otter-dropdown-menu-${items[order].dataTheme}`);
    itemContainer.setAttribute('role', 'menu');
    itemContainer.setAttribute('tabindex', 0);
    itemContainer.setAttribute('data-menu-list', true);
    for(let i = 0; i < count; i++) {
      setClassAttr(window['newLi' + i], window['newSp' + i], window['newA' + i], window['menuId' + i], window['menuUrl' + i]);
      chainAppend(window['newTx' + i], window['newA' + i], window['newSp' + i], window['newLi' + i], itemContainer, wrapper);
    }
    container.append(wrapper);
    createArrow();
    function createArrow() {
      'use strict';
      createHtmlElement('div', 'otter-dropdown-arrow-light', 'otter-dropdown-show-arrow-light', 'otter-dropdown-show-arrow');
      createHtmlElement('div', 'otter-dropdown-arrow-black', 'otter-dropdown-show-arrow-black');
      createHtmlElement('div', 'otter-dropdown-arrow-silver', 'otter-dropdown-show-arrow-silver');
      createHtmlElement('div', 'otter-dropdown-arrow-gray', 'otter-dropdown-show-arrow-gray');
      createHtmlElement('div', 'otter-dropdown-arrow-white', 'otter-dropdown-show-arrow-white');
      createHtmlElement('div', 'otter-dropdown-arrow-maroon', 'otter-dropdown-show-arrow-maroon');
      createHtmlElement('div', 'otter-dropdown-arrow-red', 'otter-dropdown-show-arrow-red');
      createHtmlElement('div', 'otter-dropdown-arrow-purple', 'otter-dropdown-show-arrow-purple');
      createHtmlElement('div', 'otter-dropdown-arrow-fuchsia', 'otter-dropdown-show-arrow-fuchsia');
      createHtmlElement('div', 'otter-dropdown-arrow-green', 'otter-dropdown-show-arrow-green');
      createHtmlElement('div', 'otter-dropdown-arrow-lime', 'otter-dropdown-show-arrow-lime');
      createHtmlElement('div', 'otter-dropdown-arrow-olive', 'otter-dropdown-show-arrow-olive');
      createHtmlElement('div', 'otter-dropdown-arrow-yellow', 'otter-dropdown-show-arrow-yellow');
      function createHtmlElement(element, class1, param1, param2) {
        'use strict';
        if (wrapper.classList.contains(param1) || wrapper.classList.contains(param2)) {
          const arrowDiv = document.createElement(element);
          arrowDiv.classList.add(class1);
          wrapper.append(arrowDiv);
        }
      }
    }
    // itemContainer.lastChild.insertAdjacentHTML('beforebegin', `<li class="otter-dropdown-menu-item otter-dropdown-menu-item-danger" role="menuitem" tabindex="-1" data-menu-id="dropdown-menu-ul-li-tmp-key-0-1"><span class="otter-dropdown-menu-title-content"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Following</a></span></li>`);
    // itemContainer.lastChild.insertAdjacentHTML('beforebegin', '<li class="otter-dropdown-menu-item-divider"></li>');
    // itemContainer.lastChild.classList.add('otter-dropdown-menu-item-disabled');
    document.body.append(container);
  }
  createDrpdnMn(0, 3);
  createDrpdnMn(1, 4);
  createDrpdnMn(2, 3);
  createDrpdnMn(3, 5);
  createDrpdnMn(4, 5);
  createDrpdnMn(5, 4);
})();

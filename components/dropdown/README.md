# Dropdown

## Structure

```code
div(`wrap)
  a(`otter-dropdown-trigger otter-dropdown-link otter-dropdown-close")
    {Hover me} span('special-letter-down')[focusable="false" role="img" aria-label="display of dropdown menus state that open or close" aria-expanded="false"]
  <!-- Mouse Event Log  -->
div[style="position: absolute; top: 0; left: 0; width: 100%;"]
  div(`otter-dropdown[, `otter-dropdown-hidden])
    ul(`otter-dropdown-menu(`otter-dropdown-menu-root[, `otter-dropdown-menu-vertical[, `otter-dropdown-menu-light]]))[role="menu" tabindex="0" data-menu-list="true"]
      li(`otter-dropdown-menu-item)[role="menuitem" tabindex="-1" data-menu-id="dropdown-menu-vertical-black-tmp_key-0"]
        span(`otter-dropdown-menu-title-content)
          a{item}
```

## Examples

- [CodePen: Otter: Dropdow > basic](https://codepen.io/sogyeokdong/pen/YzYENKE "Otter: Dropdow > basic")
- [CodePen: Otter: Dropdow > placement](https://codepen.io/sogyeokdong/pen/yLpveeO "Otter: Dropdow > placement")
- [CodePen: Otter: Dropdow > arrow](https://codepen.io/sogyeokdong/pen/wvpxMZY "Otter: Dropdow > arrow")
- [CodePen: Otter: Dropdow > other-elements](https://codepen.io/sogyeokdong/pen/ExoeNzv "Otter: Dropdow > other-elements")
- [CodePen: Otter: Dropdow > arrow-pointing-at-center](https://codepen.io/sogyeokdong/pen/vYpzgBQ "Otter: Dropdow > arrow-pointing-at-center")
- [CodePen: Otter: Dropdow > trigger-mode](https://codepen.io/sogyeokdong/pen/NWXLdGq "Otter: Dropdow > trigger-mode")

### Basic

```html
<div class="wrap">
  <!-- trigger -->
  <a href="javascript:void(0)" role="button" class="otter-dropdown-trigger otter-dropdown-link otter-dropdown-close" data-index-number="1" >
    Hover me <span class="spacial-letter-down" focusable="false" role="img" aria-label="display of dropdown menus state that open or close" aria-expanded="false">&#8744;</span>
  </a>
</div>
<!-- dropdown menu -->
<div style="position: absolute; top: 0; left: 0; width: 100%;">
  <div class="otter-dropdown otter-dropdown-hidden">
    <ul class="otter-dropdown-menu otter-dropdown-menu-root otter-dropdown-menu-vertical otter-dropdown-menu-light" role="menu" tabindex="0" data-index-number="1" data-menu-list="true">
      <li class="otter-dropdown-menu-item" role="menuitem" tabindex="-1" data-menu-id="dropdown-menu-vertical-black-tmp_key-0">
        <span class="otter-dropdown-menu-title-content">
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">1st menu item</a>
        </span>
      </li>
    </ul>
  </div>
</div> 
```

### Placement

```html
<div class="wrap">
  <div class="otter-space otter-space-flex otter-space-vertical otter-space-align-center otter-space-vertical-gap-8">
    <div class="otter-space-item">
      <div class="otter-space otter-space-horizontal otter-space-align-center otter-space-horizontal-gap-8">
        <div class="otter-space-item">
          <!-- trigger -->
          <button type="button" class="otter-btn otter-btn-default otter-dropdown-trigger otter-dropdown-link otter-dropdown-close" data-index-number="1" data-placement="bottomLeft">
            <span>Dashboard</span>
            <span class="spacial-letter-down a11y-hidden" focusable="false" role="img" aria-label="display of dropdown menus state that open or close" aria-expanded="false">&#8744;</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- dropdown menu -->
<div style="position: absolute; top: 0; left: 0; width: 100%;">
  <div class="otter-dropdown otter-dropdown-hidden" data-index-number="1">
    <ul class="otter-dropdown-menu otter-dropdown-menu-root otter-dropdown-menu-vertical otter-dropdown-menu-light" role="menu" tabindex="0" data-index-number="1" data-menu-list="true">
      <li class="otter-dropdown-menu-item" role="menuitem" tabindex="-1" data-menu-id="dropdown-menu-vertical-black-tmp_key-0-0">
        <span class="otter-dropdown-menu-title-content">
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Repositories</a>
        </span>
      </li>
    </ul>
  </div>
</div> 
```

### Arrow

```html
<div class="wrap">
  <div class="otter-space otter-space-flex otter-space-vertical otter-space-align-center otter-space-vertical-gap-8">
    <div class="otter-space-item">
      <div class="otter-space otter-space-horizontal otter-space-align-center otter-space-horizontal-gap-8">
        <div class="otter-space-item">
          <!-- trigger -->
          <button type="button" class="otter-btn otter-btn-default otter-dropdown-trigger otter-dropdown-link otter-dropdown-close" data-index-number="1" data-placement="bottomLeft">
            <span>Dashboard</span>
            <span class="spacial-letter-down a11y-hidden" focusable="false" role="img" aria-label="display of dropdown menus state that open or close" aria-expanded="false">&#8744;</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- dropdown menu -->
<div style="position: absolute; top: 0; left: 0; width: 100%;">
  <div class="otter-dropdown otter-dropdown-show-arrow otter-dropdown-hidden" data-index-number="1">
    <!-- It is automatically generated based on the presence of 'otter-dropdown-show-arrow'. -->
    <div class="otter-dropdown-arrow"></div>
    <ul class="otter-dropdown-menu otter-dropdown-menu-root otter-dropdown-menu-vertical otter-dropdown-menu-light" role="menu" tabindex="0" data-index-number="1" data-menu-list="true">
      <li class="otter-dropdown-menu-item" role="menuitem" tabindex="-1" data-menu-id="dropdown-menu-vertical-black-tmp_key-0-0">
        <span class="otter-dropdown-menu-title-content">
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Repositories</a>
        </span>
      </li>
    </ul>
  </div>
</div> 
```

### Other Elements

```html
<div class="wrap">
  <!-- trigger -->
  <a href="javascript:void(0)" role="button" class="otter-dropdown-trigger otter-dropdown-link otter-dropdown-close" data-index-number="1" data-placement="bottomLeft">
    Hover me <span class="spacial-letter-down" focusable="false" role="img" aria-label="display of dropdown menus state that open or close" aria-expanded="false">&#8744;</span>
  </a>
</div>
<!-- dropdown menu -->
<div style="position: absolute; top: 0; left: 0; width: 100%;">
  <div class="otter-dropdown otter-dropdown-hidden">
    <ul class="otter-dropdown-menu otter-dropdown-menu-root otter-dropdown-menu-vertical otter-dropdown-menu-light" role="menu" tabindex="0" data-index-number="1" data-menu-list="true">
      <li class="otter-dropdown-menu-item" role="menuitem" tabindex="-1" data-menu-id="dropdown-menu-vertical-black-tmp_key-0">
        <span class="otter-dropdown-menu-title-content">
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">1st menu item</a>
        </span>
      </li>
      <!-- Othes Elements: Style like the horizontal line(hr) -->
      <li class="otter-dropdown-menu-item-divider"></li>
      <li class="otter-dropdown-menu-item" role="menuitem" tabindex="-1" data-menu-id="dropdown-menu-vertical-black-tmp_key-2">
        <span class="otter-dropdown-menu-title-content">
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">2st menu item</a>
        </span>
      </li>
    </ul>
  </div>
</div> 
```

### Arrow pointing at the center

```html
<div class="wrap">
  <div class="otter-space otter-space-flex otter-space-vertical otter-space-align-center otter-space-vertical-gap-8">
    <div class="otter-space-item">
      <div class="otter-space otter-space-horizontal otter-space-align-center otter-space-horizontal-gap-8">
        <div class="otter-space-item">
          <!-- trigger: data-pointer-at-center="true" -->
          <button type="button" class="otter-btn otter-btn-default otter-dropdown-trigger otter-dropdown-link otter-dropdown-close" data-index-number="1" data-placement="bottomLeft" data-pointer-at-center="true">
            <span>Dashboard</span>
            <span class="spacial-letter-down a11y-hidden" focusable="false" role="img" aria-label="display of dropdown menus state that open or close" aria-expanded="false">&#8744;</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- dropdown menu -->
<div style="position: absolute; top: 0; left: 0; width: 100%;">
  <div class="otter-dropdown otter-dropdown-show-arrow otter-dropdown-hidden" data-index-number="1">
    <div class="otter-dropdown-arrow"></div>
    <ul class="otter-dropdown-menu otter-dropdown-menu-root otter-dropdown-menu-vertical otter-dropdown-menu-light" role="menu" tabindex="0" data-index-number="1" data-menu-list="true">
      <li class="otter-dropdown-menu-item" role="menuitem" tabindex="-1" data-menu-id="dropdown-menu-vertical-black-tmp_key-0-0">
        <span class="otter-dropdown-menu-title-content">
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Repositories</a>
        </span>
      </li>
    </ul>
  </div>
</div> 
```

### Trigger mode

```html
<div class="wrap">
  <!-- trigger -->
  <a href="javascript:void(0)" role="button" class="otter-dropdown-trigger otter-dropdown-link otter-dropdown-close" data-index-number="1" data-placement="bottomLeft">
    Click me <span class="spacial-letter-down" focusable="false" role="img" aria-label="display of dropdown menus state that open or close" aria-expanded="false">&#8744;</span>
  </a>
</div>
<!-- dropdown menu -->
<div style="position: absolute; top: 0; left: 0; width: 100%;">
  <div class="otter-dropdown otter-dropdown-hidden">
    <ul class="otter-dropdown-menu otter-dropdown-menu-root otter-dropdown-menu-vertical otter-dropdown-menu-light" role="menu" tabindex="0" data-index-number="1" data-menu-list="true">
      <li class="otter-dropdown-menu-item" role="menuitem" tabindex="-1" data-menu-id="dropdown-menu-vertical-black-tmp_key-0">
        <span class="otter-dropdown-menu-title-content">
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">1st menu item</a>
        </span>
      </li>
    </ul>
  </div>
</div> 
```

## State
- Direction
  - `otter-dropdown-menu-vertical`
  - `otter-dropdown-menu-horizontal`
- Theme
  - `otter-dropdown-menu-light`
  - `otter-dropdown-menu-dark`
- List item
  - `otter-dropdown-menu-item-danger`
- Other Elements: It can be that add style.
  - `<li class="otter-dropdown-menu-item-divider"></li>`
- Placement
  - `bottomLeft`
  - `bottom`
  - `bottomRight`
  - `topLeft`
  - `top`
  - `topRight`
- Arrow(Theme)
  - `otter-dropdown-show-arrow(default)`
  - `otter-dropdown-show-arrow-light`
  - `otter-dropdown-show-arrow-black`
- Arrow pointing at the center
  - `data-pointer-at-center="true"`

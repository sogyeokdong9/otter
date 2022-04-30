# Tooltip

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

- [CodePen: Otter: Tooltip > basic](https://codepen.io/sogyeokdong/pen/RwxvemG "Otter: Tooltip > basic")
- [CodePen: Otter: Tooltip > placement](https://codepen.io/sogyeokdong/pen/BaJeWLx "Otter: Tooltip > placement")
- [CodePen: Otter: Tooltip > arrow-pointing-at-center](https://codepen.io/sogyeokdong/pen/mdpYpmB "Otter: Tooltip > arrow-pointing-at-center")
- [CodePen: Otter: Tooltip > colorful-tooltip](https://codepen.io/sogyeokdong/pen/YzeKMvX "Otter: Dropdow > colorful tooltip")

### Basic

```html
<div class="wrap">
  <div>
    <!-- trigger -->
    <span role="button" class="otter-tooltip-trigger otter-tooltip-link otter-tooltip-close" data-index-number="1">
      <span data-tooltip="I'm tooltip. Zero">Hover meTooltip will show on mouse enter.</span>
      <span class="spacial-letter-down" focusable="false" role="img" aria-label="display of tooltip state that open or close" aria-expanded="false">&#8744;</span>
    </span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, itaque distinctio? Numquam, dolor quis! Exercitationem rem consectetur praesentium tempore voluptatum magni dolorem dignissimos accusantium repellendus, natus iure, atque aspernatur ipsum.
    <br>
</div>
<!-- tooltip -->
<div style="position: absolute; top: 0; left: 0; width: 100%;">
  <div class="otter-tooltip otter-tooltip-show-arrow-black otter-tooltip-hidden otter-tooltip-placement-default otter-slide-down-out" style="min-width: 0px; left: -709px; top: -1224px; pointer-events: none;" role="tooltip" data-index-number="1">
    <div class="otter-tooltip-arrow-black" style="display: block;"></div>
    <div class="otter-tooltip-content otter-tooltip-root otter-tooltip-black" data-item-id="tooltip-tmp-key-0" data-tooltip-theme="black" data-tooltip="true">
      <div class="otter-tooltip-item otter-tooltip-title-content">I'm tooltip. Zero</div>
    </div>
    <div class="otter-tooltip-arrow-black" style="display: none;"></div>
  </div>
</div>
```

### Placement

```html
<div class="wrap">
  <div class="grid-placement">
    <div class="one">
      <div class="otter-space otter-space-flex otter-space-horizontal otter-space-justify-center otter-space-horizontal-gap-8">
        <div class="otter-space-item">
          <!-- trigger -->
          <button type="button" class="otter-btn otter-btn-default otter-btn-lg otter-tooltip-trigger otter-tooltip-link otter-tooltip-close" data-index-number="1" data-placement="topLeft">
            <span data-tooltip="I'm tooltip. One">One</span>
            <span class="spacial-letter-down a11y-hidden" focusable="false" role="img" aria-label="display of tooltip state that open or close" aria-expanded="false">&#8744;</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- dropdown menu -->
<div style="position: absolute; top: 0; left: 0; width: 100%;">
  <div class="otter-tooltip otter-tooltip-show-arrow-black otter-tooltip-hidden otter-tooltip-placement-topLeft otter-slide-down-out" style="min-width: 0px; left: -1920px; top: -1121px; pointer-events: none;" role="tooltip" data-index-number="1">
    <div class="otter-tooltip-arrow-black" style="display: block;"></div>
    <div class="otter-tooltip-content otter-tooltip-root otter-tooltip-black" data-item-id="tooltip-tmp-key-0" data-tooltip-theme="black" data-tooltip="true">
      <div class="otter-tooltip-item otter-tooltip-title-content">I'm tooltip. One</div>
    </div>
    <div class="otter-tooltip-arrow-black" style="display: none;"></div>
  </div>
</div>
```

### Arrow pointing at the center

```html
<div class="wrap">
  <div class="grid-placement">
    <div class="one">
      <div class="otter-space otter-space-flex otter-space-horizontal otter-space-justify-center otter-space-horizontal-gap-8">
        <div class="otter-space-item">
          <!-- trigger -->
          <button type="button" class="otter-btn otter-btn-default otter-tooltip-trigger otter-tooltip-link otter-tooltip-close" data-index-number="1" data-tooltip-theme="black" data-placement="topLeft" data-pointer-at-center="true" data-tooltip-color="undefined">
            <span data-tooltip="I'm tooltip. One">One</span>
            <span class="spacial-letter-down a11y-hidden" focusable="false" role="img" aria-label="display of tooltip state that open or close" aria-expanded="false">∨</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- dropdown menu -->
<div style="position: absolute; top: 0; left: 0; width: 100%;">
  <div class="otter-tooltip otter-tooltip-show-arrow-black otter-tooltip-hidden otter-tooltip-placement-topLeft otter-slide-down-out" style="min-width: 0px; left: -1920px; top: -1121px; pointer-events: none;" role="tooltip" data-index-number="1">
    <div class="otter-tooltip-arrow-black" style="display: block;"></div>
    <div class="otter-tooltip-content otter-tooltip-root otter-tooltip-black" data-item-id="tooltip-tmp-key-0" data-tooltip-theme="black" data-tooltip="true">
      <div class="otter-tooltip-item otter-tooltip-title-content">I'm tooltip. One</div>
    </div>
    <div class="otter-tooltip-arrow-black" style="display: none;"></div>
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

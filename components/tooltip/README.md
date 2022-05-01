# Tooltip

## Structure

```code
div(`wrap)
  span(`otter-tooltip-trigger otter-tooltip-link otter-tooltip-close)[role="button" data-index-number="1"]
    span{Hover meTooltip will show on mouse enter.}[data-tooltip="I'm tooltip. Zero"]
    span{&#8744;}('special-letter-down')[focusable="false" role="img" aria-label="display of dropdown menus state that open or close" aria-expanded="false"]
  <!-- Mouse Event Log  -->
div[style="position: absolute; top: 0; left: 0; width: 100%;"]
  div(`otter-tooltip[, `otter-tooltip-show-arrow-black[, `otter-tooltip-hidden[, `otter-tooltip-placement-default[`, otter-slide-down-out]]]])[style="min-width: 0px; left: -1377px; top: -1024px; pointer-events: none;"][role="tooltip" data-index-number="1"]
    div([`otter-tooltip-arrow-black])[style="display: block;"]
    div(`otter-tooltip-content otter-tooltip-root [, `otter-tooltip-black])[data-item-id="tooltip-tmp-key-0" data-tooltip-theme="black" data-tooltip="true"]
      div{I'm tooltip. Zero}(`otter-tooltip-item otter-tooltip-title-content)
    div([`otter-tooltip-arrow-black])[style="display: none;"]
```

<div style="position: absolute; top: 0; left: 0; width: 100%;">
  <div class="otter-tooltip otter-tooltip-show-arrow-black otter-tooltip-hidden otter-tooltip-placement-default otter-slide-down-out" style="min-width: 0px; left: -1377px; top: -1024px; pointer-events: none;" role="tooltip" data-index-number="1">
    <div class="otter-tooltip-arrow-black" style="display: block;"></div>
    <div class="otter-tooltip-content otter-tooltip-root otter-tooltip-black" data-item-id="tooltip-tmp-key-0" data-tooltip-theme="black" data-tooltip="true">
      <div class="otter-tooltip-item otter-tooltip-title-content">I'm tooltip. Zero</div>
    </div>
    <div class="otter-tooltip-arrow-black" style="display: none;"></div>
  </div>
</div>

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
          <button type="button" class="otter-btn otter-btn-default otter-tooltip-trigger otter-tooltip-link otter-tooltip-close" data-index-number="1" data-placement="topLeft" data-pointer-at-center="true">
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

### Colorful tooltip

```html
<div class="wrap">
  <div class="grid-placement">
    <div class="one">
      <div class="otter-space otter-space-flex otter-space-horizontal otter-space-justify-center otter-space-horizontal-gap-8">
        <div class="otter-space-item">
          <!-- trigger -->
          <button type="button" class="otter-btn otter-btn-default otter-tooltip-trigger otter-tooltip-link otter-tooltip-close" data-index-number="1" data-tooltip-theme="black" data-tooltip-color="black" data-placement="rightTop">
            <span data-tooltip="I'm tooltip. Black">Black</span>
            <span class="spacial-letter-down a11y-hidden" focusable="false" role="img" aria-label="isplay of tooltip state that open or close" aria-expanded="false">&#8744;</span>
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
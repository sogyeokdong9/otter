# Button

## Structure

```code
button(`otter-btn` [`otter-btn-primary`[, `otter-btn-dangerous`[, ...`otter-btn-loading`]]]) 
    text
```

## Examples

- [CodePen: Otter: button > type](https://codepen.io/sogyeokdong/pen/GRyZVXZ "Otter: button > type")
- [CodePen: Otter: button > icon](https://codepen.io/sogyeokdong/pen/ZErEyme "Otter: button > icon")
- [CodePen: Otter: button > size](https://codepen.io/sogyeokdong/pen/gOowGJG "Otter: button > size")
- [CodePen: Otter: button > disabled](https://codepen.io/sogyeokdong/pen/yLpJgMN "Otter: button > disabled")
- [CodePen: Otter: button > loading](https://codepen.io/sogyeokdong/pen/PoQwoVg "Otter: button > loading")
- [CodePen: Otter: button > danger](https://codepen.io/sogyeokdong/pen/qBpNvWq "Otter: button > danger")
- [CodePen: Otter: button > block](https://codepen.io/sogyeokdong/pen/GRymRYr "Otter: button > block")
- [CodePen: Otter: button > ghost](https://codepen.io/sogyeokdong/pen/MWrEWqo "Otter: button > ghost")

### Type

Ther are `default`, `primary`, `dashed`, `text`, and `link` button in otter.

```html
<button type="button" class="otter-btn">
  <span>Button</span>
</button>
<button type="button" class="otter-btn otter-btn-default">
  <span>Default Button</span>
</button>
<button type="button" class="otter-btn otter-btn-primary">
  <span>Primary Button</span>
</button>
<button type="button" class="otter-btn otter-btn-dashed">
  <span>Dashed Button</span>
</button>
<button type="button" class="otter-btn otter-btn-text">
  <span>Text Button</span>
</button>
<button type="button" class="otter-btn otter-btn-link">
  <span>Link Button</span>
</button>
```

### Icon

Button components can contain an `Icon`. This is done by setting the icon property or placing an `Icon` component within the Button.  
For buttons consisting only of icons without text information, you can use `Tooltip` component to display information about the icons.    

<!-- 
- Button shape(icon only): `otter-btn-circle`, `otter-btn-icon-only`
- Tooltip selector: `otter-tooltip-trigger`, `otter-tooltip-link`, `otter-tooltip-close`
- Tooltip theme(`data-tooltip-theme`)
  - light 
  - black 
  - silver 
  - gray 
  - white 
  - maroon 
  - red 
  - purple 
  - fuchsia 
  - green 
  - lime 
  - olive 
  - yellow 
- Tooltip placement(`data-placement`)
  - topLeft
  - top(default)
  - topRight
  - bottomLeft
  - bottom
  - bottomRight
  - leftTop
  - left
  - leftBottom
  - rightTop
  - right
  - rightBottom
-->

```html
<button type="button" class="otter-btn otter-btn-circle otter-btn-primary otter-btn-icon-only otter-tooltip-trigger otter-tooltip-link otter-tooltip-close" data-index-number="1" data-placement="topLeft">
  <span data-tooltip="Search. One"><i class="ottericon magnifying-glass" role="img" aria-label="Magnifier-shaped search icon"></i></span>
  <span class="spacial-letter-down a11y-hidden" focusable="false" role="img" aria-label="display of tooltip state that open or close" aria-expanded="false">&#8744;</span>
</button>
<button type="button" class="otter-btn otter-btn-circle otter-btn-primary"><span>A</span></button>
<button type="button" class="otter-btn otter-btn-primary">
  <span><i class="ottericon magnifying-glass" role="img" aria-label="Magnifier-shaped search icon"></i></span>
  <span>Search</span>
</button>
<button type="button" class="otter-btn otter-btn-circle otter-btn-default otter-btn-icon-only otter-tooltip-trigger otter-tooltip-link otter-tooltip-close" data-index-number="2">
  <span data-tooltip="Search. Two"><i class="ottericon magnifying-glass" role="img" aria-label="Magnifier-shaped search icon"></i></span>
  <span class="spacial-letter-down a11y-hidden" focusable="false" role="img" aria-label="display of tooltip state that open or close" aria-expanded="false">&#8744;</span>
</button>
<button type="button" class="otter-btn otter-btn-default">
  <span><i class="ottericon magnifying-glass" role="img" aria-label="Magnifier-shaped search icon"></i></span>
  <span>Search</span>
</button>
```

### Size

Ther are `sm`, `lg`, and `default` button in otter.

```html
<button type="button" class="otter-btn otter-btn-lg">
  <span>Button</span>
</button>
<button type="button" class="otter-btn otter-btn-default otter-btn-lg">
  <span>Default Button</span>
</button>
<button type="button" class="otter-btn otter-btn-primary otter-btn-lg">
  <span>Primary Button</span>
</button>
<button type="button" class="otter-btn otter-btn-dashed otter-btn-lg">
  <span>Dashed Button</span>
</button>
<button type="button" class="otter-btn otter-btn-text otter-btn-lg">
  <span>Text Button</span>
</button>
<button type="button" class="otter-btn otter-btn-link otter-btn-lg">
  <span>Link Button</span>
</button>
```

### Disabled

To mark a button as disabled, add the `disbled` property to the `button`.

```html
<button type="button" class="otter-btn" disabled>
  <span>Button</span>
</button>
<button type="button" class="otter-btn otter-btn-default" disabled>
  <span>Default Button</span>
</button>
<button type="button" class="otter-btn otter-btn-primary" disabled>
  <span>Primary Button</span>
</button>
<button type="button" class="otter-btn otter-btn-dashed" disabled>
  <span>Dashed Button</span>
</button>
<button type="button" class="otter-btn otter-btn-text" disabled>
  <span>Text Button</span>
</button>
<button type="button" class="otter-btn otter-btn-link" disabled>
  <span>Link Button</span>
</button>
```

### Loading

A loading indicator can be added to a button by setting the `loading` property on the `Button`.
- `data-loading`
- `data-loading-delay`

```html
<button type="button" class="otter-btn otter-btn-primary" data-index-number="1"  data-loading="true" data-loading-delay="10000">
  <span>Click me!</span>
</button>
<button type="button" class="otter-btn otter-btn-primary" data-index-number="2" data-loading="true" data-loading-delay="7000">
  <span><i class="ottericon magnifying-glass" role="img" aria-label="Magnifier-shaped search icon"></i></span>
  <span>Click me!</span>
</button>
<button type="button" class="otter-btn otter-btn-primary otter-btn-icon-only otter-tooltip-trigger otter-tooltip-link otter-tooltip-close" data-index-number="3" data-placement="right" data-loading="true">
  <span data-tooltip="Search me"><i class="ottericon magnifying-glass" role="img" aria-label="Magnifier-shaped search icon"></i></span>
  <span class="spacial-letter-down a11y-hidden" focusable="false" role="img" aria-label="display of tooltip state that open or close" aria-expanded="false">&#8744;</span>
</button>
```

### Danger

The `danger` is intended to attract attention.

```html
<button type="button" class="otter-btn otter-btn-primary otter-btn-dangerous">
  <span>Primary</span>
</button>
<button type="button" class="otter-btn otter-btn-default otter-btn-dangerous">
  <span>Default</span>
</button>
<button type="button" class="otter-btn otter-btn-dashed otter-btn-dangerous">
  <span>Dashed</span>
</button>
<button type="button" class="otter-btn otter-btn-text otter-btn-dangerous">
  <span>Text</span>
</button>
<button type="button" class="otter-btn otter-btn-link otter-btn-dangerous">
  <span>Link</span>
</button>
```

### Block

The `block` property will make the button fit to its parent width.

```html
<button type="button" class="otter-btn otter-btn-block">
  <span>Button</span>
</button>
<button type="button" class="otter-btn otter-btn-default otter-btn-block">
  <span>Default Button</span>
</button>
<button type="button" class="otter-btn otter-btn-primary otter-btn-block">
  <span>Primary Button</span>
</button>
<button type="button" class="otter-btn otter-btn-dashed otter-btn-block">
  <span>Dashed Button</span>
</button>
<button type="button" class="otter-btn otter-btn-text otter-btn-block">
  <span>Text Button</span>
</button>
<button type="button" class="otter-btn otter-btn-link otter-btn-block">
  <span>Link Button</span>
</button>
```

### ghost

The `ghost` property will make button's background transparent, it is commonly used in colored background.

```html
<div class="ghost-container">
  <div class="wrap">
    <button type="button" class="otter-btn otter-btn-background-ghost otter-btn-dangerous">
      <span>Button</span>
    </button>
    <button type="button" class="otter-btn otter-btn-background-ghost otter-btn-default otter-btn-dangerous">
      <span>Default Button</span>
    </button>
    <button type="button" class="otter-btn otter-btn-background-ghost otter-btn-primary otter-btn-dangerous">
      <span>Primary Button</span>
    </button>
    <button type="button" class="otter-btn otter-btn-background-ghost otter-btn-dashed otter-btn-dangerous">
      <span>Dashed Button</span>
    </button>
    <button type="button" class="otter-btn otter-btn-background-ghost otter-btn-text otter-btn-dangerous">
      <span>Text Button</span>
    </button>
    <button type="button" class="otter-btn otter-btn-background-ghost otter-btn-link otter-btn-dangerous">
      <span>Link Button</span>
    </button>
  </div>
</div>
```

### loading

A loading indicator can be added to a button by setting the `loading` property on the `button`.

```html
<button type="button" class="otter-btn otter-btn-primary otter-btn-loading">
  <span>Primary</span>
</button>
<button type="button" class="otter-btn otter-btn-default otter-btn-loading">
  <span>Default</span>
</button>
<button type="button" class="otter-btn otter-btn-dashed otter-btn-loading">
  <span>Dashed</span>
</button>
<button type="button" class="otter-btn otter-btn-text otter-btn-loading">
  <span>Text</span>
</button>
<button type="button" class="otter-btn otter-btn-link otter-btn-loading">
  <span>Link</span>
</button>
```

## Button States

- active
- hover
- focus
- focus-whithin
- Chain Reaction

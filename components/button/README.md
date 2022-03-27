# Button

## Structure

```code
button(`otter-btn` [`otter-btn-primary`[, `otter-btn-dangerous`[, ...`otter-btn-loading`]]]) 
	text
```

## Examples

- [CodePen: Otter: button > type](https://codepen.io/sogyeokdong/pen/GRyZVXZ "Otter: button > type")
- [CodePen: Otter: button > size](https://codepen.io/sogyeokdong/pen/gOowGJG "Otter: button > size")
- [CodePen: Otter: button > disabled](https://codepen.io/sogyeokdong/pen/yLpJgMN "Otter: button > disabled")
- [CodePen: Otter: button > danger](https://codepen.io/sogyeokdong/pen/qBpNvWq "Otter: button > danger")
- [CodePen: Otter: button > block](https://codepen.io/sogyeokdong/pen/GRymRYr "Otter: button > block")

### Type

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

### Size

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

### Danger

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

```html
<button type="button" class="otter-btn otter-btn-primary otter-btn-background-ghost">
  <span>Primary</span>
</button>
<button type="button" class="otter-btn otter-btn-default otter-btn-background-ghost">
  <span>Default</span>
</button>
<button type="button" class="otter-btn otter-btn-dashed otter-btn-background-ghost">
  <span>Dashed</span>
</button>
<button type="button" class="otter-btn otter-btn-text otter-btn-background-ghost">
  <span>Text</span>
</button>
<button type="button" class="otter-btn otter-btn-link otter-btn-background-ghost">
  <span>Link</span>
</button>
```

### loading

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

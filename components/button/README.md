# Button

## Structure

- button(`otter-btn` [`otter-btn-primary`[, `otter-btn-dangerous`[, ...`otter-btn-loading`]]]) 
  - text

## Examples

<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="html,result" data-slug-hash="GRyZVXZ" data-preview="true" data-user="sogyeokdong" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/sogyeokdong/pen/GRyZVXZ">
  Untitled</a> by sogyeokdong9 (<a href="https://codepen.io/sogyeokdong">@sogyeokdong</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

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

### danger

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

### disabled

```html
<button type="button" class="otter-btn otter-btn-primary" disabled>
  <span>Primary(disabled)</span>
</button>
<button type="button" class="otter-btn otter-btn-default" disabled>
  <span>Default(disabled)</span>
</button>
<button type="button" class="otter-btn otter-btn-dashed" disabled>
  <span>Dashed(disabled)</span>
</button>
<button type="button" class="otter-btn otter-btn-text" disabled>
  <span>Text(disabled)</span>
</button>
<button type="button" class="otter-btn otter-btn-link" disabled>
  <span>Link(disabled)</span>
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

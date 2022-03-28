# Radio

## Structure

```html
<label class="otter-radio-wrapper" for="basic-radio">
  <span class="otter-radio">
    <input type="radio" class="otter-radio-input" id="basic-radio" name="basic-radio" value="basic-radio">
    <span class="otter-radio-inner"></span>
  </span>
  <span>Basic Radio</span>
</label>
```



## Examples

- [CodePen: Otter: Radio > basic](https://codepen.io/sogyeokdong/pen/jOYmOXK "Otter: Radio > basic")
- [CodePen: Otter: Radio > disabled](https://codepen.io/sogyeokdong/pen/wvpdvOp "Otter: Radio > disabled")
- [CodePen: Otter: Radio > radio-group](https://codepen.io/sogyeokdong/pen/ZEvKENP "Otter: Radio > radio-group")

### Basic

```html
<label class="otter-radio-wrapper" for="item">
  <span class="otter-radio">
    <input type="radio" class="otter-radio-input" id="item" name="item" value="item">
    <span class="otter-radio-inner"></span>
  </span>
  <span>item</span>
</label>
```

### Disabled

```html
<label class="otter-radio-wrapper otter-radio-wrapper-disabled" for="item">
  <span class="otter-radio otter-radio-disabled">
    <input type="radio" class="otter-radio-input" id="item" name="item" value="item" disabled>
    <span class="otter-radio-inner"></span>
  </span>
  <span>item</span>
</label>
```

### Radio Grop

```html
<div class="otter-radio-group otter-radio-group-outline">
  <label class="otter-radio-wrapper otter-radio-wrapper-checked" for="a">
    <span class="otter-radio otter-radio-checked">
      <input type="radio" class="otter-radio-input" id="a" name="choice" value="a" checked>
      <span class="otter-radio-inner"></span>
    </span>
    <span>A</span>
  </label>
  <label class="otter-radio-wrapper" for="b">
    <span class="otter-radio">
      <input type="radio" class="otter-radio-input" id="b" name="choice" value="b">
      <span class="otter-radio-inner"></span>
    </span>
    <span>B</span>
  </label>
  <label class="otter-radio-wrapper" for="c">
    <span class="otter-radio">
      <input type="radio" class="otter-radio-input" id="c" name="choice" value="c">
      <span class="otter-radio-inner"></span>
    </span>
    <span>C</span>
  </label>
  <label class="otter-radio-wrapper" for="d">
    <span class="otter-radio">
      <input type="radio" class="otter-radio-input" id="d" name="choice" value="d">
      <span class="otter-radio-inner"></span>
    </span>
    <span>D</span>
  </label>
</div>
```

## Attribute

- name
- checked
- value
- (disabled)

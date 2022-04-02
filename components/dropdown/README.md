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

### Basic

```html
<div class="wrap">
  <!-- trigger -->
  <a href="javascript:void(0)" role="button" class="otter-dropdown-trigger otter-dropdown-link otter-dropdown-close">
    Hover me <span class="spacial-letter-down" focusable="false" role="img" aria-label="display of dropdown menus state that open or close" aria-expanded="false">&#8744;</span>
  </a>
</div>
<div style="position: absolute; top: 0; left: 0; width: 100%;">
  <!-- dropdown menu -->
  <div class="otter-dropdown otter-dropdown-hidden">
    <ul class="otter-dropdown-menu otter-dropdown-menu-root otter-dropdown-menu-vertical otter-dropdown-menu-light" role="menu" tabindex="0" data-menu-list="true">
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

- `otter-dropdown-menu-vertical`
- `otter-dropdown-menu-horizontal`
- `otter-dropdown-menu-light`
- `otter-dropdown-menu-dark`
- `otter-dropdown-menu-item-danger`

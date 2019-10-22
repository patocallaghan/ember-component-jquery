# this-jquery


## Usage

```
npx ember-component-jquery this-jquery path/of/files/ or/some**/*glob.js

# or

yarn global add ember-component-jquery
ember-component-jquery this-jquery path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [with-import](#with-import)
* [without-import](#without-import)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="with-import">**with-import**</a>

**Input** (<small>[with-import.input.js](transforms/this-jquery/__testfixtures__/with-import.input.js)</small>):
```js
import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    $(window).on('load', () => console.log('loaded'));
    this.$().css('background', 'red');
    this.$('input').focus();
  },
});

```

**Output** (<small>[with-import.output.js](transforms/this-jquery/__testfixtures__/with-import.output.js)</small>):
```js
import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    $(window).on('load', () => console.log('loaded'));
    $(this.element).css('background', 'red');
    $('input', this.element).focus();
  },
});

```
---
<a id="without-import">**without-import**</a>

**Input** (<small>[without-import.input.js](transforms/this-jquery/__testfixtures__/without-import.input.js)</small>):
```js
import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this.$().css('background', 'red');
    this.$('input').focus();
  },
});

```

**Output** (<small>[without-import.output.js](transforms/this-jquery/__testfixtures__/without-import.output.js)</small>):
```js
import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    $(this.element).css('background', 'red');
    $('input', this.element).focus();
  },
});

```
<!--FIXTURES_CONTENT_END-->
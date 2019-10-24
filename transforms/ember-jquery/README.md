# ember-jquery


## Usage

```
npx ember-component-jquery ember-jquery path/of/files/ or/some**/*glob.js

# or

yarn global add ember-component-jquery
ember-component-jquery ember-jquery path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [with-import](#with-import)
* [without-import](#without-import)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="with-import">**with-import**</a>

**Input** (<small>[with-import.input.js](transforms/ember-jquery/__testfixtures__/with-import.input.js)</small>):
```js
import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    Em.$('.test').focus();
    Em.$(this.element).focus();
    Ember.$('.test').focus();
    Ember.$(this.element).focus();
  },
});

```

**Output** (<small>[with-import.output.js](transforms/ember-jquery/__testfixtures__/with-import.output.js)</small>):
```js
import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    $('.test').focus();
    $(this.element).focus();
    $('.test').focus();
    $(this.element).focus();
  },
});

```
---
<a id="without-import">**without-import**</a>

**Input** (<small>[without-import.input.js](transforms/ember-jquery/__testfixtures__/without-import.input.js)</small>):
```js
import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    Em.$('.test').focus();
    Em.$(this.element).focus();
    Ember.$('.test').focus();
    Ember.$(this.element).focus();
  },
});

```

**Output** (<small>[without-import.output.js](transforms/ember-jquery/__testfixtures__/without-import.output.js)</small>):
```js
import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    $('.test').focus();
    $(this.element).focus();
    $('.test').focus();
    $(this.element).focus();
  },
});

```
<!--FIXTURES_CONTENT_END-->
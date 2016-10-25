A simple Angular 2 directive that sets the text color on an element to either green or red, depends on the expression passed to the `red-green` directive.

**Usage example:**

```html
  <div red-green="true">Blah</div>
```

Produces _Blah_ as a green text. It's accomplished by adding the `green` class name to the `<div />` and you're free to style the `green` and `red` classes as you wish.

See [Plunker](http://plnkr.co/edit/heUJTEXHvMmOkI9clrpu) for a working demo (with one caveat: writing 'false' instead won't produce the correct result in Plunker, but *will* work in reality. Plunker makes it evaluate to a string and a string is always "truthy" so the directive thinks you've passed a "truthy" value).

_Q: Why would I not just use ngStyle, ngClass etc.?_Blah_
A: You can, but this directive is much more expressive.

**License**

MIT

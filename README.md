A simple Angular 2 directive that sets the text color on an element to either green or red, depends on the expression passed to the `red-green` directive.

**Usage example:**

```html
  <div red-green="true">Blah</div>
```

Produces _Blah_ as a green text.

See [Plunker](http://plnkr.co/edit/heUJTEXHvMmOkI9clrpu) for a working demo (with one caveat: writing 'false' instead won't produce the correct result in Plunker, but *will* work in reality. Plunker makes it evaluate to a string and a string is always "truthy" so the directive thinks you've passed a "truthy" value).

**License**

MIT

# Unit testing ES6 classes with Jasmine and Karma.

### test-context.js

This is where you tell the test runner where your files are located. Based on the configuration above test files are located in ./source and they all end in -spec.js. The extra boolean flag indicates if you want it to go looking for files in subdirectories under ./source.

context.keys contains an array of test files.
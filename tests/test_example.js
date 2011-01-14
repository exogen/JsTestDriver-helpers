ExampleTest = TestCase('ExampleTest');

ExampleTest.prototype['test: example(false) returns true'] = function() {
	assertTrue(example(false));
};

ExampleTest.prototype['test: example(true) returns false'] = function() {
	assertFalse(example(true));
};

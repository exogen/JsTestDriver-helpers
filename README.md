A streamlined setup for [JsTestDriver][]
========================================
This repository contains helpers and a recommended layout for use with
[JsTestDriver][].

Why does JsTestDriver need any helpers? So you don't have to type this:

    $ java -jar test/JsTestDriver-1.2.2.jar --port 9876
           --browser /Applications/Firefox.app/Contents/MacOS/firefox-bin --tests all

You can instead type this:

    $ test/testdriver --port 9876 --browser firefox_mac --tests all

Files
=====
Project specific:

* `jsTestDriver.conf`: Standard [JsTestDriver configuration file] for our example project.
* `src/example.js`: Some example code to test.
* `test/tests/test_example.js`: Our example test cases.

Generic helpers:

* `test/JsTestDriver.jar`: A symbolic link to the version of JsTestDriver we're using.
* `test/testdriver`: A wrapper script that sets `--basePath` to the project root and adds `browsers` to `$PATH`.
* `test/browsers/firefox_mac`: A wrapper script to launch Firefox on a Mac.
* `test/browsers/safari_mac`: A wrapper script to launch Safari on a Mac.

Adding more browser executable scripts to the `browsers` directory will make them accessible with the `--browsers` argument.

The `test/testdriver` script assumes that your configuration file (and the location assumed by the filenames in the configuration file) is in its parent directory. If you use a different layout than described here, set `$PROJECTPATH`:

    $ PROJECTPATH=/var/code/project /path/to/testdriver --port 9876 ...

[JsTestDriver]: http://code.google.com/p/js-test-driver/
[ConfigFile]: http://code.google.com/p/js-test-driver/wiki/ConfigurationFile

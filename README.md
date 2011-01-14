A streamlined setup for [JsTestDriver][]
========================================
This repository contains helpers and a recommended layout for use with
[JsTestDriver][].

Why does JsTestDriver need any helpers? So you don't have to type this:

    $ java -jar JsTestDriver-1.2.2.jar --port 9876 --tests all
           --browser /Applications/Firefox.app/Contents/MacOS/firefox-bin

You can instead type this:

    $ testdriver --port 9876 --tests all --browser firefox_mac

Layout
======

* `.`: (top level) Project root. Contains JsTestDriver configuration file.
* `src/`: Project source code – the code we want to test.
* `bin/`: Test runner files.
* `bin/browsers/`: Browser launchers (symbolic links or wrapper scripts).
* `tests/`: Project test cases.

Files
=====
Project specific:

* `jsTestDriver.conf`: Standard [JsTestDriver configuration file][ConfigFile] for our example project.
* `src/example.js`: Some example code to test.
* `tests/test_example.js`: Our example test cases.

Generic helpers:

* `bin/JsTestDriver.jar`: A symbolic link to the version of JsTestDriver we're using.
* `bin/testdriver`: A wrapper script that sets `--basePath` to the project root and adds `bin/browsers/` to `$PATH`.
* `bin/browsers/firefox_mac`: A wrapper script to launch Firefox on a Mac.
* `bin/browsers/safari_mac`: A wrapper script to launch Safari on a Mac.

Adding more browser executable scripts to the `bin/browsers/` directory will make them accessible with the `--browsers` argument.

The `bin/testdriver` script assumes that your configuration file (and the location assumed by the filenames in the configuration file) is in its parent directory. If you use a different layout than described here, set `$PROJECTPATH`:

    $ PROJECTPATH=/var/code/project /path/to/testdriver --port 9876 ...

[JsTestDriver]: http://code.google.com/p/js-test-driver/
[ConfigFile]: http://code.google.com/p/js-test-driver/wiki/ConfigurationFile

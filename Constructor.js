;(function() {
	'use strict';

	var PLUGIN_NAME = 'MyPlugin';

	/**
	 * Constructor
	 */
	function Constructor(element, options) {
		/**
		 * Define any plugin globals here using `this` keyword.
		 * They can then be referenced anywhere in the prototype
		 * scope below.
		 *
		 * Invoke the Constructor using `new MyPlugin()`.
		 */

		// Define default values.
		var defaults = {
			defaultValue: 1
		};

		// Put element in to the scope.
		this.element = element;

		// Merge defaults with options pragmatically.
		this.options = extend(defaults, options);
	}

	/**
	 * Prototype
	 */
	(function() {
		/**
		 * Handle `this` references here.
		 *
		 * For example:
		 * this.exampleFunction = function() {
		 * 		// doSomething
		 * };
		 *
		 * This can now be called as `new MyPlugin().exampleFunction()`.
		 *
		 * Assigning the Constructor to a variable makes sense,
		 * so `var myNewPlugin = new MyPlugin()` changes the above to
		 * `myNewPlugin.exampleFunction()`.
		 */

		this.exampleFunction = function() {
			return this.options; // => { defaultValue: 1 }
		};

	}).call(Constructor.prototype);

	/**
	 * Private helper functions
	 */
	function extend(out) {
		out = out || {};

		for (var i = 1; i < arguments.length; i++) {
			if (!arguments[i]) {
				continue;
			}

			for (var key in arguments[i]) {
				if (arguments[i].hasOwnProperty(key)) {
					out[key] = arguments[i][key];
				}
			}
		}

		return out;
	}

	window[PLUGIN_NAME] = Constructor;
})();

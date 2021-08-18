var fs = require('fs');
const sequence = require('post-sequence');

const plugins = {
	'posthtml-expressions': {
		root: __dirname,
		locals: {
			NODE_ENV: process.env.NODE_ENV,
		}
	},
	'posthtml-include': {
		root: `${__dirname}/src`,
	}
};

const posthtmlConfig = {
	plugins: sequence(plugins, {processor: 'posthtml', namespace: false})
};

module.exports = posthtmlConfig;

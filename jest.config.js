module.exports = {
	preset: 'jest-preset-angular',
	testEnvironment: 'jest-environment-jsdom-thirteen',
	clearMocks: true,
	globals: {
		'ts-jest': {
			stringifyContentPathRegex: '\\.html$',
			tsConfig: 'tsconfig.json',
			allowSyntheticDefaultImports: true,
			astTransformers: [
				require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer.js'),
				// require.resolve('jest-preset-angular/build/InlineFilesTransformer.js'),
				// require.resolve('jest-preset-angular/build/StripStylesTransformer.js')
			]
		},
	},
	roots: ['src', 'projects'],
	moduleFileExtensions: ['ts', 'html', 'js', 'json'],
	setupFilesAfterEnv: [
		'<rootDir>/setupJest.ts'
	],
	testMatch: [
		'**/**/*.spec.ts',
	],
	transformIgnorePatterns: [
		"node_modules/(?!@ngrx|ngx-auto-unsubscribe|lodash)"
	],
	transform: {
		"^.+\\.(ts|js|html)$": "ts-jest",
		"^.+\\.js$": "babel-jest"
	},
};

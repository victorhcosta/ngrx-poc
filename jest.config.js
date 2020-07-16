// /* eslint-disable import/order */
// /* eslint-disable @typescript-eslint/no-var-requires */
// const tsconfig = require("./tsconfig.json");
// console.info('tsconfig', tsconfig.compileOnSave);
// const moduleNameMapper = require("tsconfig-paths")(tsconfig);
// console.info('moduleNameMapper', moduleNameMapper);

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
				'jest-preset-angular/build/InlineFilesTransformer.js',
				'jest-preset-angular/build/StripStylesTransformer.js'
			]
		},
	},
	roots: ['src'],
	moduleFileExtensions: ['ts', 'html', 'js', 'json'],
	setupFilesAfterEnv: [
		'<rootDir>/setupJest.ts'
	],
	testMatch: ['**/**/*.spec.ts'],
	testPathIgnorePatterns: ['/node_modules/'],
	transformIgnorePatterns: [
		"node_modules/(?!@ngrx|ngx-auto-unsubscribe|lodash)"
	],
	transform: {
		"^.+\\.(ts|js|html)$": "ts-jest",
		"^.+\\.js$": "babel-jest"
	},
	snapshotSerializers: [
		'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
		'jest-preset-angular/build/AngularSnapshotSerializer.js',
		'jest-preset-angular/build/HTMLCommentSerializer.js'
	],
	coverageReporters: ['html'],
	moduleNameMapper: {
		"^store/(.+)$": "<rootDir>/src/app/store/$1"
	},
};

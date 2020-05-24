import 'jest-preset-angular';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

// const storageMock = () => {
// 	let storage = {};

// 	return {
// 		getItem: (key: string) => key in storage ? storage[key] : undefined,
// 		setItem: (key: string, value: any) => {
// 			return storage[key] = typeof value == typeof '' ? value : JSON.stringify(value)
// 		},
// 		removeItem: (key: string) => delete storage[key],
// 		clear: () => storage = {},
// 	}
// };

// Object.defineProperty(window, 'sessionStorage', { value: storageMock() });
// Object.defineProperty(window, 'localStorage', { value: storageMock() });

Object.defineProperty(document, 'doctype', {
	value: '<!DOCTYPE html>'
});

Object.defineProperty(window, 'getComputedStyle', {
	value: () => {
		return {
			display: 'none',
			appearance: ['-webkit-appearance']
		};
	}
});

Object.defineProperty(document.body.style, 'transform', {
	value: () => {
		return {
			enumerable: true,
			configurable: true
		};
	}
});

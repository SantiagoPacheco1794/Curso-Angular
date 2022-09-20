// This file is required by karma.conf.js and loads recursively all the .spec and framework files

<<<<<<< HEAD
import 'zone.js/testing';
=======
import 'zone.js/dist/zone-testing';
>>>>>>> 365f35271f05492e7b7710b105b92e41a435c057
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
<<<<<<< HEAD
    <T>(id: string): T;
    keys(): string[];
=======
    keys(): string[];
    <T>(id: string): T;
>>>>>>> 365f35271f05492e7b7710b105b92e41a435c057
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
<<<<<<< HEAD
  platformBrowserDynamicTesting(),
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().forEach(context);
=======
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
>>>>>>> 365f35271f05492e7b7710b105b92e41a435c057

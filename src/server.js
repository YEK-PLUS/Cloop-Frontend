import path from 'path';
import fs from 'fs';

import Store from './state/store';
import Preloaded from './state/preloaded';

import setupExpress from './requirements/express';
import App from './containers/app';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const appSrc = resolveApp('src');

// eslint-disable-next-line import/no-dynamic-require
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const store = Store(Preloaded);

const server = setupExpress(appSrc, store, App, assets);

export default server;

import * as singleSpa from 'single-spa';
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './helper'
import '../src/style.css';
async function init() {
    const globalEventDistributor = new GlobalEventDistributor();
    const loadingPromises = [];

    // app1: The URL "/app1/..." is being redirected to "http://localhost:9001/..."
    loadingPromises.push(loadApp('app1', '/app1', 'http://localhost:9001/singleSpaEntry.js', 'http://localhost:9001/store.js', globalEventDistributor));

    // app3: The URL "/app2/..." is being redirected to "http://localhost:9002/..." 
    loadingPromises.push(loadApp('app2', '/app2', 'http://localhost:9002/singleSpaEntry.js', null, null)); // does not have a store, so we pass null

    
    // app5: The URL "/app3/..." is being redirected to "http://localhost:9003/..."
    loadingPromises.push(loadApp('app3', '/app3', 'http://localhost:9003/singleSpaEntry.js', 'http://localhost:9003/store.js', globalEventDistributor));

    // wait until all stores are loaded and all apps are registered with singleSpa
    await Promise.all(loadingPromises);

    singleSpa.start();
}

init();


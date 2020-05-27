import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './root.component.js';

const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Root,
	domElementGetter,
});

export async function bootstrap(props) {
	return await reactLifecycles.bootstrap(props);
}

export async function mount(props) {
	return await reactLifecycles.mount(props);
}

export async function unmount(props) {
	return await reactLifecycles.unmount(props);
}

function domElementGetter() {
	// Make sure there is a div for us to render into
	let el = document.getElementById('app1');
	if (!el) {
		el = document.createElement('div');
		el.id = 'app1';
		document.body.appendChild(el);
	}

	return el;
}

if(!window.Wrapper){
	ReactDOM.render(<Root />, document.getElementById('app1'));
}
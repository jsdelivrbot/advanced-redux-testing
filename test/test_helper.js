import React from 'react'
import ReactDOM from 'react-dom'
import jsdom from 'jsdom'
import jquery from 'jquery'
import TestUtils from 'react-addons-test-utils'
import { expect } from 'chai'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../src/reducers'

// Set up a testing environment in to CML to run like a browser
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView

const $ = jquery(global.window)

// Build 'renderComponent' helper to render a component
function renderComponent(ComponentClass) {
	const componentInstance = TestUtils.renderIntoDocument(
		<Provider store={createStore(reducers)}>
			<ComponentClass />
		</Provider>
	)

	return $(ReactDOM.findDOMNode(componentInstance))
}

// Build a helper to simulate certain events in the browser/app


// Set up chai-jquery

export { renderComponent, expect }

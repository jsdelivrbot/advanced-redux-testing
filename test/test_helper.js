import jsdom from 'jsdom'
import jquery from 'jquery'
import TestUtils from 'react-addons-test-utils'
import ReactDOM from 'react-dom'
import chai, { expect } from 'chai'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../src/reducers'
import chaiJquery from 'chai-jquery'

// Set up a testing environment in to CML to run like a browser
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView

const $ = jquery(global.window)

// Build 'renderComponent' helper to render a component
function renderComponent(ComponentClass, props, state) {
	const componentInstance = TestUtils.renderIntoDocument(
		<Provider store={createStore(reducers, state)}>
			<ComponentClass {...props} />
		</Provider>
	)

	return $(ReactDOM.findDOMNode(componentInstance))
}

// Build a helper to simulate certain events in the browser/app
$.fn.simulate = function(eventName, value) {
	if(value) {
		this.val(value)
	}

	TestUtils.Simulate[eventName](this[0])
}

// Set up chai-jquery
chaiJquery(chai, chai.util, $)

export { renderComponent, expect }

import jsdom from 'jsdom'
import jquery from 'jquery'
import TestUtils from 'react-addons-test-utils'

// Set up a testing environment in to CML to run like a browser
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView

const $ = jquery(global.window)

// Build 'renderComponent' helper to render a component
function renderComponent(ComponentClass) {
	const componentInstance = TestUtils.renderIntoDocument(<ComponentClass />)

	return $(ReactDom.findDOMNode(componentInstance))
}

// Build a helper to simulate certain events in the browser/app


// Set up chai-jquery

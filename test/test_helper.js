import jsdom from 'jsdom'

// Set up a testing environment in to CML to run like a browser
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView


// Build 'renderComponent' helper to render a component


// Build a helper to simulate certain events in the browser/app


// Set up chai-jquery

import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import registerRequireContextHook from 'babel-plugin-require-context-hook/register'
import { BrowserRouter as Router } from 'react-router-dom'

registerRequireContextHook()

Enzyme.configure({ adapter: new Adapter() })

global.React = React
global.mount = Enzyme.mount
global.routerMount = (Component, props = {}) => global.mount(<Router><Component {...props} /></Router>)
global.shallow = Enzyme.shallow
global.render = Enzyme.render
global.snapshot = toJson

// Mock for window.location.assign so we can 'navigate'
// within tests without JSDOM 'Not implemented' errors
global.location.assign = jest.fn()

console.error = jest.fn((msg) => {
  throw new Error(msg)
})

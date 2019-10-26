import React from 'react'
import {mount} from 'enzyme'
import App from './App'

test('App', () => {
    const wrapper = mount(<App />)
    expect(wrapper.length).toEqual(1)
})
import React from 'react';
import Todo from './Todo'
import { mount } from 'enzyme';

const props = {
    todo: {
        todo_description: 'desc',
        todo_responsible: 'me',
        todo_priority: 'low',
        todo_completed: false
    }
}
test('todo', () => {
    const wrapper = mount(<Todo {...props} />)
    expect(wrapper.length).toEqual(1)
})
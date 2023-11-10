import React from 'react';
import { shallow } from "enzyme";
import App from "./App";

describe('Test App component', () => {
    it('Match snapshot of app', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    })
})
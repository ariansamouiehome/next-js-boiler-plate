import React from 'react';
import {shallow } from 'enzyme';

//Component imports
import ExampleComponent from 'components/.Example';
import BurgerButton from "components/Elements/BurgerButton";

describe("Example Component Test Suite", function() {
    //Using shallow() to render components will call the constructor and render methods
    it("Example contains expected elements", function() {
        const example = shallow(<ExampleComponent />);

        //Check if component is successfully defined
        expect(example).toBeDefined();
        //Check if text exists within component
        expect(example.contains('Example')).toEqual(true);
        //Check for specific HTML elements within component
        expect(example.contains(<div>Example</div>)).toEqual(true);
    });

    it("Example contains expected prop data within elements", function() {
        const testData = 'Hello World!';
        const example = shallow(<ExampleComponent data={testData}/>);

        //Check for specific HTML elements with variable text component
        expect(example.contains(<span>{testData}</span>)).toEqual(true);

        //This does have to match "exactly" the HTML used, including classes, ids etc.
        expect(example.contains(<span id='verboseData'>{testData} - this is the data prop</span>)).toEqual(true);
    });

    it('Example renders an amount of BurgerButton components dependant on prop values', () => {
        const example = shallow(<ExampleComponent />);

        //Check how many components of the BurgerButton are within Example
        expect(example.find(BurgerButton)).toHaveLength(1);

        //Set props of component to change render results
        example.setProps({ showAnotherBurgerButton: true });

        //Check how many components of the BurgerButton are within Example
        expect(example.find(BurgerButton)).toHaveLength(2);
    });

    it('Example renders one element with id verboseData', () => {
        const example = shallow(<ExampleComponent />);

        //Check how many components of the specified id are within Example
        expect(example.find('#verboseData')).toHaveLength(1);
    });

    it('Example renders one paragraph element with id exampleText', () => {
        const example = shallow(<ExampleComponent />);

        //Compound find filter - will filter by p tags with exampleText id
        expect(example.find('p#exampleText')).toHaveLength(1);
    });
});
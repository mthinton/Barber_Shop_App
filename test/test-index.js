import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow'
import chai from 'chai';

const should = chai.should();

import Main from '../js/components/Main'

describe('Main component', function() {
	it('Renders the Main component', function () {

        const renderer = new ShallowRenderer();
        renderer.render(<Main  />);
        const result = renderer.getRenderOutput();
        result.type.should.equal('div');
        result.props.children.should.equal("Hello, world!")
	})
})
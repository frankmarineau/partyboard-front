/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import PartyRouterComponent from 'components//PartyRouterComponent.js';

describe('PartyRouterComponent', () => {
    let component;

    beforeEach(() => {
      component = createComponent(PartyRouterComponent);
    });

    it('should have its component name as default className', () => {
      expect(component.props.className).to.equal('partyrouter-component');
    });
});

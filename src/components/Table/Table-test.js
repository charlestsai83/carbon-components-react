/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Table from '../Table';
import { shallow } from 'enzyme';

describeBreakingChangesXFeatures('Table', () => {
  describe('Renders as expected', () => {
    const tableContainer = shallow(
      <Table>
        <tbody />
      </Table>
    );

    it('has the expected classes', () => {
      expect(tableContainer.hasClass('bx--responsive-table-container')).toEqual(
        true
      );
    });

    it('should render a table with the appropriate class', () => {
      const tableEl = tableContainer.find('table');
      expect(tableEl.hasClass('bx--responsive-table')).toEqual(true);
    });

    it('should add extra classes that are passed via className for the container', () => {
      tableContainer.setProps({ containerClassName: 'extra-class' });
      expect(tableContainer.hasClass('extra-class')).toEqual(true);
    });

    it('should add extra classes that are passed via className for the table', () => {
      tableContainer.setProps({ className: 'extra-class' });
      const tableEl = tableContainer.find('table');
      expect(tableEl.hasClass('extra-class')).toEqual(true);
    });

    it('should render children as expected', () => {
      expect(tableContainer.find('tbody').length).toEqual(1);
    });
  });
});

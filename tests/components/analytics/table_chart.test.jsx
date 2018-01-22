import React from 'react';
import {shallow} from 'enzyme';

import TableChart from 'components/analytics/table_chart.jsx';

describe('components/analytics/table_chart.jsx', () => {
    test('should match snapshot, loaded without data', () => {
        const data = [];

        const wrapper = shallow(
            <TableChart
                title='Test'
                data={data}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot, loaded with data', () => {
        const data = [
            {name: 'test1', tip: 'test-tip1', value: <p>{'test-value1'}</p>},
            {name: 'test2', tip: 'test-tip2', value: <p>{'test-value2'}</p>}
        ];

        const wrapper = shallow(
            <TableChart
                title='Test'
                data={data}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });
});

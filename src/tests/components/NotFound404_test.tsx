import * as React from 'react';
import { shallow } from 'enzyme';
import NotFound404 from '../../components/NotFound404';
import { INotFound404Props } from '../../components/NotFound404/notFound404Interfaces';

describe('Not Found 404 test suite', () => {
    test('Render not found 404 page', () => {
        const props: Readonly<INotFound404Props> = {
            history: undefined,
            dispatch: undefined,
        };
        const NotFound404Screen = shallow(
            <NotFound404 {...props} />,
        );
        expect(NotFound404Screen).toMatchSnapshot();
    });
});

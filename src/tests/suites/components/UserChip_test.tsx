import { shallow } from 'enzyme';
import * as React from 'react';
import UserChip from '../../../components/UserChip';
import { IUserChipProps } from '../../../components/UserChip/userChipInterfaces';

describe('User Chip test suite', () => {
    test('Render user chip', () => {
        const props: Readonly<IUserChipProps> = {
            user: {
                userId: 'unitTestUserID',
                token: 'tooken',
                email: 'unitTestEmail',
                displayName: 'unitTestDisplayName',
            },
            classes: {
                chip: 'chip',
            },
        };
        const UserChipScreen = shallow(
            <UserChip {...props} />,
        );
        expect(UserChipScreen).toMatchSnapshot();
    });
});

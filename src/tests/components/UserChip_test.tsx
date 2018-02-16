import * as React from 'react';
import { shallow } from 'enzyme';
import UserChip from '../../components/UserChip';
import { IUserChipProps } from '../../components/UserChip/userChipInterfaces';

describe('User Chip test suite', () => {
    // Alternative here is to wrap with provider, but that was a pain and I'm not sure of the benefit
    test('Render user chip', () => {
        const props: Readonly<IUserChipProps> = {
            user: {
                userId: 'unitTestUserID',
                token: 'tooken',
                email: 'unitTestEmail',
                displayName: 'unitTestDisplayName',
            },
        };
        const UserChipScreen = shallow(
            <UserChip {...props} />,
        );
        expect(UserChipScreen).toMatchSnapshot();
    });
});

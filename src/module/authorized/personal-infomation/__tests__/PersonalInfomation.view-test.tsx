import 'react-native';
import React from 'react';
import { PersonalInfomation } from '../PersonalInfomation.view';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const props: any = {}
    renderer.create(<PersonalInfomation {...props} />);
});
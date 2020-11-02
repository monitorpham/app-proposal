import React from 'react'
import { View } from 'react-native'

import { TextView } from '../text-view'
import { Colors } from '@res'
import { responsiveFontSize } from 'react-native-responsive-dimensions'


export const AppName: React.FC = () => {
    return (
        <View style={{ alignItems: 'center' }}>
            <TextView
                style={{
                    color: Colors.primaryRed,
                    fontSize: responsiveFontSize(6),
                    fontWeight: '700'
                }}
                text=''
            />
            <TextView
                style={{
                    color: Colors.primaryBlue,
                    fontSize: responsiveFontSize(2.8),
                    fontWeight: '700'
                }}
                text=''
            />
        </View>
    )
}
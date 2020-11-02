import React from 'react'
import { View, Text } from 'react-native'
import { Header } from '@component'
import { use{{$name}} } from './{{$name}}.store'
import { {{$name}}Props } from './{{$name}}.type'
import { {{$name}}Styles } from './{{$name}}.style'

export const {{$name}}: React.FC<{{$name}}Props> = (props) => {
    const [state, action] = use{{$name}}()
    return (
        <>
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='{{$name}}'
            />
            <Text>{state.status}</Text>
        </>
    )
}

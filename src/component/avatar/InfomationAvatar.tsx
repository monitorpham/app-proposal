import React from 'react'
import { View, Text, StyleSheet, ImageSourcePropType } from 'react-native'
import { EditableAvatar } from './EditableAvatar'
import { TextView } from '../text-view'
import { FontSizeDimens, Colors } from '@res'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Image } from 'react-native-image-crop-picker'

export type InfomationAvatarProps = {
    username?: string,
    email?: string,
    phoneNumber?: string,
}

export const InfomationAvatar: React.FC<InfomationAvatarProps> = (props) => {

    const renderInfomation = React.useCallback(() => {
        return (
            <View style={styles.infomationContainer}>
                <TextView
                    style={styles.name}
                    text={props.username}
                />
                <TextView
                    style={styles.blueInfo}
                    text={props.email}
                />
                <TextView
                    style={styles.blueInfo}
                    text={props.phoneNumber}
                />
            </View>
        )
    }, [props])

    return (
        <View style={[styles.container]}>
            {/* <EditableAvatar
                onChangeAvatar={props.onChangeAvatar}
                defaultSource={props.avatar}
            /> */}
            {renderInfomation()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    infomationContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: responsiveWidth(4)
    },
    name: {
        fontWeight: '700',
        fontSize: FontSizeDimens.md
    },
    blueInfo: {
        marginTop: responsiveHeight(0.5),
        fontSize: FontSizeDimens.xSm,
        color: Colors.primaryBlue
    }
})

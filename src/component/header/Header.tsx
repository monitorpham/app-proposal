import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { LinearColors, SizeDimens, Colors, FontSizeDimens, TextStyles } from '@res';
import { TextView } from '../text-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { responsiveWidth } from 'react-native-responsive-dimensions';

export type HeaderAction = {
    icon: object,
    label?: string,
    onPress?: () => void
}

export type HeaderProps = {
    title?: string,
    leftActions?: HeaderAction[]
}

export const Header: React.FC<HeaderProps> = (props) => {

    const renderTitle = React.useCallback(() => {
        return (
            <View style={styles.titleContainer}>
                <TextView
                    style={styles.title}
                    text={props.title}
                />
            </View>
        )
    }, [props.title])

    const renderLeftActions = React.useCallback(() => {
        return (
            <View style={styles.actionContainer}>
                {props.leftActions?.map((action, index) => {
                    return (
                        <TouchableOpacity
                            style={styles.action}
                            key={index}
                            onPress={action.onPress}
                        >
                            <Image
                                source={action.icon}
                            />
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }, [props.leftActions])

    const renderRightActions = React.useCallback(() => {
        return (
            <View style={styles.actionContainer}>
            </View>
        )
    }, [props.leftActions])

    return (
        <LinearGradient
            style={styles.container}
            colors={LinearColors.lineGreen}
        >
            <View style={styles.content}>
                {renderLeftActions()}
                {renderTitle()}
                {renderRightActions()}
            </View>
            {props.children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: SizeDimens.statusBarHeight,
        // borderBottomRightRadius: 20,
        // borderBottomLeftRadius: 20,
        paddingHorizontal: 16,
        paddingBottom: 4,
        backgroundColor: 'transparent'
    },
    content: {
        height: SizeDimens.headerRawHeight,
        flexDirection: 'row',
        backgroundColor: 'transparent'
    },
    titleContainer: {
        flex: 4,
        justifyContent: 'center'
    },
    title: {
        color: Colors.primaryWhite,
        textAlign: 'center',
        ...TextStyles.navTitle
    },
    actionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    action: {
        width: responsiveWidth(9),
        height: '100%',
        justifyContent: 'center',
    }
})

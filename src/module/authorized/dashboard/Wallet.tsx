import React from 'react'
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { SizeDimens, Colors, TextStyles, FontSizeDimens } from '@res'
import { HIcon, TextView } from '@component'
import { AssetIcons } from '@assets'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { useUser } from '@shared-state'

export type WalletProps = {
    containerStyle?: StyleProp<ViewStyle>
}

export const Wallet: React.FC<WalletProps> = (props) => {
    const [{ user }] = useUser()
    return (
        <View style={props.containerStyle}>
            <View style={[styles.container]}>
                <HIcon
                    icon={AssetIcons.PRICE}
                    title='Ví Tiền'
                />
                <TextView
                    style={styles.money}
                    text={` : ${user?.formatedAmount}`}
                />
            </View>
        </View>
    )
}

export const WalletHeight = responsiveHeight(5.5)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: WalletHeight * 0.5,
        height: WalletHeight,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: Colors.primaryWhite
    },
    money: {
        fontSize: FontSizeDimens.xSm,
        fontWeight: '700'
    }
})

import React from 'react'
import { View, Text, TouchableOpacity, ListRenderItemInfo } from 'react-native'
import { Header, TextView, ListView } from '@component'
import { useWallet } from './Wallet.store'
import { WalletProps } from './Wallet.type'
import { WalletStyles } from './Wallet.style'
import { AssetIcons } from '@assets'
import { Colors } from '@res'
import { TransactionItem } from './TransactionItem'
import { LazyNavigationScreen } from '@layout'
import { useUser } from '@shared-state'

export const Wallet: React.FC<WalletProps> = (props) => {
    const [state, action] = useWallet()
    const [{ user }] = useUser()
    const navigateToRecharge = React.useCallback(() => {
        props.navigation.navigate('Recharge')
    }, [])
    const renderHeader = React.useMemo(() => {
        return (
            <View style={WalletStyles.walletContainer}>
                <View style={WalletStyles.balanceContainer}>
                    <TextView
                        style={WalletStyles.balanceTitle}
                        text='Số dư ví hiện tại'
                    />
                    <TextView
                        style={WalletStyles.balanceValue}
                        text={user?.formatedAmount}
                    />
                </View>
                <TouchableOpacity
                    onPress={navigateToRecharge}
                    style={WalletStyles.chargeButton}
                >
                    <TextView
                        style={WalletStyles.chargeButtonTitle}
                        text='Nạp tiền'
                    />
                </TouchableOpacity>
            </View>
        )
    }, [])

    const keyExtractor = React.useCallback((_, index: number) => index.toString(), [])
    const renderItem = React.useCallback(({ item }: ListRenderItemInfo<number>) => {
        return (
            <TransactionItem />
        )
    }, [])

    const renderList = React.useMemo(() => {
        return (
            <ListView
                data={[1, 2, 3, 4]}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        )
    }, [])

    return (
        <View style={WalletStyles.container}>
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='Ví của tôi'
            >
                {renderHeader}
            </Header>
            <LazyNavigationScreen>
                <View style={WalletStyles.content}>
                    <TextView
                        style={WalletStyles.title}
                        text='Lịch sử giao dịch'
                    />

                    {renderList}
                </View>
            </LazyNavigationScreen>
        </View>
    )
}

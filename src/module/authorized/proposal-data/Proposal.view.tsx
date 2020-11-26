import React from 'react'
import { View, Text, ListRenderItemInfo } from 'react-native'
import { Header, ListView } from '@component'
import { useProposal } from './Proposal.store'
import { ProposalProps } from './Proposal.type'
import { ProposalStyles } from './Proposal.style'
import { AssetIcons } from '@assets'
import { ProposalItem } from './ProposalItem'
import { LazyNavigationScreen } from '@layout'
import { Progress } from '@data'
import { useUser } from '@shared-state'

export const Proposal: React.FC<ProposalProps> = (props) => {
    const [{ refreshStatus, proposals }, action] = useProposal()
    const [{ user }] = useUser()
    // React.useEffect(() => {
    //     if (!user) return
    //     action.getOrderHistory(user.id)
    // }, [])

    // const onRefresh = React.useCallback(() => {
    //     if (!user) return
    //     action.getOrderHistory(user.id)
    // }, [])

    // const onItemPress = React.useCallback((order: Order) => () => {
    //     props.navigation.navigate('Order', { orderId: order.id })
    // }, [])

    const renderItem = React.useCallback(({ item }: ListRenderItemInfo<Progress>) => {
        return (
            <ProposalItem
                progress={item}
                // onPress={onItemPress(item)}
            />
        )
    }, [])

    const keyExtractor = React.useCallback((item: Progress) => item.id, [])

    return (
        <View style={ProposalStyles.container}>
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='Hoàn thành'
            />
            <LazyNavigationScreen>
                <View style={ProposalStyles.content}>
                    <ListView
                        refreshing={refreshStatus === 'FETCHING'}
                        // onRefresh={onRefresh}
                        data={proposals}
                        keyExtractor={keyExtractor}
                        renderItem={renderItem}
                    />
                </View>
            </LazyNavigationScreen>
        </View>
    )
}

import React from 'react'
import { View, Text, ListRenderItemInfo } from 'react-native'
import { Header, ListView } from '@component'
import { useProposal } from './ProposalDataDetail.store'
import { ProposalDetailProps } from './ProposalDataDetail.type'
import { ProposalStyles } from './ProposalDataDetail.style'
import { AssetIcons } from '@assets'
import { ProposalDetailItem } from './ProposalDetailItem'
import { LazyNavigationScreen } from '@layout'
import { Progress, Proposal } from '@data'
import { useUser } from '@shared-state'

export const ProposalDetail: React.FC<ProposalDetailProps> = (props) => {
    const [{ refreshStatus, proposals }, action] = useProposal()
    const [{ user }] = useUser()
    const { proId } = props.route.params
    console.log('user',user)
    React.useEffect(() => {
        console.log(user)
        // if (user) return
        action.getProposalDetail(proId)
    }, [])

    // const onRefresh = React.useCallback(() => {
    //     // if (!user) return
    //     action.getProposalDetail()
    // }, [])

    // const onItemPress = React.useCallback((proposal: Proposal) => () => {
    //     props.navigation.navigate('Order', { orderId: order.id })
    // }, [])

    const renderItem = React.useCallback(({ item }: ListRenderItemInfo<Proposal>) => {
        return (
            <ProposalDetailItem
                proposal={item}
                // onPress={onItemPress(item)}
            />
        )
    }, [])

    // const keyExtractor = React.useCallback((item: Proposal) => {item.proposal.id}, [])

    return (
        <View style={ProposalStyles.container}>
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='Chi tiết đề nghị'
            />
            <LazyNavigationScreen>
                <View style={ProposalStyles.content}>
                    <ListView
                        refreshing={refreshStatus === 'FETCHING'}
                        // onRefresh={onRefresh}
                        data={proposals}
                        // keyExtractor={keyExtractor}
                        renderItem={renderItem}
                    />
                </View>
            </LazyNavigationScreen>
        </View>
    )
}

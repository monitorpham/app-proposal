import React from 'react'
import { View, Text, ListRenderItemInfo, StyleSheet } from 'react-native'
import { Header, ListView } from '@component'
import { useProposal } from './Proposal.store'
import { ProposalProps } from './Proposal.type'
import { ProposalStyles } from './Proposal.style'
import { AssetIcons } from '@assets'
import { ProposalItem } from './ProposalItem'
import { LazyNavigationScreen } from '@layout'
import { Progress, Proposal } from '@data'
import { useUser } from '@shared-state'

import { SwipeListView } from 'react-native-swipe-list-view';
import { TouchableOpacity } from 'react-native-gesture-handler'

export const ProposalI: React.FC<ProposalProps> = (props) => {
    const [{ refreshStatus, proposals }, action] = useProposal()
    const [{ user }] = useUser()
    // console.log('user',user)
    React.useEffect(() => {
        console.log(user)
        // if (user) return
        action.getAllProposals()
    }, [])

    const onRefresh = React.useCallback(() => {
        // if (!user) return
        // console.log("ss")
        action.getAllProposals()
    }, [])

    const onItemPress = React.useCallback((proposal: Proposal) => () => {
        // console.log("xxxxx")
        props.navigation.navigate('ProposalDetail', { proId: proposal.currentProgressName })

    }, [])

    const renderItem = React.useCallback(({ item }: ListRenderItemInfo<Proposal>) => {
        // console.log("aaa", item)
        return (
            <ProposalItem
                proposal={item}
                onPress={onItemPress(item)}
            />
        )
    }, [])

    const keyExtractor = React.useCallback((item: Proposal) => item.proposal.id.toString(), [])



    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            {/* <Text>Left</Text> */}
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                // onPress={() => closeRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                // onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={ProposalStyles.container}>
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='Đề nghị'
            />
            <LazyNavigationScreen>
                <View style={ProposalStyles.content}>
                    <SwipeListView
                        refreshing={refreshStatus === 'FETCHING'}
                        onRefresh={onRefresh}
                        data={proposals}
                        keyExtractor={keyExtractor}
                        renderItem={renderItem}

                        renderHiddenItem={renderHiddenItem}
                        leftOpenValue={75}
                        rightOpenValue={-150}
                        previewRowKey={'0'}
                        previewOpenValue={-40}
                        previewOpenDelay={3000}
                        // onRowDidOpen={onRowDidOpen}
                    />
                </View>
            </LazyNavigationScreen>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        // backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        // backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});


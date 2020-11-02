import * as React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Dashboard, Notification } from '@module';
import { AssetIcons } from '@assets';
import { Image, View } from 'react-native';
import { Colors } from '@res';
import { AccountStack } from './Account.stack';
import { DashboardStack } from './Dashboard.stack';
import { ifIphoneX } from 'react-native-iphone-x-helper'

const Tab = createBottomTabNavigator();

export type DashboardTabParams = {
    DashboardStack: undefined,
    Notification: undefined,
    AccountStack: undefined
}


export default function DashboardTab() {
    return (
        <Tab.Navigator
            tabBar={props => {
                return (
                    <View style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}>
                        <BottomTabBar {...props} />
                    </View>
                )
            }}
            tabBarOptions={{
                activeTintColor: Colors.primaryGreen,
                inactiveTintColor: Colors.primaryGreen,
                keyboardHidesTabBar: true,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: Colors.primaryWhite,
                    // borderTopRightRadius: 25,
                    // borderTopLeftRadius: 25,
                    ...ifIphoneX({
                        paddingBottom: 22
                    }, {
                        paddingBottom: 5
                    }),
                    flex: 1,
                    paddingTop: 5,
                    shadowColor: '#000000',
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    elevation: 12,
                }
            }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: () => <Image source={AssetIcons.HOME_RUN} />,
                    title: 'Trang chủ'
                }}
                name='DashboardStack'
                component={DashboardStack}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <Image source={AssetIcons.NOTIFICATION} />,
                    title: 'Thông báo'
                }}
                name='Notification'
                component={Notification}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <Image source={AssetIcons.GREEN_ACCOUNT} />,
                    title: 'Cá nhân'
                }}
                name='Account'
                component={AccountStack}
            />
        </Tab.Navigator>
    );
}
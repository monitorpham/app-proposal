import React, { useState } from 'react'
import { View, InteractionManager } from 'react-native'
import MapView from 'react-native-maps'
import { Header, FetchStatusFullScreenIndicator } from '@component'
import { useAgencyMap } from './AgencyMap.store'
import { AgencyMapProps } from './AgencyMap.type'
import { AgencyMapStyles } from './AgencyMap.style'
import { AssetIcons } from '@assets'
import { AgencyMarker } from './AgencyMarker'
import { LazyNavigationScreen } from '@layout'
import { useUser } from '@shared-state'
import { Agency } from '@data'
import { GeoLocationServices } from '@thirdparty'
import { GeolocationResponse } from '@react-native-community/geolocation'

export const AgencyMap: React.FC<AgencyMapProps> = (props) => {
    const [{ agencies, status }, action] = useAgencyMap()
    const [{ user }] = useUser()

    const [location, setLocation] = useState<GeolocationResponse>()

    if (!user) return null

    React.useEffect(() => {
        action.getAgencies(user.id)
        // getCurrentLocation()
    }, [])


    const getCurrentLocation = React.useCallback(async () => {
        const result = await GeoLocationServices.getCurrentLocation()
        setLocation(result)
    }, [])

    const navigateToBooking = React.useCallback((agency: Agency) => {
        props.navigation.navigate('Booking', { agencyId: agency.id })
    }, [])

    const renderAgencies = React.useMemo(() => {
        return agencies.map((agency) => {
            return (
                <AgencyMarker
                    key={agency.id}
                    onBook={navigateToBooking}
                    agency={agency}
                />
            )
        })

    }, [agencies])

    const renderMap = React.useMemo(() => {
        const coordinate = {
            latitude: location?.coords.latitude ?? 21.009056,
            longitude: location?.coords.longitude ?? 105.860748
        }
        return (
            <MapView
                style={AgencyMapStyles.map}
                region={{
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                {renderAgencies}
            </MapView>
        )
    }, [agencies, location])

    return (
        <>
            <FetchStatusFullScreenIndicator trackStatuses={[status]} />
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='Vị trí'
            />
            <LazyNavigationScreen indicatorType='NONE'>
                <View style={AgencyMapStyles.container}>
                    {renderMap}
                </View>
            </LazyNavigationScreen>
        </>
    )
}

import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Marker, Callout } from 'react-native-maps';
import { TextView } from '@component';
import { FontSizeDimens, Colors } from '@res';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { Agency } from '@data';


export type AgencyMarkerProps = {
    agency: Agency
    onBook?: (agency: Agency) => void
}

export const AgencyMarker: React.FC<AgencyMarkerProps> = ({ agency, onBook }) => {

    const onPressCallout = React.useCallback(() => {
        if (onBook) {
            onBook(agency)
        }
    }, [])

    return (
        <Marker
            coordinate={{
                latitude: agency.lat,
                longitude: agency.lng,
            }}
        >
            <Callout
                onPress={onPressCallout}
            >
                <View style={styles.container}>
                    <TextView
                        style={styles.name}
                        text={agency.name}
                    />
                    <TextView
                        style={styles.addres}
                        text={agency.address}
                    />
                    <TextView
                        style={styles.bookButton}
                        text='Đặt lịch'
                    />
                </View>
            </Callout>
        </Marker>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    name: {
        fontSize: FontSizeDimens.md,
        fontWeight: '700'
    },
    addres: {
        marginTop: responsiveHeight(0.7),
        fontSize: FontSizeDimens.xSm,
        color: Colors.primaryGray
    },
    bookButton: {
        marginTop: responsiveHeight(0.7),
        fontSize: FontSizeDimens.xSm,
        color: Colors.primaryRed,
        fontWeight: '700'
    }
})

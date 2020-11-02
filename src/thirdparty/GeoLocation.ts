import Geolocation, { GeolocationResponse, GeolocationError, GeolocationOptions } from '@react-native-community/geolocation';

export const GeoLocationServices = {
    getCurrentLocation: (option?: GeolocationOptions): Promise<GeolocationResponse> => {
        return new Promise<GeolocationResponse>((res, rej) => {

            const onSuccess = (response: GeolocationResponse) => {
                res(response)
            }

            const onError = (error: GeolocationError) => {
                rej(error)
            }

            Geolocation.getCurrentPosition(onSuccess, onError, option)
        })
    }
}
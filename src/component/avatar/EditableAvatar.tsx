import React from 'react'
import { View, ImageSourcePropType, StyleSheet, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import ImagePicker, { Image as ImageType } from 'react-native-image-crop-picker';
import { Avatar } from 'react-native-elements'
import { AssetIcons } from '@assets'
import { Colors } from '@res'

export type EditableAvatarProps = {
    defaultSource: ImageSourcePropType
    onChangeAvatar?: (image: ImageType) => Promise<void>
}

export const EditableAvatar: React.FC<EditableAvatarProps> = (props) => {

    const [source, setSource] = React.useState(props.defaultSource)

    const [updating, setUpdating] = React.useState(false)

    React.useEffect(() => {
        setSource(props.defaultSource)
    }, [props.defaultSource])

    const openPicker = React.useCallback(() => {

        Alert.alert('Avatar Picker', 'Chọn vị trí lấy avatar', [
            {
                text: 'Camera',
                onPress: useCamera
            },
            {
                text: 'Thư viện ảnh',
                onPress: usePhotoLibrary
            }
        ])

    }, [])

    const onPhotoSelected = React.useCallback((image: ImageType | ImageType[]) => {
        if (image instanceof Array) return
        updateAvatar(image)
    }, [])

    const updateAvatar = React.useCallback(async (image: ImageType) => {
        setSource({ uri: image.path })
        if (props.onChangeAvatar) {
            setUpdating(true)
            await props.onChangeAvatar(image)
            setUpdating(false)
        }
    }, [])

    const useCamera = React.useCallback(() => {
        ImagePicker.openCamera({
            width: 400,
            height: 400,
            cropping: true
        }).then(onPhotoSelected).catch()
    }, [])

    const usePhotoLibrary = React.useCallback(() => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(onPhotoSelected).catch()
    }, [])

    const renderIndicator = React.useMemo(() => {
        if (!updating) return null
        return (
            <View style={styles.indicator}>
                <ActivityIndicator size='large' color={Colors.primaryBlue}/>
            </View>
        )
    }, [updating])

    return (
        <TouchableOpacity
            onPress={openPicker}
            style={[styles.container]}
        >
            <Avatar
                size='large'
                source={source}
                rounded
            />
            <View style={styles.camera}>
                <Image
                    source={AssetIcons.GRAY_CAMERA}
                />
            </View>
            {renderIndicator}

        </TouchableOpacity>
    )
}

const IconSize = 23

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    camera: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: Colors.primaryWhite,
        width: IconSize,
        height: IconSize,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: IconSize * 0.5,
        borderLeftWidth: 0.5
    },
    indicator: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})

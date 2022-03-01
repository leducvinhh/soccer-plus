import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import images from '../../assets'

const Pitch = ({number, onPitTouch, showDot}: any) => {
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)
    const [opacity, setOpacity] = useState(0)
    const handleTouchImage = (e: any) => {
        setTop(e.nativeEvent.locationY - 10)
        setLeft(e.nativeEvent.locationX - 10)
        setOpacity(1)
        if(onPitTouch) onPitTouch(e)
    }
    return (
        <View style={styles.imageWrapper}>
            <Text style={showDot ? { ...styles.dot, top, left, opacity,} : { position: 'absolute' }}>{number}</Text>
            <TouchableOpacity activeOpacity={1} onPress={(e) => handleTouchImage(e)}>
                <Image style={styles.image} source={images.pitch}
                ></Image>
            </TouchableOpacity>
        </View>
    )
}

export default Pitch

const styles = StyleSheet.create({
    imageWrapper: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 445,
        position: 'relative'
    },
    image: {
        width: 'auto',
        height: '100%',
        resizeMode: 'contain',
    },
    dot: {
        position: 'absolute',
        width: 24,
        height: 24,
        borderRadius: 100,
        backgroundColor: 'red',
        zIndex: 2,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 2
    }
})
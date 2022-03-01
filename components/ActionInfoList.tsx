import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionInfoList = ({actions, deleteItem}:any) => {
    const handleClick = (id:any) => {
        if(deleteItem) deleteItem(id)
    }
  return (
    <View  style={styles.wrapper}>
        {
            actions.map((action: any, index: any) => (
                <View style={styles.btn} key={action.id}>
                        <Text style={styles.number}>player: {action.player}</Text>
                        <Text style={styles.locationX}>x: {action.positionX}</Text>
                        <Text style={styles.locationY}>y: {action.positionY}</Text>
                        <Text style={styles.action}>action: {action.action}</Text>

                        <TouchableOpacity style={styles.button} onPress={() => handleClick(action.id)}>
                            <Text style={styles.btnText} >
                                Delete
                            </Text>
                        </TouchableOpacity>
                </View>
            ))
        }
    </View>
  )
}

export default ActionInfoList

const styles = StyleSheet.create({
    wrapper: {

    },
    btn: {
        width: 1024,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        height: 40,
        backgroundColor: '#f00',
        borderRadius: 5,
    },
    locationX: {
        display: 'flex',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#ddd',
        height: '100%',
        width: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
    },
    locationY: {
        display: 'flex',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#ddd',
        height: '100%',
        width: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
    },
    number: {
        display: 'flex',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#ddd',
        height: '100%',
        width: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
    },
    action: {
        display: 'flex',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#ddd',
        height: '100%',
        width: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
    },
})
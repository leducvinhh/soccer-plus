import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Button = ({ action, length, onButtonTouch }: any) => {
  const handleTouchAction = (action: any) => {
    if (onButtonTouch) onButtonTouch(action)
  }
  return (
    <LinearGradient
      colors={['#A2A2A2', '#898989']}
      style={action.id < length ? styles.actionWrapper : styles.actionWrapperLast}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleTouchAction(action)}
      >
        <Text style={styles.button}>{action.title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default Button

const styles = StyleSheet.create({
  actionWrapper: {
    width: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 55,
    backgroundColor: '#A2A2A2',
    display: 'flex',
    borderRadius: 3,
    overflow: 'hidden',
    marginRight: 7,
  },
  actionWrapperLast: {
    width: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 55,
    backgroundColor: '#A2A2A2',
    display: 'flex',
    borderRadius: 3,
    overflow: 'hidden',
    marginRight: 0,
  },
  button: {
    height: '100%',
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderBottomColor: '#00000029',
    borderBottomWidth: 3,
  },
})
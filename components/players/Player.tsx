import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Player = ({ player, isCompetitor, length, onPlayer }: any) => {
  const handleTouch = (player: any) => {
    if(onPlayer) {
        onPlayer(player)
    }
  }
  return (
    <TouchableOpacity
      style={ player.id < length ? styles.player : styles.playerLast}
      activeOpacity={1}
      onPress={() => handleTouch(player)}
    >
      <Text style={ !isCompetitor ? styles.playerNumber : styles.playerNumberCompetitor}>{player.number}</Text>
      <Text style={styles.playerPosition}>{player.position}</Text>
      <Text style={styles.playerName}>{player.name}</Text>
    </TouchableOpacity>
  )
}

export default Player

const styles = StyleSheet.create({
  player: {
    display: 'flex',
    flexDirection: 'row',
    width: 135,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 6,
    height: 37,
  },
  playerLast: {
    display: 'flex',
    flexDirection: 'row',
    width: 135,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 0,
    height: 37,
  },
  playerNumber: {
    width: 25,
    backgroundColor: '#65377B',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
    textAlignVertical: "center",
    textAlign: "center"
  },
  playerNumberCompetitor: {
    width: 25,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: '#468666'
  },
  playerPosition: {
    width: 25,
    backgroundColor: '#EEE',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
    textAlignVertical: "center",
    textAlign: "center"
  },
  playerName: {
    flex: 1,
    backgroundColor: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlignVertical: "center",
    textAlign: "center"
  }
})
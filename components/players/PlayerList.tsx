import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Player from './Player'

const PlayerList = ({playerList, isCompetitor, onPlayer}: any) => {
  const onPlayerTouch = (e: any) => {
    if(onPlayer) onPlayer(e)
  }
  return (
    <View>
      <View style={isCompetitor? styles.playerCategoryCompetitor : styles.playerCategory}>
        <Text style={isCompetitor? styles.playerActiveCompetitor :styles.playerActive}>出場選手</Text>
        <Text>リザーブ</Text>
      </View>
      {
        playerList.map((player: any) => (
          <Player  onPlayer={onPlayerTouch} isCompetitor={isCompetitor} length={playerList.length} key={player.id} player={player} />
        ))
      }
    </View>
  )
}

export default PlayerList

const styles = StyleSheet.create({
  playerCategory: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
    borderBottomWidth: 3,
    borderBottomColor: '#65377B'
  },
  playerCategoryCompetitor: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
    borderBottomWidth: 3,
    borderBottomColor: '#468666'
  },
  playerActive: {
    width: 63,
    height: 30,
    backgroundColor: '#65377B',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  playerActiveCompetitor: {
    width: 63,
    height: 30,
    backgroundColor: '#468666',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
})
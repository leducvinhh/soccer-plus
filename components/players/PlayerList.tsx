import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Player from './Player'
import images from '../../assets'

const PlayerList = ({playerList, isCompetitor, onPlayer}: any) => {
  const onPlayerTouch = (e: any) => {
    if(onPlayer) onPlayer(e)
  }
  return (
    <View>
      <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: !isCompetitor? 'row' : 'row-reverse', marginBottom: 5 }}>
        <Image
          style={{...styles.image, marginTop: 'auto'}}
          source={ isCompetitor ? images.userCompetitor : images.user}
        />
        <Image
          style={{...styles.image, marginTop: 'auto'}}
          source={images.cancel}
        />
      </View>
      <View
        style={isCompetitor? styles.playerCategoryCompetitor : styles.playerCategory}
      >
        <Text
          style={isCompetitor? styles.playerActiveCompetitor :styles.playerActive}
        >出場選手</Text>
        <View style={ isCompetitor ? styles.afterCategoryCompetitor : styles.afterCategory }></View>
        <Text style={styles.supPlayer}>リザーブ</Text>
        <View style={ isCompetitor ? styles.beforeCategoryCompetitor : styles.beforeCategory }></View>
      </View>
      {
        playerList.map((player: any) => (
          <Player
            onPlayer={onPlayerTouch}
            isCompetitor={isCompetitor}
            length={playerList.length}
            key={player.id}
            player={player}
          />
        ))
      }
    </View>
  )
}

export default PlayerList;

const styles = StyleSheet.create({
  image: {
    width: 65,
    height: 50,
    zIndex: 2,
    resizeMode: 'cover',
    backgroundColor: 'cyan'
  },
  afterCategory: {
    borderLeftWidth: 5,
    borderBottomWidth: 14,
    borderRightWidth: 5,
    borderTopWidth: 14,
    borderBottomColor: '#65377B',
    borderLeftColor: '#65377B',
    borderTopColor: '#CCCCCC',
    borderRightColor: '#CCCCCC',
    marginTop: 'auto',
  },
  beforeCategory: {
    borderLeftWidth: 5,
    borderBottomWidth: 14,
    borderRightWidth: 5,
    borderTopWidth: 14,
    borderBottomColor: '#CCCCCC',
    borderLeftColor: '#CCCCCC',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    marginTop: 'auto',
  },
  afterCategoryCompetitor: {
    borderLeftWidth: 5,
    borderBottomWidth: 14,
    borderRightWidth: 5,
    borderTopWidth: 14,
    borderBottomColor: '#468666',
    borderLeftColor: '#CCCCCC',
    borderTopColor: '#CCCCCC',
    borderRightColor: '#468666',
    marginTop: 'auto',
  },
  beforeCategoryCompetitor: {
    borderLeftWidth: 5,
    borderBottomWidth: 14,
    borderRightWidth: 5,
    borderTopWidth: 14,
    borderBottomColor: '#CCCCCC',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    borderRightColor: '#CCCCCC',
    marginTop: 'auto',
  },
  playerCategory: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
    borderBottomWidth: 3,
    borderBottomColor: '#65377B'
  },
  playerCategoryCompetitor: {
    display: 'flex',
    flexDirection: 'row-reverse',
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
  supPlayer: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
    height: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 'auto',
  }
})
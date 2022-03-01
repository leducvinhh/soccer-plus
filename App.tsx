/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, useCallback, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import ActionInfoList from './components/ActionInfoList';
import ActionList from './components/actions/ActionList';
import Pitch from './components/pitch/Pitch';
import PlayerList from './components/players/PlayerList';
import { ActionItem } from './models';
import { getDBConnection, getActionItems, saveActionItems, createTable, deleteActionItem } from './services/db-service';

const playerList: object[] = [
    { id: 1, name: '川島', number: 1, position: 'GK' },
    { id: 2, name: '植田', number: 2, position: 'DF' },
    { id: 3, name: '室屋', number: 3, position: 'DF' },
    { id: 4, name: '板倉', number: 4, position: 'DF' },
    { id: 5, name: '長友', number: 5, position: 'DF' },
    { id: 6, name: '遠藤', number: 6, position: 'MF' },
    { id: 7, name: '柴崎', number: 7, position: 'MF' },
    { id: 8, name: '原口', number: 8, position: 'MF' },
    { id: 9, name: '鎌田', number: 9, position: 'FW' },
    { id: 10, name: '南野', number: 10, position: 'FW' },
    { id: 11, name: '古橋', number: 11, position: 'FW' },
]

const listAction: object[] = [
    { id: 1, title: 'セカンドボール', nameAction: 'kick the ball' },
    { id: 2, title: '空中戦', nameAction: 'header' },
    { id: 3, title: 'アドバンテージ', nameAction: 'win the ball' },
    { id: 4, title: 'アウトオブプレー', nameAction: 'leave the field' },
]

const App = () => {
    const [actions, setActions] = useState<ActionItem[]>([]);
    const [playerNum, setPlayerNum] = useState('');
    const [showDot, setShowDot] = useState(false);
    const [info, setInfo] = useState<any>({});

    const loadDataCallback = useCallback(async () => {
        try {
            const initActions = [
                { id: 0, player: 1, positionX: 1, positionY: 1, action: 'kick the ball' },
                { id: 1, player: 2, positionX: 2, positionY: 2, action: 'header' },
                { id: 2, player: 3, positionX: 3, positionY: 3, action: 'win the ball' }
            ];
            const db = await getDBConnection();
            await createTable(db);
            const storedTodoItems = await getActionItems(db);
            if (storedTodoItems.length) {
                setActions(storedTodoItems);
            } else {
                await saveActionItems(db, initActions);
                setActions(initActions);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        loadDataCallback();
    }, [loadDataCallback]);

    const addAction = async (data: any) => {
        console.log(data);
        try {
            const newActions = [...actions, { ...data, id: new Date().getTime() }];
            setActions(newActions);
            const db = await getDBConnection();
            await saveActionItems(db, newActions);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteItem = async (id: number) => {
        try {
            const db = await getDBConnection();
            await deleteActionItem(db, id);
            const storedTodoItems = await getActionItems(db);
            actions.splice(id, 1);
            setActions([...storedTodoItems]);
        } catch (error) {
            console.error(error);
        }
    };


    // ADD Player
    const onPlayerTouch = (n: any) => {
        setPlayerNum(n.number)
        setInfo({ ...info, player: n.number })
    }

    // ADD location x, location y
    const onPitchTouch = (data: any) => {
        console.log(data.nativeEvent.locationX.toFixed());
        setInfo({ ...info, positionX: data.nativeEvent.locationX.toFixed(), positionY: data.nativeEvent.locationY.toFixed() })
        console.log(info);
        setShowDot(true)
    }

    // ADD action
    const onButtonTouch = (data: any) => {
        setInfo({ ...info, action: data.nameAction })
    }

    // Check infor action and add list data
    if (Object.keys(info).length === 4) {
        addAction(info);
        setInfo({});
        setPlayerNum('');
        setShowDot(false)
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.appWrapper}>
                    <PlayerList onPlayer={onPlayerTouch} isCompetitor={false} playerList={playerList} />

                    <View style={styles.content}>
                        <View style={styles.pitch}>
                            <Text style={styles.process}></Text>
                            <Pitch number={playerNum} showDot={showDot} onPitTouch={onPitchTouch} />
                        </View>
                        <View style={styles.listAction}>
                            <ActionList onButtonTouch={onButtonTouch} length={listAction.length} action={listAction[1]} />
                            <ActionList onButtonTouch={onButtonTouch} length={listAction.length} action={listAction[2]} />
                            <ActionList onButtonTouch={onButtonTouch} length={listAction.length} action={listAction[0]} />
                            <ActionList onButtonTouch={onButtonTouch} length={listAction.length} action={listAction[3]} />
                        </View>
                    </View>

                    <PlayerList onPlayer={onPlayerTouch} isCompetitor={true} playerList={playerList} />
                </View>
                <View  style={styles.listInfo}>
                    <ActionInfoList deleteItem={deleteItem} actions={actions} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appWrapper: {
        width: 1024,
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: '#E2E2E2',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 14,
    },
    content: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
    },
    listAction: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 'auto',
        padding: 6,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderStartColor: 'red'
    },
    process: {
        backgroundColor: 'red',
        marginBottom: 10,
        borderRadius: 3,
        height: 12
    },
    pitch: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    listInfo: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#E2E2E2'
    }
});

export default App;

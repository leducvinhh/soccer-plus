import { enablePromise, openDatabase, SQLiteDatabase } from "react-native-sqlite-storage";
import { ActionItem } from "../models";

const tableName = 'actionList';

enablePromise(true);

export const getDBConnection = async () => {
    return openDatabase({ name: 'action-data.db', location: 'default' });
};

export const createTable = async (db: SQLiteDatabase) => {
    // create table if not exists
    const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
            id INTEGER PRIMARY KEY,
            player INTEGER  NOT NULL,
            positionX INTEGER NOT NULL,
            positionY INTEGER NOT NULL,
            action TEXT NOT NULL
      );`;

    await db.executeSql(query);
};

export const getActionItems = async (db: SQLiteDatabase): Promise<ActionItem[]> => {
    try {
        const actionItems: ActionItem[] = [];
        const results = await db.executeSql(`SELECT * FROM ${tableName}`);

        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                actionItems.push(result.rows.item(index))
            }
        });
        return actionItems;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get actionItems !!!');
    }
};

export const saveActionItems = async (db: SQLiteDatabase, actionItems: ActionItem[]) => {
    // console.log(actionItems)
    const insertQuery =
        `INSERT OR REPLACE INTO ${tableName}(id, player, positionX, positionY, action) values` +
        actionItems.map(i => `(${i.id}, ${i.player}, ${i.positionX}, ${i.positionY}, '${i.action}')`).join(',');

    return db.executeSql(insertQuery);
};

export const deleteActionItem = async (db: SQLiteDatabase, id: number) => {
    console.log(id)
    const deleteQuery = `DELETE from ${tableName} where id = ${id}`;
    await db.executeSql(deleteQuery);
};
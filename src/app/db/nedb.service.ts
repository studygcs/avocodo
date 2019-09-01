import NeDBDatastore from 'nedb'
import { Injectable } from '@angular/core';

@Injectable()
export class NeDBService {

    getDatabase(dbName: string): NeDBDatastore {
        let db = undefined;
        try {

            db = new NeDBDatastore({ filename: `${dbName}.db`, autoload: true });

            var doc = {
                _id: 'abc1',
                hello: 'world'
                , n: 5
                , today: new Date()
                , nedbIsAwesome: true
                , notthere: null
                , notToBeSaved: undefined  // Will not be saved
                , fruits: ['apple', 'orange', 'pear']
                , infos: { name: 'nedb' }
            };

            db.insert(doc, function (err, newDoc) {   // Callback is optional
                // newDoc is the newly inserted document, including its _id
                // newDoc has no key called notToBeSaved since its value was undefined
                console.log(err);
                console.log(newDoc);

            });

        } catch (error) {
            console.log(error);
        }
        return db;
    }
}
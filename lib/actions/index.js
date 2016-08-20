import idb from 'idb';

let nextTodoId = 0;
export const addTodo = (text, key) => {
    return {
        type: 'ADD_TODO',
        id: key,
        text
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

const dbPromise = idb.open('postitdbTest1', 1, upgradeDB => {
    upgradeDB.createObjectStore('keyval');
});

export function query() {
    return dispatch =>
        dbPromise
        .then(db => {
            return db.transaction('keyval')
                .objectStore('keyval').getAll();

        })
        .then(allObjs => dispatch({ allObjs, type: 'QUERY_SUCCESS'}));
}

export function createTodo(text) {
    return (dispatch) => {
        dbPromise
            .then(db => {
                const tx = db.transaction('keyval', 'readwrite');
                const key = nextTodoId++;
                tx.objectStore('keyval').put({task:text, completed:false}, key);
                dispatch(addTodo(text, key));
                return tx.complete;
            })
            .then(() => {
                dispatch(query()).then((data) => console.log(data));
            });
    };
}

export function updateTodo(key) {
    return (dispatch) => {
        dbPromise
            .then(db => {
                return db.transaction('keyval')
                    .objectStore('keyval').get(key)
                    .then(text => {
                        const tx = db.transaction('keyval', 'readwrite');
                        tx.objectStore('keyval').put({task:text.task, completed:!(text.completed)}, key);
                        dispatch(toggleTodo(text));
                        return tx.complete;
                    })
                    .then(() => {
                        dispatch(query()).then((data) => console.log(data));
                    });
            });
    };
}



// const idbKeyval = {
//     get(key) {
//         return dbPromise.then(db => {
//             return db.transaction('keyval')
//                 .objectStore('keyval').get(key);
//         });
//     },
//     set(key, val) {
//         return dbPromise.then(db => {
//             const tx = db.transaction('keyval', 'readwrite');
//             tx.objectStore('keyval').put(val, key);
//             return tx.complete;
//         });
//     },
//     delete(key) {
//         return dbPromise.then(db => {
//             const tx = db.transaction('keyval', 'readwrite');
//             tx.objectStore('keyval').delete(key);
//             return tx.complete;
//         });
//     },
//     clear(key) {
//         return dbPromise.then(db => {
//             const tx = db.transaction('keyval', 'readwrite');
//             tx.objectStore('keyval').clear(key);
//             return tx.complete;
//         });
//     },
//     keys() {
//         return dbPromise.then(db => {
//             const tx = db.transaction('keyval');
//             const keys = [];
//             const store = tx.objectStore('keyval');

//             // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
//             // openKeyCursor isn't supported by Safari, so we fall back
//             (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
//                 if (!cursor) return;
//                 keys.push(cursor.key);
//                 cursor.continue();
//             });

//             return tx.complete.then(() => keys);
//         });
//     },
//     query() {
//         return dbPromise.then(db => {
//             return db.transaction('keyval')
//                 .objectStore('keyval').getAll();

//         });
//     }
// };
// // idbKeyval.set('todo_'+ Date.now(), { task: 'Read algo', done: false });
// // idbKeyval.set('todo_'+ Date.now(), { task: 'Eat choco', done: true });
// // idbKeyval.keys().then(allObjs => console.log(allObjs));
// idbKeyval.query().then(allObjs => console.log(allObjs));

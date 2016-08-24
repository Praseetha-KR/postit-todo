import idb from 'idb';

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

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    };
};

const dbPromise = idb.open('postitdb_v1', 1, upgradeDB => {
    upgradeDB.createObjectStore('keyval');
});

let nextTodoId = 0;

export function query() {
    return dispatch =>
        dbPromise
        .then(db => {
            return db.transaction('keyval')
                .objectStore('keyval').getAll();

        })
        .then(allObjs => {
            if (allObjs.length) {
                nextTodoId = allObjs[allObjs.length - 1].id;
            }
            dispatch({ todos: allObjs, type: 'LIST_TODO'});
        });
}

export function createTodo(text) {
    return (dispatch) => {
        dbPromise
            .then(db => {
                const tx = db.transaction('keyval', 'readwrite');
                nextTodoId ++;
                const key = nextTodoId;
                tx.objectStore('keyval').put({id: key, text:text, completed:false}, key);
                dispatch(addTodo(text, key));
                return tx.complete;
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
                        tx.objectStore('keyval').put({id: text.id, text:text.text, completed:!(text.completed)}, key);
                        dispatch(toggleTodo(text.id));
                        return tx.complete;
                    });
            });
    };
}

export function removeTodo(key) {
    return (dispatch) => {
        dbPromise
            .then(db => {
                return db.transaction('keyval')
                    .objectStore('keyval').get(key)
                    .then(text => {
                        const tx = db.transaction('keyval', 'readwrite');
                        tx.objectStore('keyval').delete(key);
                        dispatch(deleteTodo(text.id));
                        return tx.complete;
                    });
            });
    };
}

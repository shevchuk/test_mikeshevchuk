import {LocalStorageHelper} from '../helpers/LocalStorageHelper'

export const STORE_NEW_ITEM_REQUEST = 'STORE_NEW_ITEM_REQUEST';
export const STORE_NEW_ITEM_SUCCESS = 'STORE_NEW_ITEM_SUCCESS';
export const SHOW_NEW_ITEM_MESSAGE = 'SHOW_NEW_ITEM_MESSAGE';
export const HIDE_NEW_ITEM_MESSAGE = 'HIDE_NEW_ITEM_MESSAGE';
export const SHOW_EMPTY_VALUE_MESSAGE = 'SHOW_EMPTY_VALUE_MESSAGE';
export const HIDE_EMPTY_VALUE_MESSAGE = 'HIDE_EMPTY_VALUE_MESSAGE';
export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';

export const getItems = () => {
    // 
    return dispatch => {
        dispatch(getItemsRequest());

        return new Promise((resolve, reject) => {
            let items = LocalStorageHelper.items;
            dispatch(getItemsSuccess(items));
        });
    }
}

export const getItemsRequest = () => {
    return {
        type: GET_ITEMS_REQUEST
    };
}

export const getItemsSuccess = (items) => {
    return {
        type: GET_ITEMS_SUCCESS,
        items: items
    };
}


export const storeNewItem = (value) => {
    return dispatch => {
        // LocalStorage has a synchronous behaviour so we dispatch
        // success action immediately
        dispatch(storeNewItemRequest(value));

        return new Promise((resolve, reject) => {
            if (value.value == null || value.selection == null) {
                dispatch(showEmptyValueMessage());
                setTimeout(() => {
                    dispatch(hideEmptyValueMessage());
                    reject(); //
                }, 1000);
            } else {
                LocalStorageHelper.push(value);
                dispatch(storeNewItemSuccess(value));
                dispatch(showNewItemAddedMessage());
                dispatch(getItems());
                setTimeout(() => {
                    dispatch(hideNewItemAddedMessage());
                    resolve();
                }, 1000);
            }
        });
    };
}

export const showEmptyValueMessage = (value) => {
    return {
        type: SHOW_EMPTY_VALUE_MESSAGE
    }
}

export const hideEmptyValueMessage = (value) => {
    return {
        type: HIDE_EMPTY_VALUE_MESSAGE
    }
}

export const storeNewItemRequest = (value) => {
    return {
        type: STORE_NEW_ITEM_REQUEST,
        value: value
    };
}

export const storeNewItemSuccess = (value) => {
    return {
        type: STORE_NEW_ITEM_SUCCESS,
        value: value
    };
}

export const showNewItemAddedMessage = () => {
    return {
        type: SHOW_NEW_ITEM_MESSAGE
    };
}

export const hideNewItemAddedMessage = () => {
    return {
        type: HIDE_NEW_ITEM_MESSAGE
    };
}

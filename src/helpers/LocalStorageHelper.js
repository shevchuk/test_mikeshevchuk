export class LocalStorageHelper {
    static get items() {
        let localDataAsJSON = localStorage.getItem('mydata');

        let result;
        try {
            let localData = JSON.parse(localDataAsJSON);

            if (Array.isArray(localData)) {
                result = localData;
            }
            
        } catch (e) {
            result = [];
        }

        return result;
    }

    static push(item) {
        let localDataAsJSON = localStorage.getItem('mydata');

        // we got something
        if (localDataAsJSON) {
            let localData = JSON.parse(localDataAsJSON);

            // if array is parsed then push new item inside,
            // otherwise (something wrong is stored there) - create new one
            if (Array.isArray(localData)) {
                localData.push(item);
                localStorage.setItem('mydata', JSON.stringify(localData));
            } else {
                localStorage.setItem('mydata', JSON.stringify([item]));
            }
        // first usage, store new array
        } else {
            localStorage.setItem('mydata', JSON.stringify([item]));
        }
    }
}

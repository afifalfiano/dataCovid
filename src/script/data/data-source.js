
class DataSource{
    static searchInfo(keyword) {
        return fetch('https://covid19.mathdro.id/api/confirmed', {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson !== null || responseJson !== undefined) {
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject(`${keyword} is not found!`);
            }
        })
    }

    static lastUpdate() {
        return fetch('https://covid19.mathdro.id/api', {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            return responseJson;
        })
    }

    static dataCovid() {
        return fetch('https://covid19.mathdro.id/api/confirmed', {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            return responseJson;
        })
    }
}



export default DataSource;
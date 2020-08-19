
class DataSource{
    // static searchInfo(keyword) {
    //     return fetch('https://covid19.mathdro.id/api/confirmed', {
    //         method: "GET"
    //     })
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(responseJson => {
    //         console.log(responseJson);
    //         if( typeof responseJson.countryRegion === string || responseJson.countryRegion !== undefined) {
    //             return Promise.resolve(responseJson.country);
    //         } else {
    //             return Promise.reject(`${keyword} Data tidak di temukan!`);
    //         }
    //     })
    // }
    static getInfo() {
        return fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League', {
            method: 'GET',
        })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            console.log(responseJson);
            if(responseJson.teams) {
                return Promise.resolve(responseJson.teams);
            } else {
                return Promise.reject(`Data is not found!`);
            }
        })
    }
}
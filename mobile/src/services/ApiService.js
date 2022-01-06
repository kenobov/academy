import {
    PointMobile
} from "../breakpoints";

export default class ApiService {

    //Users
    getMobileData = async ({...functions}) => {
        return this.getAllRecords({point: PointMobile, ...functions});
    }

    parameters = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }

    sendData = async ({
                          url,
                          parameters = this.parameters,
                          onSuccess = this._onSuccess,
                          onFinish = this._onFinish,
                          onError = this._onError
                      }
    ) => {

        fetch(url, parameters)
            .then(response => {
                if (response.status === 401) {
                    localStorage.removeItem('token');
                    onError('Доступ запрещен');
                    throw response.status;
                }
                return response.json();
            })
            .then(data => {
                return onSuccess(data);
            })
            .catch(error => {
                onError(error);
            })
            .finally(() => {
                onFinish();
            });
    }

    getAllRecords = async ({point, ...functions}) => {

        let url = typeof functions.query !== 'undefined' ? this.urlBuilder(point.url, functions.query) : point.url;

        const parameters = {
            url: url,
            parameters: {
                method: point.method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            },
            ...functions
        }
        return await this.sendData(parameters);
    }

    addRecord = async ({point, data, ...functions}) => {

        let headers = {
            'Accept': 'application/json'
        };
        if(localStorage.getItem('token')) {
            headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        }

        const parameters = {
            url: point.url,
            parameters: {
                method: point.method,
                headers: headers,
                body: data
            },
            ...functions
        };

        return this.sendData(parameters);
    }

    urlBuilder = (url, query) => {
        url += '?' + Object.keys(query).map(key => key + '=' + query[key]).join('&');
        return url;
    }

    _onSuccess = (data) => {
        return data;
    }
    _onError = (error) => {
        console.error(error);
    }
    _onFinish = () => {
    }


}
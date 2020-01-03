import api from './common'

export const request = {
    send(data) {
        return api.request({
            method: 'post',
            url: '/project_request',
            data
        })
    }
};
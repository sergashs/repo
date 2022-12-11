import API from '@/api';
export default {
    getCalendar: (params = {}) => {
        return API.get(`/records`, {
            params
        });
    },
    deleteRecord: (id = 0) => {
        return API.delete(`/records/${id}`)
    },
    putRecord: (params = {}) => {
        return API.put(`/records/${params.record.id}`, params)
    },
    sendRecords: (params = {}) => {
        return API.post(`/records`, params);
    }
};

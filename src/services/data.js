import http from "../http-common";

class CardDataService {
    getAll(page = 0) {
        return http.get(`?page=${page}`)
    }

    get(id) {
        return http.get(`/data?owner_id=${id}`);
    }

    find(query, by = "name", page = 0) {
        return http.get(`?${by}=${query}&page=${page}`)
    }
   
}

export default new CardDataService();
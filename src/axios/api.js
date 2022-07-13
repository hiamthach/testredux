import axios from "axios";

const api = axios.create({
    baseURL: "https://6287218e7864d2883e7efbd1.mockapi.io/todo",
});

api.interceptors.request.use(async (config) => config);

api.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    (error) => {
        throw error;
    }
);

const todoAPI = {
    getTodoList: () => {
        return api.get("/");
    },
    addTodo: (data) => {
        return api.post("/", data);
    },
    updateTodo: (data, id) => {
        return api.put(`/${id}`, data);
    },
    updateAll: (data) => {
        return api.put("/", data)
    },
    deleteTodo: (id) => {
        return api.delete(`/${id}`);
    },
};

export default todoAPI;

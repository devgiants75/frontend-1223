import axios from "axios";

//! API 통신을 위한 기본 설정
const api = axios.create({
    baseURL: 'http://localhost:3000'
});

export default api;
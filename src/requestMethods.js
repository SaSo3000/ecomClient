import axios from "axios";

const BASE_URL = "https://ecomback-itiq.onrender.com/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjNlMjY5ZDQ1MDRmMDI5YzUyYmI0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMzEwNjk1MCwiZXhwIjoxNzAzMzY2MTUwfQ.rL5VoWX7p9mNZSlDYTlA7N4GLQm-33qPek3ukFMa3jc";
export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header : {token:`Bearer ${TOKEN}`}
});
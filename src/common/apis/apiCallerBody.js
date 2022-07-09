import axios from "axios";
export default function CallApiBody(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `https://ssteamm.herokuapp.com/${endpoint}`,
        data: body
    })
}

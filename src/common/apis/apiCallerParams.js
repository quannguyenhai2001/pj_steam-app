import axios from "axios";
export default function CallApiPaams(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `https://ssteamm.herokuapp.com/${endpoint}`,
        params: body
    })
}

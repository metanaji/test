const user = "hard";
const pass = "hard";
const authorizationBasic = window.btoa(user + ':' + pass);
export const config = {
    "headers": {
        "Authorization": "Basic " + authorizationBasic
    }
};
export const URL = "https://hiring.rewardgateway.net/list"
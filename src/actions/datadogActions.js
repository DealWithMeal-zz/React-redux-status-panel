import axios from "axios";

const API_URL = `https://status.datadoghq.com/history.json`;

export const FETCH_API_DATADOG = "FETCH_API_DATADOG";

export function fetchAPIDatadog() {
  var request =  axios.get(API_URL);

  return {
    type: FETCH_API_DATADOG,
    payload: request
  };
}

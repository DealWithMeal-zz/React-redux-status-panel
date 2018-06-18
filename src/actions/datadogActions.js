export const API_URL = `https://status.datadoghq.com/history.json`;
export const FETCH_API_DATADOG = "FETCH_API_DATADOG";

export function fetchAPIDatadog(apiResponse) {
  return {
    type: FETCH_API_DATADOG,
    response: apiResponse
  };
}

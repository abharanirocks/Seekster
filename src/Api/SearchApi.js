import { indexerAxios } from "./BaseApi"
import { SEARCH_QUERY } from "./constant/ApiUrlConstant"

export const searchQuery = async (queryData) => {
    const response = await indexerAxios.post(SEARCH_QUERY, queryData)
    return response.data
}
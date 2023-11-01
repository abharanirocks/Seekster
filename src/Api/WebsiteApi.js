import { crawlAxios } from "./BaseApi"
import { CREATE_WEBSITE } from "./constant/ApiUrlConstant"

export const saveWebsite = async (websiteData) => {
    const response = await crawlAxios.post(CREATE_WEBSITE, websiteData)
    return response.data
}
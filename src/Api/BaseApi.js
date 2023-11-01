import axios from "axios";
import { CRAWL_BASE_URL, INDEXER_BASE_URL } from "./constant/ApiUrlConstant";

export const crawlAxios = axios.create({
  baseURL: CRAWL_BASE_URL,
});

export const indexerAxios = axios.create({
  baseURL: INDEXER_BASE_URL,
});

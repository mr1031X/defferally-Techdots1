import { Exchange } from "@prisma/client";

export interface ExchangesResponse {
  success: boolean,
  data: Exchange[] | null
}

export interface ExchangeResponse {
  success: boolean,
  data: Exchange | null
}

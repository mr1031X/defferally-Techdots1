export interface SuccessResponse {
  success: boolean
}

export interface IPaginationResponse {
  pagination_data: {
    page: number
    per_page: number
    total: number
    total_pages: number
  }
}

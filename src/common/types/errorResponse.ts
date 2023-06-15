interface ErrorEntry {
  type: string
  messageId: string
  message: string
  explanation: string
  action: string
}

export interface ErrorResponse {
  error: ErrorEntry[]
}

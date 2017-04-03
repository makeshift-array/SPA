export function success(details) {
  return {
    status: 'success',
    details
  }
}

export function error(message, field = null) {
  return {
    status: 'error',
    details: {
      field,
      message
    }
  }
}

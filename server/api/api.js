export function success(details) {
  return {
    status: 'success',
    details
  }
}

export function error(details) {
  return {
    status: 'error',
    details
  }
}

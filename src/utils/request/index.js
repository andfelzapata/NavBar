const checkStatus = response => {
  if (response.ok) {
    return response
  }
  throw new Error(response.status)
}

export const request = url => {
  const requestUrl = `api/${url}`

  return fetch(requestUrl)
    .then(checkStatus)
    .then(response => response.json())
    .catch(err => {
      throw Error(err.message)
    })
}

export const sleep = (ms = 500) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

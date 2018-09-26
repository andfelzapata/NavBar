const order = (start, end) => field => order => {
  const startDate = new Date(start[field])
  const endDate = new Date(end[field])

  return {
    desc: endDate - startDate,
    asc: startDate - endDate
  }[order]
}

export { order }

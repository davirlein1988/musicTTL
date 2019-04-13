export const fetchEvents = async () => {
    const response = await fetch('https://musicttlmd-staging.herokuapp.com/api/v1/events')
    const results = await response.json()
    return results
}

export const fetchVenues = async () => {
    const response = await fetch('https://musicttlmd-staging.herokuapp.com/api/v1/venues')
    const results = await response.json()
    return results
}

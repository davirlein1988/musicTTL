export const fetchArtists = async () => {
    const response = await fetch('https://musicttlmd-staging.herokuapp.com/api/v1/artists')
    const results = await response.json()
    return results
}

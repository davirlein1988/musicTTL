export const fetchArtists = async () => {
    const response = await fetch('https://musicttlmd-staging.herokuapp.com/api/v1/artists')
    const results = await response.json()
    return results
}

export const fetchOne = async (url,id) => {
    const response =  await fetch(`${url}${id}`)
    const result = await response.json()
    return result
}
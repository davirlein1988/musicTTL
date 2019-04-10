export const fetchVenues = async () => {
    const response = await fetch('https://randomuser.me/api/?results=20&nat=us')
    const {results} = await response.json()
    return results
}
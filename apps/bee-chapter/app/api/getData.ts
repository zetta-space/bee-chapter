const getData = async () => {
    try {
        const response = await fetch('http://localhost:3000/api')
        return response.json()
    } catch (error) {
        return error
    }
}

export default getData
export async function getAllPosts() {
    const response = await fetch('http://92.63.192.101/main-sliders')
    return await response.json()
}
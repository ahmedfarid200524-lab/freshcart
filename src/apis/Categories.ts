export async function GetAllCat() {
  try {
    const response = await fetch (`https://ecommerce.routemisr.com/api/v1/categories`)
    const { data } = await response.json()
    return data
  } 
    catch (e) {
    return []
  }
}

export async function GETallbrands() {
  try {
    const response = await fetch (`https://ecommerce.routemisr.com/api/v1/brands`)
    const { data } = await response.json()
    return data
  } 
    catch (e) {
    return []
  }
}
const BASE_URL = 'https://api.escuelajs.co/api/v1';

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Error fetching products: ', error.message);
  }
};

// Fetch all categories
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Error fetching categories: ', error.message);
  }
};
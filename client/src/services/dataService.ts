// src/services/dataService.ts
import axios from 'axios';
import productsData from '../data/products.json';
import { Review } from '../types/review.interface';
import { Product } from '../types/product.interface';

export const API_URL = 'http://localhost:3000';

export const fetchData = async () => {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData);
      }, 1000);
    });
  } catch (error) {
    console.error('Erro ao buscar os dados', error);
    throw error;
  }
};

export async function getProduct(): Promise<Product[]>{
  try {
    const response = await axios.get(`${API_URL}/product`)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tamanhos:', error);
    throw error;
  }
}
export async function getProductById(id: number): Promise<Product>{
  try {
    const response = await axios.get(`${API_URL}/product/${id}`)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tamanhos:', error);
    throw error;
  }
}
export async function getReviewByProductId(id: number): Promise<Review[]>{
  try {
    const response = await axios.get(`${API_URL}/review/product/${id}`)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar reviews:', error);
    throw error;
  }
}
// export async function getReviewByProductId(productId: number, limit: number = 3, cursor?: number | null, ): Promise<Review[]> {
//   try {
//     const params = new URLSearchParams();
//     params.append("productId", productId.toString());
//     params.append("limit", limit.toString());
//     if (cursor) params.append("cursor", cursor.toString());

//     const response = await axios.get(`${API_URL}/review/product/${productId}?${params.toString()}`);
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar reviews:", error);
//     throw error;
//   }
// }

export async function getReviewById(id: number): Promise<Review>{
  try {
    const response = await axios.get(`${API_URL}/review/${id}`)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tamanhos:', error);
    throw error;
  }
}

export async function getProductsByDress(dress: string) {
  try {
    const response = await axios.get(`${API_URL}/products/dress/${dress}`)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tamanhos:', error);
    throw error;
  }
  
}

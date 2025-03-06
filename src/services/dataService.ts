// src/services/dataService.ts
import productsData from '../data/products.json';

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

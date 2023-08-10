import { Product } from './02-insertProducts';

export type Item = {
  product: Product,
  quantity: number,
  phrase: string,
  brand: string,
};

export default function calculateTotalPrice(products: Item[]): number {
  const sum = products.reduce((total, prod) => (
    total + prod.product.price * prod.quantity
  ), 0);

  return parseFloat(sum.toFixed(2));
}

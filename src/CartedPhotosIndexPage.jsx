import { useLoaderData } from "react-router-dom";
export function CartedPhotosIndexPage() {
  const cartedProducts = useLoaderData();
  return (
    <div>
      <h1>Shopping Cart ({cartedProducts.length} total)</h1>
      {cartedProducts.map((cartedProduct) => (
        <div key={cartedProduct.id}>
          <h2>{cartedProduct.product.name}</h2>
          <p>Quantity: {cartedProduct.quantity}</p>
        </div>
      ))}
    </div>
  );
}

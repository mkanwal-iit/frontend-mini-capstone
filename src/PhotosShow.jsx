export function PhotosShow({ photo, onUpdate, onDestroy, onAddToCart }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(photo, params, () => event.target.reset());
  };

  const handleShoppingCartSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onAddToCart(params);
  };

  return (
    <div>
      {/* Photo Information */}
      <div>
        <h5>Photo Information</h5>
        <h6>{photo.name}</h6>
        <img
          src={photo.primary_image_url || "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}
          alt={photo.name}
          width="300"
          height="300"
        />
        <p>Price: ${photo.price}</p>
        <p>Tax: ${photo.tax}</p>
        <p>Total: ${photo.total}</p>
        <p>Description: {photo.description}</p>
        <button onClick={() => onDestroy(photo)}>Delete Photo</button>
      </div>

      {/* Add to Cart Form */}
      <div>
        <h5>Add to Cart</h5>
        <form onSubmit={handleShoppingCartSubmit}>
          <div>
            Quantity: <input name="quantity" type="number" />
          </div>
          <input name="product_id" type="hidden" value={photo.id} />
          <button type="submit">Add to cart</button>
        </form>
      </div>

      {/* Edit Photo Form */}
      <div>
        <h5>Edit Photo</h5>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input defaultValue={photo.name} name="name" type="text" required />
          </div>
          <div>
            <label>Image URL</label>
            <input defaultValue={photo.primary_image_url} name="primary_image_url" type="text" required />
          </div>
          <div>
            <label>Price</label>
            <input defaultValue={photo.price} name="price" type="number" step="0.01" required />
          </div>
          <div>
            <label>Tax</label>
            <input defaultValue={photo.tax} name="tax" type="number" step="0.01" required />
          </div>
          <div>
            <label>Total</label>
            <input defaultValue={photo.total} name="total" type="number" step="0.01" required />
          </div>
          <div>
            <label>Description</label>
            <textarea defaultValue={photo.description} name="description" rows="3" required></textarea>
          </div>
          <button type="submit">Update Photo</button>
        </form>
      </div>
    </div>
  );
}

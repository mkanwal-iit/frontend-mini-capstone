export function PhotosShow({ photo, onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(photo, params, () => event.target.reset());
  };
  return (
    <div>
      <h1>Photo Information</h1>
      <div>
        <h2>{photo.name}</h2>
        <img
          src={photo.primary_image_url || "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}
          alt={photo.name}
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
        />
        <p>Price: ${photo.price}</p>
        <p>Tax: ${photo.tax}</p>
        <p>Total: ${photo.total}</p>
        <p>Description: {photo.description}</p>

        <h3>Edit Photo</h3>
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input defaultValue={photo.name} name="name" type="text" />
          </div>
          <div>
            Image URL: <input defaultValue={photo.primary_image_url} name="primary_image_url" type="text" />
          </div>
          <div>
            Price: <input defaultValue={photo.price} name="price" type="number" step="0.01" />
          </div>
          <div>
            Tax: <input defaultValue={photo.tax} name="tax" type="number" step="0.01" />
          </div>
          <div>
            Total: <input defaultValue={photo.total} name="total" type="number" step="0.01" />
          </div>
          <div>
            Description: <textarea defaultValue={photo.description} name="description"></textarea>
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

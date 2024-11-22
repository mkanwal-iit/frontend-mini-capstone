export function PhotosIndex({ photos }) {
  return (
    <div>
      <h1>All Products ({photos.length} total)</h1>
      {photos.map((photo) => (
        <div key={photo.id}>
          <h2>{photo.name}</h2>
          <img src={photo.primary_image_url} alt={photo.name} />
          <p>Price: ${photo.price}</p>
          <p>Tax: ${photo.tax}</p>
          <p>Total: ${photo.total}</p>
          <p>Description: {photo.description}</p>
        </div>
      ))}
    </div>
  );
}

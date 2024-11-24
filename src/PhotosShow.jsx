export function PhotosShow({ photo }) {
  return (
    <div style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
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
      </div>
    </div>
  );
}

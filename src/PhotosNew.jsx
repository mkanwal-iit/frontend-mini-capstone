export function PhotosNew({ onCreate, errors, status }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);

    onCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Product</h1>
      {status ? <img src={`https://http.cat/${status}`} /> : null}
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" required />
        </div>
        <div>
          Image URL: <input name="image_url" type="text" required placeholder="Enter image URL" />
        </div>
        <div>
          Price: <input name="price" type="number" step="0.01" required placeholder="Enter price" />
        </div>
        <div>
          Supplier ID: <input name="supplier_id" type="number" required placeholder="Enter supplier ID" />
        </div>
        <div>
          Description: <textarea name="description" required placeholder="Enter description"></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

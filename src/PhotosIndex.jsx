import { useState } from "react";
export function PhotosIndex({ photos, onShow }) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div className="container mt-4">
      <h1 className="mb-4">All Products ({photos.length} total)</h1>
      Search filter:{" "}
      <input value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} type="text" list="titles" />
      <datalist id="titles">
        {photos.map((post) => (
          <option key={post.id}>{post.name}</option>
        ))}
      </datalist>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {photos
          .filter((post) => post.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((post) => (
            <div key={post.id} className="col">
              <div className="card h-100">
                <img src={post.primary_image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{post.name}</h5>
                </div>
                <div className="card-footer">
                  <button className="btn btn-outline-secondary float-end" onClick={() => onShow(post)}>
                    More info
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

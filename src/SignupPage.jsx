import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Redirect to homepage after successful signup
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
        setStatus(error.response.status);
      });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title text-center m-0">Signup</h3>
            </div>
            <div className="card-body">
              {/* Display errors */}
              {errors.length > 0 && (
                <div className="alert alert-danger">
                  <ul className="mb-0">
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Signup Form */}
              <form onSubmit={handleSubmit}>
                {status ? <img src={`https://http.cat/${status}`} /> : null}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input name="name" type="text" id="name" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input name="email" type="email" id="email" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input name="password" type="password" id="password" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="password_confirmation" className="form-label">
                    Password Confirmation
                  </label>
                  <input
                    name="password_confirmation"
                    type="password"
                    id="password_confirmation"
                    className="form-control"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

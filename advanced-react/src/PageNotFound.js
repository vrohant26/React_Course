import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="error-actions">
              <Link className="btn btn-primary" to="/">
                Take me home
              </Link>
              <Link className="btn btn-light" to="/">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

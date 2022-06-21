import React from "react";
import PropTypes from "prop-types";
import defaulting from "../assests/default.jpg";

export default function Products({ prod }) {
  const { name, imgUrl, price } = prod;
  // const { id } = key;
  // console.log(id);
  const url = imgUrl && imgUrl.url;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={url || defaulting}
            className="img-fluid rounded-start"
            alt={name}
          />
        </div>
        <div className="col-md-8 d-flex align-items-center ">
          <div className="card-body text-center">
            <h5 className="card-title my-3">{name || "no name"}</h5>
            <p className="card-text">
              <small className="text-muted">Rs {price || null}</small>
            </p>
            <button
              onClick={() => {
                const string = name + " added to cart";
                console.log(string);
              }}
              className="btn btn-info"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Products.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

Products.defaultProps = {
  name: "default",
  imgUrl: { url: defaulting },
  price: 2,
};

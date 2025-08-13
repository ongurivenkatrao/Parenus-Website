import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p>{product.description}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    width: "250px",
    margin: "10px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px"
  }
};

export default ProductCard;

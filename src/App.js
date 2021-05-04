import React, { useState } from "react";

const Dashboard = () => {

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const resetForm = () => {
    setProductName("");
    setCategory("");
    setPrice("");
  };

  const onSubmit = () => {
    const data = {
      productName: productName,
      category: category,
      price: price,
    };
    firebase.database().ref("products").push(data);
    resetForm();
  };

  return (
    <div className="container mt-5">
    <h3>Dashboard</h3>
    <div className="col-6">
      <p>Product Name</p>
      <input className="form-control" placeholder="Type the product name" value={productName} onChange={(e)=>setProductName(e.target.value)}/>
      <p>Category</p>
      <input className="form-control" placeholder="Type the category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
      <p>Price</p>
      <input className="form-control" placeholder="Type the price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
      <br />
      <button className="btn btn-primary" onClick={onSubmit}>Save</button>
      </div>
      <hr />
      <div class="table-responsive">
  <table class="table">
  <thead>
      <tr>
      	<th>Project Name</th>
      	<th>Category</th>
      	<th>Price</th>
      	<th>Action</th>
      </tr>
    </thead>
  </table>
</div>
    </div>
  );
};

export default Dashboard;
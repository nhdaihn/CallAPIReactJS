/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';

function App() {
  return (

    <div className="container">
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
          <li className="active">
            <a>Home</a>
          </li>
          <li>
            <a>Products</a>
          </li>
        </ul>
      </nav>

      <button type="button" className="btn btn-primary mb-10">Add New</button>
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">Products</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Code</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>123</td>
                <td>123</td>
                <td>
                  <span className="label label-danger">True</span>
                </td>
                <td>
                  <button type="button" className="btn btn-warning">Edit</button>&nbsp;
                  <button type="button" className="btn btn-danger">Delete</button>
                </td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>

    </div>



  );
}

export default App;

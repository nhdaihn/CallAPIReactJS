import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var { index, product } = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{index}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className="label label-danger">True</span>
                </td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>&nbsp;
                <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
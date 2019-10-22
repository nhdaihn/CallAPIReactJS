import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
class ProductListPage extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary mb-10">Add New</button>
                <ProductList>
                    {this.showProduct(products)}
                </ProductList>
            </div>
        );
    }

    showProduct(products){
        var result = null;
        if (products.length >0) {
            result = products.map((product, index)=>{
                return (
                    <ProductItem
                    key={index}
                    product = {product}
                    index ={index}
                    />
                )
            })
        }
    }
}

export default ProductListPage;
import React, { Component } from 'react'
import { Container, CardDeck, Row } from 'reactstrap'
import { connect } from 'react-redux'
import { getProduct } from '../../actions/productActions'
import PropTypes from 'prop-types'
import Product from './Product'

class Category extends Component {
    componentDidMount(){
        this.props.getProduct()
    }
    render(){
        const { products } = this.props
        return(
            <Container>
                <CardDeck>
                    <Row>
                        {
                            products.map(({_id, name, price, totalQuantity, createdAt}) => (
                                <Product key={_id} name={name} price={price} id={_id} totalQuantity={totalQuantity} createdAt={createdAt}/>
                            ))
                        }
                    </Row>
                </CardDeck>
            </Container> 
        )
    } 
}

Category.propTypes = {
    getProduct: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return ({
        products: state.product.products
    })
}

export default connect(mapStateToProps, { getProduct })(Category)
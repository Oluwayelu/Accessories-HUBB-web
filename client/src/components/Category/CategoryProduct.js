import React, { Component } from 'react'
import { Container, CardDeck, Row, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { getCategoryProducts } from '../../actions/categoryActions'
import PropTypes from 'prop-types'
import Product from '../Product/Product'
import Pagination from '../Common/Pagination'

class CategoryProduct extends Component {
    componentDidMount() {
        if(this.props.match.params.id){
            this.props.getCategoryProducts(this.props.match.params.id)
        }
    }
    render() {
        const { product } = this.props
        return(
            <Container>
                <Button outline color="warning" href={'/categories'} className="row justify-content-right">Go back</Button>
                <br/>
                <CardDeck>
                    <Row>
                {
                    product.map(({_id, name, price, totalQuantity, createdAt}) => (
                        <Product key={_id} name={name} price={price} id={_id} totalQuantity={totalQuantity} createdAt={createdAt}/>
                    ))
                }
                </Row>
            </CardDeck>
            <Pagination/>
        </Container>
        )
    }
}
CategoryProduct.propTypes = {
    getCategoryProducts: PropTypes.func.isRequired,
    product: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return ({
        product: state.category.products
    })
}

export default connect(mapStateToProps, { getCategoryProducts })(CategoryProduct)
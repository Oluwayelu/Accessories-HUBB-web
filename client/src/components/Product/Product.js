import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProduct } from '../../actions/prodoctActions'
import PropTypes from 'prop-types'

class Category extends Component {
    componentDidMount(){
        this.props.getProduct()
    }
    render(){
        const { products } = this.props
        return(
            <Container>
                {
                    products.map(({_id, name}) => (
                        <Link to={`/products/${_id}`} key={_id} className="row justify-content-center">{name}</Link>
                    ))
                }
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
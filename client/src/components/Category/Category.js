import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategory } from '../../actions/categoryActions'
import PropTypes from 'prop-types'

class Category extends Component {
    componentDidMount(){
        this.props.getCategory()
    }
    render(){
        const { categories } = this.props
        return(
            <Container>
                {
                    categories.map(({_id, name}) => (
                        <Link to={`/categories/product/${_id}`} key={_id} className="row justify-content-center">{name}</Link>
                    ))
                }
            </Container>
        )
    } 
}

Category.propTypes = {
    getCategory: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return ({
        categories: state.category.categories
    })
}

export default connect(mapStateToProps, { getCategory })(Category)
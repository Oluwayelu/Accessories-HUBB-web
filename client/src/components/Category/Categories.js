import React, { Component } from 'react'
import { 
    Row,
    Container,
    CardGroup
 } from 'reactstrap'
import { connect } from 'react-redux'
import { getCategory } from '../../actions/categoryActions'
import PropTypes from 'prop-types'
import Category from './Category'

class Categories extends Component {
    componentDidMount(){
        this.props.getCategory()
    }
    render(){
        const { categories } = this.props
        return(
            <Container>
                <CardGroup>
                    <Row>
                        {
                            categories.map(({_id, name}) => (
                                    <Category key={_id} name={name} id={_id}/>
                            ))
                        }
                    </Row>
                </CardGroup>
            </Container>
            
        )
    } 
}

Category.propTypes = {
    getCategory: PropTypes.func,
    categories: PropTypes.array
}

const mapStateToProps = (state) => {
    return ({
        categories: state.category.categories
    })
}

export default connect(mapStateToProps, { getCategory })(Categories)
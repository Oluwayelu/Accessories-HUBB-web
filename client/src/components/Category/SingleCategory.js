import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'

function SingleCategory(props){
    let id = props.match.params.id
    let [category,setCategory] = useState({})
    useEffect(() => {
        async function fetchCategory(){
            axios.get(`http://localhost:8000/categories/product/${id}`).then(res => setCategory(res.data))
        }
        fetchCategory()
    })
    return(
        <Container className="bg-primary">
            { category.name }
        </Container>
    )
}

export default SingleCategory
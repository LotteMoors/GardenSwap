import React from 'react'
import {Card, Container, Cross } from './styles'

const Information = ({res, setInfo}) => {
    return (
        <Card>
            <Cross onClick={()=> setInfo('')}>×</Cross>
           {res.plant_details.taxonomy !== null ? 
           <Container>
                <p>Family: {res.plant_details.taxonomy.family} </p> 
                <p>Class: {res.plant_details.taxonomy.class} </p> 
                <p>Genus: {res.plant_details.taxonomy.genus} </p> 
                <p>Kingdom: {res.plant_details.taxonomy.kingdom} </p> 
                <p>Order: {res.plant_details.taxonomy.order} </p> 
                <a href={res.plant_details.url} style={{color:'black', textDecoration:'underline', textAlign:'center'}}>Wikipedia page</a> 

           </Container>
           
            : <p>No information found.</p>}
        </Card>
    )
}

export default Information

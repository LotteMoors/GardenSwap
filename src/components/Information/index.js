import React from "react";
import { Card, Container, Cross, Title, List, ListItem, Link } from "./styles";

const Information = ({ res, setInfo }) => {
  return (
    <Card>
      <Title>Info</Title>
      <Cross onClick={() => setInfo("")}>×</Cross>

      <Container>
        <List>
          {res.plant_details.name_authority !== null ? (
            <ListItem>Variety: <i>{res.plant_details.name_authority}</i> </ListItem>
          ) : null}
          {res.plant_details.taxonomy !== null ? (
            <>
              <ListItem>Family: <i>{res.plant_details.taxonomy.family}</i> </ListItem>
              <ListItem>Genus: <i>{res.plant_details.taxonomy.genus}</i> </ListItem>
              <ListItem>Class: <i>{res.plant_details.taxonomy.class}</i> </ListItem>
              <ListItem>Order: <i>{res.plant_details.taxonomy.order}</i> </ListItem>
            </>
          ) : null}
        </List>
        {res.plant_details.url !== null ? (
          <div>
            <Link
              href={res.plant_details.url}              
            >
              Wikipedia page
            </Link>
          </div>
        ) : null}
        {res.plant_details.taxonomy === null &&
        res.plant_details.name_authority === null &&
        res.plant_details.url === null ? (
          <p>No information found.</p>
        ) : null}
      </Container>
    </Card>
  );
};

export default Information;

import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { products } from "../../data/";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";

export default function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const renderProducts = products.map((product) => (
    <Grid
      item
      key={product.id}
      xs={2}
      sm={4}
      md={4}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      {matches ? (
        <SingleProduct product={product} matches={matches} />
      ) : (
        <SingleProductDesktop product={product} matches={matches} />
      )}
    </Grid>
  ));

  return (
    <Container>
      <Grid
        container
        spacing={{ sx: 2, md: 3 }}
        sx={{
          justifyContent: "center",
          margin: "20px 4px 10px 4px",
          paddingTop: "20px",
        }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
}

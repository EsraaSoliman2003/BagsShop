import React, { useState } from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import { Box, Button, Drawer, IconButton, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { Colors } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";


export default function SingleProduct({ product, matches }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box role="presentation" display={"flex"} flexDirection={"column"} gap={2}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "98%",
          alignItems: "center",
          backgroundColor: Colors.secondary,
          color: Colors.black,
          padding: "5px 15px",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
          }}
        >
          Product Name
        </Typography>
        <IconButton
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <CloseIcon sx={{ fontSize: "3rem", color: Colors.black }} />
        </IconButton>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{ color: Colors.black }}
      >
        <ProductImage
          src={product.image}
          style={{ width: "25%", margin: "auto" }}
        />
        <ProductMeta product={product} matches={matches} />
        <Typography sx={{ width: "70%", margin: "auto", fontSize: "1.5rem" }}>
          {product.description}
        </Typography>
      </Box>
      <Box display={"flex"} sx={{ margin: "auto" }} gap={20}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ justifyContent: "center" }}
        >
          <Button variant="contained" onClick={decrement}>
            -
          </Button>
          <span>{count}</span>
          <Button variant="contained" onClick={increment}>
            +
          </Button>
        </Stack>
        <Button
          variant="contained"
          sx={{
            margin: "auto",
            display: "flex",
            backgroundColor: Colors.primary,
            fontSize: "1rem",
          }}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );


  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0} style={{ marginTop: 10 }}>
          <FavoriteIcon />
        </ProductFavButton>
        {showOptions && (
          <ProductAddToCart show={showOptions} variant="contained">
            Add to Cart
          </ProductAddToCart>
        )}

        <ProductActionsWrapper show={showOptions}>
          <Stack direction={"column"}>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>

              <Button
                style={{ boreder: "2px solid yellow" }}
                onClick={toggleDrawer("Top", true)}
              >
                <FitScreenIcon color="primary" />
              </Button>
              <Drawer
                anchor={"Top"}
                open={state["Top"]}
                onClose={toggleDrawer("Top", false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    top: "0",
                    width: "100%",
                    height: "100%",
                    borderRadius: 0,
                    backgroundColor: Colors.white,
                    color: Colors.secondary,
                  },
                }}
              >
                {list("Top")}
              </Drawer>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />
      </>
  );
}

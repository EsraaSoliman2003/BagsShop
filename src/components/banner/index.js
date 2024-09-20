import React from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage src="https://raw.githubusercontent.com/grepsoft/ecomm/main/public/images/banner/banner.png" />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescription variant="subtitle">
          lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, consectetur
          adip lorem ipsum dolor sit amet, consectetur adip
        </BannerDescription>
        <BannerShopButton color="primary">Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}

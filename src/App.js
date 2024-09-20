import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotion from "./components/promotion";
import Products from "./components/Products";
import Footer from "./components/footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Appbar />
        <Banner/>
        <Promotion/>
        <Box display={"flex"} justifyContent={"center"} sx={{p: 4}}>
          <Typography variant="h4">Our Products</Typography>
        </Box>
        <Products/>
        <Footer/>
      </Container>
    </ThemeProvider>
  );
}

export default App;

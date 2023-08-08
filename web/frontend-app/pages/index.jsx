import Button from '@mui/material/Button';
import { useTranslation } from "react-i18next";

import { Box, Container, Typography } from '@mui/material';
import { useEffect, useRef } from "react";
import Appbar from "../components/Homepage/Appbar";
import Footer from "../components/Homepage/Footer";
import Hero from "../components/Homepage/Hero";
import PricingPlans from "../components/Homepage/PricingPlans";
import ProductsSection from "../components/Homepage/ProductsSection";
import { useAuthenticatedFetch } from "../hooks";

export default function HomePage() {
  const { t } = useTranslation();
  const authenticatedFetch = useAuthenticatedFetch();
  const targetRef = useRef(null);

  const scrollToSection = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await authenticatedFetch("/api/products");
        // const response = await fetch("/api/products");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    dataFetch();
  }, [])

  // const {
  //   data: productsData,
  //   isLoading: isLoadingProducts,
  // } = useAppQuery({
  //   url: "/api/products",
  //   reactQueryOptions: {
  //     // Handle loading state if needed
  //   },
  // });

  // console.log(productsData?.data)

  return (
    <Box>
      <Box
        sx={{
          minHeight: "100vh",

          backgroundImage:
            "url(https://i.ibb.co/C0tsDjv/Frame-1171275636-1.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: { sm: "cover", xs: "auto" },
        }}
      >
        <Appbar targetHandler={scrollToSection} />
        <Hero />
      </Box>
      <Box sx={{ background: "#1b1b1b" }}>
        <Container maxWidth="lg" sx={{ paddingY: { sm: "48px", xs: "38px" } }}>
          <Typography
            textAlign="center"
            color="#fff"
            fontSize={{ sm: 44, xs: 24 }}
            lineHeight={{ sm: "57px", xs: "33px" }}
          >
            Say goodbye to product photoshoots and video sets! Transform product
            images into high-performing visuals and videos for your brand’s
            website and social channels.
          </Typography>
        </Container>
      </Box>
      {/* all products */}
      <ProductsSection />
      {/* pricing plans */}
      <PricingPlans ref={targetRef} />

      {/* text section */}
      <Box sx={{ background: "#1b1b1b" }}>
        <Container
          maxWidth="lg"
          sx={{ paddingTop: "48px", paddingBottom: "60px" }}
        >
          <Typography
            textAlign="center"
            color="#fff"
            fontSize={{ xs: "32px", sm: "50px", lg: "64px" }}
            lineHeight={{ xs: "37px", sm: "55px", lg: "75px" }}
            variant="h1"
          >
            Ready to get started?
          </Typography>
          <Typography
            variant="h6"
            fontSize={{ xs: "14px", md: "20px" }}
            textAlign="center"
            color="#fff"
            mt={1}
          >
            It's time to supercharge your content production
          </Typography>
          <Button
            href="https://9fxezwx8n6p.typeform.com/fytechai"
            target="_blank"
            size="medium"
            variant="contained"
            sx={{
              background: "#FFF",
              color: "#1b1b1b",
              fontSize: { md: 18, xs: 14 },
              width: "max-content",
              margin: "0 auto",
              display: "flex",
              marginTop: "30px",
              ":hover": {
                background: "#e5e5e5",
              },
            }}
          >
            Join Waitlist
          </Button>
        </Container>
      </Box>

      {/* footer */}
      <Footer />
    </Box>
  );
}

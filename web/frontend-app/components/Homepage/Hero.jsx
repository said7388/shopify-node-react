import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: { md: "flex", xs: "block" },
        marginTop: { xl: 0, xs: 5 },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        height: { xl: "calc(100vh - 78px)", xs: "auto" },
        marginBottom: { md: 0, xs: "40px" },
      }}
    >
      <Stack
        sx={{
          justifyContent: "Center",
          width: "100%",
          maxWidth: { lg: "550px", xs: "470px" },
          margin: { xs: "0 auto", md: "auto" },
        }}
      >
        <Typography
          variant="h1"
          fontSize={{ xs: "32px", md: "50px", lg: "64px" }}
          lineHeight={{ xs: "37px", md: "55px", lg: "75px" }}
        >
          AI Image and Video Generator for <br className="d-block d-sm-none" />{" "}
          E-commerce Merchants
        </Typography>
        <Typography
          fontSize={{ xs: "16px", md: "18px", lg: "20px" }}
          variant="h6"
          mb="28px"
          mt="15px"
        >
          Generate and share high-quality product images and videos instantly
          using our AI tools. Designed for <br className="banner-line-break" />{" "}
          e-commerce brands, agencies, and creators.
        </Typography>
        <Button
          href="https://9fxezwx8n6p.typeform.com/fytechai"
          target="_blank"
          size="medium"
          variant="contained"
          sx={{
            background: "#1b1b1b",
            color: "#FFF",
            width: "max-content",
            margin: { md: "0 0 78px 0", xs: "0 0 30px" },
            fontSize: { md: 18, xs: 14 },
          }}
        >
          Join Waitlist
        </Button>
        <Stack
          direction="horizontal"
          alignItems="center"
          gap={2}
          sx={{ marginBottom: { md: 2, xs: "60px" } }}
        >
          <Typography variant="h6" fontSize={{ md: 20, xs: 16 }}>
            Integrated with
          </Typography>

          <a href="">
            <IconButton sx={{ width: { md: 36, xs: 21 }, padding: 0 }}>
              <img
                src="https://i.ibb.co/yPx2P17/shopify-1.png"
                alt=""
                width="100%"
              />
            </IconButton>
          </a>
          <a href="">
            <IconButton sx={{ width: { md: 30, xs: 20 }, padding: 0 }}>
              <img
                src="https://i.ibb.co/ZMHgSWy/tiktok-icon-2-1.png"
                alt=""
                width="100%"
              />
            </IconButton>
          </a>
          <a href="">
            <IconButton sx={{ width: { md: 35, xs: 24 }, padding: 0 }}>
              <img
                src="https://i.ibb.co/0ySSxPW/instagram-2016-5-1.png"
                alt=""
                width="100%"
              />
            </IconButton>
          </a>
        </Stack>
      </Stack>

      <Stack
        sx={{
          justifyContent: "center",
          maxWidth: "570px",
          position: "relative",
          width: "100%",
          margin: { xs: "0 auto", md: "auto" },
          marginLeft: "auto",
          paddingBottom: "80px",
        }}
      >
        <Stack direction="row" gap={2}>
          <Stack gap="22px">
            <img
              src="https://i.ibb.co/QXTYLW4/Frame-1171275642.png"
              style={{ maxWidth: 245, width: "100%", minWidth: 160 }}
              alt=""
            />
            <img
              src="https://i.ibb.co/9h1d9rQ/Frame-1171275641-1.png"
              style={{ maxWidth: 245, width: "100%", minWidth: 160 }}
              alt=""
            />
          </Stack>
          <img
            src="https://i.ibb.co/6JzrZVQ/Frame-1171275641.png"
            style={{ maxWidth: 245, width: "100%", minWidth: 120 }}
            alt=""
          />
        </Stack>
        <Card
          sx={{
            // display: "none",
            width: 222,
            position: "absolute",
            bottom: " 10px",
            right: { xl: "-55px", xs: "-3px" },
            paddingBottom: "12px",
            boxShadow:
              "3.302685260772705px 6.60537052154541px 33.026851654052734px 0px #AAAAAA40",
            borderRadius: "12px",
          }}
        >
          <CardContent sx={{ paddingBottom: "11px" }}>
            <Typography
              sx={{ fontSize: 16, opacity: "50%" }}
              color="text.secondary"
              gutterBottom
            >
              Describe the scene around your product...
            </Typography>
          </CardContent>
          <CardActions sx={{ paddingX: "17px" }}>
            <Button
              variant="contained"
              sx={{
                color: "white",
                background: "#837EFF",
                width: "100%",
                paddingY: "4px",
              }}
              size="medium"
            >
              Generate
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
};

export default Hero;

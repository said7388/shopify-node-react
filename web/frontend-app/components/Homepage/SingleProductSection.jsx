import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const SingleProductSection = ({ title, description, imgSrc, direction }) => {
  return (
    <Box
      display={{ md: "grid", xs: "block" }}
      alignItems="center"
      padding={{ md: "70px 0 60px 0", xs: "30px 0 20px 0" }}
      gridTemplateColumns="minmax(370px, 35%) 1fr"
      sx={{ direction: direction }}
      gap={5}
    >
      <Stack
        sx={{
          justifyContent: "Center",
          width: "100%",
          maxWidth: "550px",
          margin: { xs: "0 auto", md: "auto" },
        }}
      >
        <Typography
          variant="h2"
          fontSize={{ xs: "26px", md: "48px" }}
          lineHeight={{ xs: "30px", md: "56px" }}
          sx={{ direction: "ltr" }}
        >
          {title}
        </Typography>
        <Typography
          fontSize={{ xs: "14px", md: "20px" }}
          lineHeight={{ xs: "16px", md: "23px" }}
          sx={{ direction: "ltr" }}
          variant="h6"
          mb={{ md: "32px", xs: "10px" }}
          mt="15px"
        >
          {description}
        </Typography>
        <Button
          href="https://9fxezwx8n6p.typeform.com/fytechai"
          target="_blank"
          size="medium"
          variant="contained"
          sx={{
            fontSize: { md: 18, xs: 14 },
            background: "#1b1b1b",
            color: "#FFF",
            mb: { sm: "80px", xs: "40px" },
            width: "max-content",
            marginTop: { md: "27px", xs: "10px" },
            marginRight: direction == "rtl" ? "auto!important" : 0,
          }}
        >
          Join Waitlist
        </Button>
      </Stack>

      <Stack
        maxWidth={760}
        marginLeft={direction == "ltr" ? "auto" : 0}
        marginRight={direction == "rtl" ? "auto" : 0}
      >
        <img width="100%" src={imgSrc} alt="" />
      </Stack>
    </Box>
  );
};

export default SingleProductSection;

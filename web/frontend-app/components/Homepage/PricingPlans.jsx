import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Icon,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { BsCheckCircleFill } from "react-icons/bs";

import React from "react";
const tiers = [
  {
    title: "Standard",
    price: "$5",
    time: "monthly",
    imgSrc: "https://i.ibb.co/cg3YzLz/Rectangle-25002.png",
    limited: true,
    description: [
      "AI background removal",
      "AI Product Photo Generator",
      "Photo Editing Tools",
      "Template Options for Shopify, TikTok and Instagram",
      "AI Video Generator (5 videos per month)",
      "Email support",
    ],

    buttonText: "Choose Plan",
    buttonVariant: "outlined",
  },
  {
    title: "Advanced",
    subheader: "Most popular",
    price: "$40",
    time: "monthly",
    imgSrc: "https://i.ibb.co/StHrxff/Rectangle-25003.png",
    description: [
      "AI background removal",
      "AI Product Photo Generator",
      "Photo Editing Tools",
      "Template Options for Shopify, TikTok and Instagram",
      "AI Video Generator (15 videos per month)",
      "Chat Support",
      "All templates",
    ],
    buttonText: "Choose Plan",
    buttonVariant: "contained",
  },
  {
    title: "Plus",
    price: "Coming soon",
    time: "coming",
    imgSrc: "https://i.ibb.co/x5tVVBx/Rectangle-25002-1.png",
    description: [
      "Priority Support + Account Manager",
      "AI Product Photo Generator",
      "Custom templates ",
      "Unlimited Photo and Video generation",
      "Video Editor",
      "First to Access New Releases",
      "More features coming soon!",
    ],
    buttonText: "Choose Plan",
    buttonVariant: "outlined",
  },
];
const PricingPlans = React.forwardRef((props, ref) => {
  const theme = useTheme();
  return (
    <Box ref={ref} sx={{ background: "#f8f8f8" }}>
      <Container maxWidth="lg">
        <Container
          disableGutters
          maxWidth="lg"
          sx={{ pt: "60px", pb: { md: 6, xs: 3 } }}
        >
          <Typography
            component="h2"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ fontSize: { sm: 48, xs: 26 } }}
          >
            Pricing Plans
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ fontSize: { sm: 20, xs: 14 } }}
          >
            Level up the way you create content
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container
          maxWidth="lg"
          sx={{ pb: "60px", paddingLeft: 0, paddingRight: 0 }}
        >
          <Grid container spacing={5} alignItems="flex-start">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <Card
                  sx={{
                    padding: "12px",
                    maxWidth: { sm: 380, xs: "100%" },
                    width: "100%",
                    borderRadius: "20px",
                    boxShadow: "none",
                    minHeight: 574,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardHeader
                    title={tier.title}
                    titleTypographyProps={{
                      align: "center",
                      fontSize: 40,
                      color: "#FFF",
                    }}
                    // action={tier.title === "Pro" ? <StarIcon /> : null}

                    sx={{
                      background: `url(${tier.imgSrc})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      borderRadius: "16px",
                      padding: "27px 0px",
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        gap: 1,
                      }}
                    >
                      {tier.limited == true && (
                        <Stack direction="row" alignItems="flex-end">
                          <img
                            src="https://i.ibb.co/s66nt9V/Cross-15-1.png"
                            alt=""
                          />
                          <Typography
                            variant="body1"
                            color="text.secondary"
                            fontSize={16}
                          >
                            /month
                          </Typography>
                        </Stack>
                      )}
                      <Typography
                        component="h2"
                        variant="h3"
                        color="text.primary"
                        fontSize={35}
                        fontWeight={600}
                        lineHeight="30px"
                        marginLeft="4px"
                      >
                        {tier.price}
                      </Typography>
                      <Stack>
                        {tier.limited == true && (
                          <Typography
                            sx={{
                              background: "rgba(249, 85, 104, 0.1)",
                              borderRadius: "20px",
                              padding: "3px 7px",
                              color: "rgba(249, 85, 104, 1)",
                              fontSize: "12px",
                              fontStyle: "italic",
                              width: 118,
                            }}
                          >
                            Limited time only
                          </Typography>
                        )}

                        {tier.time == "monthly" && (
                          <Typography variant="body1" color="text.primary">
                            /month
                          </Typography>
                        )}
                      </Stack>
                    </Box>
                    <Divider
                      sx={{
                        border: "1px solid #000",
                        opacity: "10%",
                        margin: "14px 0",
                      }}
                    />
                    <ul style={{ paddingLeft: 0 }}>
                      {tier.description.map((line) => (
                        <Box
                          display="flex"
                          alignItems="flex-start"
                          mb={1}
                          gap={2}
                        >
                          <Icon sx={{ width: 20, height: 20 }}>
                            <BsCheckCircleFill color="#7FC9C7" />
                          </Icon>

                          <Typography
                            component="li"
                            variant="body1"
                            align="left"
                            key={line}
                            sx={{ listStyle: "none", lineHeight: "22px" }}
                          >
                            {line}
                          </Typography>
                        </Box>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{
                        // marginTop:
                        //   tier.description[tier.description.length - 1] == ""
                        //     ? "20px"
                        //     : 0,
                        fontWeight: 500,
                        background:
                          tier.buttonVariant == "contained"
                            ? theme.palette.common.black
                            : "transparent",
                        color:
                          tier.buttonVariant == "contained"
                            ? "#FFFFFF"
                            : theme.palette.common.black,
                        borderColor:
                          tier.buttonVariant == "contained"
                            ? "transparent"
                            : theme.palette.common.black,
                      }}
                      fullWidth
                      variant={tier.buttonVariant}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
});

export default PricingPlans;

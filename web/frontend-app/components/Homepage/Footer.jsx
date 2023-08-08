import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "26px 0 26px",
        paddingLeft: "0px !important",
        paddingRight: "0px !important",
        alignItems: "center",
        flexDirection: { sm: "row", xs: "column" },
      }}
    >
      <Stack
        sx={{
          justifyContent: "space-between",
          marginLeft: 1,
          alignItems: "center",
        }}
        direction="row"
      >
        <IconButton sx={{ width: "fit-content" }} href="" target="_blank">
          <Typography variant="h6" fontWeight={700} color="text.primary">
            FYTECH <span className="fw-normal">AI</span>
          </Typography>
        </IconButton>
        {/* social icons */}
        {/* <Stack margin="5px 0 24px" direction="row" gap={1}>
          <IconButton href="" target="_blank">
            <BiLogoInstagram fontSize={20} color="#1b1b1b" />
          </IconButton>
          <IconButton href="" target="_blank">
            <BiLogoTwitter fontSize={20} color="#1b1b1b" />
          </IconButton>
          <IconButton href="" target="_blank">
            <FiYoutube fontSize={20} color="#1b1b1b" />
          </IconButton>
          <IconButton href="" target="_blank">
            <BiLogoPinterestAlt fontSize={20} color="#1b1b1b" />
          </IconButton>
        </Stack> */}
        <Typography
          variant="body1"
          color="text.primary"
          sx={{
            opacity: "50%",
            paddingLeft: "8px",
            display: { sm: "block", xs: "none" },
          }}
        >
          Copyright © 2023 Fytech Corp. <br className="d-md-none" /> All rights
          reserved
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems={{ md: "flex-start", xs: "center" }}
        gap={{ md: 8, xs: 3 }}
        flexDirection={{ sm: "row", xs: "column" }}
        justifyContent={{ md: "right", xs: "center" }}
        marginRight={{ sm: "12px", xs: 0 }}
        marginTop={{ sm: 0, xs: 2 }}
      >
        {/* products list */}
        {/* <Box
          display="flex"
          alignItems="flex-end"
          gap={3}
          flexDirection={{ sm: "row", xs: "column" }}
        >
          <List sx={{ maxWidth: 228 }} disablePadding={true}>
            <ListItem disablePadding={true}>
              <ListItemText
                primary="Products"
                color="text.primary"
                sx={{
                  color: "#1b1b1b",
                  paddingBottom: "5px",
                  fontWeight: 500,
                  textAlign: { sm: "left", xs: "center" },
                }}
              />
            </ListItem>
            <ListItem disablePadding={true}>
              <ListItemText
                primary="Background Remover"
                sx={{ textAlign: { sm: "left", xs: "center" } }}
              />
            </ListItem>
            <ListItem disablePadding={true}>
              <ListItemText
                primary="AI Background Generator "
                sx={{ textAlign: { sm: "left", xs: "center" } }}
              />
            </ListItem>
            <ListItem disablePadding={true} href="" components="Link">
              <ListItemText
                primary="AI Text to Product Image Generator"
                sx={{ textAlign: { sm: "left", xs: "center" } }}
              />
            </ListItem>
          </List>
          <List disablePadding={true} sx={{ pb: 2 }}>
            <ListItem disablePadding={true}>
              <ListItemText
                primary="AI Text to Video Generator"
                sx={{ textAlign: { sm: "left", xs: "center" } }}
              />
            </ListItem>
            <ListItem disablePadding={true}>
              <ListItemText
                primary="Photo and Video editor"
                sx={{ textAlign: { sm: "left", xs: "center" } }}
              />
            </ListItem>
            <ListItem disablePadding={true}>
              <ListItemText
                primary="Shopify Integration"
                sx={{ textAlign: { sm: "left", xs: "center" } }}
              />
            </ListItem>
          </List>
        </Box> */}

        <List
          sx={{
            display: "flex",
            flexDirection: { sm: "row", xs: "column" },
            alignItems: "center",
            gap: { lg: 10, md: 5, sm: 2, xs: 1 },
          }}
          disablePadding={true}
        >
          <ListItem
            disablePadding={true}
            sx={{ textAlign: { sm: "right", xs: "center" } }}
          >
            <a href="#" className="text-decoration-none">
              <ListItemText
                primary="Privacy Policy"
                sx={{
                  whiteSpace: "nowrap",
                  color: "#1b1b1b",
                  ".MuiTypography-root": {
                    fontWeight: 500,
                  },
                }}
              />
            </a>
          </ListItem>
          <ListItem
            sx={{
              textAlign: { sm: "right", xs: "center" },
              justifyContent: "center",
            }}
            disablePadding={true}
          >
            <a
              href="mailto:info@fytech.ai"
              className="text-decoration-none fw-bold"
            >
              <ListItemText
                primary="Contact Us"
                sx={{
                  whiteSpace: "nowrap",
                  color: "#1b1b1b",
                  ".MuiTypography-root": {
                    fontWeight: 500,
                  },
                }}
              />
            </a>
          </ListItem>
        </List>
      </Stack>
      <Typography
        variant="body1"
        color="text.primary"
        sx={{
          opacity: "50%",
          paddingLeft: "8px",
          display: { sm: "none", xs: "block" },
          textAlign: { sm: "right", xs: "center" },
          fontSize: { sm: 16, xs: 14 },
          marginTop: { sm: 0, xs: 2 },
        }}
      >
        Copyright © 2023 Fytech Corp. <br className="d-md-none" /> All rights
        reserved
      </Typography>
    </Container>
  );
};

export default Footer;

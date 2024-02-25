"use client";

import { Box, Typography, Button, Link as ExternalLink } from "@mui/material";
import ResponsiveImage from "./ResponsiveImage";
import PushPinIcon from "@mui/icons-material/PushPin";

function Card({
  src,
  logo,
  link,
  name,
  reserved,
}: {
  src: string;
  logo: string;
  link: string;
  name: string;
  reserved: string;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "24px 20px",
        borderRadius: "24px",
        border: "1px solid #C3937C !important",
        backgroundColor: "#FFFFFF",
      }}
    >
      {reserved ? (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "20px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
            width: "auto",
            height: "36px",
            backgroundColor: "#C3937C",
            cursor: "default",
          }}
        >
          <PushPinIcon
            sx={{
              color: "#FFFFFF",
              width: "16px",
            }}
          />
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "14px",
            }}
          >
            Apartado
          </Typography>
        </Box>
      ) : (
        <></>
      )}
      <ExternalLink
        href={link}
        sx={{
          position: "absolute",
          top: "6px",
          right: "6px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#787878",
          fontSize: "14px",
        }}
      >
        Ir a
        <ResponsiveImage
          altText="store-logo"
          imageSrc={`/images/${logo}_logo.svg`}
          width={40}
          height={40}
          configStyles={{}}
        />
      </ExternalLink>
      <ResponsiveImage
        altText="gift-image"
        imageSrc={src}
        width={152}
        height={92}
        configStyles={{
          marginBottom: "10px",
          marginLeft: "0px",
          marginTop: "36px",
          alignSelf: "center",
          width: "auto",
          height: "130px",
          objectFit: "cover",
        }}
      />
      <Typography
        sx={{
          color: "#787878",
          fontSize: "18px",
          marginBottom: "10px",
          fontWeight: "500",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          {name}
        </Box>
      </Typography>
      <Box
        sx={{
          borderBottom: "1px solid #C3937C !important",
          marginBottom: "24px",
          width: "100%",
        }}
      ></Box>
      <Button
        variant="contained"
        sx={{
          borderRadius: "32px",
          backgroundColor: "#C3937C !important",
          color: "#FFFFFF !important",
          padding: "2px 10px !important",
          alignSelf: "center",
          fontSize: "12px !important",
        }}
      >
        {reserved ? "Liberar" : "Apartar"}
      </Button>
    </Box>
  );
}

export default Card;

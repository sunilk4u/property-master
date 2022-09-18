import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import {
  ActionsSx,
  CardSx,
  DescriptionBoxSx,
  DetailsBoxSx,
  MainBoxSx,
  MediaBoxSx,
} from "./Styles";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PropertyCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [detailExpanded, setDetailExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleDetailExpandClick = () => {
    const icon = document.querySelector("[aria-label='Seller']");
    if (!detailExpanded) {
      icon.classList.add("icon-active");
    } else {
      icon.classList.remove("icon-active");
    }
    setDetailExpanded(!detailExpanded);
  };

  return (
    <Card elevation={5} sx={CardSx}>
      <Box sx={MainBoxSx}>
        <Box sx={MediaBoxSx}>
          <CardMedia
            component="img"
            height="100%"
            image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg"
            alt="Paella dish"
          />
        </Box>
        <Box sx={DetailsBoxSx}>
          <Typography variant="h6" component="h6">
            AmityVille lux Villa
          </Typography>
          <Box
            sx={{
              padding: "0.5rem 1rem",
              backgroundColor: "#d9a1dc1c",
              borderRadius: "0px 0px 10px 10px",
            }}
          >
            <Typography variant="p" component="p">
              Type: Villa
            </Typography>
            <Typography variant="p" component="p">
              Size: 400 sqyd
            </Typography>
            <Typography variant="p" component="p">
              Price: $134,000
            </Typography>
            <Typography variant="p" component="p">
              Seller: Prakash Rathore
            </Typography>
          </Box>
        </Box>
        <CardActions disableSpacing sx={ActionsSx}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon fontSize="large" />
          </IconButton>
          <ExpandMore
            onClick={handleDetailExpandClick}
            aria-expanded={detailExpanded}
            aria-label="Seller Details"
          >
            <ConnectWithoutContactIcon fontSize="large" aria-label="Seller" />
          </ExpandMore>
        </CardActions>
      </Box>
      <Box sx={DescriptionBoxSx}>
        <Collapse in={detailExpanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ backgroundColor: "rgb(226, 226, 226)" }}>
            <Typography variant="p" component="p" sx={{ margin: "0px" }}>
              Seller Details
            </Typography>
          </CardContent>
        </Collapse>
        <CardActions sx={{ backgroundColor: "#d9a1dc1c" }}>
          <Typography variant="p" component="p" sx={{ margin: "0px 1rem" }}>
            Description
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.This impressive paella is a perfect
              party dish and a fun meal to cook together with your guests. Add 1
              cup of frozen peas along with the mussels, if you like.a is a
              perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you
              like.
            </Typography>
          </CardContent>
        </Collapse>
      </Box>
    </Card>
  );
};

export default PropertyCard;

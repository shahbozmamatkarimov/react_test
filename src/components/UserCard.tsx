import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

export default function UserCard() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="grid grid-cols-4">
      {cards.map((card) => (
        <Card key={card}
          variant="outlined"
          sx={{
            // to make the card resizable
            overflow: "auto",
            resize: "horizontal",
            "&:hover": {
              boxShadow: "md",
              borderColor: "neutral.outlinedHoverBorder",
              transform: "scale(1.01)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              src="/static/images/avatar/1.jpg"
              size="lg"
              sx={{ "--Avatar-size": "36px", mr: "10px" }}
            />
            <AvatarGroup size="sm" sx={{ height: "30px" }}>
              <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" />
            </AvatarGroup>
          </Box>
          <CardContent>
            <Typography level="h5" fontWeight="lg">
              NYC Coders
            </Typography>
            <Typography level="body2">
              We are a community of developers prepping for coding interviews,
              participate, chat with others and get better at interviewing.
            </Typography>
          </CardContent>
          <CardActions buttonFlex="0 1 120px">
            <IconButton variant="outlined" color="neutral" sx={{ mr: "auto" }}>
              <FavoriteBorder />
            </IconButton>
            <Button variant="outlined" color="neutral">
              View
            </Button>
            <Button variant="solid" color="primary">
              Join
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

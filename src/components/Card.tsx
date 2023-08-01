import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { category } from "../utils/data";
import Image from "next/image";

export default function Cards() {
  return (
    <div className="flex mainCard">
      <div className="card grid grid-cols-4">
        {category.map((category, index) => (
          <Card
            key={index}
            variant="outlined"
            orientation="horizontal"
            sx={{
              width: "100%",
              border: "1px solid rgba(128, 128, 128, 0.179)",
              transitionDuration: "200ms",
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder",
                translate: "0 5px",
              },
            }}
          >
            <AspectRatio ratio="1" sx={{ width: 40, bgcolor: '#fff' }}>
              <Image src={category.url} height={1} width={1} alt="img" />

            </AspectRatio>
            <CardContent>
              <Typography
                level="h2"
                sx={{ my: "auto" }}
                fontSize="lg"
                id="card-description"
                mb={0.5}
              >
                {category.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="card grid grid-cols-4">
        {category.map((category, index) => (
          <Card
            key={index}
            variant="outlined"
            orientation="horizontal"
            sx={{
              width: "100%",
              border: "1px solid rgba(128, 128, 128, 0.179)",
              transitionDuration: "200ms",
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder",
                translate: "0 5px",
              },
            }}
          >
            <AspectRatio ratio="1" sx={{ width: 40 }}>
              <Image src={category.url} height={10} width={10} alt="img" />
            </AspectRatio>
            <CardContent>
              <Typography
                level="h2"
                sx={{ my: "auto" }}
                fontSize="lg"
                id="card-description"
                mb={0.5}
              >
                {category.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

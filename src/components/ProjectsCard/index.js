import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";;
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Grid, useMediaQuery } from "@mui/material";
import Link from "next/link";

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

export default function ProjectsCard({ project }) {
  const [expanded, setExpanded] = React.useState(false);
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (!isSmallScreen) {
    return (
      <Card
        sx={{ width: "100%" }}
        style={{
          backgroundImage: `url("${project.snippet.thumbnails.maxres.url}")`,
          padding: "0.5rem",
        }}
      >
        <CardContent>
          <div>
            <h2 style={{ color: "#AE6D3F" }}>{project.snippet.title}</h2>
          </div>
          <Grid container spacing={2} padding={3} >
            
            <Grid item sx={12} sm={12} md={6} xl={6}>
            <div style={{textAlign: "center"}}>
              <iframe
                height={400}
                width="100%"
                src={"https://www.youtube.com/embed/" + project.id}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              </div>
            </Grid>
            <Grid item sx={12} sm={12} md={6} xl={6} style={{backdropFilter: "blur(6px)", paddingTop: "0px" }}>
              <p style={{color: "white"}}>{project.snippet.description}</p>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions disableSpacing style={{textAlign: "right"}}>
          <Link
            href={"https://www.youtube.com/watch?v=" + project.id}
            target="_blank"
          >
            <BootstrapButton className="contact-button">
              VIEW NOW
            </BootstrapButton>
          </Link>
        </CardActions>
      </Card>
    );
  }

  return (
    <Card
      sx={{ width: "100%" }}
      style={{
        backgroundColor: "rgba(221, 163, 118, 0.15)",
        padding: "0.5rem",
      }}
    >
      <CardHeader
        style={{ textTransform: "uppercase" }}
        title={project.title}

        //subheader="September 14, 2016"
      />
      <div style={{ textAlign: "center" }}>
        <iframe
          width="390"
          height="300"
          src={"https://www.youtube.com/embed/" + project.id}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <CardContent style={{ height: "200px" }}>
        <Typography variant="body2" color="text.secondary">
          {getFirst10Words(project.snippet.description) + "..."}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link
          href={"https://www.youtube.com/watch?v=" + project.id}
          target="_blank"
        >
          <BootstrapButton className="contact-button">VIEW NOW</BootstrapButton>
        </Link>
        {project.snippet.description && (
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        )}
      </CardActions>
      {project.snippet.description && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{project.snippet.description}</Typography>
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
}

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "12px 12px",
  border: "1px solid",
  color: "#F2E7D3",
  lineHeight: 1.5,
  backgroundColor: "#DDA376",
  borderColor: "#DDA376",
  fontFamily: ["Cinzel", "-apple-system"].join(","),
  "&:hover": {
    backgroundColor: "#F2E7D3",
    borderColor: "#DDA376",
    boxShadow: "none",
    color: "#DDA376",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#F2E7D3",
    borderColor: "#DDA376",
    color: "#DDA376",
  },
});

function getFirst10Words(str) {
  const words = str.split(/\s+/);
  const first10Words = words.slice(0, 30);

  return first10Words.join(" ");
}

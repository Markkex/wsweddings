import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{ maxWidth: 400, minHeight: 700 }}
      style={{
        backgroundColor: "rgba(221, 163, 118, 0.15)",
        padding: "0.5rem",
      }}
    >
      <CardHeader
        style={{ textTransform: "uppercase" }}
        title={project.name}
        //subheader="September 14, 2016"
      />
      <div style={{ textAlign: "center" }}>
        <iframe
          width="350"
          height="300"
          src={"https://www.youtube.com/embed/" + project.embeded}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <CardContent style={{ height: "200px"}}>
        <Typography variant="body2" color="text.secondary">
          {project.textOne}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link href={project.url} target="_blank">
          <BootstrapButton className="contact-button">VIEW NOW</BootstrapButton>
        </Link>
        {
            project.textTwo && 
            <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        }
      </CardActions>
      {
        project.textTwo &&
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{project.textTwo}</Typography>
          <Typography paragraph>{project.textThree}</Typography>
        </CardContent>
      </Collapse>
      }
      
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

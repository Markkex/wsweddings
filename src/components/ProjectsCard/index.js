import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
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
  const isPhoneScreen = useMediaQuery("(max-width:600px)");
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
      <Card
        sx={{ width: "100%" }}
        style={{
          backgroundImage: `url("${project.thumbnails}")`,
          padding: "0.0rem",
        }}
      >
        <div style={{ backdropFilter: "blur(40px)" }}>
          <CardContent>
            <Grid container spacing={2} padding={3}>
              <Grid item spacing={2} padding={1} xs={12}>
                <h2 style={{ color: "white" }}>
                  <span>{project.name}</span>
                </h2>
              </Grid>
              <Grid item sx={12} sm={12} md={6} xl={6}>
                <div style={{ textAlign: "center" }}>
                  <iframe
                    width = {isPhoneScreen ? "375px" : isSmallScreen ? "390px" : "100%"}
                    height = {isPhoneScreen ? "400px" : isSmallScreen ? "300px" : 400}
                    src={"https://www.youtube.com/embed/" + project.id}
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </Grid>
              <Grid
                item
                sx={12}
                sm={12}
                md={6}
                xl={6}
                style={{ paddingTop: "0px" }}
              >
              <div  style={{color: "white"}} dangerouslySetInnerHTML={{ __html: project.description }}></div>
            </Grid>
            </Grid>
          </CardContent>
          <CardActions style={{padding: "16px"}}>
            
                <Link
                  href={"https://www.youtube.com/watch?v=" + project.id}
                  target="_blank"
                  style={{margin: "0px 0 15px 25px"}}
                >
                  <BootstrapButton className="contact-button">
                    VIEW NOW
                  </BootstrapButton>
                </Link>
            
          </CardActions>
        </div>
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

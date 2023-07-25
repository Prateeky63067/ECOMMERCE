import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/prateekyadav0212?igshid=MzNlNGNkZWQ4Mg==";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dgjklzelu/image/upload/v1690120345/avatars/sbchts4lzxkmtai8svio.jpg"
              alt="Founder"
            />
            <Typography>Prateek Yadav</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @PrateekYadav. Only with the
              purpose to Learn MERN Stack 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.facebook.com/profile.php?id=100024897900259"
              target="blank"
            >
              <FacebookIcon className="facebookIcon" />
            </a>

            <a href="https://instagram.com/prateekyadav0212?igshid=MzNlNGNkZWQ4Mg==" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
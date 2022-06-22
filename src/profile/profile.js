import { Stack, Box } from "@mui/material";
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import ProfilePic from './IMG_1944.JPG'

function Profile({ sx, ...rest }) {
  return (
    <Stack
      flexDirection={{
        xs: 'row',
        md: 'column',
      }}
      sx={{
        ...sx,
        width: {
          xs: 'auto',
          md: 206
        },
        gap: 20/8
      }}
      {...rest}

    >
      {/* <div className="profile"> */}
      <Box sx={{
        width: {
          xs: 196,
          // sm: 196,
          md: 206
        },
        height: {
          xs: 196,
          // sm: 196,
          md: 206
        },
        flexShrink:0,
        backgroundImage: `url(${ProfilePic})`,
        backgroundSize: 'contain'
      }} />
      <Stack
        // flexDirection={{
        //   sm: 'row',
        //   md: 'column',
        // }}
        sx={{
          gap: {
            xs: 16 / 8,
            md: 30 / 8
          }
        }}
      >

        <div className="name">Yoonseo Choi</div>
        {/* <Stack
          //   flexDirection={{
          //     sm: 'row',
          //     md: 'column',
          // }}
        > */}
          <div className="intro">
            I’m Yoonseo Choi, a Ph.D. student at KAIST, working with Prof. Juho Kim.
            I’m doing research in HCI with high interests in Human-AI collaboration, AI design process, iterative design, and creativity support.
            The overarching goal of my research is to support the early stage of the human-centered AI design process.
            I try to remove the boundary of areas, to reach out further.
          </div>
          <div className="external-link">
            <div className="link">
              <div className="link-content">
                <a className = "link-icon" href="https://github.com/yoon0u0"><FontAwesomeIcon icon={faGithubAlt} /></a>
              </div>
            </div>
            <div className="link">
              <div className="link-content">
                <a className = "link-icon" href="https://twitter.com/yoon0u0"><FontAwesomeIcon icon={faTwitter} /></a>
              </div>
            </div>
            <div className="link">
              <div className="link-content">
                <a className = "link-icon" href="mailto:yoon0u0@gmail.com"><FontAwesomeIcon icon={faEnvelope} fontSize={20} /></a>
              </div>
            </div>
            <div className="link">
              <div className="link-content">
                <a className = "link-icon" href="https://drive.google.com/file/d/1OlzmT9g8ukWKN2X42vKit0dofp7Wg3hZ/view?usp=sharing" class="icons">
                  <FontAwesomeIcon icon={faUser} /></a>
              </div>
            </div>
          </div>
        {/* </Stack> */}

      </Stack>


      {/* </div> */}

    </Stack>
  );
}

export default Profile;

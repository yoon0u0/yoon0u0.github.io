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
        gap: {
          md: 20 / 8 
        }
        // gap: 20 / 8
      }}
      {...rest}

    >
      {/* <div className="profile"> */}
      <Box sx={{
        width: {
          xs: `37.5%`,
          md: 206
        },
        maxWidth: {
          xs: 196,
        },
        // height: {
        //   xs: 196,
        //   md: 206
        // },
        marginRight: {
          xs: 20 / 8
        },
        flexGrow: 0,
        flexShrink: 0,
        // backgroundImage: `url(${ProfilePic})`,
        // backgroundSize: 'contain'
      }}> 
        <Box sx={{
          width: '100%',
          paddingTop: '100%',
          backgroundImage: `url(${ProfilePic})`,
        backgroundSize: 'contain'
        }}></Box>
      </Box>
      <Stack
        sx={{
          gap: {
            xs: 1,
            md: 2
          }
        }}
      >

        <div className="name">Yoonseo Choi</div>
        <div className="intro">
          I’m Yoonseo Choi, a Ph.D. student at KAIST, working with Prof. Juho Kim.
          I’m doing research in HCI with high interests in Human-AI collaboration, AI design process, iterative design, and creativity support.
          The overarching goal of my research is to support the early stage of the human-centered AI design process.
          I try to remove the boundary of areas, to reach out further.
        </div>
        <div className="external-link">
          <div className="link">
            <div className="link-content">
              <a className="link-icon" href="https://github.com/yoon0u0"><FontAwesomeIcon icon={faGithubAlt} /></a>
            </div>
          </div>
          <div className="link">
            <div className="link-content">
              <a className="link-icon" href="https://twitter.com/yoon0u0"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
          </div>
          <div className="link">
            <div className="link-content">
              <a className="link-icon" href="mailto:yoon0u0@gmail.com"><FontAwesomeIcon icon={faEnvelope} fontSize={20} /></a>
            </div>
          </div>
          <div className="link">
            <div className="link-content">
              <a className="link-icon" href="https://drive.google.com/file/d/1DkF8hieeY8WzjGyUGAH1yHRnvXstZ9Up/view?usp=sharing">
                <FontAwesomeIcon icon={faUser} fontSize={16} />
              </a>
            </div>
          </div>
        </div>
      </Stack>
    </Stack>
  );
}

export default Profile;
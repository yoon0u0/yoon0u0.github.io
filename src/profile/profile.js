import { Stack, Box } from "@mui/material";
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faUser, faFile, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import ProfilePic from './2024.jpg'

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
        },
        position: {sm: 'initial', md: 'sticky'},
        top: 64,
        height: 1,
        
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
          {/* <div className='tag'>I'm in Yokohama for #CHI2025 to present my work <a href="https://proxona.kixlab.org">Proxona</a>! Feel free to say hi and happy to chat! </div> */}
          <br></br>
          I'm Yoonseo Choi, a Ph.D. student at KAIST, working with Prof. Juho Kim.
          My research centers around developing systems that simulate feedback to support users, 
          focusing on understading and supporting AI experiences (e.g., creator economy platforms) and delivering user-centered AI results (e.g., search, music recommendation).
          <br></br>
          <br></br>


          {/* <div className='tag'>I'm interested in prototyping users with data-driven approaches, and providing them for enhancing interpretability.</div> */}
          <br></br>
          {/* I'm interested in research related to supporting the creator's algorithmic experience under the situation of an algorithmic black box. 
          The overarching goal of my research is to enhance HAI collaboration in algorithmic platforms in the context of the creator economy. */}
          {/* I’m doing research in HCI with high interests in Human-AI collaboration, creator economy platform, algorithmic experience, and iterative design process.
          I am studying how AI algorithms underlying various online platforms affect multiple stakeholders (e.g., creator, viewer, advertiser), 
          how they can use these algorithms for their platform activities, and furthermore, happily 'collaborate' with algorithms.*/}
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
              <a className="link-cv" href="https://drive.google.com/file/d/15vxzP8o8CxXVtXadAW849Msic7i5O9L9/view?usp=sharing">
                CV
                {/* <FontAwesomeIcon icon={faFilePdf} fontSize={16} /> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-file" /> */}
              </a>
            </div>
          </div>
        </div>
      </Stack>
    </Stack>
  );
}

export default Profile;

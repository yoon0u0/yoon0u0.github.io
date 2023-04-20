import './publications.css';
import protochat_img from './protochat.jpeg'
import winder_img from './winder.png'
import stylette_img from './stylette.png'
import creator_img from './creator.png'
import { Stack, Box } from '@mui/material';

function Publications() {
    return (
        <div className="section-pub">
            <div className = "section-title">Publications</div>
            <div className="subsection">
                <div className='subsection-title'>Paper</div>
                <Stack gap={5}>
                
                <Stack
                    flexDirection={{
                        xs: 'column',
                        sm: 'row'
                    }}
                    gap={{
                        xs: 20/8,
                        sm: 20/8
                    }}
                >
                    <Box sx={{
                        width: {
                            xs: 'auto',
                            sm: 208
                        },
                        height: 128.62,
                        textAlign: {
                            xs: 'center',
                            sm: 'left'
                        },
                        flexShrink: 0,
                    }}>
                        <img className = "img" src={creator_img} />
                    </Box>
                    <div className='paper-content'>
                        <div className="title">Creator-friendly Algorithms: Behaviors, Challenges, and Design Opportunities in Algorithmic Platforms</div>
                        <div className='info'>
                            <div className="author"><mark>Yoonseo Choi</mark>, Eun Jeong Kang, Min Kyung Lee, Juho Kim</div>
                            <div className="conf-link">
                                <div className="conf">
                                    <div className='conf-content'>CHI 2023</div>
                                </div>
                                <div className="paper-link">
                                    <a className = "each-link" href = "https://kixlab.github.io/website-files/2023/chi2023-creatorfriendly-paper.pdf">Paper</a>
                                    <a className = "each-link" href = "https://dl.acm.org/doi/10.1145/3544548.3581386">ACM DL</a> 
                                    <a className = "each-link" href = "https://creator-friendly.kixlab.org/">Project Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Stack>

                <Stack
                    flexDirection={{
                        xs: 'column',
                        sm: 'row'
                    }}
                    gap={{
                        xs: 20/8,
                        sm: 20/8
                    }}
                >
                    <Box sx={{
                        width: {
                            xs: 'auto',
                            sm: 208
                        },
                        height: 128.62,
                        textAlign: {
                            xs: 'center',
                            sm: 'left'
                        },
                        flexShrink: 0,
                    }}>
                        <img className = "img" src={stylette_img} />
                    </Box>
                    <div className='paper-content'>
                        <div className="title">Stylette: Styling the Web with Natural Language</div>
                        <div className='info'>
                            <div className='tag'>Honorable Mention Award</div>
                            <div className="author">Tae Soo Kim, DaEun Choi, <mark>Yoonseo Choi</mark>, Juho Kim</div>
                            <div className="conf-link">
                                <div className="conf">
                                    <div className='conf-content'>CHI 2022</div>
                                </div>
                                <div className="paper-link">
                                    <a className = "each-link" href="https://kixlab.github.io/website-files/2022/chi2022-stylette-paper.pdf">Paper</a> 
                                    <a className = "each-link" href = "https://dl.acm.org/doi/10.1145/3491102.3501931">ACM DL</a> 
                                    <a className = "each-link" href="https://stylette.kixlab.org/">Project Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Stack>

                <Stack
                    flexDirection={{
                        xs: 'column',
                        sm: 'row'
                    }}
                    gap={{
                        xs: 20/8,
                        sm: 20/8
                    }}
                >
                    <Box sx={{
                        width: {
                            xs: 'auto',
                            sm: 208
                        },
                        height: 128.62,
                        textAlign: {
                            xs: 'center',
                            sm: 'left'
                        },
                        flexShrink: 0,
                    }}>
                        <img className = "img" src={winder_img} />
                    </Box>
                    <div className='paper-content'>
                        <div className="title">Winder: Linking Speech and Visual Objects to Support Communication in Asynchronous Collaboration</div>
                        <div className='info'>
                            <div className="author">Tae Soo Kim, Seungsu Kim, <mark>Yoonseo Choi</mark>, Juho Kim</div>
                            <div className="conf-link">
                                <div className="conf">
                                    <div className='conf-content'>CHI 2021</div>
                                </div>
                                <div className="paper-link">
                                    <a className = "each-link" href="https://kixlab.github.io/website-files/2021/cscw2021-CoSeq-paper.pdf">Paper</a> 
                                    <a className = "each-link" href = "https://dl.acm.org/doi/10.1145/3449250">ACM DL</a> 
                                    <a className = "each-link" href="https://winder.kixlab.org/">Project Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Stack>

                <Stack
                    flexDirection={{
                        xs: 'column',
                        sm: 'row'
                    }}
                    gap={{
                        xs: 20/8,
                        sm: 20/8
                    }}
                >
                    <Box sx={{
                        width: {
                            xs: 'auto',
                            sm: 208
                        },
                        height: 128.62,
                        textAlign: {
                            xs: 'center',
                            sm: 'left'
                        },
                        flexShrink: 0,
                    }}>
                        <img className = "img" src={protochat_img} />
                    </Box>
                    <div className='paper-content'>
                        <div className="title">ProtoChat: Supporting the Conversation Design Process with Crowd Feedback</div>
                        <div className='info'>
                            <div className="author"><mark>Yoonseo Choi</mark>, Toni-Jan Keith Monserrat, Jeongeon Park, Hyungyu Shin, Nyoungwoo Lee, Juho Kim</div>
                            <div className="conf-link">
                                <div className="conf">
                                    <div className='conf-content'>CSCW 2020</div>
                                </div>
                                <div className="paper-link">
                                    <a className = "each-link" href="https://kixlab.github.io/website-files/2020/cscw2020-Protochat-paper.pdf">Paper</a>
                                    <a className = "each-link" href = "https://dl.acm.org/doi/10.1145/3432924">ACM DL</a>
                                    <a className = "each-link" href="https://www.youtube.com/watch?v=oIBt3EkH-eE">Video</a> 
                                    <a className = "each-link" href = "https://protochat.kixlab.org">Project Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Stack>
                </Stack>
            </div>

            <div className="subsection">
                <div className='subsection-title'>Poster and Workshop</div>
                <div className="poster">
                    <div className="poster-content">
                        <div className="poster-title">How Does Netflix “Understand” Me?: Exploring End-user Needs to Design Human-centered Explanations</div>
                        <div className='poster-info'>
                            <div className="poster-author"><mark>Yoonseo Choi</mark>, Eun Jeong Kang, Juho Kim</div>
                            <div className="poster-conf-link">
                                <div className='poster-conf'>
                                    <div className="poster-conf-content">NeurIPS 2021 Workshop on Human Centered AI</div>
                                </div>
                                <div className="poster-link">
                                    <a className = "each-link" href = "https://kixlab.github.io/website-files/2021/neurips2021-workshop-HumanCenteredExplanation-paper.pdf">Poster</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="poster">
                    <div className="poster-content">
                        <div className="poster-title">ProtoChat: Supporting the Conversation Design Process with Crowd Feedback</div>
                        <div className='poster-info'>
                            <div className="poster-author"><mark>Yoonseo Choi</mark>, Toni-Jan Keith Monserrat, Jeongeon Park, Hyungyu Shin, Nyoungwoo Lee, Juho Kim</div>
                            <div className="poster-conf-link">
                                <div className='poster-conf'>
                                    <div className="poster-conf-content">CSCW 2020 Demonstration</div>
                                </div>
                                <div className="poster-link">
                                    <a  className = "each-link" href="https://kixlab.github.io/website-files/2020/cscw2020-Protochat-demo.pdf">Paper</a>
                                    <a  className = "each-link" href="https://www.youtube.com/watch?v=x_nYnn8S3u8&feature=youtu.be">Video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="poster">
                    <div className="poster-content">
                        <div className="poster-title">Leveraging the Crowd to Support the Conversation Design Process</div>
                        <div className='poster-info'>
                            <div className="poster-author"><mark>Yoonseo Choi</mark>, Hyungyu Shin, Toni-Jan Keith Monserrat, Nyoungwoo Lee, Jeongeon Park, Juho Kim</div>
                            <div className="poster-conf-link">
                                <div className='poster-conf'>
                                    <div className="poster-conf-content">CHI 2020 Workshop on CUI@CHI</div>
                                </div>
                                <div className="poster-link">
                                    <a className = "each-link" href="https://kixlab.github.io/website-files/2020/chi2020-workshop-ProtoChat-poster.pdf">Paper</a>
                                    <a className = "each-link" href = "https://dl.acm.org/doi/10.1145/3405755.3406155">ACM DL</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="poster">
                    <div className="poster-content">
                        <div className="poster-title">Supporting an Iterative Conversation Design Process</div>
                        <div className='poster-info'>
                            <div className="poster-author"><mark>Yoonseo Choi</mark>, Hyungyu Shin, Toni-Jan Keith Monserrat, Nyoungwoo Lee, Jeongeon Park, Juho Kim</div>
                            <div className="poster-conf-link">
                                <div className='poster-conf'>
                                    <div className="poster-conf-content">CHI 2020 Late Breaking Work</div>
                                </div>
                                <div className="poster-link">
                                    <a className = "each-link" href= "https://kixlab.github.io/website-files/2020/chi2020-lbw-ProtoChat-poster.pdf">Paper</a>
                                    <a className = "each-link" href = "https://dl.acm.org/doi/10.1145/3334480.3382951">ACM DL</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
  }
  
  export default Publications;
  
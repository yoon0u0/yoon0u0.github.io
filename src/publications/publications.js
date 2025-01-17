import './publications.css';
import protochat_img from './protochat.jpeg'
import winder_img from './winder.png'
import stylette_img from './stylette.png'
import creator_img from './creator.png'
import onlinedating_img from './onlinedating.png'
import proxona_img from './proxona.png'
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
                        <img className = "img" src={proxona_img} />
                    </Box>
                    <div className='paper-content'>
                        <div className="title">Proxona: Leveraging LLM-Driven Personas to Enhance Creators' Understanding of Their Audience</div>
                        <div className='info'>
                            <div className="author"><mark>Yoonseo Choi</mark>, Eun Jeong Kang, Seulgi Choi, Min Kyung Lee, Juho Kim</div>
                            <div className="conf-link">
                                <div className="conf">
                                    <div className='conf-content'>CHI 2025 (Conditionally Accepted)</div>
                                </div>
                                <div className="paper-link">
                                    <a className = "each-link" href = "https://arxiv.org/abs/2408.10937">arXiv</a> 
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
                        <img className = "img" src={onlinedating_img} />
                    </Box>
                    <div className='paper-content'>
                        <div className="title">Beyond Swipes and Scores: Investigating Practices, Challenges and User- Centered Values in Online Dating Algorithms</div>
                        <div className='info'>
                            <div className="author">Chowon Kang, <mark>Yoonseo Choi</mark>, Yongjae Sohn, Hyunseung Lim, Hwajung Hong</div>
                            <div className="conf-link">
                                <div className="conf">
                                    <div className='conf-content'>CSCW 2024</div>
                                </div>
                                <div className="paper-link">
                                    <a className = "each-link" href = "https://drive.google.com/file/d/1n2r6IJqb4F5PVJYqB9Ymm3jEkI13XH3V/view?usp=sharing">Paper</a>
                                    <a className = "each-link" href = "https://dl.acm.org/doi/10.1145/3687025">ACM DL</a> 
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
                                    <a className = "each-link" href="https://kixlab.github.io/website-files/2021/chi2021-Winder-paper.pdf">Paper</a> 
                                    <a className = "each-link" href = "https://dl.acm.org/doi/10.1145/3411764.3445686">ACM DL</a> 
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
                        <div className="poster-title">Investigating How People Perceive AI-Generated Responses in Social Q&A</div>
                        <div className='poster-info'>
                            <div className="poster-author">Hyunwoo Kim, <mark>Yoonseo Choi</mark>, Minsu Park</div>
                            <div className="poster-conf-link">
                                <div className='poster-conf'>
                                    <div className="poster-conf-content">CSCW 2024 Workshop: Envisioning New Futures of Positive Social Technology</div>
                                </div>
                                <div className="poster-link">
                                    <a className = "each-link" href = "https://drive.google.com/file/d/19lOdn3gv3k3EX1QUBayfXpqwqM91HiKs/view?usp=sharing">Poster</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="poster">
                    <div className="poster-content">
                        <div className="poster-title">Using LLMs to Investigate Correlations of Conversational Follow-up Queries with User Satisfaction</div>
                        <div className='poster-info'>
                            <div className="poster-author">Hyunwoo Kim*, <mark>Yoonseo Choi*</mark>, Taehyun Yang, Honggu Lee, Chaneon Park, Yongju Lee, Jin Young Kim, Juho Kim (*equally contributed)</div>
                            <div className="poster-conf-link">
                                <div className='poster-conf'>
                                    <div className="poster-conf-content">SIGIR 2024 Workshop on Large Language Models for Evaluation in Information Retrieval</div>
                                </div>
                                <div className="poster-link">
                                    <a className = "each-link" href = "https://kixlab.github.io/website-files/2024/sigir2024-workshop-searchgpt.pdf">Poster</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="poster">
                    <div className="poster-content">
                        <div className="poster-title">Designing for AI-Powered Social Computing Systems</div>
                        <div className='poster-info'>
                            <div className="poster-author">Gionnieve Lim, Hyunwoo Kim, <mark>Yoonseo Choi</mark>, Toby Jia-Jun Li, Chinmay Kulkarni, Hariharan Subramonyam, Joseph Seering, Michael S Bernstein, Amy X Zhang, Elena L Glassman, Simon Perrault, Juho Kim</div>
                            <div className="poster-conf-link">
                                <div className='poster-conf'>
                                    <div className="poster-conf-content">CSCW 2023 SIG Proposals</div>
                                </div>
                                <div className="poster-link">
                                    <a className = "each-link" href = "https://kixlab.github.io/website-files/2023/cscw23-sig-CSCW2023SIG-workshop.pdf">SIG Proposal</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="poster">
                    <div className="poster-content">
                        <div className="poster-title">Moderating Customer Inquiries and Responses to Alleviate Stress and Reduce Emotional Dissonance of Customer Service Representatives</div>
                        <div className='poster-info'>
                            <div className="poster-author">Hyung-Kwon Ko, Kihoon Son, Hyoungwook Jin, <mark>Yoonseo Choi</mark>, Xiang Anthony Chen</div>
                            <div className="poster-conf-link">
                                <div className='poster-conf'>
                                    <div className="poster-conf-content">CHI 2023 Generative AI and HCI workshop</div>
                                </div>
                                <div className="poster-link">
                                    <a className = "each-link" href = "https://kixlab.github.io/website-files/2023/chi2023-workshop-customer-paper.pdf">Poster</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
  
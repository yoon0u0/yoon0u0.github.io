// import './news.css';

// function News() {
//     return (
//       <div className="section-service">
//         <div className="section-title">News</div>
//         <div className="service-all">
//           Yoonseo is on a job market! Her thesis research is about <span class="text-emph">Generative Proxies</span> --- interactive, data-grounded representations of users' diverse perspectives and goals, distilled from existing user data with LLMs. 
//           <span class="text-emph">Generative Proxies</span> enable understanding of intended users' needs without synchronous user sessions and make that understanding immediately usable for task completion --- such as Ideation (<a href="https://proxona.kixlab.org/"><span class="proxona-text">Proxona</span></a>), and Evaluation (<span class="bloom-intent-text">BloomIntent</span>), and Rapid Prototyping (Work-In-Progress). 
//           She is interested in joining industry positions, so let's have a chat! 🗣️ 
//           </div>
//       </div>
//     );
//   }
  
// export default News;

import './news.css';

function News() {
  return (
    <div className="section-service">
      {/* <div className="section-title">News</div> */}

      <div className="news-callout" role="status" aria-live="polite">
        {/* <div className="news-tag">Now</div> */}

        <div className="news-headline">
          Yoonseo is on the job market!
        </div>

        <p className="news-p">
          Her thesis research is about <span className="text-emph">Generative Proxies</span> — interactive,
          data-grounded representations of users’ diverse perspectives and goals, distilled from existing user data
          with LLMs.
        </p>

        <p className="news-p">
          <span className="text-emph">Generative Proxies</span> enable understanding of intended users’ needs
          without synchronous user sessions and make that understanding immediately usable for task completion —
          such as ideation (<a className="proxona-text" href="https://proxona.kixlab.org/">Proxona</a>),
          evaluation (<a className="bloomintent-text" href="https://bloomintent.kixlab.org/">BloomIntent</a>), and rapid prototyping (work-in-progress).
        </p>

        <p className="news-p">
          She’s interested in industry positions — let’s have a chat! 🗣️
        </p>
      </div>
    </div>
  );
}

export default News;

  
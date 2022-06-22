import './education.css';

function Education() {
    return (
      <div className="section-edu">
        <div className = "section-title">Education</div>
        <div className='edu-all'>
          <div className="edu">
            <div className='edu-content'>
              <div className="level">Ph.D.</div>
              <div>
                <div className="school">School of Computing, KAIST (2021 -)</div>
                <div className='advisor'>Advisor: Juho Kim</div>
              </div>
            </div>
          </div>
          <div className="edu">
            <div className='edu-content'>
              <div className='level'>M.S.</div>
              <div>
                <div className='school'>School of Computing, KAIST (2019 - 2021)</div>
                <div className='advisor'>Advisor: Juho Kim</div>
              </div>
            </div>
          </div>
          <div className="edu">
            <div className='edu-content'>
              <div className='level'>B.A.</div>
              <div className='school'>Department of Education, Korea University (2014 - 2018)</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Education;
  
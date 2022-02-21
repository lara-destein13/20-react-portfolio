import autoBind from 'auto-bind';
import React, { Component } from 'react';
import './Portfolio.css';
import password from './password-generator.png';
import quiz from './code-quiz.png';
import scheduler from './work-day.png';
import weather from  './weather.png';
import trails from './backyard-trails.png';
import stick from './stick-ease.png';
import Project from './Project';


class Portfolio extends Component {
    // constructor
    constructor(props) {
        super(props);
        autoBind(this);
        
        this.state = {
        }
    }

    // render
    render() {
        return (
            <div className="Portfolio">  
                <div className="project-wrapper">
                    <Project
                        pagesUrl="https://lara-destein13.github.io/password-generator"
                        githubUrl="https://github.com/lara-destein13/password-generator"
                        image={password}>    
                    </Project>
                </div>    
                <div className="project-wrapper">
                    <Project
                        pagesUrl="https://lara-destein13.github.io/4-code-quiz/"
                        githubUrl="https://github.com/lara-destein13/4-code-quiz"
                        image={quiz}>  
                    </Project>
                </div>  
                <div className="project-wrapper">
                    <Project
                        pagesUrl="https://lara-destein13.github.io/5-work-day-scheduler/"
                        githubUrl="https://github.com/lara-destein13/5-work-day-scheduler"
                        image={scheduler}>      
                    </Project>
                </div>
                <div className="project-wrapper">
                    <Project
                        pagesUrl="https://lara-destein13.github.io/weather"
                        githubUrl="https://github.com/lara-destein13/weather"
                        image={weather}>      
                    </Project>
                </div>
                <div className="project-wrapper">
                    <Project
                        pagesUrl="https://lara-destein13.github.io/my-backyard-trails/"
                        githubUrl="https://github.com/lara-destein13/my-backyard-trails"
                        image={trails}>      
                    </Project>
                </div>
                <div className="project-wrapper">
                    <Project
                        pagesUrl="https://lara-destein13.github.io/stick-ease/"
                        githubUrl="https://github.com/lara-destein13/stick-ease"
                        image={stick}>  
                    </Project>    
                </div>             
            </div>
        )
    }
}        







// render() {
//     return (
//         <div className="Portfolio">  
//             <a href="https://lara-destein13.github.io/password-generator/">
//                 <div className="photo-wrapper">
//                     <img className="photo" src={password} width="400px" height="400px" />
//                 </div>                    
//             </a>
//             <a href="https://lara-destein13.github.io/4-code-quiz/">
//                 <div className="photo-wrapper">
//                     <img className="photo" src={quiz} width="400px" height="400px" />
//                 </div>                    
//             </a>
//             <a href="https://lara-destein13.github.io/5-work-day-scheduler/">
//                 <div className="photo-wrapper">
//                     <img className="photo" src={scheduler} width="400px" height="400px" />
//                 </div>                    
//             </a>
//             <a href="https://lara-destein13.github.io/weather/">
//                 <div className="photo-wrapper">
//                     <img className="photo" src={weather} width="400px" height="400px" />
//                 </div>                    
//             </a>
//             <a href="https://lara-destein13.github.io/my-backyard-trails/">
//                 <div className="photo-wrapper">
//                     <img className="photo" src={trails} width="400px" height="400px" />
//                 </div>                    
//             </a>
//             <a href="https://lara-destein13.github.io/stick-ease/">
//                 <div className="photo-wrapper">
//                     <img className="photo" src={stick} width="400px" height="400px" />
//                 </div>                    
//             </a>
//         </div>
//     );



export default Portfolio;
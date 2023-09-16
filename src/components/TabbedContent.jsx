import React from 'react';

function TabbedContent() {
    return (
        <div>
            {/* Tab Menu */}
            <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                    <a href="#project1" role="tab" data-toggle="tab" aria-expanded="true">
                        <span className="tooltips">Project 1</span>
                        <i className="fa fa-code"></i>
                    </a>
                </li>
                <li role="presentation">
                    <a href="#project2" role="tab" data-toggle="tab" aria-expanded="false">
                        <span className="tooltips">Project 2</span>
                        <i className="fa fa-code"></i>
                    </a>
                </li>
                {/* Add more project tabs as needed */}
            </ul>
            {/* End Tab Menu */}
            <div className="tab-content">
                {/* Project 1 Tab */}
                <div role="tabpanel" className="tab-pane fade in active" id="project1">
                    <div className="project-details">
                        <h2 className="tab-title">
                            <a href="URL_OF_YOUR_PROJECT" target="_blank" rel="noopener noreferrer">
                                Project 1
                            </a>
                        </h2>
                        <p>Megan's Author page</p>
                        {/* Add more details about Project 1 */}
                    </div>
                </div>
                {/* End Project 1 Tab */}

                {/* Project 2 Tab */}
                <div role="tabpanel" className="tab-pane fade" id="project2">
                    <div className="project-details">
                        <h2 className="tab-title">Project 2</h2>
                        <p>Description of Project 2.</p>
                        {/* Add more details about Project 2 */}
                    </div>
                </div>
                {/* End Project 2 Tab */}

                {/* Add more project tabs as needed */}
            </div>
        </div>
    );
}

export default TabbedContent;

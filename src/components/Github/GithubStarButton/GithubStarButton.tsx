import React from "react";

const GitHubStarButton: React.FC = () => {
    return (<div className="star-button-container">
            <p>
                <small>Leave a star on Github if this repository was useful :)</small>
            </p>
            <a className="github-button"
                href="#"
                aria-label="Star this demo project on GitHub"
            >Star</a>
    </div>);
}

export default GitHubStarButton;
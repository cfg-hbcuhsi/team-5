import React from 'react';
import { Link } from 'gatsby';
import { Card } from 'semantic-ui-react';
import "./QuizChoice.css"

export default function QuizChoice() {
    return(
        <div>
            <Link to="/personality-quiz">
                <Card
                    className="QuizChoice"
                    header="Personality-Based Assessment"
                    description="Find out what career paths are best for you based on your personality traits!"
                />
            </Link>
            <Link to="/career-quiz">
                <Card
                    className="QuizChoice"
                    header="Career Choice Assessment"
                    description="Swipe through the different career options and see which ones interest you!"
                />
            </Link>
        </div>
    );
}
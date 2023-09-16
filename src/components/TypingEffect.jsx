import React from 'react';
import Typed from 'react-typed';

function TypingEffect() {
    return (
        <div>
            <p>
                I'm a{' '}
                <Typed
                    strings={[
                        'Family Man',
                        'Mentor',
                        'Developer',
                        'Researcher',
                        'Tech Enthusiast',
                        'Problem Solver',
                        'Continuous Learner',
                    ]}
                    typeSpeed={40}
                    backSpeed={25}
                    backDelay={1000}
                    loop
                />
            </p>
        </div>
    );
}

export default TypingEffect;
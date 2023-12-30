import React, { useState } from 'react';
import papers from '../../../papers.json'

const GraphsCreated: React.FC = () => {
    const [show, setShow] = useState(false);
    const onClick = () => {
        setShow(!show);
    }
    return (
        <div>
            {papers.map(paper => (
                <li key={paper.id} className='flex justify-between ml-4 mr-4 mt-4 '>
                    <p>{paper.papername}</p>
                    <span onClick={onClick} className='material-symbols-outlined'>
                        more_horiz
                    </span>
                </li>
            ))}
        </div>
    );
};

export default GraphsCreated;
import React, { useState } from 'react';
import graphs from '../../../graphs.json'

const GraphsCreated: React.FC = () => {
    const [show, setShow] = useState(false);
    const onClick = () => {
        setShow(!show);
    }
    return (
        <div>
            {graphs.map(graph => (
                <li key={graph.id} className='flex justify-between ml-4 mr-4 mt-4 '>
                    <p>{graph.graphname}</p>
                    <span onClick={onClick} className='material-symbols-outlined'>
                        more_horiz
                    </span>
                </li>
            ))}
        </div>
    );
};

export default GraphsCreated;
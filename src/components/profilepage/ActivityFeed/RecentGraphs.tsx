import React, { useState } from 'react';
import graphs from '../../../graphs.json'
import GraphsDetails from '../Modal/GraphDetails';

const RecentGraphs: React.FC = () => {
    const [show, setShow] = useState(false);
    const onClick = () => {
        setShow(!show);
    }
    return (
        <div>
            <ol>
                {graphs.map(graph => (
                    <li key={graph.id} className='flex justify-between ml-4 mr-4 mt-4 '>
                        <p>{graph.graphname}</p>
                        <span onClick={onClick} className='material-symbols-outlined'>
                            more_horiz
                        </span>
                        {
                            show && < GraphsDetails show={show} setShow={setShow} />
                        }
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default RecentGraphs;
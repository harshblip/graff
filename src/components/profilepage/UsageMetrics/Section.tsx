import React from 'react';
import './Section.css';

interface SectionProps {
    isActive: boolean;
    content: string;
    onClick: () => void;
}

// graphs created, graphs shared, papers collected

const Section: React.FC<SectionProps> = ({ isActive, content, onClick }) => (
    <div
        className={`section ${isActive ? 'active' : ''}`}
        onClick={onClick}>
        {content}
    </div>
);

export default Section;
import React, { useEffect, useState } from 'react';

const ParallaxImage = ({ imageSrc, height = '500px', startOffset  = 0 }) => {
    const [offset, setOffset] = useState(startOffset);

    useEffect(() => {
        const handleScroll = () => setOffset(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="parallax-image"
            style={{
                height,
                position: 'absolute',
                top: 4000,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'right',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${imageSrc})`,
                transform: `translateY(${offset * 0.5}px)`,
            }}
        />
    );
};

export default ParallaxImage;
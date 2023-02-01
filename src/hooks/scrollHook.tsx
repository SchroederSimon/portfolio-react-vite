import { useState, useEffect } from 'react';

function useIsVisibleOnScreen(ref: React.RefObject<HTMLElement>) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return [isVisible];
}

export default useIsVisibleOnScreen;

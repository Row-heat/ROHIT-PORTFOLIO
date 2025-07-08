import { useEffect, useRef } from 'react';

interface LocomotiveScrollInstance {
  destroy: () => void;
  update: () => void;
}

const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScrollInstance | null>(null);

  useEffect(() => {
    let locomotiveScroll: LocomotiveScrollInstance | null = null;

    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        if (scrollRef.current) {
          locomotiveScroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1,
            class: 'is-revealed',
          });

          locomotiveScrollRef.current = locomotiveScroll;
        }
      } catch (error) {
        console.warn('Locomotive Scroll could not be initialized:', error);
      }
    };

    initLocomotiveScroll();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return { scrollRef, locomotiveScroll: locomotiveScrollRef.current };
};

export default useLocomotiveScroll;
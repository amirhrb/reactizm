import * as React from 'react';
import { useRef, useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
  w?: number;
  h?: number;
  r?: number;
  thumbColor?: string;
  trackColor?: string;
  wraperStyle?: object;
  thumbStyle?: object;
  trackStyle?: object;
}
interface States {
  scrolledRatio: number;
  thumbOnTrack: number;
  childHeight: number;
}
const ScrollbarY: React.FC<Props> = ({ children, ...props }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [{ scrolledRatio, thumbOnTrack, childHeight }, setScroll] =
    useState<States>({
      scrolledRatio: 0,
      thumbOnTrack: 0,
      childHeight: 0,
    });
  const handleScroll = (e: Event) => {
    const target = e.target as HTMLElement;
    setScroll({
      childHeight: target.clientHeight,
      thumbOnTrack: +(target.clientHeight / target.scrollHeight),
      scrolledRatio: +(
        target.scrollTop /
        (target.scrollHeight - target.clientHeight)
      ),
    });
  };
  useEffect(() => {
    if (containerRef.current) {
      const firstChild = containerRef.current.firstChild;
      if (firstChild instanceof HTMLElement) {
        if (firstChild.scrollHeight > firstChild.clientHeight) {
          setScroll({
            thumbOnTrack: +(firstChild.clientHeight / firstChild.scrollHeight),
            scrolledRatio: +(
              firstChild.scrollTop /
              (firstChild.scrollHeight - firstChild.clientHeight)
            ),
            childHeight: firstChild.clientHeight,
          });
          firstChild.addEventListener('scroll', handleScroll);
        }
      }
    }
    return () => {
      if (containerRef.current) {
        const firstChild = containerRef.current.firstChild;
        if (firstChild instanceof HTMLElement) {
          if (firstChild.scrollHeight > firstChild.clientHeight) {
            firstChild.removeEventListener('scroll', handleScroll);
          }
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      // className="scrollbar-parent-to-avoid-default"
      style={{ ...props.wraperStyle, display: 'flex', alignItems: 'center' }}
    >
      {children}
      <div
        style={{
          ...props.trackStyle,
          display: thumbOnTrack <= 0.99 ? 'block' : 'none',
          height: props.h ? props.h : childHeight,
          width: props.w ? props.w : 4,
          borderRadius: props.r ? props.r : 2,
          backgroundColor: props.trackColor ? props.trackColor : '#cecece',
        }}
      >
        <div
          style={{
            ...props.thumbStyle,
            height: props.h
              ? props.h * thumbOnTrack
              : childHeight * thumbOnTrack,

            position: 'relative',
            top: props.h
              ? +(props.h * (1 - thumbOnTrack) * scrolledRatio)
              : childHeight
              ? +(childHeight * (1 - thumbOnTrack) * scrolledRatio)
              : 30,
            width: props.w ? props.w : 4,
            borderRadius: props.r ? props.r : 2,
            backgroundColor: props.thumbColor ? props.thumbColor : '#555',
          }}
        ></div>
      </div>
    </div>
  );
};
export default ScrollbarY;

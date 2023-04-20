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
  childWidth: number;
  hidden: boolean;
}
const ScrollbarX: React.FC<Props> = ({ children, ...props }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [{ scrolledRatio, thumbOnTrack, childWidth, hidden }, setScroll] =
    useState<States>({
      scrolledRatio: 0,
      thumbOnTrack: 0,
      childWidth: 0,
      hidden: true,
    });
  const handleScroll = (e: Event) => {
    const target = e.target as HTMLElement;
    setScroll({
      childWidth: target.clientWidth,
      thumbOnTrack: +(target.clientWidth / target.scrollWidth),
      scrolledRatio: +(
        target.scrollLeft /
        (target.scrollWidth - target.clientWidth)
      ),
      hidden: false,
    });
  };
  useEffect(() => {
    if (containerRef.current) {
      const firstChild = containerRef.current.firstChild;
      if (firstChild instanceof HTMLElement) {
        if (firstChild.scrollWidth > firstChild.clientWidth) {
          setScroll({
            thumbOnTrack: +(firstChild.clientWidth / firstChild.scrollWidth),
            scrolledRatio: +(
              firstChild.scrollTop /
              (firstChild.scrollWidth - firstChild.clientWidth)
            ),
            childWidth: firstChild.clientWidth,
            hidden: false,
          });
        }
        firstChild.addEventListener('scroll', handleScroll);
      }
    }
    return () => {
      if (containerRef.current) {
        const firstChild = containerRef.current.firstChild;
        if (firstChild instanceof HTMLElement) {
          if (firstChild.scrollWidth > firstChild.clientWidth) {
            firstChild.removeEventListener('scroll', handleScroll);
          }
        }
      }
    };
  }, []);
  return (
    <div
      ref={containerRef}
      // className="scrollbar-parent-to-avoid-default"
      style={{
        ...props.wraperStyle,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {children}
      <div
        style={{
          ...props.trackStyle,
          display: hidden ? 'none' : 'block',
          width: props.w ? props.w : childWidth,
          height: props.h ? props.h : 4,
          borderRadius: props.r ? props.r : 2,
          backgroundColor: props.trackColor ? props.trackColor : '#cecece',
        }}
      >
        <div
          style={{
            ...props.thumbStyle,
            width: props.w ? props.w * thumbOnTrack : childWidth * thumbOnTrack,
            position: 'relative',
            left: props.w
              ? +(props.w * (1 - thumbOnTrack) * scrolledRatio)
              : childWidth
              ? +(childWidth * (1 - thumbOnTrack) * scrolledRatio)
              : 30,
            height: props.h ? props.h : 4,
            borderRadius: props.r ? props.r : 2,
            backgroundColor: props.thumbColor ? props.thumbColor : '#555',
          }}
        ></div>
      </div>
    </div>
  );
};
export default ScrollbarX;

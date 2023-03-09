import * as React from 'react'
import { useRef, useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
  w?: number
  h?: number
  r?: number
  thumbColor?: string
  trackColor?: string
}
interface States {
  scrolledRatio: number
  thumbOnTrack: number
  childHeight: number
}
const ScrollbarY: React.FC<Props> = ({ children, ...props }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [{ scrolledRatio, thumbOnTrack, childHeight }, setScroll] =
    useState<States>({
      scrolledRatio: 0,
      thumbOnTrack: 0,
      childHeight: 0,
    })
  useEffect(() => {
    if (containerRef.current) {
      const firstChild = containerRef.current.firstChild
      if (firstChild instanceof HTMLElement) {
        setScroll({
          thumbOnTrack: +(firstChild.clientHeight / firstChild.scrollHeight),
          scrolledRatio: +(
            firstChild.scrollTop /
            (firstChild.scrollHeight - firstChild.clientHeight)
          ),
          childHeight: firstChild.clientHeight,
        })
        const handleScroll = (e: Event) => {
          const target = e.target as HTMLElement
          setScroll({
            childHeight: target.clientHeight,
            thumbOnTrack: +(target.clientHeight / target.scrollHeight),
            scrolledRatio: +(
              target.scrollTop /
              (target.scrollHeight - target.clientHeight)
            ),
          })
        }
        firstChild.addEventListener('scroll', handleScroll)
      } else {
        console.log(firstChild)
      }
    } else {
      console.log(containerRef.current)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        // flexDirection: "column",
        // justifyContent: "space-evenly",
        alignItems: 'center',
      }}
    >
      {children}
      <div
        style={{
          display: thumbOnTrack <= 0.99 ? 'block' : 'none',
          height: props.h ? props.h : childHeight,
          width: props.w ? props.w : 4,
          borderRadius: props.r ? props.r : 2,
          backgroundColor: props.trackColor ? props.trackColor : '#cecece',
        }}
      >
        <div
          style={{
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
  )
}
export default ScrollbarY

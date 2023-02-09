import React, { useRef, useState, useEffect } from "react";

function Container(props) {
  const ref = useRef(null);
  const { children, ...data } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {children}
      <Scrollbar ref={ref} {...data} />
    </div>
  );
}

const Scrollbar = React.forwardRef((props, ref) => {
  const {
    w,
    h = 4,
    r = 2,
    thumbColor = "#555",
    trackColor = "#cecece",
  } = props;
  const [{ scrolledRatio, thumbOnTrack }, setScroll] = useState({
    thumbOnTrack: 0,
    scrolledRatio: 0,
  });
  useEffect(() => {
    setScroll({
      thumbOnTrack: +(
        ref.current.previousSibling.clientHeight /
        ref.current.previousSibling.scrollHeight
      ).toFixed(2),
      scrolledRatio: Math.abs(
        ref.current.previousSibling.scrollLeft /
          (ref.current.previousSibling.scrollHeight -
            ref.current.previousSibling.clientHeight)
      ).toFixed(2),
    });

    ref.current.previousSibling.addEventListener("scroll", (e) => {
      setScroll({
        thumbOnTrack: Number(
          e.target.clientHeight / e.target.scrollHeight
        ).toFixed(2),
        scrolledRatio: Math.abs(
          e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight)
        ).toFixed(2),
      });
    });
  }, []);
  return (
    <div
      ref={ref}
      style={{
        display: thumbOnTrack <= 0.99 ? "block" : "none",
        height: h
          ? h
          : ref.current
          ? ref.current.previousSibling.clientHeight
          : 90,
        width: w,
        borderRadius: r,
        backgroundColor: trackColor,
      }}
    >
      <div
        style={{
          width: w ? w : 3,
          position: "relative",
          bottom: h
            ? Number(h * (1 - thumbOnTrack) * scrolledRatio)
            : ref.current && thumbOnTrack
            ? Number(
                ref.current.previousSibling.clientHeight *
                  (1 - thumbOnTrack) *
                  scrolledRatio
              )
            : 30,
          height: h,
          borderRadius: r,
          backgroundColor: thumbColor,
        }}
      ></div>
    </div>
  );
});
export default Container;

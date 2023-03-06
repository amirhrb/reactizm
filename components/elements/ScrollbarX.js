import React, { useRef, useState, useEffect } from "react";

function Container(props) {
  const ref = useRef(null);
  const { children, ...data } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
        ref.current.previousSibling.clientWidth /
        ref.current.previousSibling.scrollWidth
      ).toFixed(2),
      scrolledRatio: Math.abs(
        ref.current.previousSibling.scrollLeft /
          (ref.current.previousSibling.scrollWidth -
            ref.current.previousSibling.clientWidth)
      ).toFixed(2),
    });

    ref.current.previousSibling.addEventListener("scroll", (e) => {
      setScroll({
        thumbOnTrack: Number(
          e.target.clientWidth / e.target.scrollWidth
        ).toFixed(2),
        scrolledRatio: Math.abs(
          e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth)
        ).toFixed(2),
      });
    });
  }, []);
  return (
    <div
      ref={ref}
      style={{
        display: thumbOnTrack <= 0.99 ? "block" : "none",
        width: w
          ? w
          : ref.current
          ? ref.current.previousSibling.clientWidth
          : 90,
        height: h,
        borderRadius: r,
        backgroundColor: trackColor,
      }}
    >
      <div
        style={{
          width: w
            ? w * thumbOnTrack
            : ref.current
            ? ref.current.previousSibling.clientWidth * thumbOnTrack
            : "30",
          position: "relative",
          right: w
            ? Number(w * (1 - thumbOnTrack) * scrolledRatio)
            : ref.current
            ? Number(
                ref.current.previousSibling.clientWidth *
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

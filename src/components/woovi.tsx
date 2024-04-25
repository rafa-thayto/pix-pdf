import * as React from "react";
import { G, Path, Svg, type SVGProps } from "@react-pdf/renderer";

export function WooviLogo(props: SVGProps) {
  return (
    <Svg width={100} viewBox="0 0 377 144" {...props}>
      <G fill="#30D69D">
        <Path d="M296.8 112c-5.9 0-11.2-3.5-13.4-9l-19.9-47.8c-2.5-6 1.9-12.5 8.3-12.5 3.7 0 7 2.2 8.4 5.7l16.6 41.3 16.6-41.3c1.4-3.4 4.7-5.7 8.4-5.7 6.5 0 10.8 6.6 8.3 12.5L310.2 103c-2.3 5.5-7.6 9-13.4 9zM357.8 14.5c2.1 2.2 3.2 4.7 3.2 7.7s-1.1 5.6-3.2 7.6-4.8 3-7.9 3c-3.2 0-5.9-1-8-3s-3.1-4.6-3.1-7.6 1.1-5.5 3.2-7.7 4.8-3.3 7.9-3.3 5.8 1.2 7.9 3.3zm-17 88.4V52c0-5 4.1-9.1 9.1-9.1S359 47 359 52v50.8c0 5-4.1 9.1-9.1 9.1-5 .1-9.1-4-9.1-9zM77.7 112c-5.5 0-10.2-3.6-11.6-8.8L57 69.4l-9.2 33.8c-1.4 5.2-6.1 8.8-11.5 8.8-5.3 0-10-3.5-11.5-8.7L10.6 53.7c-1.5-5.3 2.5-10.6 8-10.6 3.7 0 7 2.5 8 6.1L37 86.5l9.7-35.6c1.3-4.6 5.4-7.8 10.2-7.8 4.8 0 9 3.2 10.2 7.8l9.7 35.6 10.3-37.3c1-3.6 4.3-6.1 8-6.1h.1c5.5 0 9.5 5.3 8 10.6L89 103.4c-1.3 5.1-6 8.6-11.3 8.6zM162.2 83.9l13.9 13.9c-10.2 12.5-22.9 20.2-39.8 17-15.7-3-26-12.7-30.1-28.3-4.3-16.5 3.3-33.6 18-42 14.7-8.4 33.1-6.2 45.2 5.7 13.5 13.2 26.7 26.7 40.1 40 6.9 6.8 17.1 7.6 24.5 2.1 8.3-6.2 9.8-18.2 3.4-26.3-6.5-8.1-18.5-9.4-26.3-2.6-2.7 2.3-4.9 5.2-7.2 7.8l-14-14c9.9-12.2 22.4-20.5 41-16.8 15.5 3 27 15.7 29.6 31.6 2.5 15.6-5.7 31.7-20 39.2-14.6 7.6-32.3 5-44.2-6.7C183 91.3 169.8 78 156.5 64.8c-5.7-5.7-13.7-7.4-20.7-4.2-7.1 3.2-11 8.8-11.1 16.7-.1 7.8 3.5 13.7 10.6 17 7.2 3.3 14 2.3 20-2.9 2.6-2.4 4.7-5.1 6.9-7.5z" />
      </G>
    </Svg>
  );
}

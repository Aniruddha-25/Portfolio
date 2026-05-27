import { useState } from "react";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

function BlurImage({ src, alt, style, ...props }: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      style={{
        filter: loaded ? "blur(0px)" : "blur(20px)",
        transform: loaded ? "scale(1)" : "scale(1.05)",
        transition: "filter 0.5s ease-out, transform 0.5s ease-out",
        ...style,
      }}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
}

export default BlurImage;

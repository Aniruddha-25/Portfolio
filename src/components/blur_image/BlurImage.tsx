import { useState } from "react";
import "./BlurImage.css";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

function BlurImage({ src, alt, className, style, ...props }: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <span
          className={`img-skeleton ${className ?? ""}`}
          style={{ display: "block", width: "100%", height: "100%", ...style }}
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className ?? ""}${loaded ? " img-fade-in" : ""}`}
        style={loaded ? style : { ...style, display: "none" }}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </>
  );
}

export default BlurImage;

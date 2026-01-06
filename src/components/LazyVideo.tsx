import { useLazyLoad } from "@/hooks/useLazyLoad";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

const LazyVideo = ({ src, poster, className }: LazyVideoProps) => {
  const [ref, isVisible] = useLazyLoad<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        poster && (
          <img
            src={poster}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )
      )}
    </div>
  );
};

export default LazyVideo;

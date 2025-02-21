import { Suspense } from "react";
import LoadingIcon from "./LoadingIcon";
type props = {
    src: string,
    alt: string,
    className: string
}

const LazyImage = ({ src, alt, className }: props) => {
    return (
        <Suspense fallback={<LoadingIcon />}>
            <img src={src} alt={alt} className={className} loading="lazy" />
        </Suspense>
    );
};

export default LazyImage
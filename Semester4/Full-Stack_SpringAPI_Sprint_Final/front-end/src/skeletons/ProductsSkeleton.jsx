import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./skeleton.css";

const ProductsSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#ececec" highlightColor="#f8f8f8">
      <div className="productSkeletonContainer">
        <div className="imageSkeletonContainer">
          <Skeleton className="imageSkeleton" width={276} height={276} />
        </div>
        <div className="contentSkeletonContainer">
          <h2>
            <Skeleton className="titleSkeleton" height={45} />
          </h2>
          <p>
            <Skeleton className="descripSkeleton" count={8} />
          </p>
          <div>
            <Skeleton width={70} height={35} />

            <Skeleton width={90} height={35} />
          </div>
        </div>
      </div>
      <div className="productSkeletonContainer">
        <div className="imageSkeletonContainer">
          <Skeleton className="imageSkeleton" width={276} height={276} />
        </div>
        <div className="contentSkeletonContainer">
          <h2>
            <Skeleton className="titleSkeleton" height={45} />
          </h2>
          <p>
            <Skeleton className="descripSkeleton" count={8} />
          </p>
          <div>
            <Skeleton width={70} height={35} />

            <Skeleton width={90} height={35} />
          </div>
        </div>
      </div>
      <div className="productSkeletonContainer">
        <div className="imageSkeletonContainer">
          <Skeleton className="imageSkeleton" width={276} height={276} />
        </div>
        <div className="contentSkeletonContainer">
          <h2>
            <Skeleton className="titleSkeleton" height={45} />
          </h2>
          <p>
            <Skeleton className="descripSkeleton" count={8} />
          </p>
          <div>
            <Skeleton width={70} height={35} />

            <Skeleton width={90} height={35} />
          </div>
        </div>
      </div>
      <div className="productSkeletonContainer">
        <div className="imageSkeletonContainer">
          <Skeleton className="imageSkeleton" width={276} height={276} />
        </div>
        <div className="contentSkeletonContainer">
          <h2>
            <Skeleton className="titleSkeleton" height={45} />
          </h2>
          <p>
            <Skeleton className="descripSkeleton" count={8} />
          </p>
          <div>
            <Skeleton height={35} />

            <Skeleton height={35} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProductsSkeleton;

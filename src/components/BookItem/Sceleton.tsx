import ContentLoader from "react-content-loader";

export const CardSkeleton = () => (
  <ContentLoader
    speed={6}
    width={300}
    height={350}
    viewBox="0 0 476 124"
    backgroundColor="#eeeded"
    foregroundColor="#c7c2c2"
  >
    <rect x="48" y="8" rx="3" ry="3" width="" height="6" />
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
);

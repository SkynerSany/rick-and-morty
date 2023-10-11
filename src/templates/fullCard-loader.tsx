import ContentLoader from 'react-content-loader';

export function EpisodesLoader() {
  return (
    <ContentLoader width="100%" height="320" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
      <rect x="0" y="0" width="100%" height="100" />
      <rect x="0" y="110" width="100%" height="100" />
      <rect x="0" y="220" width="100%" height="100" />
    </ContentLoader>
  );
}

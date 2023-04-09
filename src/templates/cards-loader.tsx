import ContentLoader from 'react-content-loader';
import { useResize } from '../components/hooks/use-resize';

export function AllCardsLoaderSmall() {
  return (
    <ContentLoader width="100%" height="1240" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
      <rect x="0" y="0" width="100%" height="400" />
      <rect x="0" y="420" width="100%" height="400" />
      <rect x="0" y="840" width="100%" height="400" />
    </ContentLoader>
  );
}

export function AllCardsLoaderMedium() {
  return (
    <ContentLoader width="100%" height="1240" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
      <rect x="0" y="0" width="49%" height="400" />
      <rect x="51%" y="0" width="49%" height="400" />
      <rect x="0" y="420" width="49%" height="400" />
      <rect x="51%" y="420" width="49%" height="400" />
      <rect x="0" y="840" width="49%" height="400" />
      <rect x="51%" y="840" width="49%" height="400" />
    </ContentLoader>
  );
}

export function AllCardsLoaderLarge() {
  return (
    <ContentLoader width="100%" height="1200" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
      <rect x="0" y="0" width="32%" height="400" />
      <rect x="34%" y="0" width="32%" height="400" />
      <rect x="68%" y="0" width="32%" height="400" />
      <rect x="0" y="420" width="32%" height="400" />
      <rect x="34%" y="420" width="32%" height="400" />
      <rect x="68%" y="420" width="32%" height="400" />
    </ContentLoader>
  );
}

export function AllCardsLoader() {
  const { width } = useResize();

  return width > 1064 ? (
    <AllCardsLoaderLarge />
  ) : width > 765 ? (
    <AllCardsLoaderMedium />
  ) : (
    <AllCardsLoaderSmall />
  );
}

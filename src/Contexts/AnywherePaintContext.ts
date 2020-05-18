import { createContext } from 'react';
import AnywherePaint from 'anywhere-paint';

interface ContextInterface {
  awPaint: AnywherePaint | null;
  container: React.RefObject<HTMLDivElement> | null;
}

const AnywherePaintContext = createContext<ContextInterface>({
  awPaint: null,
  container: null,
});
export default AnywherePaintContext;

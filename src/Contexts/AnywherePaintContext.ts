import { createContext } from 'react';
import AnywherePaint from 'anywhere-paint';

interface ContextInterface {
  awPaint: AnywherePaint | null;
}

const AnywherePaintContext = createContext<ContextInterface>({
  awPaint: null,
});
export default AnywherePaintContext;

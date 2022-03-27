import { PolyLine2d } from './types';

export const renderSvg = (polyLine: PolyLine2d): void => {
  for (const lineIgnored of polyLine.lines) {
    // Do some SVG stuff.
  }
};

import * as F from 'fp-ts/function';
import * as R from 'ramda';
import * as RA from 'fp-ts/ReadonlyArray';
import { Line2D, Point2D, PolyLine2d } from './types';

/*
Already we can see some weaknesses with this design.
- We only coded half of the functions we need, since we need to convert
  the other way too. Add even more coordinate systems and functions
  will explode.
- We really just need to convert points. It seems annoying that we
  need functions for everything that might contain a thing that contains
  a thing that contains points.
- The fact that we need foundation height to convert Izzy to SVG coords
  also suggest that a coordinate space may be a thing with attributes
  not just a concept.
- At this point we're just replying on names. It would be nice to
  get the type system to do something for us.

This is an example of the Code Whisperer article:
Naming causes abstractions to emerge. The abstractions have duplication
that we need to remove, and so on.
*/

export const convertPointIzzyToSvgCoords = (point: Point2D): Point2D => {
  // I believe in real life this is even harder, because you need to know
  // the height of the space (foundation) to convert coordinate spaces.
  // Simplifying for purposes of this discussion.
  return {
    x: point.x,
    y: -point.y,
  };
};

export const convertLineIzzyToSvgCoords = (line: Line2D): Line2D => {
  return R.map(convertPointIzzyToSvgCoords, line);
};

export const convertPolylineIzzyToSvgCoords = (
  polyline: PolyLine2d,
): PolyLine2d => {
  return {
    lines: F.pipe(polyline.lines, RA.map(convertLineIzzyToSvgCoords)),
  };
};

import * as Z from './fake-izzy';
import { convertPolylineIzzyToSvgCoords } from './coord-spaces';
import { renderSvg } from './render';

export const helloWorld = (): void => {
  const sitePlanIzzyCoordinates = Z.getSitePlan();

  // The compiler will still allow us to pass Izzy coords into
  // a function requiring SVG coords, but this is a good start.
  // There is at least a presence of the coordinate system concept
  // in code by naming functions and variables well.
  renderSvg(convertPolylineIzzyToSvgCoords(sitePlanIzzyCoordinates));
};

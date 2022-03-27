import * as Z from './fake-izzy';
import { renderSvg } from './render';

export const helloWorld = (): void => {
  const sitePlan = Z.getSitePlan();

  // Types work, but Y is flipped. In izzy space, 0,0
  // is the bottom left of the foundation. In SVG space
  // 0,0 is the top left.
  renderSvg(sitePlan);
};

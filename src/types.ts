export interface Point2D {
  readonly x: number;
  readonly y: number;
}

export interface Line2D {
  readonly start: Point2D;
  readonly end: Point2D;
}

export interface PolyLine2d {
  readonly lines: ReadonlyArray<Line2D>;
}

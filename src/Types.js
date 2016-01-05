/* @flow */

export type SpringConfig = {
  val: number,
  config: [number, number],
};
export type Style = {
  [key: string]: number | SpringConfig,
};
export type CurrentStyle = {
  [key: string]: number,
};
export type Velocity = {
  [key: string]: number,
};
export type TransitionStyles = {
  [key: string]: Style,
};
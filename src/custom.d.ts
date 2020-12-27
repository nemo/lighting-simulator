declare module '*.csv' {
  const content: string;
  export default content;
}

interface AnimationStep {
  x : number;
  y : number;
  delta : number;
  r : number;
  g : number;
  b : number;
}

interface AnimationStepObj {
  x : string;
  y : string;
  delta : string;
  r : string;
  g : string;
  b : string;
}

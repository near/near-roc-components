declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

interface BWEComponentConfig {
  id?: string;
  trust?: { mode: string };
}

interface BWEComponentProps {
  bwe?: BWEComponentConfig;
}

type BWEComponent<TProps = {}> = (
  props: TProps & BWEComponentProps
) => JSX.Element;

import className from "classnames";

export function Button({
  children,
  primary,
  secondary,
  secondaryColor,
  btnCenter,
  btnNoBG,
}: {
  children?: string;
  primary?: boolean;
  secondary?: boolean;
  secondaryColor?: boolean;
  btnCenter?: boolean;
  btnNoBG?: boolean;
}) {
  const classes = className("btn", {
    "btn-primary": primary,
    "btn-secondary": secondary,
    "btn-secondary-clr": secondaryColor,
    "btn-center-page": btnCenter,
    "btn-no-bg": btnNoBG,
  });

  return (
    <div className="btn-container">
      <button className={classes}>{children}</button>
    </div>
  );
}

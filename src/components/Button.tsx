import className from "classnames";

export function Button({
  children,
  primary,
  secondary,
  secondaryColor,
  btnCenter,
}: {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  secondaryColor?: boolean;
  btnCenter?: boolean;
}) {
  const classes = className("btn", {
    "btn-primary": primary,
    "btn-secondary": secondary,
    "btn-secondary-clr": secondaryColor,
    "btn-center-page": btnCenter,
  });

  return (
    <div className="btn-container">
      <button className={classes}>{children}</button>
    </div>
  );
}

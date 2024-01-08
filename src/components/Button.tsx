import className from "classnames";

export function Button({
  children,
  primary,
  secondary,
  secondaryColor,
  btnCenter,
  btnNoBG,
  onClick,
}: {
  children?: string;
  primary?: boolean;
  secondary?: boolean;
  secondaryColor?: boolean;
  btnCenter?: boolean;
  btnNoBG?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    </div>
  );
}

// 236 -> modal toggling visibility

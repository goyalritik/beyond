import "./Button.css";

interface ButtonProps {
  label: String;
  buttonType?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export default function Button({
  buttonType = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`button button-color-${buttonType} button-size-${size}`}
      {...props}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  buttonType: "primary",
  size: "medium",
  onClick: null,
};

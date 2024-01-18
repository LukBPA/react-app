import { MouseEventHandler } from "react";

interface Props {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
}
function Button({ text, type }: Props) {
  return (
    <>
      <div className="m-3">
        <button type={type} className="btn btn-secondary">
          {text}
        </button>
      </div>
    </>
  );
}

export default Button;

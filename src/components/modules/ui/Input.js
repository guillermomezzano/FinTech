import { Input as BaseInput } from "@mui/base/Input";
import clsx from "clsx";

const Input = (props) => (
  <div className={props?.containerStyle}>
    <label htmlFor={props?.name || props?.id}>
      <p className={clsx("text-lg font-bold px-4", props?.labelStyle, { "uppercase": props?.uppercase })}>
        {props?.label}
      </p>
    </label>
    <BaseInput
      slotProps={{
        root: {
          className: "my-2",
        },
        input: {
          className: clsx(
            "w-full border-none bg-gray-100 py-2 px-4 focus:ring-0",
            props?.className
          ),
        },
      }}
      {...props}
    />
  </div>
);

export default Input;

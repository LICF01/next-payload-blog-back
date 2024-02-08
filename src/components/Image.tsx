import { useRef } from "react";
import { useField, TextInput, Text } from "payload/components/forms";

export default function Image(props) {
  const { path } = props;
  const { value, setValue } = useField<string>({ path });
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  console.log(inputRef);
  console.log(value);
  return (
    <>
      <img src={value} />
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          position: "relative",
        }}
      >
        <TextInput
          name="url"
          path={path}
          inputRef={inputRef}
          onChange={handleOnChange}
          value={value}
        />
      </div>
    </>
  );
}

interface Props {
  placeholder: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
}
function Input({ placeholder, type, value, onChange }: Props) {
  return (
      <div className="input-group mb-3">
        <input
          className="form-control"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        ></input>
      </div>
  );
}

export default Input;

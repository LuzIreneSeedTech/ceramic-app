import { formLabel, formLabelType } from "../utils/constants";

export function Form({ data }: { data: formLabelType[] }) {
  return (
    <div className="form-container">
      {data.map((item) => (
        <form className="form-content">
          <label htmlFor={`${item.label}`} className="form-label">
            {item.label}
          </label>
          <input type="text" id={`${item.label}`} className="form-input" />
        </form>
      ))}
    </div>
  );
}

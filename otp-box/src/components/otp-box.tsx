import { useState } from "react";

const OTPbox = ({ length }: { length: number }) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2">
        {Array.from({ length }, (_, index) => (
          <InputBox key={index} />
        ))}
      </div>

      <button
        className="rounded-xl font-semibold p-2 bg-neutral-100 disabled:bg-neutral-600"
        disabled={disabled}
      >
        Submit
      </button>
    </div>
  );
};

const InputBox = () => {
  return (
    <div>
      <input
        type="text"
        className="size-14 rounded-xl p-[20px] font-bold text-2xl bg-neutral-800/40 text-neutral-300 border border-neutral-600"
        maxLength={1}
      />
    </div>
  );
};

export default OTPbox;

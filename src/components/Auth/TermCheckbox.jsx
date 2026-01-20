

export default function TermCheckbox({ checked, onChange }) {
  return (
    <label className="w-full flex items-start gap-3 cursor-pointer select-none mb-2">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-6 h-6 cursor-pointer"
      />

      {/* Text */}
      <p className="text-[13px] text-var(--primary-color) leading-[18px]">
        By clicking <span className="font-semibold">Create Account</span>, you acknowledge you have read and agreed to our{" "}
        <a
          href="#"
          className="font-semibold underline underline-offset-2"
        >
          Terms of Use
        </a>{" "}
        and{" "}
        <a
          href="#"
          className="font-semibold underline underline-offset-2"
        >
          Privacy Policy
        </a>.
      </p>
    </label>
  );
}

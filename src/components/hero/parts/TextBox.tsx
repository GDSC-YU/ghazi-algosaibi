const TextBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="max-w-xs p-6 text-center text-sm font-semibold md:max-w-md md:text-base lg:max-w-lg lg:text-lg">
      {children}
    </p>
  );
};

export default TextBox;

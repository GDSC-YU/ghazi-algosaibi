export default function HeaderButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="text-primary rounded-full bg-white px-4 py-2 text-2xl font-bold">
      {children}
    </button>
  );
}

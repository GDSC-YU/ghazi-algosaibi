export default function WritingTile({ thing }: { thing: Thing }) {
  return (
    <div className="h-96 rounded-2xl bg-orange-700 text-center">
      <img
        className="h-80 w-full rounded-2xl bg-green-700"
        src={thing.imageUrl}
        alt={thing.title}
      />
      <h3 className="text-base">{thing.title}</h3>
    </div>
  );
}

const WritingTile = ({ thing }: { thing: Thing }) => {
  return (
    // TODO: rewrite this whole thing
    <div className="h-96 rounded-2xl bg-orange-700 text-center">
      <img
        className="h-80 w-full rounded-t-2xl bg-green-700"
        src={thing.imageUrl}
        alt={thing.title}
      />
      <h3 className="text-base">{thing.title}</h3>
    </div>
  );
};

export default WritingTile;

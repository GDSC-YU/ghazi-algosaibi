const WritingTile = ({ thing }: { thing: Thing }) => {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-secondary p-4 text-center transition-all hover:scale-105 hover:shadow-lg">
      <img
        className="mb-4 rounded-2xl"
        src={thing.imageUrl}
        alt={thing.title}
      />
      <h3 className="line-clamp-2 text-xl">{thing.title}</h3>
    </div>
  );
};

export default WritingTile;

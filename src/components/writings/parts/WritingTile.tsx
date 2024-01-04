const WritingTile = ({ thing }: { thing: Thing }) => {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-secondary p-4 text-center">
      <img
        className="mb-4 rounded-2xl"
        src={thing.imageUrl}
        alt={thing.title}
      />
      <h3 className="text-xl">{thing.title}</h3>
    </div>
  );
};

export default WritingTile;

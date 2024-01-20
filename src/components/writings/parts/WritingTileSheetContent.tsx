const WritingTileSheetContent = ({ thing }: { thing?: Thing }) => {
  return (
    <div className="mb-8 flex flex-col items-center justify-center gap-4 px-8 text-center">
      <div className="rounded-2xl bg-secondary p-6">
        <img
          className="h-60 rounded-2xl"
          src={thing?.imageUrl}
          alt={thing?.title}
        />
      </div>
      <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        {thing?.title}
      </h3>
      <p className="text-2xl font-medium">
        {thing?.publisher} - {thing?.year}
      </p>
      <p className="text-xl">{thing?.notes}</p>
    </div>
  );
};

export default WritingTileSheetContent;

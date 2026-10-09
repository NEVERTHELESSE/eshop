type listType = {
  lists: string[];
  setSelected: any;
  selected: any;
};

export default function Selection({ lists, selected, setSelected }: listType) {
  return (
    <div className="flex my-6">
      {lists.map((list) => (
        <button
          onClick={() => setSelected(list)}
          key={list}
          className={` mr-4 cursor-pointer  py-1 ${list === selected ? "border-b-primary capitalize border-b-4" : " text-soft"}`}
        >
          {list}
        </button>
      ))}
    </div>
  );
}

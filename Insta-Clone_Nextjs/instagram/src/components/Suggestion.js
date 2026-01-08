function Suggestion({ username, img, otherPerson }) {
  return (
    <div className="flex items-center gap-3 justify-between mb-3">
      <div className="flex items-center gap-3 mb-3">
        <img src={img} className="h-12 w-12 rounded-full" />
        <div className="flex flex-col">
          <span className="text-bold">{username}</span>
          <span className="text-gray-400 truncate w-40 text-sm">
            Followed by {otherPerson}
          </span>
        </div>
      </div>
      <button className="font-semibold text-blue-400">Follow</button>
    </div>
  );
}

export default Suggestion;

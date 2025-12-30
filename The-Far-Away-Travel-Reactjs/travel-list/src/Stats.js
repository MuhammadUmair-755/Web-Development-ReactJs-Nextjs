export default function Stats({ items }) {
  const numItems = items.length;
  if (numItems === 0) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 😊</em>
      </p>
    );
  }
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round(Number((numPacked / numItems) * 100));
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got Everything, Ready to 🛫"
          : `💼You have 
        ${numItems} items on your list, and you already packed ${numPacked} (${packedPercentage})%`}
      </em>
    </footer>
  );
}

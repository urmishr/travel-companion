export default function Stats({ items }) {
    if (!items.length) {
        return (
            <footer className="stats">
                <em>Please Add some items first! 🚀</em>
            </footer>
        );
    }

    const totalItems = items.length;
    const totalPackedItems = items.filter((item) => item.packed).length;
    const totalRatioPacked = Math.round((totalPackedItems / totalItems) * 100);
    return (
        <footer className="stats">
            <em>{totalRatioPacked === 100 ? "You are ready to fly ✈️" : `🧳 You Have ${totalItems} items on your list, and you packed ${totalPackedItems} Items.(${totalRatioPacked}%)`}</em>
        </footer>
    );
}

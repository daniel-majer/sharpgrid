const TableHead = () => {
  return (
    <thead>
      <tr className="bg-gray-50">
        <th className="px-4 py-2 text-left">Country</th>
        <th className="px-4 py-2 text-right">Total Outlets</th>
        <th className="px-4 py-2 text-right">With Indicator</th>
        <th className="px-4 py-2 text-right">Coverage</th>
      </tr>
    </thead>
  );
};

export default TableHead;

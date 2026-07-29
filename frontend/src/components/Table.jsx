function Table({tasks}) {
  return (
    <>
      <div className="rounded-lg border border-slate-200">
        <table className="table-auto w-lg">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200">
              <th>S/N</th>
              <th className="border-r border-slate-200">Name</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {tasks.map((task, key) => (
              <tr key={key} className="border-b border-slate-200">
                <td>{key + 1}</td>
                <td className="text-left border-r border-slate-200">
                  {task.name}
                </td>
                <td>{task.completed ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;

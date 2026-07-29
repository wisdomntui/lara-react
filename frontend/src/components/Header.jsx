function Header({title}) {
  return (
    <>
      <div className="bg-sky-50 w-full flex justify-between p-5">
        <div className="font-bold text-lg">{title}</div>
        <a
          href="/create"
          className="bg-slate-50 border border-slate-200 rounded-md p-2 text-sm"
        >
          Create Task
        </a>
      </div>
    </>
  );
}

export default Header;

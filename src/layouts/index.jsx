const Layout = ({ children1, children2, children3 }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex p-4 justify-center borber-b border-slate-300 w-[50%]">
        {children1}
      </div>
      <div className="flex w-[50%]">
        <div className="flex flex-col w-full border-r border-slate-300 p-4">
          {" "}
          <h1
            className="
        text-2xl font-semibold mb-3"
          >
            Notes
          </h1>{" "}
          {children2}
        </div>
        <div className="flex flex-col w-full p-4">
          {" "}
          <h1
            className="
        text-2xl font-semibold mb-3"
          >
            Arsip
          </h1>
          {children3}
        </div>
      </div>
    </div>
  );
};

export default Layout;

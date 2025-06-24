const Heading = () => {
  return (
    <>
      <div className="mb-4 inline-block rounded-lg bg-gray-900 p-2">
        <img
          src="https://cdn.prod.website-files.com/624c242f060bd9591c2539f8/624c356a2b5d383d597aaa76_Logo.svg"
          alt="Logo"
          className="h-10"
        />
      </div>
      <h1 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
        Indicator Coverage Report
      </h1>
      <p className="mb-6 max-w-2xl text-gray-600">
        See which countries support a given indicator and the current coverage
        in SharpGrid's Outlet Census. Select an indicator below to view coverage
        across all markets.
      </p>
    </>
  );
};

export default Heading;

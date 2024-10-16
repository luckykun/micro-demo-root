export const useData = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const d = await mi.fetcher({ url: '/api/getUsers.json' });
      setData(d);
    };
    fetchData();
  }, []);

  return { data };
};

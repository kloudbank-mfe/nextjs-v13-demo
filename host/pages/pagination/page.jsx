import CustomTable from '#/components/CustomTable';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data, error } = useSWR('/api/botkube', fetcher);
  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <CustomTable
      dataList={JSON.parse(data)}
      >
      </CustomTable>
    </div>
  )
}

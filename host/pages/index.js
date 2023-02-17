import { Typography } from 'antd';
import useSWR from 'swr';
import AppLayout from './layout';
import RemoteAppLayout from './remoteLayout';


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR('/api/hello', fetcher);
  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Typography>
        <h2>Content from hello api</h2> {
          Object.entries(data).map(([key, value], idx) => {
            return (
              <div key={`${key}=${idx}`}>
                <h3>{key}</h3>
                <p>{value}</p>
              </div>
            );
          })}
        <br />
      </Typography>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      <RemoteAppLayout>{page}</RemoteAppLayout>
      <AppLayout>{page}</AppLayout>
    </>
  )
}

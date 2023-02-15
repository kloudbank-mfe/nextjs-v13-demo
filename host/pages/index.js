import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import useSWR from 'swr';
const { Header, Sider, Content } = Layout;
import AppLayout from './layout';

const Test = dynamic(() => import('remote/Test'), { ssr: false });

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR('/api/hello', fetcher);
  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <h2>Content from hello api</h2> {
      Object.entries(data).map(([key, value]) => {
        return (
          <div>
            <h3>{key}</h3>
            <p>{value}</p>
          </div>
        );
      })}
      <br/>
      <Test />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <AppLayout>{page}</AppLayout>
  )
}

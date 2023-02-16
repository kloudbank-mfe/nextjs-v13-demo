import AppLayout from '#/pages/layout';
import Page from './page';

export default function VirtualList({
  children,
}) {
  return (
    <>
      <Page />
    </>
  )
}

VirtualList.getLayout = function getLayout(page) {
  return (
    <AppLayout>{page}</AppLayout>
  )
}

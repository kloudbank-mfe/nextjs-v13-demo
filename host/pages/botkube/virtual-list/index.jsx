import AppLayout from '#/pages/layout';
import Page from './page';
import RemoteAppLayout from '#/pages/remoteLayout';

export default function VirtualList() {
  return (
    <>
      <Page />
    </>
  )
}

VirtualList.getLayout = function getLayout(page) {
  return (
    // <AppLayout>{page}</AppLayout>
    <RemoteAppLayout>{page}</RemoteAppLayout>
  )
}

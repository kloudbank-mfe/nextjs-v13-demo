import AppLayout from '#/pages/layout';
import Page from './page';
import RemoteAppLayout from '#/pages/remoteLayout';

export default function Pagination({
  children,
}) {
  return (
    <>
      <Page />
    </>
  )
}

Pagination.getLayout = function getLayout(page) {
  return (
    // <AppLayout>{page}</AppLayout>
    <RemoteAppLayout>{page}</RemoteAppLayout>
  )
}

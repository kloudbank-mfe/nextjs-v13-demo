import AppLayout from '#/pages/layout';
import Page from './page';

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
    <AppLayout>{page}</AppLayout>
  )
}

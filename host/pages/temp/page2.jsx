import { Typography } from "antd";
const { Title, Paragraph } = Typography;
// import LayoutContext from "../store/shared-context";
import RemoteAppLayout from "../remoteLayout";

export default function Home() {
  // const { layoutStore } = useContext(LayoutContext);

  return (
    <Typography>
      <Title>페이지 2</Title>
      <Paragraph>{process.env.NEXT_PUBLIC_CONTENTS}</Paragraph>
    </Typography>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    // <AppLayout>{page}</AppLayout>
    <RemoteAppLayout>{page}</RemoteAppLayout>
  )
}

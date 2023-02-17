import { useContext } from "react";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;
import LayoutContext from "../store/shared-context";

export default function Home() {
  const { layoutStore } = useContext(LayoutContext);

  return (
    <Typography>
      <Title>소개 1 {layoutStore && layoutStore.path}</Title>
      <Paragraph style={{}}>{process.env.NEXT_PUBLIC_CONTENTS}</Paragraph>
    </Typography>
  );
}

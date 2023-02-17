import { Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <Typography>
      <Title>페이지 1</Title>
      <Paragraph>{process.env.NEXT_PUBLIC_CONTENTS}</Paragraph>
    </Typography>
  );
}

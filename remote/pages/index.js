import { Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <Typography>
      <Title>소개 1</Title>
      <Paragraph style={{}}>{process.env.NEXT_PUBLIC_CONTENTS}</Paragraph>
    </Typography>
  );
}

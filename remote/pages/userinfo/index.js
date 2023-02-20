import { Typography } from "antd";
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <Typography>
      <Title>User Info</Title>
      <Paragraph>{process.env.NEXT_PUBLIC_CONTENTS}</Paragraph>
    </Typography>
  );
}

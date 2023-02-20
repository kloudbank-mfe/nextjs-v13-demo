import { Typography } from "antd";
import { useRouter } from 'next/router'

const { Title, Paragraph } = Typography;

export default function Menu() {
  const router = useRouter()
  const { pid } = router.query
  return (
    <Typography>
      <Title>{pid}</Title>
      <h1>
      {pid}  
      </h1>
      <Paragraph>{process.env.NEXT_PUBLIC_CONTENTS}</Paragraph>
    </Typography>
  );
}

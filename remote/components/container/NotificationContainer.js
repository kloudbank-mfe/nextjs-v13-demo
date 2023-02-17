import { Typography, Drawer, Modal } from "antd";
import { getNotifications } from "../../store/notifications.js";

const NotificationContainer = ({ notificationOpen, setNotificationOpen }) => {
  const notifications = getNotifications();
  return (
    <Drawer
      className="demo-notification-modal"
      title="알림"
      placement="right"
      onClose={() => setNotificationOpen(false)}
      open={notificationOpen}
      getContainer={false}
      size="large"
    >
      <Typography>
        {notifications &&
          notifications.map((item, i) => {
            return <p key={i}>{item.message}</p>;
          })}
      </Typography>
    </Drawer>
  );
};
export default NotificationContainer;

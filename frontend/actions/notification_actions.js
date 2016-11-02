export const NotificationConstants = {
  CREATE_NOTIFICATION: "CREATE_NOTIFICATION",
  DESTROY_NOTIFICATION: "DESTROY_NOTIFICATION"
};

export const createNotification = (message, category) => ({
  type: NotificationConstants.CREATE_NOTIFICATION,
  message,
  category
});

export const destroyNotification = () => ({
  type: NotificationConstants.DESTROY_NOTIFICATION
});

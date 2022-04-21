import firebase from "react-native-firebase";

export async function registerForNotifications() {
  try {
    await firebase.messaging().requestPermission({
      alert: true,
      announcement: false,
      badge: true,
      carPlay: false,
      provisional: false,
      sound: true,
    });

    const token = await firebase.messaging().getToken();
    console.log("fcm", token);
    if (token) {
      try {
        await firebase.notifications().registerNotificationToken(token);
      } catch (e) {
        console.log(e);
        throw new Error("Could not send notification token.");
      }

      // return store.dispatch({type: authAction.SAVE_NOTIFICATION_TOKEN, token});
    }
  } catch (e) {
    console.log("registerForNotifications\n", e);
    return true;
  }
  // firebase.notifications
  //   .Notification()
  //   .setTitle('Android Notification Actions')
  //   .setBody('Action Body')
  //   .setNotificationId('notification-action')
  //   .setSound('default')
  //   .android.setChannelId('notification-action')
  //   .android.setPriority(firebase.notifications.Android.Priority.Max);
  return true;
}

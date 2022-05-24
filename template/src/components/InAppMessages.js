import React, { Component } from "react";
import { withInAppNotification } from "react-native-in-app-notification";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import { navigate } from "../services/RootNav";
import logIn from "@store/initialState/logIn";
import { fetchProductData } from "@services";
import { categorySwitcher } from "@helpers/categorySwitcher";

class InAppMessages extends Component {
  handleNotificationClick = async (notification) => {
    const clickAction =
      notification?.data?.clickAction ||
      notification?._android?._clickAction ||
      notification?._ios?._category;
    if (clickAction) {
      if (clickAction.startsWith("openProductPage/")) {
        const id = clickAction.split("/")[1];
        const token = this.props.token;
        const product = await fetchProductData(id, token);
       
        const category = categorySwitcher(product.data.category);
       
        navigate("ProductPage", {
          id,
          type: category.name,
          categoryColor: category.color,
        });
      }
    }
  };

  componentDidMount() {
    try {
      const notifications = firebase.notifications();
      notifications.onNotificationOpened(async ({ notification }) => {
        await this.handleNotificationClick(notification);
      });
      notifications.onNotification(async (notification) => {
        this.props.showNotification({
          title: notification._title,
          message: notification._body,
          icon: require("../../assets/images/mainLogo.png"),
          onPress: async () => {
            await this.handleNotificationClick(notification);
          },
        });
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return this.props.children;
  }
}

export default connect((state) => ({ token: state.logIn.token }))(
  withInAppNotification(InAppMessages)
);

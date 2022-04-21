import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Text,
} from "react-native";


//hooks
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";


const LogIn = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();


  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <View>
          <Text>login page</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LogIn;

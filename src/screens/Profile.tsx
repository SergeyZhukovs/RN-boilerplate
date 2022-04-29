import React, {useEffect, useState} from "react";
import { common } from "@styles";

import { useTranslation } from "react-i18next";
import { ScrollView, View, Text} from "react-native";


const HomeScreen = (): JSX.Element | null => {
  // const { t } = useTranslation();
  const [data, setData] = useState<boolean>(true);


  if (!data) {
    return null;
  }

  return (
    <ScrollView style={[common.main, common.mainBackground]}>
      <View>
          <Text>Profile</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

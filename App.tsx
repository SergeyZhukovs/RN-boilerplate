import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { navigationRef } from "./src/services/RootNav";
import MainNavigator from "./src/navigation";
import CustomButton from "./src/components/Global/CustomButton";
import { COLORS, TEXTS } from "./src/constants";
import { buttons } from "./src/styles";

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Hello: React.FC<Props> = ({ name, baseEnthusiasmLevel = 0 }) => {
  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
    baseEnthusiasmLevel
  );

  const onIncrement = () => setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () =>
    setEnthusiasmLevel(enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0);

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join("!") : "";

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Hello {name}
        {getExclamationMarks(enthusiasmLevel)}
      </Text>
      <View>
        <Button
          title="Increase enthusiasm"
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="blue"
        />
        <Button
          title="Decrease enthusiasm"
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="red"
        />
        <CustomButton 
          styles={buttons.primaryBtn}
          text={TEXTS.BUTTONS.CREATE_ACC} 
          backgroundColor={COLORS.PINK} 
          textColor={COLORS.WHITE} 
          onPress={() => console.log("Clicked")}
        />
        <CustomButton 
          styles={buttons.secondaryBtn}
          text={TEXTS.BUTTONS.CREATE_ACC} 
          backgroundColor={COLORS.TRANSPARENT} 
          textColor={COLORS.BLUE} 
          borderColor={COLORS.BLUE}
          onPress={() => console.log("Clicked")}
        />
        <MainNavigator navigationRef={navigationRef} />
      </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  greeting: {
    fontSize: 20,  
    fontWeight: "bold",
    margin: 16,
  },
});

export default Hello;

import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { navigationRef } from "./src/services/RootNav";
import MainNavigator from "@navigation";
import CustomButton from "@components/Global/CustomButton";
import { COLORS, TEXTS } from "@constants";
import { buttons } from "./src/styles";
import CustomInput from "@components/Global/CustomInput";
import { Provider as PaperProvider } from 'react-native-paper';

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
    <PaperProvider>
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
            <CustomInput
              // value={values.email}
              label={TEXTS.FLOATING_LABELS.EMAIL}
              selectionColor={COLORS.BLACK}
              outlineColor={COLORS.BLACK}
              // onChange={(setFieldValue)}
              type={"email"}
              activeOutlineColor={COLORS.BLACK}
              
              //error={errors.email}
              //  touched={touched.email}
              //editable={false}
              //multiline
            />
            <MainNavigator navigationRef={navigationRef} />
          </View>
        </View>
      </PaperProvider>
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

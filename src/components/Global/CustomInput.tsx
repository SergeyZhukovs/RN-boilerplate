import React, { useEffect, useState, useRef } from "react";
import {
  //TextInput,
  View,
} from "react-native";
import { COLORS } from "@constants";
import { common, input } from "@styles";
import CustomText from "./CustomText";
import { TextInput } from 'react-native-paper';

interface Input {
  value?: string;
  label?: string;
  onChange?: (x: string, y: string) => void;
  secureTextEntry?: boolean;
  autoCorrect?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  clearButtonMode?:
    | "never"
    | "while-editing"
    | "unless-editing"
    | "always"
    | undefined;
  type: string;
  error?: string | string[];
  touched?: boolean | undefined;
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "number-pad"
    | "decimal-pad"
    | "visible-password"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "name-phone-pad"
    | "twitter"
    | "web-search";
  multiline?: boolean;
  editable?: boolean;
  selectionColor?: string;
  activeOutlineColor?: string | undefined;
  mode?: 'flat' | 'outlined';
  outlineColor?: string;
}

const CustomInput = ({
  value,
  label,
  onChange,
  selectionColor = COLORS.BLACK,
  secureTextEntry = false,
  autoCorrect = true,
  autoCapitalize = "none",
  clearButtonMode = "while-editing",
  type,
  error,
  touched,
  keyboardType,
  editable = true,
  multiline,
  activeOutlineColor,
  mode = "outlined",
  outlineColor,
}: Input): JSX.Element => {
  const [isFocused, setIsFocued] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  let inputEl = useRef(null);

  const handleFocus = () => setIsFocued(true);  
  const handleBlur = () => !value && setIsFocued(false);

  const setInputFocused = () => inputEl?.current?.focus();

  const changePwdType = () => setHidePassword(!hidePassword);

  useEffect(() => {
    if (value) {
      setIsFocued(true);
    }
  });

  return (
    <View style={input.container}>
      {/* {!!label && (
        <CustomText
          text={label}
          font={"DUBAI_MEDIUM"}
          size={"H3"}
          color={color}
          styles={[input.label, !editable && { opacity: 0.3 }]}
        />
      )} */}
      {/* {!!placeholder && (
        <CustomText
          text={placeholder}
          //font={!isFocused ? "DUBAI_MEDIUM" : "DUBAI_MEDIUM"}
          font={"DUBAI_MEDIUM"}
          size={!isFocused ? "P" : "S1"}
          color={color}
          styles={[
            input.floatLabel,
            {
              top: !isFocused
                ? Platform.OS === "ios"
                  ? 25
                  : 15
                : Platform.OS === "ios"
                ? 8
                : 4,
            },
            !editable && { opacity: 0.3 },
          ]}
          onPress={setInputFocused}
        />
      )} */}
      {/* <TextInput
        ref={inputEl}
        borderColor={borderColor}
        style={[
          common.input,
          !placeholder && { paddingTop: 4 },
          multiline && {
            height: 160,
            paddingTop: Platform.OS === "ios" ? 30 : 10,
          },
          error && touched && { borderColor: COLORS.RED },
          !editable && { opacity: 0.3 },
        ]}
        value={value}
        multiline={multiline}
        onChangeText={(newVal) => onChange(type, newVal)}
        secureTextEntry={secureTextEntry && hidePassword}
        autoCapitalize={autoCapitalize}
        clearButtonMode={clearButtonMode}
        autoCorrect={autoCorrect}
        onFocus={handleFocus}
        onBlur={handleBlur}
        error={error}
        touched={touched}
        keyboardType={keyboardType}
        editable={editable}
      /> */}
      <TextInput 
        label={label}
        ref={inputEl}
        mode={mode}
        selectionColor={selectionColor}
        value={value}
        onChangeText={(newVal) => onChange(type, newVal)}
        editable={editable}
        onFocus={handleFocus}
        onBlur={handleBlur}
        error={error}
        multiline={multiline}
        autoCorrect={autoCorrect}
        clearButtonMode={clearButtonMode}
        touched={touched}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry && hidePassword}
        autoCapitalize={autoCapitalize}
        activeOutlineColor={activeOutlineColor}
        outlineColor={outlineColor}
        
        // theme={{
        //   colors: {
        //         background: 'transparent',
        //      }
        // }}
        style={[ common.input ]}
        // style={[
        //   common.input,
        //   multiline && {
        //     height: 160,
        //     paddingTop: Platform.OS === "ios" ? 30 : 10,
        //   },
        //   error && touched && { borderColor: COLORS.RED },
        //   !editable && { opacity: 0.3 },
        // ]}

      />
      {error && touched && (
        <CustomText
          text={error}
          color={COLORS.RED}
          styles={common.errorText}
        />
      )}
    </View>
  );
};
export default CustomInput;

import React, { useEffect, useState, useRef, FunctionComponent } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Platform,
  TextInputProps,
} from "react-native";

import { COLORS } from "../../constants";

import { common, input } from "../../styles";
import CustomText from "./CustomText";

interface Input {
  value: string;
  label?: string;
  onChange: (x: string, y: string) => void;
  placeholder?: string;
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
}

const CustomInput = ({
  value,
  label,
  onChange,
  placeholder,
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
      {!!label && (
        <CustomText
          text={label}
          font={"TAJAWAL_BOLD"}
          size={"M"}
          styles={[input.label, !editable && { opacity: 0.3 }]}
        />
      )}
      {!!placeholder && (
        <CustomText
          text={placeholder}
          font={!isFocused ? "TAJAWAL_REGULAR" : "DUBAI_LIGHT"}
          size={!isFocused ? "M" : "S"}
          color={COLORS.BLACK}
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
      )}
      <TextInput
        ref={inputEl}
        style={[
          common.input,
          !placeholder && { paddingTop: 4 },
          multiline && {
            height: 150,
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

import React, { useEffect, useState, useRef } from "react";
import {
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
  disabled?: boolean;
  selectionColor?: string;
  activeOutlineColor?: string | undefined;
  mode?: 'flat' | 'outlined';
  outlineColor?: string;
  theme?: string;
}

const CustomInput = ({
  value,
  label,
  onChange,
  selectionColor = COLORS.BLACK,
  autoCorrect = true,
  autoCapitalize = "none",
  clearButtonMode = "while-editing",
  type,
  error,
  touched,
  keyboardType,
  disabled = false,
  multiline,
  activeOutlineColor,
  mode = "outlined",
  outlineColor,
  theme,
}: Input): JSX.Element => {
  const [isFocused, setIsFocued] = useState(false);
  let inputEl = useRef(null);

  const handleFocus = () => setIsFocued(true);  
  const handleBlur = () => !value && setIsFocued(false);

  useEffect(() => {
    if (value) {
      setIsFocued(true);
    }
  });

  return (
    <View style={input.container}>
      <TextInput
        label={label}
        ref={inputEl}
        mode={mode}
        value={value}
        onChangeText={(newVal) => onChange(type, newVal)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        error={error}
        multiline={multiline}
        autoCorrect={autoCorrect}
        clearButtonMode={clearButtonMode}
        touched={touched}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        activeOutlineColor={activeOutlineColor}
        selectionColor={selectionColor}
        outlineColor={outlineColor}
        disabled={disabled}
        style={[ common.input, error && touched ? { borderColor: COLORS.RED} : null, multiline && { height: 160, textAlignVertical: "top"} ]}
        theme={{ colors: {placeholder: theme}}}
        numberOfLines={6} // Android: Sets the number of lines for a TextInput. Use it with multiline set to true to be able to fill the lines
      />
      {error && touched ? (
        <CustomText
          text={error}
          color={COLORS.RED}
          styles={common.errorText}
        />
      ): null }
    </View>
  );
};
export default CustomInput;

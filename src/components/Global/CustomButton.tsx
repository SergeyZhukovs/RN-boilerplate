import React, { ReactNode } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ViewStyle,
} from "react-native";
import { COLORS } from "../../constants/";
import { common } from "../../styles";

interface BtnProps {
  text: string;
  backgroundColor?: string;
  borderColor?: string
  onPress: () => void;
  icon?: ReactNode;
  styles?: ViewStyle;
}

const CustomButton = ({
  text,
  icon,
  onPress,
  backgroundColor = COLORS.WHITE,
  borderColor = "",
  styles,
  ...rest
}: BtnProps): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={[common.button, styles, { backgroundColor } ]}
    {...rest}>
      <View>
        {text && (
          <Text
            style={{
              fontSize: 18,
              textTransform: "uppercase",
            }}
          >
            {text}
          </Text>
        )}
        {icon ? <View>{icon}</View> : null}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

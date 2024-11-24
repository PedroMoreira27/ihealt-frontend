import styled from "styled-components/native";
import { colors } from "../styles/colors";
import type { GestureResponderEvent } from "react-native";

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.primary};
  min-width: 100%;
  color: ${colors.colorOnPrimary};
  padding: 12px;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: ${colors.colorOnPrimary};

  text-align: center;
`;

interface IButtonProps {
	// biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
	onPress?: (event: GestureResponderEvent) => void | undefined;
}

export const Button = ({
	children,
	props,
}: { children: React.ReactNode; props?: IButtonProps }) => {
	return (
		<ButtonContainer onPress={props?.onPress}>
			<Text>{children}</Text>
		</ButtonContainer>
	);
};

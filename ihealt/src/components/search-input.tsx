import { colors } from "@/styles/colors";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";

interface ISearchProps {
	placeholder: string;
}

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: ${colors.outline};
  border-radius: 12px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  padding: 12px;
  width: 100%;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 50px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
`;

export const SearchInput = ({ placeholder }: ISearchProps) => {
	return (
		<Container>
			<Input placeholder={placeholder} />
			<SearchButton>
				<Icon name="search" size={24} color={colors.colorOnPrimary} />
			</SearchButton>
		</Container>
	);
};

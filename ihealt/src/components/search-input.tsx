import { colors } from "@/styles/colors";
import styled from "styled-components/native";

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: ${colors.outline};
`;

export const SearchInput = () => {
	return <Input />;
};

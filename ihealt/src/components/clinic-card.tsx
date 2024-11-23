import { colors } from "@/styles/colors";
import styled from "styled-components/native";

interface IClinicProps {
	name: string;
}

export const Card = styled.View`
  width: 200px;
  height: 88px;
  background-color: ${colors.surface};
  border-width: 1px;
  border-color: ${colors.outline} ;
  border-radius: 12px;
`;

export const Text = styled.Text`
  
`;

export const ClinicCard = ({ name }: IClinicProps) => {
	return (
		<Card>
			<Text>{name}</Text>
		</Card>
	);
};

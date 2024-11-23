import styled from "styled-components/native";

import { colors } from "@/styles/colors";
import { FlatList, StatusBar } from "react-native";
import { ClinicCard } from "@/components/clinic-card";
import { SearchInput } from "@/components/search-input";

const Container = styled.View`
  padding: 24px 16px;
  display: flex;
  flex: 1;
  background-color: "#00000000";
`;
const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.surface};
`;

const Text = styled.Text`
  font-size: 28px;
  font-weight: 700;
`;

const CategoryWrapper = styled.View`
  margin: 12px 0px;
`;

const Separator = styled.View`
  width: 20px;
  height: 20px;
  background-color: ${colors.surface};
`;

const ContainerSearch = styled.View`
	height: 200px;
	width: 100%;
	background-color: ${colors.surface};
`;

export default function Home() {
	const clinicsData = [
		{
			id: 0,
			name: "Test",
		},
		{
			id: 1,
			name: "Test 2",
		},
		{
			id: 2,
			name: "Testtttttttt",
		},
		{
			id: 3,
			name: "Testttttttttsdahsdl",
		},
		{
			id: 4,
			name: "asjwhdalksdalk",
		},
	];

	return (
		<SafeAreaView>
			<Container>
				<Text>Encontre os melhores serviços de saúde perto de você</Text>
				<ContainerSearch>
					<SearchInput />
				</ContainerSearch>
				<CategoryWrapper>
					<FlatList
						data={clinicsData}
						renderItem={({ item }) => <ClinicCard name={item.name} />}
						ItemSeparatorComponent={Separator}
						horizontal
					/>
				</CategoryWrapper>
			</Container>
			<StatusBar backgroundColor={colors.surface} />
		</SafeAreaView>
	);
}

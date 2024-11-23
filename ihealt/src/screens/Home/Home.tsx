import styled from "styled-components/native";

import { colors } from "@/styles/colors";
import { FlatList, StatusBar, ScrollView } from "react-native";
import { ClinicCard } from "@/components/clinic-card";
import { SearchInput } from "@/components/search-input";
import Icon from "react-native-vector-icons/Ionicons";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const Container = styled.View`
  padding: 24px 16px;
  display: flex;
  flex: 1;
  background-color: "#00000000";
  margin: 20px
  
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
  margin: 20px 20px;
`;

const Separator = styled.View`
  width: 8px;
  height: 24px;
  background-color: ${colors.surface};
`;

const ContainerSearch = styled.View`
	height: 100px;
	width: 100%;
	background-color: ${colors.surface};
	align-items: center;
	justify-content: center;
	padding: 0px 16px;
`;

export default function Home() {
	const clinicsData = [
		{
			id: 0,
			name: "Clinica 1",
			address: "Rua 1, 123",
			phone: "(11) 1234-5678",
			services: [
				{
					name: "Exame médico geral",
				},
			],
		},
		{
			id: 1,
			name: "Clinica 2",
			address: "Rua 2, 123",
			phone: "(11) 1234-5678",
			services: [
				{
					name: "Odontologia",
				},
			],
		},
		{
			id: 2,
			name: "Clinica 3",
			address: "Rua 3, 123",
			phone: "(11) 1234-5678",
			services: [
				{
					name: "Fisioterapia",
				},
			],
		},
		{
			id: 3,
			name: "Clinica 4",
			address: "Rua 4, 123",
			phone: "(11) 1234-5678",
			services: [
				{
					name: "Psicologia",
				},
			],
		},
		{
			id: 4,
			name: "Clinica 5",
			address: "Rua 5, 123",
			phone: "(11) 1234-5678",
			services: [
				{
					name: "Cardiologia",
				},
			],
		},
	];

	return (
		<SafeAreaView>
			<Container>
				<ScrollView>
					<CategoryWrapper>
					<Text>Encontre os melhores serviços de saúde perto de você</Text>
					<ContainerSearch>
						<SearchInput placeholder="Procure serviços próximos..." />
					</ContainerSearch>
						<Text style={{ fontWeight: "bold", fontSize: "20px", marginTop: "20px", marginBottom: "20px" }}> 
						<Icon name={"medkit"} size={24} color={"#000"} /> Clinicas
						</Text>
						<FlatList
							horizontal
							data={clinicsData}
							renderItem={({ item }) => (
							<ClinicCard
								name={item.name}
								address={item.address}
								phone={item.phone}
								services={item.services}
							/>
							)}
							ItemSeparatorComponent={Separator}
							showsVerticalScrollIndicator={false}
						/>
						<Text style={{ fontWeight: "bold", fontSize: "20px", marginTop: "20px", marginBottom: "20px" }}> 
						<Icon name={"business-outline"} size={24} color={"#000"} /> Hospitais
						</Text>
						<FlatList 
							horizontal
							data={clinicsData}
							renderItem={({ item }) => (
							<ClinicCard
								name={item.name}
								address={item.address}
								phone={item.phone}
								services={item.services}
							/>
							)}
							ItemSeparatorComponent={Separator}
							showsVerticalScrollIndicator={false}
						/>
					</CategoryWrapper>
				</ScrollView>
			</Container>
			<StatusBar backgroundColor={colors.surface} />
		</SafeAreaView>
	);
}

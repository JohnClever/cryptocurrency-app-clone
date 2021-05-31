import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, SafeAreaView, Image, ScrollView, Animated } from 'react-native';
import { HeaderBar, currencyLabel } from '../components';
import { COLORS, SIZES } from '../constants';
const CryptoDetail = ({ navigation }) => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: COLORS.lightGray1,
			}}
		>
			<HeaderBar right={true} />
			<ScrollView>
				<View style={{ flex: 1, paddingBottom: SIZES.padding }}></View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
});

export default CryptoDetail;

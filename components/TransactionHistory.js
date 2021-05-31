import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const TransactionHistory = ({ customContainerStyle, history }) => {
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingVertical: SIZES.base,
				}}
				onPress={() => console.log(item)}
			>
				<Image
					source={icons.transaction}
					style={{
						width: 30,
						height: 30,
						tintcolor: COLORS.primary,
					}}
				/>
				<View style={{ flex: 1, marginLeft: SIZES.radius }}>
					<Text style={{ ...FONTS.h3 }}>{item.description}</Text>
					<Text style={{ ...FONTS.body4, color: COLORS.gray }}>{item.date}</Text>
				</View>
				<View
					style={{
						flexDirection: 'row',
						height: '100%',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							color: item.type == 'B' ? COLORS.green : COLORS.black,
							...FONTS.h3,
						}}
					>
						{item.amount} {item.currency}
					</Text>

					<Image
						source={icons.right_arrow}
						style={{
							width: 20,
							height: 20,
							tintColor: COLORS.gray,
						}}
					/>
				</View>
			</TouchableOpacity>
		);
	};
	return (
		<View
			style={{
				...customContainerStyle,
				marginTop: SIZES.padding,
				marginHorizontal: SIZES.padding,
				padding: 20,
				borderRadius: SIZES.radius,
				backgroundColor: COLORS.white,
			}}
		>
			<Text style={{ ...FONTS.h2 }}>Transaction History</Text>
			<FlatList
				contentContainerStyle={{ marginTop: SIZES.radius }}
				scrollEnabled={false}
				data={history}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
				keyExtractor={item => `${item.id}`}
				ItemSeparatorComponent={() => {
					return (
						<View
							style={{
								width: '100%',
								height: 1,
								backgroundColor: COLORS.lightGray,
							}}
						></View>
					);
				}}
			/>
		</View>
	);
};

export default TransactionHistory;

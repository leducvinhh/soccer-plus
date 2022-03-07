import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import images from '../../assets'

const Header = () => {
	return (
		<View style={styles.header}>
			<View style={styles.topHeader}>
				<Text style={styles.heading}>KICK OFF 2022/01/26 14:15</Text>

				<View style={styles.afterLeft01}>
					<View style={styles.subAfterLeft01}></View>
				</View>
				<View style={styles.afterLeft02}>
					<Text style={styles.textLeft}>東京FP　VS　池袋WGP</Text>
					<View style={styles.subAfterLeft02}></View>
				</View>

				<View style={styles.afterRight01}>
					<View style={styles.subAfterRight01}></View>
				</View>
				<View style={styles.afterRight02}>
					<Image style={styles.logo} source={images.logo}/>
					<View style={styles.subAfterRight02}></View>
				</View>
			</View>
			<View style={styles.contentHeader}>
				<View style={styles.viewContentTop}>
					<Text style={styles.textContentTop}>1ST</Text>
					<Text style={styles.textContentTop}>2ND</Text>
				</View>
				<Text style={styles.textContentTime}>00 : 00</Text>
				<Text style={styles.textTimeDesc}>TIME</Text>

				<LinearGradient style={styles.afterLeft03} colors={['#57316A', '#2C1935']}>
					<View style={styles.subAfterLeft03}></View>
				</LinearGradient>
				<LinearGradient style={styles.afterLeft04} colors={['#65377B', '#65377B']}>
					<View style={styles.infoList}>
						<View>
							<Text style={styles.infoItem}></Text>
							<Text style={styles.infoItem}></Text>
							<Text style={styles.infoItemLast}></Text>
						</View>
						<Image style={styles.imgWrite} source={images.write} />
					</View>

					<View style={styles.numberContent}>
						<Text style={styles.number}>0</Text>
						<Text style={styles.numberDesc}>TFP</Text>
						<Text style={styles.textDesc}>Home</Text>
					</View>

					<View style={styles.subAfterLeft04}></View>
				</LinearGradient>

				<LinearGradient style={styles.afterRight03} colors={['#1D613F', '#06130D']}>
					<View style={styles.subAfterRight03}></View>
				</LinearGradient>
				<LinearGradient style={styles.afterRight04} colors={['#207048', '#207048']}>
					<View style={styles.numberContent}>
						<Text style={styles.number}>0</Text>
						<Text style={styles.numberDesc}>IWGP</Text>
						<Text style={styles.textDesc}>AWAY</Text>
					</View>
					<View style={styles.menu}>
						<Image style={styles.iconMenu} source={images.menu} />
						<Text style={styles.textMenu}>Menu</Text>
					</View>
					<View style={styles.subAfterRight04}></View>
				</LinearGradient>
			</View>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({

    header: {
        height: 155,
		display: 'flex'
    },
	topHeader: {
		height: 30,
		position: 'relative',
		flexShrink: 0,
	},
	contentHeader: {
		display: 'flex',
		position: 'relative',
		flex: 1,
		backgroundColor: '#29292B',
	},
	heading: {
		position: 'absolute',
		zIndex: 1,
		width: '100%',
		fontSize: 12,
		fontWeight: 'bold',
		textAlign: 'center',
		textAlignVertical: 'center',
		height: 30,
		color: '#FFFFFF',
		backgroundColor: '#000000'
	},
	afterLeft01: {
		position: 'absolute',
		zIndex: 2,
		width: 372,
		height: 30,
		backgroundColor: '#333333',
	},
	subAfterLeft01: {
		zIndex: 3,
		position: 'absolute',
		right: 0,
		top: 0,
		borderBottomColor: '#000000',
		borderBottomWidth: 15,
		borderRightColor: '#000000',
		borderRightWidth: 6,
		borderLeftColor: 'transparent',
		borderLeftWidth: 6,
		borderTopColor: 'transparent',
		borderTopWidth: 15,
	},
	afterLeft02: {
		position: 'absolute',
		zIndex: 4,
		width: 359,
		height: 30,
		backgroundColor: '#444444',
	},
	subAfterLeft02: {
		zIndex: 3,
		position: 'absolute',
		right: 0,
		top: 0,
		borderBottomColor: '#333333',
		borderBottomWidth: 15,
		borderRightColor: '#333333',
		borderRightWidth: 6,
		borderLeftColor: 'transparent',
		borderLeftWidth: 6,
		borderTopColor: 'transparent',
		borderTopWidth: 15,
	},
	afterLeft03: {
		position: 'absolute',
		zIndex: 2,
		width: 428,
		height: 125,
		bottom: 0,
		left: 0,
	},
	subAfterLeft03: {
		zIndex: 3,
		position: 'absolute',
		right: 0,
		top: 0,
		borderBottomColor: 'transparent',
		borderBottomWidth: 62.5,
		borderRightColor: '#29292B',
		borderRightWidth: 34,
		borderLeftColor: 'transparent',
		borderLeftWidth: 34,
		borderTopColor: '#29292B',
		borderTopWidth: 62.5,
	},
	afterLeft04: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		position: 'absolute',
		zIndex: 4,
		width: 347,
		height: 125,
		bottom: 0,
		left: 0,
	},
	subAfterLeft04: {
		zIndex: 5,
		position: 'absolute',
		right: -68,
		top: 0,
		borderBottomColor: '#65377B',
		borderBottomWidth: 62.5,
		borderRightColor: 'transparent',
		borderRightWidth: 34,
		borderLeftColor: '#65377B',
		borderLeftWidth: 34,
		borderTopColor: 'transparent',
		borderTopWidth: 62.5,
	},

	afterRight01: {
		position: 'absolute',
		right: 0,
		zIndex: 2,
		width: 372,
		height: 30,
		backgroundColor: '#333333',
	},
	subAfterRight01: {
		zIndex: 3,
		position: 'absolute',
		left: 0,
		top: 0,
		borderBottomColor: '#000000',
		borderBottomWidth: 15,
		borderRightColor: 'transparent',
		borderRightWidth: 6,
		borderLeftColor: '#000000',
		borderLeftWidth: 6,
		borderTopColor: 'transparent',
		borderTopWidth: 15,
	},

	afterRight02: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'center',
		position: 'absolute',
		right: 0,
		zIndex: 4,
		width: 359,
		height: 30,
		backgroundColor: '#444444',
	},
	subAfterRight02: {
		zIndex: 3,
		position: 'absolute',
		left: 0,
		top: 0,
		borderBottomColor: '#333333',
		borderBottomWidth: 15,
		borderLeftColor: '#333333',
		borderRightWidth: 6,
		borderRightColor: 'transparent',
		borderLeftWidth: 6,
		borderTopColor: 'transparent',
		borderTopWidth: 15,
	},

	afterRight03: {
		position: 'absolute',
		zIndex: 2,
		width: 428,
		height: 125,
		bottom: 0,
		right: 0,
	},
	subAfterRight03: {
		zIndex: 3,
		position: 'absolute',
		left: 0,
		top: 0,
		borderBottomColor: 'transparent',
		borderBottomWidth: 62.5,
		borderRightColor: 'transparent',
		borderRightWidth: 34,
		borderLeftColor: '#29292B',
		borderLeftWidth: 34,
		borderTopColor: '#29292B',
		borderTopWidth: 62.5,
	},

	afterRight04: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		position: 'absolute',
		zIndex: 4,
		width: 347,
		height: 125,
		bottom: 0,
		right: 0,
	},
	subAfterRight04: {
		zIndex: 5,
		position: 'absolute',
		left: -68,
		top: 0,
		borderBottomColor: '#207048',
		borderBottomWidth: 62.5,
		borderLeftColor: 'transparent',
		borderRightWidth: 34,
		borderRightColor: '#207048',
		borderLeftWidth: 34,
		borderTopColor: 'transparent',
		borderTopWidth: 62.5,
	},

	textLeft: {
		color: '#FFFFFF',
		textAlignVertical: 'center',
		fontWeight: 'bold',
		fontSize: 12,
		lineHeight: 30,
		paddingLeft: 10
	},
	logo: {
		height: 15,
		resizeMode: 'contain',
		marginRight: -30
	},
	viewContentTop: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	textContentTop: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#636365',
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 10,
		marginRight: 10,
	},
	textContentTime: {
		fontSize: 38,
		fontWeight: 'bold',
		color: '#FFFFFF',
		backgroundColor: '#1D1D1E',
		borderRadius: 5,
		borderWidth: 3,
		borderColor: '#353535',
		textAlign: 'center',
		width: 150,
		marginLeft: 435,
		zIndex: 5
	},
	textTimeDesc: {
		fontSize: 10,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#FFFFFF',
		marginTop: 10
	},
	infoList: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: 235,
		height: 99,
		backgroundColor: '#634373',
		marginLeft: 10,
		marginTop: 13,
		borderRadius: 5,
		paddingLeft: 6,
		paddingRight: 15,
	},
	infoItem: {
		width: 190,
		height: 27,
		backgroundColor: '#000000',
		opacity: 0.15,
		marginBottom: 3
	},
	infoItemLast: {
		width: 190,
		height: 27,
		backgroundColor: '#000000',
		opacity: 0.15,
		marginBottom: 0
	},
	imgWrite: {
		width: 14,
		height: 16,
		resizeMode: 'contain',
	},
	numberContent: {
		display: 'flex',
		alignItems: 'center',
		width: 60,
	},
	number: {
		fontSize: 60,
		fontWeight: 'bold',
		color: '#FFFFFF',
		textAlign: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#FFFFFF',
		lineHeight: 70,
		width: '100%',
	},
	numberDesc: {
		fontSize: 15,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#FFFFFF',
		marginTop: 5
	},
	textDesc: {
		textAlign: 'center',
		fontSize: 10,
		color: '#9E90A4',
		width: 40,
		borderWidth: 1,
		borderColor: '#9E90A4',
		marginTop: 5,
		fontWeight: 'bold',
	},
	menu: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: 135,
		height: 99,
		backgroundColor: '#123F28',
		marginTop: 13,
		marginRight: 13,
		borderRadius: 5
	},
	iconMenu: {
		width: 24,
		height: 24,
		resizeMode: 'contain'
	},
	textMenu: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#FFFFFF'
	}
})
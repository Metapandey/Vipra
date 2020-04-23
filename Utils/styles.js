import { StyleSheet } from 'react-native'
import theme from 'theme.json'

export default StyleSheet.create({
	background: theme.color.secondary,
	titleText: {
		fontSize: theme.font.size[0],
		fontType: theme.font.type[0],
		fontWeight: theme.font.weight[22],
		fontColor: theme.color.grayscale[2]
	},
	subtitleText: {
		fontSize: theme.font.size[1],
		fontType: theme.font.type[1],
		fontWeight: theme.font.weight[2],
		fontColor: theme.color.grayscale[1]
	},
	socialContainer: {
		borderRadius: 0,
		borderWidth: 1,
		fontSize: theme.font.size[2],
		fontType: theme.font.type[1],
		fontWeight: theme.font.weight[2],
		google: {
			borderColor: theme.color.other[6]
		},
		facebook: {
			borderColor: theme.color.other[7]
		}
	},
	formText: {
		fontSize: theme.font.size[2],
		fontType: theme.font.type[1],
		fontWeight: theme.font.weight[6],
		fontColor: theme.color.grayscale[2]
	},
	troubleShootText: {
		fontSize: theme.font.size[4],
		fontType: theme.font.type[2],
		fontWeight: theme.font.weight[23],
		fontColor: theme.color.grayscale[1]
	}
	loginButton: {
		color: theme.color.seondary,
		fontSize: theme.font.size[1],
		fontType: theme.font.type[1],
		fontWeight: theme.font.weight[23],
		fontColor: theme.color.grayscale[0]
	},
	registerText: {
		fontSize: theme.font.size[4],
		fontType: theme.font.type[2],
		fontWeight: theme.font.weight[14],
		fontColor: theme.color.primary
	}
})
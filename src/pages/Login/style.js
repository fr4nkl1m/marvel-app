import { StyleSheet } from 'react-native';
import Style from '../../style';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  loginBox: {
    height: '80%',
    alignItems: 'center',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundColor: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  frontShapes1: {
    position: 'absolute',
    top: 14,
    left: 0,
  },
  saly: {
    position: 'absolute',
    right: 0,
    top: '2%',
  },
  frontShapes2: {
    position: 'absolute',
    right: 0,
    top: '10%',
  },
  overlayContainer: {
    paddingTop: '12%',
  },
  title: {
    ...Style.Typography.profileTitle,
    textAlign: 'center',
    alignSelf: 'center',
    color: Style.Colors.primaryWhite,
    marginTop: '20%',
  },
  subTitle: {
    ...Style.Typography.homeSubtitle,
    textAlign: 'center',
    alignSelf: 'center',
    color: Style.Colors.primaryGrey,
    marginTop: '2%',
  },
  label: {
    ...Style.Typography.description,
    color: Style.Colors.primaryGrey,
    marginTop: '2%',
  },
  labelContainer: {
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: Style.Colors.primaryGrey,
    paddingHorizontal: 10,
    marginTop: 8,
    width: 330,
    height: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  input: {
    flex: 1,
    color: Style.Colors.primaryWhite,
  },
  icon: {
    marginRight: '3%',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordToggleIcon: {
    marginLeft: -40,
    marginTop: '4%',
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginRight: '2%',
  },
  forgot: {
    ...Style.Typography.description,
    color: Style.Colors.primaryGrey,
    marginVertical: 15,
  },
  containerLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  lineGradient: {
    flex: 1,
    height: 1,
  },
  line: {
    height: '100%',
    backgroundColor: 'transparent',
  },
  textLine: {
    ...Style.Typography.description,
    color: Style.Colors.primaryGrey,
    marginHorizontal: 10,
  },
  socialNetwork: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSocial: {
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: Style.Colors.primaryGrey,
    width: 60,
    height: 50,
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
  },
  social: {
    width: 30,
    height: 30,
    marginTop: '15%',
  },
  errorText: {
    position: 'absolute',
    right: 4,
    top: '100%',
    color: Style.Colors.primaryRed, // Presumindo que você tenha um vermelho para erros
    fontSize: 12,
  },
});

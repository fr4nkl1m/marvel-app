import { StyleSheet } from 'react-native';

export const Gradients = {
    blueGradient: {
      start: '#005BEA',
      end: '#00C6FB',
    },
    pinkGradient: {
      start: '#FF7EB3',
      end: '#FF758C',
    },
    redGradient: {
      start: '#ED1D24',
      end: '#F1689',
    },
    purpleGradient: {
      start: '#B224EF',
      end: '#7579FF',
    },
    greenGradient: {
      start: '#0BA360',
      end: '#3CBA92',
    },
    blackGradient: {
      start: '#000000',
      end: '#00000000', // Transparent black
    },
    darkGradient: {
      start: '#000000',
      end: '#0A0A0A',
    },
  };
  
  export const Colors = {
    primaryRed: '#F2264B',
    primaryBlack: '#000000',
    primaryDark: '#313140',
    primaryGrey: '#B7B7C8',
    primarySilver: '#F8F8F8',
    primaryWhite: '#FFFFFF',
  };
  
export const Typography = StyleSheet.create({
  profileTitle: {
    fontSize: 40,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  homeTitle: {
    fontSize: 32,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  profileSubtitle: {
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '500', // Medium
  },
  homeSubtitle: {
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '600', // SemiBold
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '500', // Medium
  },
  characteristic: {
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '300', // Regular
  },
  ability: {
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '400', // Regular
  },
  cardSubtitle: {
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '500', // Medium
  },
});


export const CustomStyles = {
    DarkRedColor: '#ED1D2F',
    SpringGreenColor: '#04D361',
    DarkMagentaColor: '#BF2EB9',
    GrayColor: '#D9D9D9',
    DarkGrayColor: '#A4A4A4',
    DimGrayColor: '#696969',
    Grey24Color: '#4F4F4F',
    BlackColor: '#000000',
  };


// Export default object containing all style constants
export default {
  Colors,
  Typography,
  Gradients,
  CustomStyles
};

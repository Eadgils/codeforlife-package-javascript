import React from 'react';
import {
  Box,
  BoxProps,
  ThemeProvider,
  SxProps,
  buttonClasses,
  PaletteColor,
  responsiveFontSizes,
  createTheme
} from '@mui/material';
import {
  Circle as CircleIcon,
  Hexagon as HexagonIcon
} from '@mui/icons-material';

import { themeOptions } from '.';
import palette from './palette';
import { getStyleOverrides } from '../helpers';

export interface ThemedBoxProps extends BoxProps {
  withIcons?: boolean,
  userType: 'teacher' | 'student' | 'independent'
}

const ThemedBox: React.FC<ThemedBoxProps> = ({
  withIcons = false,
  userType,
  children,
  sx,
  ...otherBoxProps
}) => {
  let bgcolor: PaletteColor;
  let circleColor: 'primary' | 'secondary' | 'tertiary';
  let hexagonColor: 'primary' | 'secondary' | 'tertiary';
  switch (userType) {
    case 'teacher':
      bgcolor = palette.primary as PaletteColor;
      circleColor = 'tertiary';
      hexagonColor = 'secondary';
      break;
    case 'student':
      bgcolor = palette.tertiary;
      circleColor = 'secondary';
      hexagonColor = 'primary';
      break;
    case 'independent':
      bgcolor = palette.secondary as PaletteColor;
      circleColor = 'primary';
      hexagonColor = 'tertiary';
      break;
  }

  const commonIconSxProps: SxProps = {
    display: { xs: 'none', md: 'block' },
    fontSize: '200px',
    position: 'absolute'
  };

  const fontStyleOverrides = {
    color: bgcolor.contrastText,
    textDecorationColor: bgcolor.contrastText
  };

  const theme = responsiveFontSizes(createTheme({
    ...themeOptions,
    components: {
      ...themeOptions.components,
      MuiTypography: {
        ...themeOptions.components?.MuiTypography,
        styleOverrides: {
          ...themeOptions.components?.MuiTypography?.styleOverrides,
          root: ({ ownerState }) => ({
            ...getStyleOverrides(ownerState, 'MuiTypography'),
            ...fontStyleOverrides
          })
        }
      },
      MuiFormHelperText: {
        ...themeOptions.components?.MuiFormHelperText,
        styleOverrides: {
          ...themeOptions.components?.MuiFormHelperText?.styleOverrides,
          root: ({ ownerState }) => ({
            ...getStyleOverrides(ownerState, 'MuiFormHelperText'),
            ...fontStyleOverrides
          })
        }
      },
      MuiLink: {
        ...themeOptions.components?.MuiLink,
        styleOverrides: {
          ...themeOptions.components?.MuiLink?.styleOverrides,
          root: ({ ownerState }) => ({
            ...getStyleOverrides(ownerState, 'MuiLink'),
            ...fontStyleOverrides
          })
        }
      },
      MuiButton: {
        ...themeOptions.components?.MuiButton,
        styleOverrides: {
          ...themeOptions.components?.MuiButton?.styleOverrides,
          contained: ({ ownerState }) => ({
            ...getStyleOverrides(ownerState, 'MuiButton', 'contained'),
            ...(userType === 'independent' && {
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: '#f6f5f5',
                boxShadow: [
                  '0px 6px 10px 0px rgba(0, 0, 0, 0.14)',
                  '0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
                  '0px 3px 5px 0px rgba(0, 0, 0, 0.2);'
                ].join()
              },
              [`&.${buttonClasses.disabled}`]: {
                backgroundColor: 'white',
                color: bgcolor.contrastText
              }
            })
          }),
          outlined: ({ ownerState }) => ({
            ...getStyleOverrides(ownerState, 'MuiButton', 'outlined'),
            border: `2px solid ${bgcolor.contrastText}`,
            '&:hover': {
              border: `2px solid ${bgcolor.contrastText}`,
              backgroundColor: 'transparent',
              textDecoration: 'underline'
            }
          })
        }
      },
      MuiCheckbox: {
        ...themeOptions.components?.MuiCheckbox,
        styleOverrides: {
          ...themeOptions.components?.MuiCheckbox?.styleOverrides,
          root: ({ ownerState }) => ({
            ...getStyleOverrides(ownerState, 'MuiCheckbox'),
            color: `${bgcolor.contrastText} !important`
          })
        }
      },
      MuiSvgIcon: {
        ...themeOptions.components?.MuiSvgIcon,
        styleOverrides: {
          ...themeOptions.components?.MuiSvgIcon?.styleOverrides,
          root: ({ ownerState }) => ({
            ...getStyleOverrides(ownerState, 'MuiSvgIcon'),
            '&.checkbox-error': {
              color: `${bgcolor.contrastText} !important`
            }
          })
        }
      }
    }
  }));

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          ...sx,
          ...(withIcons && {
            paddingY: { xs: 2, sm: 3, md: 5 },
            paddingX: { xs: 2, sm: 5, md: 10 }
          }),
          bgcolor: bgcolor.main,
          alignItems: 'center',
          position: 'relative'
        }}
        {...otherBoxProps}
      >
        {withIcons && <>
          <CircleIcon
            color={circleColor}
            sx={{
              ...commonIconSxProps,
              top: '5%',
              left: '0%',
              transform: 'translate(-60%, 0%)'
            }}
          />
          <HexagonIcon
            color={hexagonColor}
            sx={{
              ...commonIconSxProps,
              bottom: '5%',
              right: '0%',
              transform: 'translate(60%, 0%) rotate(90deg)'
            }}
          />
        </>}
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default ThemedBox;

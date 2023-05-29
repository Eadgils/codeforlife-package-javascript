import Components from './_components';

const MuiButton: Components['MuiButton'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      whiteSpace: 'nowrap',
      minWidth: 'max-content',
      width: 'fit-content'
    })
  }
};

export default MuiButton;

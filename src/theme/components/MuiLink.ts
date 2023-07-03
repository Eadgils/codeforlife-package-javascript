import { includesClassNames } from '../../helpers';
import typography from '../typography';
import Components from './_components';

const MuiLink: Components['MuiLink'] = {
  defaultProps: {
    underline: 'none', // BUG: if not set, MUI fails to run.
    color: 'inherit'
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      cursor: 'pointer',
      ...(includesClassNames(ownerState, ['no-decor'])
        ? {
          ':hover': {
            textDecoration: 'underline'
          }
        }
        : {
          textDecoration: 'underline',
          ':hover': {
            fontWeight: 'bold'
          }
        }
      ),
      ...(includesClassNames(ownerState, ['back-to']) && {
        textDecoration: 'none',
        display: 'block',
        marginBottom: typography.body1?.marginBottom,
        ':hover': {
          fontWeight: 'bold',
          textDecoration: 'underline'
        },
        ':before': {
          content: '"< Back to "'
        }
      })
    })
  }
};

export default MuiLink;

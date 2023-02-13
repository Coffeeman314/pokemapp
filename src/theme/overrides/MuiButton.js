import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      borderRadius: '4px',
      padding: '0',
    },
    outlined: {
      border: `1px solid ${palette.primary.main}`,
      color: `${palette.primary.main}`,
      fontSize: '20px',
      fontWeight: '300',
      textTransform: 'capitalize',
      minWidth: '170px',
    },
    contained: {
      backgroundColor: `${palette.primary.light}`,
      fontSize: '26px',
      fontWeight: '400',
      width: '100px',
      '&:hover': {
        backgroundColor: '#ed7607',
      },
    },
  },
};

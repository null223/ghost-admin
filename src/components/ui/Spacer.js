import { memo } from 'react';

import PropTypes from 'prop-types';

import { Box, useTheme } from '@mui/material';

export const type = 'ui/spacer';

const Spacer = ({ x, y, basis, ...restProps }) => {
  const theme = useTheme();
  return (
    <Box
      // data-components-id="Spacer"
      width={x ? theme.spacing(x) : undefined}
      height={y ? theme.spacing(y) : undefined}
      flexBasis={basis ? theme.spacing(basis) : undefined}
      flexGrow={0}
      flexShrink={0}
      {...restProps}
    />
  );
};

Spacer.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  basis: PropTypes.number,
};

export default memo(Spacer);

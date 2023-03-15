/*
 *  Copyright 2019, 2020, 2021, 2022, 2023 LiteFarm.org
 *  This file is part of LiteFarm.
 *
 *  LiteFarm is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  LiteFarm is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  GNU General Public License for more details, see <https://www.gnu.org/licenses/>.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';

const Dropdown = ({ content, children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <span onClick={(e) => e.stopPropagation()}>
      <span onClick={(e) => setAnchorEl(e.currentTarget)}>{content}</span>
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClick={() => setAnchorEl(null)}
        onClose={() => setAnchorEl(null)}
        disableRestoreFocus
      >
        {children}
      </Popover>
    </span>
  );
};

Dropdown.propTypes = {
  content: PropTypes.node,
  children: PropTypes.node,
};

export default Dropdown;

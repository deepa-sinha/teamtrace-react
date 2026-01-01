import { useState } from 'react';
import MaterialPopover from '@mui/material/Popover';
import './style.scss';

export default function Popover({
  trigger,
  children,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  transformOrigin = { vertical: 'top', horizontal: 'left' },
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div onClick={handleOpen} className="popover-trigger">
        {trigger}
      </div>

      <MaterialPopover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        className="custom-popover"
      >
        <div className="popover-content">
          {children}
        </div>
      </MaterialPopover>
    </>
  );
}

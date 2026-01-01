import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

export default function SelectBox({
  label,
  value,
  options = [],
  onChange,
  fullWidth = true,
  size = 'small',
  disabled = false,
  className = ''
}) {
  return (
    <FormControl
      fullWidth={fullWidth}
      size={size}
      disabled={disabled}
      className={className}
    >
      <InputLabel>{label}</InputLabel>

      <Select
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

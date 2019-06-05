import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import { root } from './styles';

export default function FormTextInput (props) {
    const [showPassword, setShowPassword] = useState(false);

    const { error, handleChange, handleBlur, value, label, name, type, submitted, showHelperText, touched, endAdornment, helperText } = props;
    const showHelperTextBeforeSubmit = showHelperText && (touched || value);
    return (
        <TextField
            error={submitted && error}
            helperText={helperText ? helperText : showHelperTextBeforeSubmit || submitted ? error : null}
            label={label}
            classes={ {root} }
            type={type === 'text' || showPassword ? 'text' : 'password'}
            name={name}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            InputProps={endAdornment ? {endAdornment} : type === 'password' ?
                { endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="Toggle password visibility"
                            onClick={()=>setShowPassword(!showPassword)}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )} : null
            }
        />
    );
}

FormTextInput.propTypes = {
    type: PropTypes.oneOf(['text', 'password']),
    error: PropTypes.string,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
    showHelperText: PropTypes.bool,
    touched: PropTypes.bool,
}

FormTextInput.defaultProps = {
    type: 'text'
}

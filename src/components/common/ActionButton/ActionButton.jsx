import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { root, label, mainDisabled, ButtonContainer } from './styles';

export default class ActionButton extends React.Component {
    render() {
        const {
            href,
            color,
            disabled,
            onClick,
            children,
            marginTop,
            marginBottom,
            variant,
            buttonClassName,
            ...rest
        } = this.props;

        return (
            <ButtonContainer
                target="_blank"
                href={href}
                as={href == null ? 'div' : 'a'}
                marginTop={marginTop}
                marginBottom={marginBottom}
                {...rest}
            >
                <Button
                    onClick={onClick}
                    classes={{ root, label, disabled: mainDisabled }}
                    className={buttonClassName}
                    variant={variant}
                    color={color}
                    type="submit"
                    disabled={disabled}
                    fullWidth
                >
                    {children}
                </Button>
            </ButtonContainer>
        );
    }
}

ActionButton.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
    variant: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.any,
    buttonClassName: PropTypes.string,
};

ActionButton.defaultProps = {
    variant: 'contained',
    color: 'primary',
    successGreen: false,
};

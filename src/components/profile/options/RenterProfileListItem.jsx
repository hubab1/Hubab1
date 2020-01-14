import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Info from '@material-ui/icons/Info';

import { infoIconRoot } from 'assets/styles';
import SimplePopover from 'components/common/SimplePopover';


import { contentContainer, label, prefix, buttonRoot, paperRoot, renterProfileListItemContainer } from './styles';

function RenterProfileListItem (props) {
    return (
        <div className={renterProfileListItemContainer}>
            <div className={paperRoot}>
                <div className={contentContainer}>
                    <div className={prefix}>{props.prefix}</div>
                    <div className={label}>{props.label}&nbsp;
                        {props.tip && <SimplePopover text={props.tip}>
                            <Info classes={{root: infoIconRoot}} style={{color:'#828796',width:16}}/>
                        </SimplePopover>}
                    </div>
                </div>
                <Link to={props.route}>
                    <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        classes={{
                            root: buttonRoot

                        }}
                    >{props.buttonLabel}</Button>
                </Link>
            </div>
        </div>
    );
}

RenterProfileListItem.propTypes = {
    prefix: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    label: PropTypes.string,
    buttonLabel: PropTypes.string,
    route: PropTypes.string,
}

export default RenterProfileListItem;
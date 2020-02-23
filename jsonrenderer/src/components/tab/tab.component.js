import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './tab.css';

const Tab = (props) => {
    return (
        <div className={classnames("Tab-Container", props.className)}>
            {
                React.Children.map(child => <div>{child}</div>)
            }
        </div>
    )
}

Tab.propTypes = {
    className: PropTypes.string,
};

export default Tab;

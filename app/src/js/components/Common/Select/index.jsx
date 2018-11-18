import React from 'react'
import PropTypes from 'prop-types'

import Icons from '../Icons';

const Select = ({ id, name, multiple, className, defaultText, items, defaultValue, onChange, icon, iconOption, classNameIcon, classNameLabel }) => ((
    <div className={`input-field ${className}`}>
        {icon && (<Icons
            className={classNameIcon}
            icon={icon}
        />)}
        <select multiple={multiple} id={id} name={name} onChange={onChange} defaultValue={defaultValue}>
            <option value="1" disabled >{defaultText}</option>
            {items.map((item, index, array) => (
                <option key={item._id} value={item._id} data-icon={iconOption}>{item.name}</option>
            ))}
        </select>
        <label className={classNameLabel}>Producto</label>
    </div>
))

Select.defaultProps = {
    className: 'col s12',
    multiple: false,
};

Select.propTypes = {
    items: PropTypes.array.isRequired,
    defaultText: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classNameIcon: (props, propName, componentName) => {
        if (props.icon && (!props.classNameIcon)) {
            return new Error(`Invalid prop '${propName}' supplied to '${componentName}' .Validation failed`);
        }
    },
}

export default Select

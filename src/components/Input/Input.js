import PropTypes from "prop-types"
import { Fragment } from "react"

export const Input = ({
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    children,
    label,
    style,
    multiline,
    ...props
}) => {
    
    switch(type) {
        case "textarea":
            return (
                <textarea 
                    placeholder={placeholder}
                    style={style} 
                    className={className} 
                    name={name} 
                    value={value} 
                    onChange={onChange}
                    rows="4"
                    multiline={multiline}
                    {...props} 
                />
            )
        default:
            return (
                <Fragment>
                    {label && <label htmlFor={name}>{label}</label>}
                    <input
                      id={name}
                      name={name}
                      style={error && { border: 'solid 1px red', ...style}}
                      type={type}
                      placeholder={placeholder}
                      onChange={onChange}
                      value={value}
                      className={className}
                    />
                    { error && <p>{ error }</p>}
                </Fragment>
            )
    }
}
  
Input.defaultProps = {
    className: undefined,
    style: undefined,
    multiline: "true",
    placeholder: undefined
}
  
Input.propTypes = {
    style: PropTypes.object,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    error: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', "textarea", "select", 'password', "email"]),
    className: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired
}
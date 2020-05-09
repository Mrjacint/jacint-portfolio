import React, { Fragment } from 'react';

function Input(props) {
    let inputElement = null;
    let error = null;

    if (!props.valid && props.touched) {
        error = props.errortext;
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = (
                <Fragment>
                    <label>{props.label}</label>
                    <input
                        className="form-control"
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}
                        onBlur={props.focused} />
                </Fragment>
            );
            break;
        case ('textarea'):
            inputElement = (
                <Fragment>
                    <label>{props.label}</label>
                    <textarea
                        className="form-control"
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}
                        onBlur={props.focused} />
                </Fragment>
            );
            break;
        case ('checkbox'):
            inputElement = (
                <div className="form-check">
                    <input
                        className="form-check-input"
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}
                        onBlur={props.focused} />
                    <label className={props.labelclass}>{props.label}</label>
                </div>);
            break;
        default:
            inputElement = <input
                {...props.elementConfig}
                value={props.value} />;
    }

    return (
        <div className="form-group">
            {inputElement}
            <p className="help-block text-danger">{error}</p>
        </div>
    );
}

export default Input;
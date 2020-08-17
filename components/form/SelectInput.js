import React from 'react';
import { useField, useFormikContext } from "formik";
import { Form } from 'react-bootstrap';

const SelectInput = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);

    return (
        <Form.Control as="select"
            {...field}
            {...props}
            className="form-control-lg margin-bottom-inputs"
            onChange={val => {
                setFieldValue(field.name, val.target.value);
            }}

        >
            {props.options.map((el, i) => {
                return <option key={i}>{el}</option>
            })}
        </Form.Control>
    );
};

export default SelectInput;
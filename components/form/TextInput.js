import React from 'react';
import { useField, useFormikContext } from "formik";
import { Form } from 'react-bootstrap';

const TextInput = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <Form.Control
            {...field}
            {...props}
            className="form-control-lg margin-bottom-inputs"
            onChange={val => {
                setFieldValue(field.name, val.target.value);
            }}
        />

    );
};

export default TextInput;


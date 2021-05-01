import { useState } from 'react';

export default function useForm(initialState = {}) {
    // Create a state object for our inputs
    const [inputs, setInputs] = useState(initialState);

    function handleChange(e) {
        let { value, name, type } = e.target;
        /* Check  if is a number to keep the format on the state */
        if (type === 'number') {
            value = parseInt(value);
        }
        /* Check  if is a file */
        if (type === 'file') {
            value[0] = e.target.files;
        }
        return setInputs({
            ...inputs,
            [name]: value,
        });
    }

    function resetForm() {
        return setInputs(initialState);
    }

    /* Clearing all the values */
    function clearForm() {
        const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
        return setInputs(blankState);
    }

    return {
        inputs,
        handleChange,
        resetForm,
        clearForm,
    };
}

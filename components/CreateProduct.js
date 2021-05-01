import useForm from '../lib/useForm';
import FormStyles from '../components/styles/Form';

function CreateProduct() {
    const { inputs, handleChange, clearForm, resetForm } = useForm({ name: 'Marion', price: 3405 });
    return (
        <FormStyles>
            <fieldset aria-busy>
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="name"
                        value={inputs.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="price">
                    Price
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="price"
                        value={inputs.price}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">+ Add Product</button>
            </fieldset>
        </FormStyles>
    );
}

export default CreateProduct;

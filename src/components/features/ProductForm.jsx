import './ProductForm.scss';

const ProductForm = ({
    id,
    onSubmit,
    title,
    price,
    description,
    onTitleUpdate,
    onPriceUpdate,
    onDescriptionUpdate,
}) => {
    return <div className='product-form'>
        <div className='input'>
            <label htmlFor="title">Title</label>
            <input type="text" name='title' id='title' value={title} onChange={onTitleUpdate}/>
        </div>
        <div className='input'>
            <label htmlFor="price">Price</label>
            <input type="number" name='price' id='price' value={price} onChange={onPriceUpdate}/>
        </div>
        <div className='input'>
            <label htmlFor="description">Description</label>
            <textarea cols="30" name='description' id='description' rows="10" onChange={onDescriptionUpdate} defaultValue={description}></textarea>
        </div>

        <button onClick={onSubmit} className='btn'>{
            id ? 'Save changes' : 'Add product'
        }</button>
    </div>
}

export default ProductForm;
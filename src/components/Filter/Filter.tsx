import React from "react"
import { useProducts } from "../../contexts/product-context"
import * as S from "./style";

export const availableSizes = ["XS","S","M","ML","L","XL","XXL"];

const Filter:React.FC = () => {
    const { filters, filterProducts } = useProducts();

    const selectedCheckboxes = new Set<string>(filters);

    const toggleCheckbox = (label:string) => {
        if (selectedCheckboxes.has(label)) {
            selectedCheckboxes.delete(label);
        } else {
            selectedCheckboxes.add(label);
        }

        const filters = Array.from(selectedCheckboxes);
        filterProducts(filters);
    }

    const createCheckbox = (label:string) => (
        <S.Checkbox label={label} handleOnChange={toggleCheckbox} key={label}/>
    )
    
    const createCheckboxes = () => availableSizes.map((size) => createCheckbox(size));

    return (<S.Container>
        <S.Title>Sizes:</S.Title>
        {createCheckboxes()}
    </S.Container>);
}

export default Filter;
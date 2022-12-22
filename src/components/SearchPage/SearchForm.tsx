import searchBtn from './images/button_search.png'
import resetBtn from './images/button_reset.png'
import {  useState } from 'react';


interface ISearchData {
    onSubmit: (value: string) => void;
    onReset: (value: string) => void;
}

export const SearchForm = (props: ISearchData) => {
    const {onSubmit, onReset} = props;
    const [value, setValue] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onSubmit(value);
    }

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    const handleReset = () => {
        setValue('');
        onReset(value)
    };

    return (
        <form className="main__search-content__search-form" onSubmit={handleSubmit} onReset={handleReset}>
            <input 
                className="main__search-content__search-form__input" 
                required
                type="text" 
                placeholder="Search for music..." 
                value={value}
                onChange={handleChange} 
            />
            <button className="button__search-reset button_transparent" type="reset" onClick={handleReset}>
                <img alt='reset_btn' className="button__search-img" src={resetBtn}/>
            </button>
            <button className="button__search-submit button_transparent" type="submit" onClick={handleSubmit}>
                <img alt='seatch_btn' className="button__search-img" src={searchBtn}/>
            </button>
        </form>
    )
};

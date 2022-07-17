import { localStorageService } from './localStorage';
import { updateGoods } from './generate';
import { IGoods } from '../modules/goods.model';

const sortFilters = document.querySelector('.sorting-btns') as HTMLDivElement;

export function sortGoods(value: string, updatedGoods: IGoods[]) {
    let callback;
    
    switch(value) {
    case 'name_up':
        console.log('name up', value);
        callback = (a: { name: string }, b: { name: string }) =>  {
            return (a.name > b.name ? 1 : -1);
            /*if (a.name < b.name) {
                return -1;
            }              
            if (a.name >  b.name) {
                return 1;
            }
            else return 0;*/
        };
        break;
    case 'name_down':
        console.log('name down', value);
        callback = (a: { name: string }, b: { name: string }) =>  {
            return (a.name > b.name ? -1 : 1);
            /*if (a.name < b.name) {
                return 1;
            }              
            if (a.name >  b.name) {
                return -1;
            }
            else return 0;*/
        };
        break;
    case 'cart':
        console.log('cart', value);
        callback = () => {
            return localStorageService.getCart();
        };
        break;
    case 'price_down':
        console.log('price_down', value);
        callback = (a: {price: string}, b: {price: string}) =>  {
            return (Number(a.price) > Number(b.price)) ? 1 : -1;
            //return goods.sort((a: { cost: number }, b: { cost: number }) => (a.cost > b.cost ? ));
        };
        break;
    default:
        console.log('default', value);
        callback = (a: {price: string}, b: {price: string}) =>  {
            return (Number(a.price) > Number(b.price)) ? -1 : 1;
            //return Number(a.price) - Number(b.price);
        };
    }
    return updatedGoods.sort(callback);
}

sortFilters.addEventListener('click', (event) => {
    const selectedSortElement = event.target as HTMLInputElement;
    console.log(selectedSortElement);
    if (selectedSortElement.tagName === 'INPUT' ) {
        const selectedSort = selectedSortElement.value as string; 
        localStorageService.setSort({key: 'sort', values: selectedSort});

        console.log(selectedSort);
        //sortGoods(selectedSort);
        updateGoods();
    }
});



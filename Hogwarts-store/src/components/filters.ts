import { localStorageService } from './localStorage';
import { updateGoods, slider } from './generate';
import { Goods } from '../modules/goods.model';

const housesContainer = document.querySelector('.faculty-container__items') as HTMLDivElement;
const filtersContainer = document.querySelector('.filtres-categories') as HTMLDivElement;
const houseFilters = document.querySelector('.filters-btns') as HTMLDivElement;
const resetFiltersBtn = document.querySelector('.reset-category__btn') as HTMLButtonElement;
const resetLocalBtn = document.querySelector('.reset-btn') as HTMLButtonElement;
const generateNumber = 300;
const filterAllHouses = 'all';

export function filterMagic(): void {
    slider.classList.add('filter');
    setTimeout(updateGoods, generateNumber);
    slider.addEventListener('animationend', () => {
        slider.classList.remove('filter');
    });
}
//300 в конст
housesContainer.addEventListener('click', (event: MouseEvent) => {
    const selectedHouseElement = event.target as HTMLDivElement;
    const selectedHouse = selectedHouseElement.dataset['h'] as string;
    localStorageService.setFilters({key: Goods.house, values: selectedHouse} );
    selectHouse(selectedHouse);
    filterMagic();
});
// фильтры листенер в функцию
export function selectHouse(value: string): void {
    const houseBtns = Array.from(document.querySelectorAll('.house-btn')) as HTMLInputElement[];
    houseBtns.forEach(btn => {
        if (btn.dataset['house'] === value) {
            btn.checked = true;
        } 
    });
}
//датасет Н переименовать 
houseFilters.addEventListener('click', (event: MouseEvent) => {
    const selectedHouseElement = event.target as HTMLInputElement;
    if (selectedHouseElement.tagName === 'INPUT') {
        const selectedHouse = selectedHouseElement.dataset['house'] as string;
        localStorageService.setFilters({key: Goods.house, values: selectedHouse} );
        filterMagic();
    }
});
//все типизоровать по типам
filtersContainer.addEventListener('click', (event: MouseEvent) => {
    const selectedItem = event.target as HTMLInputElement;

    if (selectedItem.tagName === 'INPUT') {
        if (selectedItem.checked) {
            addCategory(selectedItem.value);
        } else deleteCategory(selectedItem.value);
    }
    filterMagic();
});

function addCategory(value: string): void {
    const activeCategories = localStorageService.getFilters()[Goods.categories];

    if (!activeCategories) {
        localStorageService.setFilters( {key: Goods.categories, values: [value] } );
    } else {
        localStorageService.setFilters( {key: Goods.categories, values: [...activeCategories, value] } );
    }
}

export function deleteCategory(value: string): void {
    const activeCategories = localStorageService.getFilters()[Goods.categories];
    const newCategories = activeCategories.filter((category: string) => category !== value);

    localStorageService.setFilters( {key: Goods.categories, values: newCategories } );
}

resetLocalBtn.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});
//резет через вопрос убрать + резет фильтров в функцию
resetFiltersBtn.addEventListener('click', () => {
    const activeCategories = localStorageService.getFilters()[Goods.categories];
    const categoryInputs = Array.from(filtersContainer.querySelectorAll('input'));
   
    categoryInputs.forEach(input => {
        if (activeCategories.includes(input.id)) {
            input.checked = false;
            deleteCategory(input.id);
        }
    });
    selectHouse(filterAllHouses);
    localStorageService.setFilters({key: Goods.house, values: filterAllHouses} );
    filterMagic();
});

//олл к конст
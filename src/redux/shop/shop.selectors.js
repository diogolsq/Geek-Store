import {createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
};


const selectShop = state => state.shop;



export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
  );

// export const selectCollection = collectionUrlParam =>
//     createSelector(
//         [selectCollections],
//         collections => (collections ? collections.find(collection => collection.routeName === collectionUrlParam) : null)
//     )
// ;


export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionUrlParam] : null)
    )
    
;


export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)
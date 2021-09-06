import React, { useEffect } from 'react';
import { connect } from 'react-redux';



import CollectionItem from '../../components/collection-item/collection-item.component';
import {firestore} from '../../firebase/firebase.utils';
import { selectCollection } from '../../redux/shop/shop.selectors';


import './collection.styles.scss';

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
  } from './collection.styles';


const CollectionPage     = ({ collection }) => {
    useEffect(() => {
        console.log('i am subscribing')
        firestore.collection('collection').onSnapshot(snapshot => console.log(snapshot))
        // return mimic the cleanup function componentWillUnmount
        return () => {
            console.log('i am unsubscribing')
            // unsubscribeFromCollection();
        }
    }, []);

    console.log(collection)
    const { title, items } = collection;
    
    // console.log({title});
    return(
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionPage);
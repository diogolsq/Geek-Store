import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils.js';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// import { selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
// import WithSpinner from '../../components/with-spinner/with-spinner.component';

// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPageContainer from '../category/collection.container';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsPageContainer from '../category/collection.container';
 
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({fetchCollectionsStart, match, }) => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]); // good practice, checking if the fetchcolletction change to not decrease performance, otherwise fecthcollection will be triggered everytime the shop is rerender.
  
  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionsPageContainer}
      />
    </div>
  );
}





const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);

import React from 'react';
// import SHOP_DATA from './shop.data.jsx';
// import CollectionPreview from '../../components/collection-preview/collection-preview.component';
// import { connect } from 'react-redux';
// import {createStructuredSelector} from 'reselect';
// import {selectCollections} from '../../redux/shop/shop.selectors';

// lets nest route

import { Route } from 'react-router-dom';
import CollectionPage from '../category/collection.component'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// will refactor using redux states and not react states
// class ShopPage extends React.Component{

//   constructor(props){

//     super(props);

//     this.state = {
//       collections: SHOP_DATA
//     };

//   }

//   render() {
//     const {collections}=this.state;
//     return (<div className='shop-page'>
//       {
//         collections.map(({id, ...otherCollectionProps }) => (
//           <CollectionPreview key={id} {...otherCollectionProps} />
//           ))
//       }
//       </div>);


//   }
// }

// since is already nested we have access to match, location and history props
const ShopPage = ({match}) => {
  return(
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
    </div>
  )
}


export default ShopPage;
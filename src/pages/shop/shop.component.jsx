import React from 'react';
import SHOP_DATA from './shop.data.jsx';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selectors';

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


const ShopPage = ({collections}) => {
  return(
    <div className='shop-page'>
      <CollectionsOverview />
    </div>
  )
}


export default ShopPage;
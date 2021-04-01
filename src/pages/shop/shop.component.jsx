import React from 'react';
import SHOP_DATA from './shop.data.jsx';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selectors';

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
        {collections.map(({id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
    </div>
  )
}

// without selector
// const mapStateToProps = state => ({
//   collections: state.collections
// });

// with selector

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
})
export default connect(mapStateToProps)(ShopPage);

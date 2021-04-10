import React from 'react';
// import SHOP_DATA from './shop.data.jsx';
// import CollectionPreview from '../../components/collection-preview/collection-preview.component';
// import { connect } from 'react-redux';
// import {createStructuredSelector} from 'reselect';
// import {selectCollections} from '../../redux/shop/shop.selectors';

// lets nest route

import { Route } from 'react-router-dom';
import CollectionPage from '../category/collection.component'


import WithSpinner from '../../components/with-spinner/with-spinner.component';


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
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

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);








// since is already nested we have access to match, location and history props
class ShopPage extends React.Component{
  
  state = {
    loading: true
  };

  unsubscribeFromSnapshot= null;


  componentDidMount(){
    const { updatedCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false});
    })

    collectionRef.onSnapshot(async snapshot => {
      convertCollectionsSnapshotToMap(snapshot);
    })
  }
  
  
  
  render(){
    const { match} = this.props;
    const { loading } = this.state;
    
    return(
        <div className='shop-page'>
          <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner  isLoading={loading} {...props} />} />
          <Route path={`${match.path}/:categoryId`} render={(props) => <CollectionsOverviewWithSpinner  isLoading={loading} {...props} />}/>
        </div>
    )
  }
} 

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
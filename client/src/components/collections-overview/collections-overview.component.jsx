import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollections} from '../../redux/shop/shop.selectors';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {console.log(collections)}
        {collections && collections.map(({id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
    </div>
)

// without selector
// const mapStateToProps = state => ({
//   collections: state.collections
// });

// with selector

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
  });

export default connect(mapStateToProps)(CollectionsOverview);
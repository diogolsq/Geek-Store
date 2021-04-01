import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import './directory.styles.scss';

import {createStructuredSelector} from 'reselect';

import {selectDirectorySection} from '../../redux/directory/directory.selectors';
// class component because we need to store the state
// edit 2: i am going to refactor using state, so i wouldnt be needing class component since i won't use react state.
// i'll let the react states though even if i don't refer to them. 
// class Directory extends React.Component {
//   constructor(){
//     super();

//     this.state = {
//       sections: [{
//         title: 'hats',
//         imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//         id: 1,
//         linkUrl: 'shop/hats'
//       },{
//         title: 'jackets',
//         imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//         id: 2,
//         linkUrl: 'shop/jackets'
//       },{
//         title: 'sneakers',
//         imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//         id: 3,
//         linkUrl: 'shop/sneakers'
//       },{
//         title: 'womens',
//         imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//         size: 'large',
//         id: 4,
//         linkUrl: 'shop/womens'
//       },{
//         title: 'mens',
//         imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//         size: 'large',
//         id: 5,
//         linkUrl: 'shop/mens'}
//       ]


//     }
//   }



//   render(){
//     return (

//       <div className='directory-menu'>
//         {
//           // instead of this
//           //this.state.sections.map((section) =>
//           //  <MenuItem key={section.id} title={section.title}/>
//           //)

//           // lets use destrecture method, instead of have to reference to the section everytime
//           //this.state.sections.map(({title, imageUrl, id, size, linkUrl}) =>
//           //  <MenuItem key={id} title={title} imageUrl = {imageUrl} size={size} linkUrl={linkUrl}  />
//           //)

//           //even better, is the equivalents
//           this.state.sections.map(({id, ...otherSectionProps}) =>
//             <MenuItem key={id} {...otherSectionProps}  />
//           )



//         }
//       </div>

//     )

//   }

// }



const Directory = ({ sections }) => (
  <div className='directory-menu'>
           {sections.map(({id, ...otherSectionProps}) => (
           <MenuItem key={id} {...otherSectionProps}  />
           ))}
  </div>
);

// without selectors
// const mapStateToProps = state => ({
//   sections: state.directory.sections, 
// });

// with createStructuredSelector
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection, 
});
export default connect(mapStateToProps)(Directory);

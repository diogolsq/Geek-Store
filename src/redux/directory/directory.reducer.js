
const INITIAL_STATE = {
    sections: [{
        title: 'hats/helmets',
        imageUrl: '/images/supermancap.jpg',
        id: 1,
        linkUrl: 'shop/hats'
      },{
        title: 'clothes',
        imageUrl: '/images/bazinga.jpg',
        id: 2,
        linkUrl: 'shop/jackets'
      },{
        title: 'souvenirs',
        imageUrl: '/images/saverick.jpg',
        id: 3,
        linkUrl: 'shop/souvenirs'
      },{
        title: 'womens',
        imageUrl: '/images/woman.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },{
        title: 'mens',
        imageUrl: 'images/mannew.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'}
      ]
}


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default :
        return state;
    }
  
  };
  
  export default directoryReducer;
  
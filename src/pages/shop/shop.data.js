const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Dragon Shiryu Helmet',
        imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36744e27-20e1-4709-9202-5f137d509811/d8rjju2-a7483985-78d3-4543-b551-565ea7f8eec0.jpg/v1/fill/w_955,h_837,q_70,strp/dragon_helmet_saint_seiya_by_ilustrastudios_d8rjju2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04OTciLCJwYXRoIjoiXC9mXC8zNjc0NGUyNy0yMGUxLTQ3MDktOTIwMi01ZjEzN2Q1MDk4MTFcL2Q4cmpqdTItYTc0ODM5ODUtNzhkMy00NTQzLWI1NTEtNTY1ZWE3ZjhlZWMwLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.o7nd_VztSq7VF5XBDdnVXK6ToOtW1dfF413bz_a222E',
        price: 75
      },
      {
        id: 2,
        name: 'StormTrooper New Hope',
        imageUrl: 'https://www.rspropmasters.com/wp-content/uploads/2018/11/7F1A8084.jpg',
        price: 115
      },
      {
        id: 3,
        name: 'Superman Cap New Era',
        imageUrl:'/images/supermancap.jpg',
        price: 20
      },
      {
        id: 4,
        name: 'Megaman Helmet',
        imageUrl: '/images/megamanhelmet.png',
        price: 120
      },
      {
        id: 5,
        name: 'Dragon ball hat',
        imageUrl: '/images/goku.jpg',
        price: 43
      },
      {
        id: 6,
        name: 'Daft Punk',
        imageUrl: 'https://cdn.thisiswhyimbroke.com/images/daft-punk-helmet1.jpg',
        price: 250
      },
      {
        id: 7,
        name: 'd20',
        imageUrl: '/images/d20.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14
      },
      {
        id: 9,
        name: 'Bemo Bennie',
        imageUrl: '/images/bemo.jpg',
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Clothes',
    routeName: 'jackets',
    items: [
      {
        id: 10,
        name: 'Macfly Jacket',
        imageUrl: 'https://super.abril.com.br/wp-content/uploads/2018/07/martin.jpg?quality=70&strip=info&resize=680,453',
        price: 220
      },
      {
        id: 11,
        name: 'Bazinga Sheldon',
        imageUrl: '/images/bazinga.jpg',
        price: 280
      },
      {
        id: 12,
        name: 'Super man classic',
        imageUrl: '/images/man.png',
        price: 110
      },
      {
        id: 13,
        name: 'Wonder woman',
        imageUrl: '/images/woman.png',
        price: 160
      },
      {
        id: 14,
        name: 'Mr Meeseks',
        imageUrl: '/images/mrmeeseks.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'Pikachu',
        imageUrl: '/images/pikachu.jpg',
        price: 160
      },
      {
        id: 16,
        name: 'Super',
        imageUrl: '/images/girlpower.jpg',
        price: 190
      },
      {
        id: 17,
        name: 'Evil Queen Disney',
        imageUrl: '/images/evilqueen.jpg',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Souvenirs',
    routeName: 'souvenirs',
    items: [
      {
        id: 18,
        name: 'Batman Mug',
        imageUrl: '/images/batmanmug.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Save Rick Mug',
        imageUrl: '/images/saverick.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Hodor doormat',
        imageUrl: '/images/hodor.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'Lord of the Rings doormat',
        imageUrl: '/images/lotr.jpg',
        price: 165
      },
      {
        id: 22,
        name: 'Enter doormat',
        imageUrl: '/images/enter.jpg',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Wonder Woman shirt',
        imageUrl: '/images/woman.png',
        price: 25
      },
      {
        id: 24,
        name: 'Super heroin shirt',
        imageUrl: '/images/girlpower.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Evil Queen shirt',
        imageUrl: '/images/evilqueen.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Batman woman',
        imageUrl: '/images/batgirl.jpg',
        price: 25
      },
      {
        id: 27,
        name: 'Pikachu shirt',
        imageUrl: '/images/pikachu.jpg',
        price: 20
      },
      {
        id: 28,
        name: 'Hakuna Matata shirt',
        imageUrl: '/images/hakuna.jpg',
        price: 20
      },
      {
        id: 29,
        name: 'Star Wars blouse',
        imageUrl: '/images/sw.jpg',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Megaman shirt',
        imageUrl: '/images/mannew.jpg',
        price: 25
      },
      {
        id: 31,
        name: 'Mr meeseks',
        imageUrl: '/images/mrmeeseks.jpg',
        price: 20
      },
      {
        id: 32,
        name: 'Superman Classic',
        imageUrl: '/images/man.png',
        price: 25
      },
      {
        id: 33,
        name: 'Bazinga Sheldon',
        imageUrl: '/images/bazinga.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'Nasa Moleton',
        imageUrl: '/images/nasa.jpg',
        price: 50
      },
      {
        id: 35,
        name: 'Sony Ps4 Shirt',
        imageUrl: '/images/ps4.jpg',
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;



// original
// const SHOP_DATA = [
//   {
//     id: 1,
//     title: 'Hats',
//     routeName: 'hats',
//     items: [
//       {
//         id: 1,
//         name: 'Brown Brim',
//         imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
//         price: 25
//       },
//       {
//         id: 2,
//         name: 'Blue Beanie',
//         imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
//         price: 18
//       },
//       {
//         id: 3,
//         name: 'Brown Cowboy',
//         imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
//         price: 35
//       },
//       {
//         id: 4,
//         name: 'Grey Brim',
//         imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
//         price: 25
//       },
//       {
//         id: 5,
//         name: 'Green Beanie',
//         imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
//         price: 18
//       },
//       {
//         id: 6,
//         name: 'Palm Tree Cap',
//         imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
//         price: 14
//       },
//       {
//         id: 7,
//         name: 'Red Beanie',
//         imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
//         price: 18
//       },
//       {
//         id: 8,
//         name: 'Wolf Cap',
//         imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
//         price: 14
//       },
//       {
//         id: 9,
//         name: 'Blue Snapback',
//         imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
//         price: 16
//       }
//     ]
//   },
//   {
//     id: 2,
//     title: 'Sneakers',
//     routeName: 'sneakers',
//     items: [
//       {
//         id: 10,
//         name: 'Adidas NMD',
//         imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
//         price: 220
//       },
//       {
//         id: 11,
//         name: 'Adidas Yeezy',
//         imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
//         price: 280
//       },
//       {
//         id: 12,
//         name: 'Black Converse',
//         imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
//         price: 110
//       },
//       {
//         id: 13,
//         name: 'Nike White AirForce',
//         imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
//         price: 160
//       },
//       {
//         id: 14,
//         name: 'Nike Red High Tops',
//         imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
//         price: 160
//       },
//       {
//         id: 15,
//         name: 'Nike Brown High Tops',
//         imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
//         price: 160
//       },
//       {
//         id: 16,
//         name: 'Air Jordan Limited',
//         imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
//         price: 190
//       },
//       {
//         id: 17,
//         name: 'Timberlands',
//         imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
//         price: 200
//       }
//     ]
//   },
//   {
//     id: 3,
//     title: 'Jackets',
//     routeName: 'jackets',
//     items: [
//       {
//         id: 18,
//         name: 'Black Jean Shearling',
//         imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
//         price: 125
//       },
//       {
//         id: 19,
//         name: 'Blue Jean Jacket',
//         imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
//         price: 90
//       },
//       {
//         id: 20,
//         name: 'Grey Jean Jacket',
//         imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
//         price: 90
//       },
//       {
//         id: 21,
//         name: 'Brown Shearling',
//         imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
//         price: 165
//       },
//       {
//         id: 22,
//         name: 'Tan Trench',
//         imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
//         price: 185
//       }
//     ]
//   },
//   {
//     id: 4,
//     title: 'Womens',
//     routeName: 'womens',
//     items: [
//       {
//         id: 23,
//         name: 'Blue Tanktop',
//         imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
//         price: 25
//       },
//       {
//         id: 24,
//         name: 'Floral Blouse',
//         imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
//         price: 20
//       },
//       {
//         id: 25,
//         name: 'Floral Dress',
//         imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
//         price: 80
//       },
//       {
//         id: 26,
//         name: 'Red Dots Dress',
//         imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
//         price: 80
//       },
//       {
//         id: 27,
//         name: 'Striped Sweater',
//         imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
//         price: 45
//       },
//       {
//         id: 28,
//         name: 'Yellow Track Suit',
//         imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
//         price: 135
//       },
//       {
//         id: 29,
//         name: 'White Blouse',
//         imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
//         price: 20
//       }
//     ]
//   },
//   {
//     id: 5,
//     title: 'Mens',
//     routeName: 'mens',
//     items: [
//       {
//         id: 30,
//         name: 'Camo Down Vest',
//         imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
//         price: 325
//       },
//       {
//         id: 31,
//         name: 'Floral T-shirt',
//         imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
//         price: 20
//       },
//       {
//         id: 32,
//         name: 'Black & White Longsleeve',
//         imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
//         price: 25
//       },
//       {
//         id: 33,
//         name: 'Pink T-shirt',
//         imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
//         price: 25
//       },
//       {
//         id: 34,
//         name: 'Jean Long Sleeve',
//         imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
//         price: 40
//       },
//       {
//         id: 35,
//         name: 'Burgundy T-shirt',
//         imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
//         price: 25
//       }
//     ]
//   }
// ];

// export default SHOP_DATA;

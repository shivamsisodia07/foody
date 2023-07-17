import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
import {ImgTempUrl} from './config.js'

console.log(ImgTempUrl);
/*
        *Food app*

        header
            -logo
            -nav-items =home ,contact us,cart
        body
            -search bar
            - food cards =img,title,content,distance,rating
        footer
            -logo
            -copyrights

*/
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src='https://media.istockphoto.com/id/1038356020/vector/restaurant-icon.jpg?s=612x612&w=0&k=20&c=Tk_v3JuJA4lz_8ZRJi78xS4p75Idqt97uEtYJciVtFI= ' alt='logo'></img>
      <ul className="nav-items">
        <li>Home</li>
        <li>contact us</li>
        <li>cart</li>
      </ul>
    </div>
  );
};

const restaurantList=[
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "240669",
      "name": "Burger King",
      "uuid": "e5f0a419-cd1e-4110-9db1-418319dd5134",
      "city": "4",
      "area": "Adarsh Nagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 37,
      "minDeliveryTime": 37,
      "maxDeliveryTime": 37,
      "slaString": "37 MINS",
      "lastMileTravel": 2.9000000953674316,
      "slugs": {
        "restaurant": "burger-king-adarsh-nagar-gtb-nagar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "A-17, Upper Ground Floor, Adarsh Nagar, New Delhi 110034",
      "locality": "Indira Nagar",
      "parentId": 166,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.9 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "240669",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "lastMileTravel": 2.9000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "508851",
      "name": "Pizza Hut",
      "uuid": "f86e7562-5d33-42da-8741-1158829efe55",
      "city": "4",
      "area": "Azadpur",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 2.700000047683716,
      "slugs": {
        "restaurant": "pizza-hut-adarsh-nagar-gtb-nagar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "PIZZA HUT at Ground Floor, B-45, Rajan Babu Road, Adarsh Nagar, MODEL TOWN, North,Delhi, 110033",
      "locality": "Rajan babu road",
      "parentId": 721,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "508851",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 2.700000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "485068",
      "name": "Parth Foods",
      "uuid": "97f2a5e1-cbb4-4e8f-8ffd-bc71bd4e2d77",
      "city": "4",
      "area": "Shalimar Bagh",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "hqag6bogyv1j0w68iml5",
      "cuisines": [
        "Indian",
        "Snacks",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 41,
      "minDeliveryTime": 41,
      "maxDeliveryTime": 41,
      "slaString": "41 MINS",
      "lastMileTravel": 1,
      "slugs": {
        "restaurant": "parth-foods-gtb-nagar-gtb-nagar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "house no.-124/125, k-block, jahangir puri, DHAKA, MODEL TOWN, North , Delhi 110033",
      "locality": "Model Town",
      "parentId": 261842,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "485068",
        "deliveryTime": 41,
        "minDeliveryTime": 41,
        "maxDeliveryTime": 41,
        "lastMileTravel": 1,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "2.7",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "550729",
      "name": "The Burger Club",
      "uuid": "10adf5ea-49c5-44d1-be82-431fc15e9df6",
      "city": "4",
      "area": "Ashok vihar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "cc4hlzukqocjvzzl4ewh",
      "cuisines": [
        "American",
        "Beverages",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "slaString": "32 MINS",
      "lastMileTravel": 3.700000047683716,
      "slugs": {
        "restaurant": "the-burger-club-ashok-vihar-ashok-vihar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Plot No. 2, B Block, Block BD, West Shalimar Bagh, COMMUNITY CENTER, New Delhi, North West Delhi, Delhi, 110088",
      "locality": "Shalimar Bagh",
      "parentId": 2285,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 4600,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3.7 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "550729",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 3.700000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "65776",
      "name": "Paparizza - Woodfired Pizzas",
      "uuid": "8da22cfc-6d7e-42b1-9dd2-ec20e658d8e7",
      "city": "4",
      "area": "Hudson Lane",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "u3ubwcgga6rr9jdxxobx",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Continental"
      ],
      "tags": [
        
      ],
      "costForTwo": 45000,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 39,
      "minDeliveryTime": 39,
      "maxDeliveryTime": 39,
      "slaString": "39 MINS",
      "lastMileTravel": 7.199999809265137,
      "slugs": {
        "restaurant": "paparizza-gtb-nagar-gtb-nagar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "2518, Hudson Ln, Hudson Lane, GTB Nagar, Delhi, Delhi NCR-110009",
      "locality": "Delhi University",
      "parentId": 13711,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 8400,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8400",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7474660~p=7~eid=00000189-6563-78f9-17aa-6483008a073d~srvts=1689623165177",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7.1 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "65776",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "lastMileTravel": 7.199999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.9",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "382298",
      "name": "Pandit Ji Parantha Hut",
      "uuid": "291b8d18-1a87-4421-853f-3ae799799e6a",
      "city": "4",
      "area": "Ashok vihar",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "e1yq27rl8kvwelqly4bl",
      "cuisines": [
        "North Indian",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 46,
      "minDeliveryTime": 46,
      "maxDeliveryTime": 46,
      "slaString": "46 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "pandit-ji-parantha-hut-ashok-vihar-ashok-vihar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Plot no. 10, A- block, shop no. 3, community centre no. 2, ground floor ashok vihar phase 2, North west delhi, Rohini 110052",
      "locality": "2nd Phase",
      "parentId": 252329,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 6400,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 6400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "6400",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "382298",
        "deliveryTime": 46,
        "minDeliveryTime": 46,
        "maxDeliveryTime": 46,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "655874",
      "name": "Chinese Wok",
      "uuid": "70cfd214-9c40-4c93-8027-9d052f51fe1f",
      "city": "4",
      "area": "Adarsh Nagar",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "58ee0c742e8d56c3475db9ced65d2d47",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 18,
      "minDeliveryTime": 18,
      "maxDeliveryTime": 18,
      "slaString": "18 MINS",
      "lastMileTravel": 2.299999952316284,
      "slugs": {
        "restaurant": "chinese-wok-rajan-babu-road-mayur-vihar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Ground Floor, Property No- C-38, Rajan Babu Road, Adarsh Nagar, New Delhi, Rohini, North West , Delhi, 110033",
      "locality": "Rajan Babu Road",
      "parentId": 61955,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "655874",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "lastMileTravel": 2.299999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.6",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  }
];

const RestaurantCard=({name,cloudinaryImageId,cuisines,avgRating})=>{
  return(
    <div className="card">
      <a>
      <img className="card_img" src={ImgTempUrl+cloudinaryImageId} alt="card"></img>
      </a>
      <div>
        <h3 className="res_name">{name}</h3>
        <h6 className="cuisines">{cuisines.join(', ')}</h6>
        <h3 className="rating">{avgRating} rating</h3>
        
       
      </div>
    </div>
  );
}

const Body = () => {
return(
  <div className="container">
{restaurantList.map(
  (restaurant)=>(
    <RestaurantCard {...restaurant.data}></RestaurantCard>
  )
)}

 
  </div>
);
}

const Footer = () => {
  return(
    <div>
      footer
    </div>
  );
  }

const Applayout = () => {
  return (
    <>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
    </>
  
  );
};

root.render(<Applayout></Applayout>);

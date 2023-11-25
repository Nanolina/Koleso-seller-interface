import { ISectionType } from './types';

/**
 * Represents the catalog.
 * @typedef {Object} Catalog
 * @property {Section[]} sections - The sections of the catalog.
 */

/**
 * Represents a section in the catalog.
 * @typedef {Object} Section
 * @property {string} id - The unique identifier of the section.
 * @property {string} title - The title of the section.
 * @property {Category[]} [categories] - The categories within the section.
 */

/**
 * Represents a category in a section.
 * @typedef {Object} Category
 * @property {string} id - The unique identifier of the category.
 * @property {string} title - The title of the category.
 * @property {Subcategory[]} [subcategories] - The subcategories within the category.
 */

/**
 * Represents a subcategory in a category.
 * @typedef {Object} Subcategory
 * @property {string} id - The unique identifier of the subcategory.
 * @property {string} title - The title of the subcategory.
 */

export const data: ISectionType[] = [
  {
    id: 'd5bb60ad-0be2-49df-b200-1f17271fc0f2',
    title: 'Women',
    image: require('./assets/women.jpeg'),
    categories: [
      {
        id: '471cc5ce-a113-45e8-b2ea-0c74a0a0613c',
        title: 'Blouses and shirts',
        image: require('./assets/blouse.jpg'),
      },
      {
        id: 'd43001bd-2010-416c-9f5b-babd5c6fa7b2',
        title: 'Pants',
        image: require('./assets/pants.jpeg'),
      },
      {
        id: '55e915e7-52f4-4efe-bd7a-7c027c0003ca',
        title: 'Outerwear',
        image: require('./assets/outerwear.jpeg'),
      },
      {
        id: '5ffbce07-a646-4cb0-9cf3-12a3a9befcce',
        title: 'Sweater, turtlenecks, cardigans',
        image: require('./assets/sweater.jpeg'),
      },
      {
        id: '31acd67b-5734-4d5f-9c6d-71dfe38d964a',
        title: 'Jeans',
      },
      {
        id: '9f8cd49d-6f56-4569-b4e7-3da5a8d29284',
        title: 'Overalls',
      },
      {
        id: '32ae723a-09aa-4176-b9b8-c9f343673721',
        title: 'Suits',
      },
      {
        id: '4e3ecbfb-aeb5-4e99-8cde-7e02303dcfc2',
        title: 'Longsleeves',
      },
      {
        id: 'f772677c-752e-4018-945e-80e7a29cab7d',
        title: 'Jackets, vests, jackets',
      },
      {
        id: '206f9d6b-a09f-4a1f-a28d-5bba809a838c',
        title: 'Dresses and sundresses',
      },
      {
        id: '980ed803-8214-40f3-812c-243cd56bf2f9',
        title: 'Sweatshirts, sweatshirts and hoodies',
      },
      {
        id: '26531360-6b41-4d46-966b-6b3fa9968815',
        title: 'Tunics',
      },
      {
        id: 'ebe414c8-b366-4dbc-87a1-c1562300841f',
        title: 'T-shirts and tops',
      },
      {
        id: '6beced3f-8ffb-4cf7-aff2-7ded39c785e0',
        title: 'Robes',
      },
      {
        id: '842461c0-59b2-4736-bfef-800682ee5a81',
        title: 'Shorts',
      },
      {
        id: '88688324-21fd-4bb7-9491-226a653cd641',
        title: 'Skirts',
      },
      {
        id: '8357a341-b954-4a41-ba19-3683c6fa1bdc',
        title: 'Lingerie',
        image: require('./assets/lingerie.webp'),
        subcategories: [
          {
            id: '6fbb1d52-b017-49fa-9ecc-f565ef7f7102',
            title: 'Accessories',
            image: require('./assets/accessories.jpeg'),
          },
          {
            id: '3d174675-62e9-4979-8d04-11996ab00835',
            title: 'Bandages',
            image: require('./assets/bandages.jpeg'),
          },
          {
            id: '664eeb65-31d6-4738-ade4-0d9a5a21a016',
            title: 'Seamless',
            image: require('./assets/seamless.jpeg'),
          },
          {
            id: 'e9f8b8de-a54e-4397-8132-25d588956ae5',
            title: 'Bodysuits and corsets',
            image: require('./assets/corsets.jpeg'),
          },
          {
            id: '27b9c47d-4c33-48a1-8dc9-202d65481a88',
            title: 'Bras',
          },
          {
            id: '4341701a-fd70-4c17-918c-8d0ef78b3577',
            title: 'Pantyhose and stockings',
          },
          {
            id: '7de6dd66-5758-4e06-a82f-a819da2e1cab',
            title: 'Combinations and negligees',
          },
          {
            id: 'af48f4bf-ce86-495a-8944-d9cbff6296e8',
            title: 'Lingerie sets',
          },
          {
            id: '1510d221-0e83-44e4-92b9-b23486f9aa00',
            title: 'Corrective underwear',
          },
          {
            id: '3ab38080-9db7-4dcd-9cbf-29f9e944e457',
            title: 'T-shirts',
          },
          {
            id: 'e4e2cdf7-2803-44b8-9743-35181d0b9ce8',
            title: 'Thermal underwear',
          },
          {
            id: '931360f8-3fb0-4bd5-a2ef-ea691a6111e6',
            title: 'Underpants',
          },
        ],
      },
      {
        id: '1eb2d546-e019-41fe-a3a4-f673a907d1af',
        title: 'Moms-to-be',
      },
      {
        id: 'e87e98f3-03a7-4af0-a54d-2b1ffe55b8a9',
        title: 'Clothes for home',
      },
      {
        id: '72bfb0c2-a85d-4b0b-93ac-76ce3bbda703',
        title: 'Office',
      },

      {
        id: 'aab26bd1-9a3c-4ad6-925c-d2e3decea6c6',
        title: 'Beach',
      },
      {
        id: '7c84ab3f-564e-4ca9-bc0a-63eb8a6b642b',
        title: 'Wedding',
      },
    ],
  },
  {
    id: '727b5cd5-fc0e-4c86-8ff1-75e13dc9a0f6',
    title: 'Men',
    image: require('./assets/men.jpeg'),
  },
  {
    id: '36f04285-1bb0-43de-814f-ee0f3e5fdb7e',
    title: 'Kids',
    image: require('./assets/kids.jpeg'),
  },
  {
    id: 'ef7baf08-ef25-43bb-b388-739735e56c64',
    title: 'Shoes',
  },
  {
    id: 'aad1d894-0ad1-4244-877f-39c422f2a354',
    title: 'House',
  },
  {
    id: '38a3c75f-c7c6-4ff4-a935-9438a939f753',
    title: 'Beauty',
  },
  {
    id: '0f723c77-3287-4428-9829-71a146bfc9ed',
    title: 'Accessories',
  },
  {
    id: '3cd5e52c-9b51-4364-b881-e2aba242663b',
    title: 'Electronics',
  },
  {
    id: 'e0234256-21b6-4ac8-bb18-495ebbbc5ad4',
    title: 'Toys',
  },
  {
    id: '6ccc9e36-72eb-440a-bdda-ee8482581904',
    title: 'Furniture',
  },
  {
    id: '181dd551-e255-4b01-9a11-3e542b061540',
    title: 'Products',
  },
  {
    id: '7a9854ce-8f55-4dcf-9382-0a785805113d',
    title: 'Household appliances',
  },
  {
    id: '0b3b5cb3-6423-4e86-9121-2cb09d74c856',
    title: 'Pet products',
  },
  {
    id: 'c712c77b-5589-46ac-b8c5-f3041b1fe754',
    title: 'Sport',
  },
  {
    id: '9ffcb481-e63a-48fc-98e2-89583487897d',
    title: 'Auto goods',
  },
  {
    id: '3fb97373-d0da-44ee-8071-baef7b7082c8',
    title: 'Books',
  },
  {
    id: 'a4322a14-5f4c-447c-801d-03e46c0d8345',
    title: 'Jewelry',
  },
  {
    id: '46b051d6-0588-47c4-bead-c32636bb2a94',
    title: 'For repair',
  },
  {
    id: '601f81aa-52a5-485c-925f-d250befde0ba',
    title: 'Garden and cottage',
  },
  {
    id: '2255947c-c982-4d11-ab8a-fa08bc8c10f7',
    title: 'Health',
  },
  {
    id: '77b0b5e2-b63d-437d-8ab2-df395c2fb287',
    title: 'Stationery',
  },
];

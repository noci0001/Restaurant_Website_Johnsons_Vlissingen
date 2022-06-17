import images from './images';

const bagels = [
  {
    title: 'Summer Bagel',
    price: '7,50',
    ingredients: 'With pulled oats, carrot, fresh lettuce, a homemade jalapeño sauce and haver fraiche',
    tags: 'Vegan',
  },
  {
    title: 'Red Bagel',
    price: '7,50',
    ingredients: 'Italian touch with haverspread, lettuce, avocado and sun-dried tomatoes.',
    tags: 'Vegan',
  },
  {
    title: 'Purple Bagel',
    price: '7,50',
    ingredients: 'Freshly roasted with fresh lettuce, goat cheese, walnuts and honey mustard sauce.',
    tags: 'Vegetarian',
  },
  {
    title: 'Yellow Bagel',
    price: '7,50',
    ingredients: 'Spicy touch with fresh lettuce, smoked chicken, mango and piri piri sauce.',
    tags: '',
  },
  {
    title: 'Green Bagel',
    price: '7,50',
    ingredients: 'Taste the salty sea with chive dill sauce, fresh lettuce, smoked salmon and sesame seeds.',
    tags: '',
  },
  { 
    title: 'Orange Bagel',
    price: '7,50',
    ingredients: 'Fresh and slightly sweet with fresh lettuce, smoked chicken, mango and piri piri sauce.',
    tags: '',
  },
  { 
    title: 'Kids Bagel',
    price: '5,50',
    ingredients: 'With vegan chocolate spread + fresh fruit with whipped cream + 0,50',
    tags: '',
  },
];

const bowls = [
  {
    title: 'Vegan',
    price: '7,50',
    ingredients: 'With pulled oats, carrot, fresh lettuce, a homemade jalapeño sauce and haver fraiche',
    tags: 'Vegan',
  },
  {
    title: 'Falafel',
    price: '7,50',
    ingredients: 'Italian touch with haverspread, lettuce, avocado and sun-dried tomatoes.',
    tags: '',
  },
  {
    title: 'Chicken-Quinoa',
    price: '7,50',
    ingredients: 'Freshly roasted with fresh lettuce, goat cheese, walnuts and honey mustard sauce.',
    tags: '',
  },
  {
    title: 'Zalm',
    price: '7,50',
    ingredients: 'Spicy touch with fresh lettuce, smoked chicken, mango and piri piri sauce.',
    tags: '',
  },
  {
    title: 'Geitenkaas',
    price: '7,50',
    ingredients: 'Taste the salty sea with chive dill sauce, fresh lettuce, smoked salmon and sesame seeds.',
    tags: 'Vegetarian',
  },
];

const wraps = [
  {
    title: 'Vegan',
    price: '9,50',
    ingredients: 'With pulled oats, carrot, fresh lettuce, a homemade jalapeño sauce and haver fraiche',
    tags: 'Vegan',
  },
  {
    title: 'Falafel',
    price: '9,50',
    ingredients: 'Italian touch with haverspread, lettuce, avocado and sun-dried tomatoes.',
    tags: 'Vegan',
  },
  {
    title: 'Kip and Mango',
    price: '9,50',
    ingredients: 'Freshly roasted with fresh lettuce, goat cheese, walnuts and honey mustard sauce.',
    tags: '',
  },
  {
    title: 'Salmon',
    price: '9,50',
    ingredients: 'Spicy touch with fresh lettuce, smoked chicken, mango and piri piri sauce.',
    tags: '',
  },
  {
    title: 'Goatcheese',
    price: '9,50',
    ingredients: 'Taste the salty sea with chive dill sauce, fresh lettuce, smoked salmon and sesame seeds.',
    tags: 'Vegetarian',
  },
  { 
    title: 'Kids',
    price: '5,50',
    ingredients: 'Fresh and slightly sweet with fresh lettuce, smoked chicken, mango and piri piri sauce.',
    tags: '',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { bagels, bowls, wraps, awards };

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'item-1',
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400'
  },
  {
    id: 'item-2',
    name: 'Chicken Burger',
    description: 'Grilled chicken patty with lettuce, tomato, and special sauce',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400'
  },
  {
    id: 'item-3',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with Caesar dressing, croutons, and parmesan',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400'
  },
  {
    id: 'item-4',
    name: 'Pasta Carbonara',
    description: 'Creamy pasta with bacon, eggs, and parmesan cheese',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400'
  },
  {
    id: 'item-5',
    name: 'Sushi Platter',
    description: 'Assorted sushi rolls with wasabi and ginger',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400'
  },
  {
    id: 'item-6',
    name: 'Chocolate Brownie',
    description: 'Rich chocolate brownie with vanilla ice cream',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400'
  },
  {
    id: 'item-7',
    name: 'BBQ Ribs',
    description: 'Tender pork ribs with smoky BBQ sauce and coleslaw',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400'
  },
  {
    id: 'item-8',
    name: 'Fish Tacos',
    description: 'Grilled fish tacos with cabbage slaw and chipotle mayo',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400'
  },
  {
    id: 'item-9',
    name: 'Veggie Wrap',
    description: 'Healthy wrap with hummus, grilled vegetables, and feta cheese',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400'
  },
  {
    id: 'item-10',
    name: 'Pepperoni Pizza',
    description: 'Classic pizza loaded with pepperoni and mozzarella cheese',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400'
  },

  {
    id: 'item-12',
    name: 'Chicken Wings',
    description: 'Crispy chicken wings with buffalo sauce and ranch dip',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400'
  },
  {
    id: 'item-13',
    name: 'Pad Thai',
    description: 'Thai stir-fried noodles with shrimp, peanuts, and lime',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400'
  },
  {
    id: 'item-14',
    name: 'Greek Gyro',
    description: 'Pita bread filled with lamb, tzatziki, tomatoes, and onions',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=400'
  },
  {
    id: 'item-15',
    name: 'Mushroom Risotto',
    description: 'Creamy Italian rice with wild mushrooms and parmesan',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1609770424775-39ec362f2d94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaHJvb20lMjByaXNvdHRvfGVufDB8fDB8fHww'
  },
  {
    id: 'item-16',
    name: 'Lobster Roll',
    description: 'Fresh lobster meat in a buttered roll with mayo and celery',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=400'
  },
  {
    id: 'item-17',
    name: 'Chicken Tikka Masala',
    description: 'Tender chicken in creamy tomato curry sauce with naan bread',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400'
  },
  {
    id: 'item-18',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400'
  },
  {
  id: 'item-19',
  name: 'Spicy Ramen',
  description: 'Japanese noodle soup with chili broth, pork slices, and soft egg',
  price: 13.49,
  image: 'https://plus.unsplash.com/premium_photo-1676316419643-a5a20b0d77eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3BpY3klMjBSYW1lbnxlbnwwfHwwfHx8MA%3D%3D'
},
{
  id: 'item-20',
  name: 'Avocado Toast',
  description: 'Toasted sourdough topped with smashed avocado and cherry tomatoes',
  price: 6.99,
  image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=400'
},
{
  id: 'item-21',
  name: 'Falafel Bowl',
  description: 'Crispy falafel with quinoa, hummus, and fresh veggies',
  price: 10.49,
  image: 'https://plus.unsplash.com/premium_photo-1668618296683-f18d9d6731dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmFsYWZlbCUyMEJvd2x8ZW58MHx8MHx8fDA%3D'
},
{
  id: 'item-22',
  name: 'Shrimp Alfredo',
  description: 'Fettuccine pasta in creamy Alfredo sauce with grilled shrimp',
  price: 15.99,
  image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400'
},
{
  id: 'item-23',
  name: 'Turkey Club Sandwich',
  description: 'Triple-layer sandwich with turkey, bacon, lettuce, and tomato',
  price: 9.49,
  image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400'
},
{
  id: 'item-24',
  name: 'Loaded Nachos',
  description: 'Tortilla chips topped with cheese, jalapeños, salsa, and sour cream',
  price: 8.99,
  image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400'
},

{
  id: 'item-26',
  name: 'Tom Yum Soup',
  description: 'Thai hot and sour soup with shrimp and mushrooms',
  price: 7.49,
  image: 'https://images.unsplash.com/photo-1628430043175-0e8820df47c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9tJTIwWXVtJTIwU291cHxlbnwwfHwwfHx8MA%3D%3D'
},
{
  id: 'item-27',
  name: 'French Fries',
  description: 'Crispy golden fries served with ketchup',
  price: 3.99,
  image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400'
},
{
  id: 'item-28',
  name: 'Onion Rings',
  description: 'Battered and deep-fried onion rings with dipping sauce',
  price: 4.49,
  image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400'
},
{
  id: 'item-29',
  name: 'Blueberry Pancakes',
  description: 'Fluffy pancakes topped with fresh blueberries and syrup',
  price: 7.99,
  image: 'https://plus.unsplash.com/premium_photo-1692193554212-6a27903ab9c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qmx1ZWJlcnJ5JTIwUGFuY2FrZXN8ZW58MHx8MHx8fDA%3D'
},
{
  id: 'item-30',
  name: 'Grilled Salmon',
  description: 'Fresh salmon fillet grilled and served with lemon butter',
  price: 17.99,
  image: 'https://plus.unsplash.com/premium_photo-1723478417559-2349252a3dda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3JpbGxlZCUyMFNhbG1vbnxlbnwwfHwwfHx8MA%3D%3D'
},
{
  id: 'item-31',
  name: 'Cheese Quesadilla',
  description: 'Grilled tortilla filled with melted cheese and salsa',
  price: 8.49,
  image: 'https://images.unsplash.com/photo-1628838233717-be047a0b54fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hlZXNlJTIwUXVlc2FkaWxsYXxlbnwwfHwwfHx8MA%3D%3D'
},
{
  id: 'item-32',
  name: 'Spinach Lasagna',
  description: 'Layered pasta with spinach, ricotta, and tomato sauce',
  price: 12.49,
  image: 'https://plus.unsplash.com/premium_photo-1723770033472-0b0452d98225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3BpbmFjaCUyMExhc2FnbmF8ZW58MHx8MHx8fDA%3D'
},
{
  id: 'item-33',
  name: 'Hot Dog',
  description: 'Classic hot dog with mustard and relish',
  price: 5.49,
  image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400'
},
{
  id: 'item-34',
  name: 'Chicken Shawarma',
  description: 'Middle Eastern wrap with spiced chicken and garlic sauce',
  price: 10.99,
  image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400'
},
{
  id: 'item-35',
  name: 'Veggie Pizza',
  description: 'Pizza topped with bell peppers, olives, onions, and mushrooms',
  price: 13.49,
  image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400'
},
{
  id: 'item-36',
  name: 'Mango Smoothie',
  description: 'Refreshing mango smoothie blended with yogurt',
  price: 4.99,
  image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400'
},
{
  id: 'item-37',
  name: 'Iced Coffee',
  description: 'Cold brewed coffee served over ice',
  price: 3.99,
  image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400'
},
{
  id: 'item-38',
  name: 'Vanilla Milkshake',
  description: 'Creamy vanilla milkshake topped with whipped cream',
  price: 5.49,
  image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400'
},
{
  id: 'item-39',
  name: 'Chicken Caesar Wrap',
  description: 'Grilled chicken with Caesar dressing wrapped in tortilla',
  price: 9.99,
  image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400'
},

{
  id: 'item-41',
  name: 'Clam Chowder',
  description: 'Creamy New England clam chowder soup',
  price: 8.49,
  image: 'https://images.unsplash.com/photo-1560684352-8497838a2229?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2xhbSUyMENob3dkZXJ8ZW58MHx8MHx8fDA%3D'
},
{
  id: 'item-42',
  name: 'Egg Fried Rice',
  description: 'Stir-fried rice with eggs, vegetables, and soy sauce',
  price: 9.49,
  image: 'https://images.unsplash.com/photo-1642972420043-4736c570a716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWdnJTIwRnJpZWQlMjBSaWNlfGVufDB8fDB8fHww'
},
{
  id: 'item-43',
  name: 'Butter Croissant',
  description: 'Flaky French croissant baked fresh',
  price: 2.99,
  image: 'https://images.unsplash.com/photo-1681218079567-35aef7c8e7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnV0dGVyJTIwQ3JvaXNzYW50fGVufDB8fDB8fHww'
},

{
  id: 'item-45',
  name: 'Stuffed Bell Peppers',
  description: 'Bell peppers filled with rice, vegetables, and herbs',
  price: 11.49,
  image: 'https://images.unsplash.com/photo-1673646960062-9aeb2188335f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3R1ZmZlZCUyMEJlbGwlMjBQZXBwZXJzfGVufDB8fDB8fHww'
},
{
  id: 'item-46',
  name: 'Churros',
  description: 'Crispy fried dough sticks coated in cinnamon sugar',
  price: 4.99,
  image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400'
},
{
  id: 'item-47',
  name: 'Minestrone Soup',
  description: 'Italian vegetable soup with beans and pasta',
  price: 7.99,
  image: 'https://plus.unsplash.com/premium_photo-1669831178095-005ed789250a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWluZXN0cm9uZSUyMFNvdXB8ZW58MHx8MHx8fDA%3D'
},
{
  id: 'item-48',
  name: 'Grilled Cheese Sandwich',
  description: 'Toasted bread with melted cheddar cheese',
  price: 5.99,
  image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400'
},
{
  id: 'item-49',
  name: 'Banana Split',
  description: 'Ice cream dessert with banana, chocolate syrup, and nuts',
  price: 6.49,
  image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400'
},
{
  id: 'item-50',
  name: 'Teriyaki Chicken Bowl',
  description: 'Grilled chicken glazed with teriyaki sauce over steamed rice',
  price: 12.49,
  image: 'https://images.unsplash.com/photo-1636401870585-a8852371e84a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGVyaXlha2klMjBDaGlja2VuJTIwQm93bHxlbnwwfHwwfHx8MA%3D%3D'
}
];

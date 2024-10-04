// src/data/products.js
import image1b from '../assets/image1b.jpg';
import image2b from '../assets/image2b.jpg';
import image3b from '../assets/image3b.jpg';
import image4b from '../assets/image4b.jpg';
import image5b from '../assets/image5b.jpg';
import image6b from '../assets/image6b.jpg';
import image7b from '../assets/image7b.jpg';
import image8b from '../assets/image8b.jpg';
import image9b from '../assets/image9b.jpg';
import image10b from '../assets/image10b.jpg';
import image11b from '../assets/image11b.jpg';
import image12b from '../assets/image12b.jpg';
import image13 from '../assets/image13.jpg';
import image14 from '../assets/image14.jpg';
import image15 from '../assets/image15.jpg';
import image16 from '../assets/image16.jpg';
import image17 from '../assets/image17.jpg';
import image18 from '../assets/image18.jpg';
import image19 from '../assets/image19.jpg';
import image20 from '../assets/image20.jpg';
import image21 from '../assets/image21.jpg';
import image22 from '../assets/image22.jpg';
import image23 from '../assets/image23.jpg';
import image24 from '../assets/image24.jpg';
import image25 from '../assets/image25.jpg';
import image26 from '../assets/image26.jpg';
import image27 from '../assets/image27.jpg';
import image28 from '../assets/image28.jpg';
import image29 from '../assets/image29.jpg';
import image30 from '../assets/image30.jpg';
import image31 from '../assets/image31.jpg';
import image32 from '../assets/image32.jpg';
import image33 from '../assets/image33.jpg';
import image34 from '../assets/image34.jpg';
import image35 from '../assets/image35.jpg';
import image36 from '../assets/image36.jpg';
import image37 from '../assets/image37.jpg';
import image38 from '../assets/image38.jpg';
import image39 from '../assets/image39.jpg';
import image40 from '../assets/image40.jpg';
import image41 from '../assets/image41.jpg';
import image42 from '../assets/image42.jpg';
import image43 from '../assets/image43.jpg';
import image44 from '../assets/image44.jpg';
import image45 from '../assets/image45.jpg';
import image46 from '../assets/image46.jpg';
import image47 from '../assets/image47.jpg';
import image48 from '../assets/image48.jpg';
import image49 from '../assets/image49.jpg';
import image50 from '../assets/image50.jpg';
import image51 from '../assets/image51.jpg';
import image52 from '../assets/image52.jpg';




const products = [
  // Furniture (12 objects)
  { id: 1, name: 'Nordic Sofa', category: 'Furniture', company: 'IKEA', price: 799.99, freeShipping: true, image: image1b, description: 'This sofa brings Scandinavian simplicity to your living room, with sleek lines and comfortable cushions.', colors: ['#c0c0c0', '#8b4513'] },
  { id: 2, name: 'Urban Coffee Table', category: 'Furniture', company: 'IKEA', price: 149.99, freeShipping: false, image: image2b, description: 'A modern coffee table with a rustic finish, perfect for a contemporary living space.', colors: ['#deb887', '#ffffff'] },
  { id: 3, name: 'Modern Lounge Chair', category: 'Furniture', company: 'IKEA', price: 249.99, freeShipping: true, image: image3b, description: 'A stylish and comfortable lounge chair that adds an edge to your room decor.', colors: ['#000000', '#808080'] },
  { id: 4, name: 'Compact Bookshelf', category: 'Furniture', company: 'IKEA', price: 99.99, freeShipping: false, image: image4b, description: 'A sleek and compact bookshelf to store all your favorite reads and decor pieces.', colors: ['#663399', '#ffffff'] },
  { id: 5, name: 'Rustic Dining Table', category: 'Furniture', company: 'Wayfair', price: 999.99, freeShipping: true, image: image5b, description: 'Handcrafted dining table that adds a touch of rustic elegance to your dining area.', colors: ['#8b4513', '#f5deb3'] },
  { id: 6, name: 'Vintage Bed Frame', category: 'Furniture', company: 'Wayfair', price: 699.99, freeShipping: false, image: image6b, description: 'A classic bed frame with a vintage finish, bringing timeless style to your bedroom.', colors: ['#ffffff', '#a52a2a'] },
  { id: 7, name: 'Luxury Armchair', category: 'Furniture', company: 'Wayfair', price: 299.99, freeShipping: true, image: image7b, description: 'A plush armchair that combines luxury with comfort, perfect for your living space.', colors: ['#8b0000', '#ff6347'] },
  { id: 8, name: 'Minimalist TV Stand', category: 'Furniture', company: 'Wayfair', price: 199.99, freeShipping: false, image: image8b, description: 'A sleek TV stand that complements your modern living room with its minimalist design.', colors: ['#2f4f4f', '#f0e68c'] },
  { id: 9, name: 'Mid-Century Console Table', category: 'Furniture', company: 'West Elm', price: 549.99, freeShipping: true, image: image9b, description: 'This console table captures mid-century charm with its clean lines and sophisticated style.', colors: ['#00008b', '#d2691e'] },
  { id: 10, name: 'Sophisticated Bedside Table', category: 'Furniture', company: 'West Elm', price: 199.99, freeShipping: false, image: image10b, description: 'A chic bedside table that pairs perfectly with your bedroom decor.', colors: ['#a9a9a9', '#ffffff'] },
  { id: 11, name: 'Contemporary Desk', category: 'Furniture', company: 'West Elm', price: 449.99, freeShipping: true, image: image11b, description: 'A stylish desk designed for modern workspaces, featuring sleek lines and ample storage.', colors: ['#4682b4', '#696969'] },
  { id: 12, name: 'Cozy Recliner', category: 'Furniture', company: 'West Elm', price: 699.99, freeShipping: false, image: image12b, description: 'An ultra-cozy recliner chair perfect for relaxation and comfort.', colors: ['#2e8b57', '#f0f8ff'] },
  
  // Home Decor (6 objects)
  { id: 13, name: 'Bohemian Wall Hanging', category: 'Home Decor', company: 'Wayfair', price: 49.99, freeShipping: true, image: image13, description: 'A beautiful wall hanging that brings bohemian vibes to any space.', colors: ['#ffdead', '#8b4513'] },
  { id: 14, name: 'Abstract Rug', category: 'Home Decor', company: 'Wayfair', price: 199.99, freeShipping: false, image: image14, description: 'An abstract-patterned rug that adds a splash of color and style to your floor.', colors: ['#800080', '#f0e68c'] },
  { id: 15, name: 'Modern Vase Set', category: 'Home Decor', company: 'Wayfair', price: 69.99, freeShipping: true, image: image15, description: 'A set of modern vases to display your favorite flowers elegantly.', colors: ['#708090', '#ffffff'] },
  { id: 16, name: 'Vintage Mirror', category: 'Home Decor', company: 'Wayfair', price: 129.99, freeShipping: false, image: image16, description: 'A vintage mirror that adds charm and elegance to any room.', colors: ['#c0c0c0', '#f5f5dc'] },
  { id: 17, name: 'Geometric Throw Pillows', category: 'Home Decor', company: 'Wayfair', price: 59.99, freeShipping: true, image: image17, description: 'Stylish throw pillows featuring geometric patterns for a modern look.', colors: ['#ffa500', '#008080'] },
  { id: 18, name: 'Decorative Wall Clock', category: 'Home Decor', company: 'Wayfair', price: 89.99, freeShipping: false, image: image18, description: 'A decorative wall clock that blends functionality with aesthetics.', colors: ['#2f4f4f', '#f5f5f5'] },

  // Kitchen & Dining (8 objects)
  { id: 19, name: 'Classic Dinnerware Set', category: 'Kitchen & Dining', company: 'Crate & Barrel', price: 199.99, freeShipping: true, image: image19, description: 'A timeless dinnerware set perfect for both casual and formal dining.', colors: ['#ffffff', '#d2691e'] },
  { id: 20, name: 'Stainless Steel Cookware Set', category: 'Kitchen & Dining', company: 'Crate & Barrel', price: 299.99, freeShipping: false, image: image20, description: 'Premium stainless steel cookware set for all your culinary needs.', colors: ['#808080', '#ff0000'] },
  { id: 21, name: 'Ceramic Bakeware Set', category: 'Kitchen & Dining', company: 'Crate & Barrel', price: 149.99, freeShipping: true, image: image21, description: 'Durable ceramic bakeware set to bake your favorite dishes with style.', colors: ['#f0e68c', '#8b0000'] },
  { id: 22, name: 'Wine Glass Set', category: 'Kitchen & Dining', company: 'Crate & Barrel', price: 79.99, freeShipping: false, image: image22, description: 'Elegant wine glasses designed to enhance your wine-tasting experience.', colors: ['#ffffff', '#b22222'] },
  { id: 23, name: 'Non-Stick Fry Pan', category: 'Kitchen & Dining', company: 'Williams Sonoma', price: 69.99, freeShipping: true, image: image23, description: 'A versatile non-stick fry pan, ideal for cooking a variety of dishes.', colors: ['#000000', '#ff8c00'] },
  { id: 24, name: 'Electric Kettle', category: 'Kitchen & Dining', company: 'Williams Sonoma', price: 99.99, freeShipping: false, image: image24, description: 'A sleek electric kettle for quick and efficient boiling.', colors: ['#4682b4', '#dcdcdc'] },
  { id: 25, name: 'Mixing Bowl Set', category: 'Kitchen & Dining', company: 'Williams Sonoma', price: 59.99, freeShipping: true, image: image25, description: 'A set of mixing bowls perfect for all your baking and cooking needs.', colors: ['#ff69b4', '#ffa500'] },
  { id: 26, name: 'Espresso Machine', category: 'Kitchen & Dining', company: 'Williams Sonoma', price: 499.99, freeShipping: false, image: image26, description: 'Make café-quality espresso at home with this advanced espresso machine.', colors: ['#2f4f4f', '#ff4500'] },

  // Bedding & Bath (8 objects)
  { id: 27, name: 'Organic Cotton Sheet Set', category: 'Bedding & Bath', company: 'Bed Bath & Beyond', price: 129.99, freeShipping: true, image: image27, description: 'Soft and breathable organic cotton sheets for a comfortable sleep.', colors: ['#ffffff', '#b0e0e6'] },
  { id: 28, name: 'Memory Foam Pillow', category: 'Bedding & Bath', company: 'Bed Bath & Beyond', price: 69.99, freeShipping: false, image: image28, description: 'A contoured memory foam pillow that supports your head and neck.', colors: ['#add8e6', '#ffffff'] },
  { id: 29, name: 'Luxury Bath Towels', category: 'Bedding & Bath', company: 'Bed Bath & Beyond', price: 49.99, freeShipping: true, image: image29, description: 'Ultra-soft bath towels that bring spa-like comfort to your home.', colors: ['#ffe4b5', '#5f9ea0'] },
  { id: 30, name: 'Quilted Comforter', category: 'Bedding & Bath', company: 'Bed Bath & Beyond', price: 199.99, freeShipping: false, image: image30, description: 'A cozy quilted comforter designed for warmth and comfort.', colors: ['#8b4513', '#ffffff'] },
  { id: 31, name: 'Modern Shower Curtain', category: 'Bedding & Bath', company: 'Bed Bath & Beyond', price: 39.99, freeShipping: true, image: image31, description: 'Add a contemporary touch to your bathroom with this modern shower curtain.', colors: ['#ff7f50', '#ffffff'] },
  { id: 32, name: 'Bath Mat Set', category: 'Bedding & Bath', company: 'Bed Bath & Beyond', price: 59.99, freeShipping: false, image: image32, description: 'Soft and absorbent bath mat set to complete your bathroom decor.', colors: ['#2e8b57', '#f5f5dc'] },
  { id: 33, name: 'Plush Throw Blanket', category: 'Bedding & Bath', company: 'Bed Bath & Beyond', price: 79.99, freeShipping: true, image: image33, description: 'Wrap yourself in warmth and comfort with this plush throw blanket.', colors: ['#800000', '#ffa07a'] },
  { id: 34, name: 'Lavender Scented Candle', category: 'Bedding & Bath', company: 'Bed Bath & Beyond', price: 29.99, freeShipping: false, image: image34, description: 'Relax with the soothing scent of lavender from this luxury candle.', colors: ['#dda0dd', '#8b008b'] },

  // Lighting (6 objects)
  { id: 35, name: 'Glass Pendant Light', category: 'Lighting', company: 'West Elm', price: 149.99, freeShipping: true, image: image35, description: 'A sleek glass pendant light to illuminate your space with style.', colors: ['#ffffff', '#ffa07a'] },
  { id: 36, name: 'Modern Floor Lamp', category: 'Lighting', company: 'West Elm', price: 299.99, freeShipping: false, image: image36, description: 'A chic floor lamp with a modern design, perfect for reading corners.', colors: ['#000000', '#c0c0c0'] },
  { id: 37, name: 'Wall Sconce', category: 'Lighting', company: 'West Elm', price: 99.99, freeShipping: true, image: image37, description: 'A sophisticated wall sconce that brings warmth to your home.', colors: ['#708090', '#ffffff'] },
  { id: 38, name: 'Desk Lamp', category: 'Lighting', company: 'West Elm', price: 59.99, freeShipping: false, image: image38, description: 'A compact desk lamp with adjustable brightness settings.', colors: ['#4682b4', '#b22222'] },
  { id: 39, name: 'Chandelier', category: 'Lighting', company: 'West Elm', price: 599.99, freeShipping: true, image: image39, description: 'A grand chandelier that adds a luxurious touch to any room.', colors: ['#f5f5f5', '#d2691e'] },
  { id: 40, name: 'Nightstand Lamp', category: 'Lighting', company: 'West Elm', price: 79.99, freeShipping: false, image: image40, description: 'A stylish nightstand lamp for cozy bedside lighting.', colors: ['#ffdead', '#2f4f4f'] },

  // Electronics (12 objects)
  { id: 41, name: 'Galaxy S21', category: 'Electronics', company: 'Samsung', price: 799.99, freeShipping: true, image: image41, description: 'Samsung Galaxy S21 with an edge-to-edge display and cutting-edge features.', colors: ['#000000', '#ffffff'] },
  { id: 42, name: 'Galaxy Buds Pro', category: 'Electronics', company: 'Samsung', price: 199.99, freeShipping: false, image: image42, description: 'High-quality earbuds with active noise cancellation and immersive sound.', colors: ['#8b008b', '#f5f5f5'] },
  { id: 43, name: 'Samsung Smart TV', category: 'Electronics', company: 'Samsung', price: 999.99, freeShipping: false, image: image43, description: 'Experience cinema-quality visuals with this Samsung Smart TV.', colors: ['#2f4f4f', '#f0e68c'] },
  { id: 44, name: 'Sony Alpha Camera', category: 'Electronics', company: 'Sony', price: 1499.99, freeShipping: true, image: image44, description: 'Capture stunning photos and videos with the Sony Alpha Camera.', colors: ['#ffffff', '#696969'] },
  { id: 45, name: 'Sony Bluetooth Speaker', category: 'Electronics', company: 'Sony', price: 299.99, freeShipping: false, image: image45, description: 'Portable Bluetooth speaker with powerful sound and deep bass.', colors: ['#ff4500', '#000000'] },
  { id: 46, name: 'Sony WH-1000XM4', category: 'Electronics', company: 'Sony', price: 349.99, freeShipping: false, image: image46, description: 'Noise-canceling headphones for an immersive listening experience.', colors: ['#708090', '#ffffff'] },
  { id: 47, name: 'iPhone 13', category: 'Electronics', company: 'Apple', price: 1099.99, freeShipping: true, image: image47, description: 'The latest iPhone 13 with an all-new design and advanced features.', colors: ['#000000', '#8b0000'] },
  { id: 48, name: 'Apple Watch Series 7', category: 'Electronics', company: 'Apple', price: 399.99, freeShipping: false, image: image48, description: 'Stay connected and monitor your health with the Apple Watch Series 7.', colors: ['#4682b4', '#f5f5f5'] },
  { id: 49, name: 'MacBook Pro', category: 'Electronics', company: 'Apple', price: 1999.99, freeShipping: false, image: image49, description: 'Powerful MacBook Pro with the latest M1 chip for unparalleled performance.', colors: ['#808080', '#000000'] },
  { id: 50, name: 'Google Nest Hub', category: 'Electronics', company: 'Alphabet', price: 129.99, freeShipping: true, image: image50, description: 'Control your smart home with ease using the Google Nest Hub.', colors: ['#ffffff', '#4682b4'] },
  { id: 51, name: 'Pixel 6', category: 'Electronics', company: 'Alphabet', price: 899.99, freeShipping: false, image: image51, description: 'The latest Google Pixel 6 with an intuitive design and high-end camera features.', colors: ['#000000', '#ff6347'] },
  { id: 52, name: 'Chromecast Ultra', category: 'Electronics', company: 'Alphabet', price: 69.99, freeShipping: false, image: image52, description: 'Stream in 4K HDR with the Google Chromecast Ultra.', colors: ['#808080', '#ffffff'] }
]




export default products;

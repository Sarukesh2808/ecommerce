--Project Overview--
The E-commerce Website is an online shopping platform that allows users to browse products in various categories such as groceries. 
Users can view product details, add items to their shopping cart, and complete their purchase. The admin can manage products, including adding, deleting, and updating stock.

This project is developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) and follows a well-structured design.
It includes user and admin functionalities, where users can shop and the admin can manage the product inventory.

--Features--
//User Features:
User Login: Basic user login .
Product List: Display products across different categories.
Product Details: View product details, images, price, and stock availability.
Add to Cart: Add products to the shopping cart.
Manage Cart: View, update, or remove items from the cart.
Purchase: Complete the checkout and purchase process.

//Admin Features:
Admin Login: Simple admin login (without password).
Add New Products: Admin can add new products, including images and descriptions.
Delete Products: Admin can remove products from the catalog.
Manage Inventory: Admin can update stock availability for each product.

--Technology Stack--

//Frontend:
React: JavaScript library for building the user interface.
React Router DOM: For navigation between pages.
Bootstrap: CSS framework for responsive design.
Axios: For handling API requests.

//Backend:
Node.js: JavaScript runtime environment for building the server.
Express.js: Web framework for handling routes and APIs.
MongoDB: NoSQL database for storing user and product data.
Mongoose: ODM (Object Data Modeling) library for MongoDB.

//Installation
Prerequisites:
Node.js installed on your local machine.
MongoDB (locally or hosted, e.g., MongoDB Atlas).

--Steps--

//Clone the Repository:
git clone https://github.com/Sarukesh2808/ecommerce.git
cd ecommerce

//Backend Setup:
Navigate to the backend directory:
cd backend

//Install dependencies:
npm install

//Configure environment variables in a .env file:
MONGO_URI=your_mongo_db_uri
Frontend Setup:

//Navigate to the frontend directory:
cd ../frontend
Install dependencies:
npm install

=====Run the Application Locally=====

//Start the backend server:
cd backend
npm start
The backend server will run on http://localhost:5000.

--Start the frontend server: In a separate terminal window, navigate to the frontend directory and run--
npm start
The frontend will run on http://localhost:3000.

==Usage==
User Actions:

Register:registration is needed;  access the website.
Browse Products: Explore the available products on the homepage.
Add to Cart: Add products to the shopping cart for purchase.
Checkout: Complete the checkout process for selected items.
Admin Actions:
Admin Login: Access the admin dashboard to manage products.
Manage Products: Add, edit, or delete products from the inventory.

=====Screenshots=====1
Homepage:
![{657912F3-B1CB-47B5-9444-BAC63E1AEA7F}](https://github.com/user-attachments/assets/1baeb26f-0023-46bb-8c9f-ae9548c17a70)


Product Details: 
![{57006E39-ED51-476E-87EF-6882754AF5BD}](https://github.com/user-attachments/assets/480a9cfe-5ff9-4eed-b44b-b6520ad206b6)


Cart Page: 
![{A9A9DBFF-0680-4E20-8132-D59487CE0EFB}](https://github.com/user-attachments/assets/660bbcdd-e20d-4aea-88a8-3647a8ccd779)


Admin Dashboard: 
![{4360B21E-A5A8-427E-95B4-8E6970C57D44}](https://github.com/user-attachments/assets/184105da-63a6-4036-b84c-1f2bcb198ac7)

Login page:
![{045DF7D1-2D9D-4D05-9EFF-62F812044DDD}](https://github.com/user-attachments/assets/10fb8a57-d860-4806-8d07-3d9ff2f713a3)

Register:
![{054EAB66-E5A7-44F8-9884-892FB4F5FA07}](https://github.com/user-attachments/assets/4255d7dc-ac09-4886-9fe1-73916c74bd9c)


Deployment
Deploying Locally:
You can deploy the app locally by following the installation and usage steps above. Ensure both frontend and backend are running simultaneously.

=====Deploying to Render=====

//Backend:

Create a new Web Service on Render and link your GitHub repository.
Set the root directory to backend.
Use npm install as the build command.
Use npm start as the start command.
Add the environment variable MONGO_URI.

//Frontend:

Create a new Static Site on Render and link your GitHub repository.
Set the root directory to frontend.
Use npm run build as the build command.
Set the publish directory to build.

# eComm Project Modules

## eComm User Facing WebApp
- **User**: Login, SignUp, Logout, Forgot Password, Reset Password, etc.
- **Product**: Product CRUD (Create, Read, Update, Delete), List products, Product Details.
- **Cart**: Add to cart, Remove from Cart, Wishlist, etc.
- **Checkout Module**: Placing an order, Making Payments, etc.
- **Misc**: View order history, etc.

## Seller Portal

## Admin Portal

## Roles
- Customer
- Seller
- Admin

--------

## API Authentication and Authorization

### Product List API
How will the product list API know that the user is logged in and WHICH USER IS CALLING THE API?
- When the user logs in, save `isLogged` as `true` in the users collection for that user.

### Unauthorized, Authorization, Authentication

- **Authentication**: To verify the user if they are the same user they claim to be (Login).
- **Authorization**: Verifying the access level (permission) of the user (Role of the user).

### JWT (Json Web Token)
- **abcd12345**: Plain Text
- **asdf&SF9738947ff30_!%^#**: Cipher Text

### Concepts
- **Encode / Decode**: Not related to security (Standard conversion for different systems), 2 Way Process.
- **Encryption / Decryption**: 2 Way process.
- **Hashing**: 1 Way Process.

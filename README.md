# FOODI online shop

## Table API Backend

| Model        | Controller        | Status | Method | HTTPS                           |
| ------------ | ----------------- | ------ | ------ | ------------------------------- |
| User         | register          | done   | POST   | /api/public/user/register       |
|              | login             | done   | POST   | /api/public/user/login          |
|              | getOneUser        | done   | GET    | /api/secured/user/              |
|              | updateUser        | done   | PUT    | /api/secured/user/              |
|              |                   |        |        |                                 |
| Address      | addAddress        | done   | POST   | /api/secured/address            |
|              | updateAddress     | done   | PUT    | /api/secured/address/:id        |
|              | getAddressByUser  | done   | GET    | /api/secured/address            |
|              |                   |        |        |                                 |
| Product      | getProducts       | done   | GET    | /api/secured/product/?category= |
|              | getOneProduct     | done   | GET    | /api/secured/product/:id        |
|              |                   |        |        |                                 |
| Category     | getCategories     | done   | GET    | /api/public/category/           |
|              |                   |        |        |                                 |
| Cart         | getCartItemByUser |        | GET    | /api/secured/cart/              |
|              | addCartItem       | done   | POST   | /api/secured/cart/:id           |
|              | updateCartItem    | done   | PUT    | /api/secured/cart/:id           |
|              | deleteCartItem    | done   | DELETE | /api/secured/cart/:id           |
|              |                   |        |        |                                 |
| Notification | addNotification   |        | POST   |                                 |
|              | getNotification   |        | GET    |                                 |

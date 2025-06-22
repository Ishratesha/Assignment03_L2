# Assignment03_L2
# 📚 Library Management System API

A complete Library Management System built with **Express**, **TypeScript**, **MongoDB**, and **Mongoose**, following the MVC pattern.

---

## 🚀 Features

* ✅ Create, read, update, and delete (CRUD) books
* 📖 Borrow books with real-time stock updates
* 📊 Get borrow summary using aggregation pipeline
* 🛡️ Input validation using Zod
* 🧱 Modular structure (MVC)

---

## 🛠️ Tech Stack

* **Backend**: Express, Node.js, TypeScript
* **Database**: MongoDB + Mongoose
* **Validation**: Zod
* **Dev Tools**: ts-node-dev

---

## 📂 Folder Structure

```
src/
├── app/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── validations/
|
└── app.ts
```

---

## 🧑‍💻 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/yourusername/library-management.git
cd library-management

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update MongoDB URI and PORT in .env

# Start the server
npm run dev
```

---

## 🔌 API Endpoints

### 📘 Books

#### Create Book

```
POST /api/books
```

```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5
}
```

#### Get All Books

```
GET /api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5
```

#### Get Book by ID

```
GET /api/books/:bookId
```

#### Update Book

```
PUT /api/books/:bookId
```

#### Delete Book

```
DELETE /api/books/:bookId
```

---

### 📖 Borrow

#### Borrow a Book

```
POST /api/borrow
```

```json
{
  "book": "64ab3f9e2a4b5c6d7e8f9012",
  "quantity": 2,
  "dueDate": "2025-07-18"
}
```

#### Borrow Summary

```
GET /api/borrow
```

Returns:

```json
[
  {
    "book": {
      "title": "The Theory of Everything",
      "isbn": "9780553380163"
    },
    "totalQuantity": 5
  }
]
```

---

## 🧪 Testing (Optional)

Use Postman or Insomnia to test the following:

* Book creation and listing
* Book update and deletion
* Borrow request validation
* Borrow summary aggregation

---

## 📄 License

MIT

---

## 👩‍💻 Author

**Your Name**
[@Ishratesha](https://github.com/Ishratesha)

---

For any questions or feedback, feel free to raise an issue.

Happy coding! 🎉

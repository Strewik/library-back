import React, { useState } from 'react';
import axios from 'axios';

const BorrowReturn = () => {
  const [userName, setUserName] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);

  const searchUser = async (searchQuery) => {
    try {
      const response = await axios.get(`http://localhost:5555/users?name=${searchQuery}`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error searching user:', error);
      alert('Failed to search user. Please try again.');
    }
  };

  const searchBook = async (searchQuery) => {
    try {
      const response = await axios.get(`http://localhost:5555/books?title=${searchQuery}`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error searching book:', error);
      alert('Failed to search book. Please try again.');
    }
  };

  const handleUserSelect = (selectedUser) => {
    // Fill user details in the form
    console.log('Selected User:', selectedUser);
    setUserName(selectedUser.name);
    // Fill user id in input field
    document.getElementById('userId').value = selectedUser._id;
  };

  const handleBookSelect = (selectedBook) => {
    // Fill book details in the form
    console.log('Selected Book:', selectedBook);
    setBookTitle(selectedBook.title);
    // Fill book id in input field
    document.getElementById('bookId').value = selectedBook._id;
  };

  const handleChange = (e, type) => {
    const { value } = e.target;
    if (type === 'user') {
      setUserName(value);
      searchUser(value);
    } else if (type === 'book') {
      setBookTitle(value);
      searchBook(value);
    }
  };

  return (
    <div>
      <h2>Borrow/Return Form</h2>
      <div>
        <label>User Name</label>
        <input type="text" value={userName} onChange={(e) => handleChange(e, 'user')} />
        <input type="hidden" id="userId" />
        <div>
          <h3>User List</h3>
          <ul>
            {users.map((user) => (
              <li key={user._id} onClick={() => handleUserSelect(user)}>
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <label>Book Title</label>
        <input type="text" value={bookTitle} onChange={(e) => handleChange(e, 'book')} />
        <input type="hidden" id="bookId" />
        <div>
          <h3>Book List</h3>
          <ul>
            {books.map((book) => (
              <li key={book._id} onClick={() => handleBookSelect(book)}>
                {book.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BorrowReturn;

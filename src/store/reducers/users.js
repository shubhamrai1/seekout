const initialState = {
  users: [
    {
      id: 1,
      firstName: 'Shubham',
      lastName: 'Rai',
      contact: "123456789",
      email: 'abcd@xyz.com',
      isAdmin: true
    },
    {
      id: 2,
      firstName: 'Shubham',
      lastName: 'Rai',
      contact: "123456789",
      email: 'abcd@xyz.com',
      isAdmin: true
    },
    {
      id: 3,
      firstName: 'Shubham',
      lastName: 'Rai',
      contact: "123456789",
      email: 'abcd@xyz.com',
      isAdmin: true
    },
    {
      id: 4,
      firstName: 'Shubham',
      lastName: 'Rai',
      contact: "123456789",
      email: 'abcd@xyz.com',
      isAdmin: true
    },
    {
      id: 5,
      firstName: 'Shubham',
      lastName: 'Rai',
      contact: "123456789",
      email: 'abcd@xyz.com',
      isAdmin: true
    },
    {
      id: 6,
      firstName: 'Shubham',
      lastName: 'Rai',
      contact: "123456789",
      email: 'abcd@xyz.com',
      isAdmin: true
    }
  ]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          users: [...state.users, action.payload]
        };
      case 'DELETE_USER':
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.payload)
        };
      default:
        return state;
    }
  };

export default userReducer;
  
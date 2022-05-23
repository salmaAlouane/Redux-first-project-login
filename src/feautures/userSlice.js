import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    valueObject: 
      {
        email:"" ,  
        nom: "" ,
        prenom: "" ,
        adresse: ""
      }
  };
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state,action) => {
            console.log('login');
            state.valueObject = action.payload ;
        },
        logout: (state) => {
            console.log('logout');
            state.valueObject = {
              email:"" ,  
              nom: "" ,
              prenom: "" ,
              adresse: ""
            } ;
        }
    }
    
  });

  export const { login, logout } = userSlice.actions;
  export const selectValueObject = (state) => state.user.valueObject; 
  export default userSlice.reducer;
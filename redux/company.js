import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  company_name: "",
  company_email: "",
  company_website: "",
  admin_email: "",
  admin_name: "",
  password: "",
  password_confirmation: "",
  member_name: "",
  member_email: "",
  database_link: ""
}

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    update: (state, action) => {
      return { ...state, ...action.payload }
    }
  }
})

export const { update } = companySlice.actions

export default companySlice.reducer

/* 
  address:null
  admin_id:null
  city:null
  company_id:null
  country:null
  created_at:"2023-06-24 18:32:53"
  email:"idowudaniel@gmail.com"
  fullname:"Idowu Daniel"
  is_active:"no"
  is_verified:"no"
  role:"admin"
  status:"1"
  token:"bXdzdUd6TnRPUkN2SnhVWElHcjk0YnV3emd2emhTQWhpNE1ab3FMWjRNeDEvUVh3SFVrMzZ6WmFmenNhZ3NwWG9NY1hVUElMWmVPTWRvN0dWUkVvczB1T0hGMGVRaFpXeTFYVXlYZmQ0eEU9"
  updated_at:"2023-06-24 18:32:53"
  username:null
  zip_code:null
  _id:"167cf4b0a06f0b46c2ed1cd263f3"


  address:null
  admin_id:null
  city:null
  company_id:null
  country: 
  null
  created_at:"2023-06-24 19:09:33"
  email:"idowudanielayotunde@gmail.com"
  fullname:"Idowu Daniel"
  is_active:"no"
  is_verified:"no"
  role:"admin"
  status:"1"
  token:"Sm5TV25IeENQV1kxL1dNa1NqeE1PRW5mRndqQnBPSnlkUEk5RnFjcHNUTGEya2U2OFlzL2IxclFVTGNlU2J2RFlzN1Z6MStCVFVGeFFDc1ZSUjAwdVU2b0xXY2U4dDlWdllSd3h2a0xUekU9"
  updated_at:"2023-06-24 19:09:33"
  username:null
  zip_code:null
  _id:"2a0fc504022d0e4a8b9f04142bc6"
*/
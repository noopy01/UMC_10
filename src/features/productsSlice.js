/*서버 통신 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
  error: null,
};

// Thunk를 사용하여 서버에서 데이터 가져오기
export const productsFetch = createAsyncThunk(
  'products/productsFetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:8080/products');
      return response.data;
    } catch (error) {
      // 에러의 응답 형식 점검
      const errorMessage = error.response ? error.response.data : (error.message ? error.message : "에러 발생");
      return rejectWithValue(errorMessage);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // 비동기 작업이 시작되면 'pending' 상태로 설정
      .addCase(productsFetch.pending, (state) => {
        state.status = "loading";
      })
      // 비동기 작업이 성공하면 'fulfilled' 상태로 설정
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      // 비동기 작업이 실패하면 'rejected' 상태로 설정
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        console.log("Error payload:", action.payload);
        if (action.payload) {
          // 문자열로 변환하여 alert로 표시
          window.alert(String(action.payload));
        }
      });
  },
});

export default productsSlice.reducer;



/* mock-data
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
  }   catch (error) {
    console.log(error);
  }
}
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(productsFetch.rejected, (state) => {
        state.status = "failed";
       
      });
  },
});

export default productsSlice.reducer;
*/
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    messages: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create new message
export const createMessage = createAsyncThunk('messages/create', async (messageData, thunkAPI) => {
    try {
        
    } catch (error) {
        
    }
})

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        reset: (state) => initialState,
    }
})

export const {reset} = messageSlice.actions
export default messageSlice.reducer

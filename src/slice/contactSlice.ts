import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {backendApi} from "../api.ts";

interface Contact {
    email: string;
    subject: string;
    message: string;
}
interface ContactState {
    contacts: Contact[];
    loading: boolean;
    error: string | null;
    submitSuccess: boolean;
}
const initialState: ContactState = {
    contacts: [],
    loading: false,
    error: null,
    submitSuccess: false,
};

export const submitContact = createAsyncThunk(
    'contact/submitContact',
    async (contactData: Contact, { rejectWithValue }) => {
        try {
            const response = await backendApi.post('/contacts', contactData);
            return response.data;
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to submit contact';
            if (error && typeof error === 'object' && 'response' in error) {
                const axiosError = error as { response?: { data?: { error?: string } } };
                return rejectWithValue(axiosError.response?.data?.error || 'Failed to submit contact');
            }
            return rejectWithValue(errorMessage);
        }
    }
);

export const getAllContacts = createAsyncThunk(
    'contact/getAllContacts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await backendApi.get('/contacts');
            return response.data;
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to fetch contacts';
            if (error && typeof error === 'object' && 'response' in error) {
                const axiosError = error as { response?: { data?: { error?: string } } };
                return rejectWithValue(axiosError.response?.data?.error || 'Failed to fetch contacts');
            }
            return rejectWithValue(errorMessage);
        }
    }
);

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        resetSubmitStatus: (state) => {
            state.submitSuccess = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitContact.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.submitSuccess = false;
            })
            .addCase(submitContact.fulfilled, (state, action) => {
                state.loading = false;
                state.submitSuccess = true;
                state.contacts.push(action.payload);
            })
            .addCase(submitContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(getAllContacts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.contacts = action.payload;
            })
            .addCase(getAllContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});
export const { resetSubmitStatus } = contactSlice.actions;
export default contactSlice.reducer;
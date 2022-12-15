import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestJoinDTO } from "../../pages/searchTeam/components/teamCardSearch/dto/RequestJoinDTO";
import userService from "../../shared/services/user/userService";
import { User } from "../../shared/types";

type UserState = {
  value: User | undefined;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  error?: unknown;
};

const initialState: UserState = {
  value: undefined,
  isSuccess: false,
  isLoading: false,
  isError: false,
  error: "",
};

const findUser = createAsyncThunk(
  "team/findUser",

  async (userId: number): Promise<User> => {

    const user = await userService.findUser(userId);
    
    return user;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    requestJoinUser(state, action: PayloadAction<RequestJoinDTO>) {
      const { team } = action.payload;

      const userState = state.value;
      userState?.joinRequests.push(team);
    },

    removeJoinUser(state, action: PayloadAction<RequestJoinDTO>) {
      const { team } = action.payload;
      const userState = state.value;
      
      if (!userState) return;

      const teamIndex = userState.joinRequests.findIndex((teamRequest) => teamRequest.id === team.id);  

      if (teamIndex > -1) {
        userState.joinRequests.splice(teamIndex, 1);
      }
    }
  },

  extraReducers: (builder) => {

    builder.addCase(
      findUser.pending, 
      (state) => {
        state.isLoading = true;
        state.isSuccess = true;
        state.isError = false;
      }
    );

    builder.addCase(
      findUser.fulfilled, 
      (state, action: PayloadAction<User>) => {
        state.value = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      }
    );

    builder.addCase(
      findUser.rejected, 
      (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.error = action.error.message || "Something went wrong";
    });

  } 
});

export const { requestJoinUser, removeJoinUser } = userSlice.actions;
export { findUser };

export default userSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestJoinDTO } from "../../pages/searchTeam/components/teamCardSearch/dto/RequestJoinDTO";
import teamService from "../../shared/services/team/teamService";
import userService from "../../shared/services/user/userService";
import { Team } from "../../shared/types/team/Team";
import { BaseState } from "./types/BaseState";

type TeamState = BaseState<Team>;

const initialState: TeamState = {
  value: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
  error: "",
};

const findTeams = createAsyncThunk(
  "team/findTeams",

  async (userId: number): Promise<Team[]> => {

    const teams = await teamService.findTeams(userId);
    
    return teams;
  }
);

const findTeamsByKeyword = createAsyncThunk(
  "team/findTeamsByKeyword",

  async (key: string): Promise<Team[]> => {
    const teams = await teamService.findByKeyword(key);

    return teams;
  }
)

const patchRequestJoinUser = createAsyncThunk(
  "team/patchRequestJoinUser",

  async (requestJoinDto: RequestJoinDTO): Promise<void> => {
    await teamService.requestJoin(requestJoinDto);
  }
)

const patchRemoveJoinUser = createAsyncThunk(
  "team/patchRequestJoinUser",

  async (requestJoinDto: RequestJoinDTO): Promise<void> => {
    await teamService.removeJoin(requestJoinDto);
  }
)

export const teamSlice = createSlice({
  name: "team",
  initialState,

  reducers: {

  },

  extraReducers: (builder) => {
    builder.addCase(
      findTeams.pending, 
      (state) => {
        state.isLoading = true;
        state.isSuccess = true;
        state.isError = false;
      }
    );

    builder.addCase(
      findTeams.fulfilled, 
      (state, action: PayloadAction<Team[]>) => {
        state.value = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      }
    );

    builder.addCase(
      findTeams.rejected, 
      (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(
      findTeamsByKeyword.pending, 
      (state) => {
        state.isLoading = true;
        state.isSuccess = true;
        state.isError = false;
      }
    );

    builder.addCase(
      findTeamsByKeyword.fulfilled, 
      (state, action: PayloadAction<Team[]>) => {
        state.value = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      }
    );

    builder.addCase(
      findTeamsByKeyword.rejected, 
      (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.error = action.error.message || "Something went wrong";
    });
  } 
});

export const { } = teamSlice.actions;
export { findTeams, findTeamsByKeyword, patchRequestJoinUser, patchRemoveJoinUser };

export default teamSlice.reducer;

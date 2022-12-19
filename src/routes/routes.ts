const refresh = () => 0;
const backHistory = () => -1;
const notLogged = () => `/notLogged`;
const prohibited = () => `prohibited`;
const mainMenu = () => `/`;
const register = () => `/register`;
const login = () => `/login`;
const userSettings = () => `/userSettings`;
const createTeam = () => `/createTeam`;
const searchTeam = () => `/searchTeam`;
const teamDashboard = (teamId: number) => `/team/${teamId}/dashboard`;
const teamMembers = (teamId: number) => `/team/${teamId}/members`;
const teamJoinRequests = (teamId: number) => `/team/${teamId}/joinRequests`;
const teamLeaders = (teamId: number) => `/team/${teamId}/leaders`;
const createArea = (teamId: number) => `/team/${teamId}/createArea`;
const teamAreaBoard = (teamId: number, areaId: number) => `/team/${teamId}/area/${areaId}/board`;



export default {
  refresh,
  backHistory,
  notLogged,
  prohibited,
  mainMenu,
  createTeam,
  searchTeam,
  teamAreaBoard,
  teamDashboard,
  teamMembers,
  teamJoinRequests,
  teamLeaders,
  createArea,
  login,
  register,
  userSettings
}
const refresh = () => 0;
const backHistory = () => -1;
const notLogged = () => `/notLogged`;
const prohibited = () => `/prohibited`;
const mainMenu = () => `/`;
const register = () => `/register`;
const login = () => `/login`;
const editUser = () => `/editUser`;
const createTeam = () => `/createTeam`;
const searchTeam = () => `/searchTeam`;
const teamDashboard = (teamId: number) => `/team/${teamId}/dashboard`;
const teamConfigurations = (teamId: number) => `/team/${teamId}/configurations`
const editTeam = (teamId: number) => `/team/${teamId}/configurations/edit`;
const teamMembers = (teamId: number) => `/team/${teamId}/configurations/members`;
const teamJoinRequests = (teamId: number) => `/team/${teamId}/configurations/joinRequests`;
const areasSettings = (teamId: number) => `/team/${teamId}/configurations/areasSettings`;
const createArea = (teamId: number) => `/team/${teamId}/createArea`;
const teamAreaBoard = (teamId: number, areaId: number) => `/team/${teamId}/area/${areaId}/board`;


export default {
  refresh,
  backHistory,
  notLogged,
  editUser,
  prohibited,
  mainMenu,
  createTeam,
  editTeam,
  searchTeam,
  teamAreaBoard,
  teamDashboard,
  teamMembers,
  teamJoinRequests,
  areasSettings,
  createArea,
  login,
  register,
  teamConfigurations
}
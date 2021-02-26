import Home from "./views/Home/home.component";
import Opportunities from "./views/Opportunities/opportunities.component";
import Projects from "./views/Projects/projects.component";
import Proposals from "./views/Proposals/proposals.component";
import CreateProblem from "./views/CreateProblem/create-problem.component";
import CreateProposal from "./views/CreateProposal/create-proposal.component";
import DetailedProposal from "./views/DetailedProposal/detailed-proposal.component";
import News from "./views/News/news.component";
import Auth from "./views/Authentication/auth.component";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    id: "home",
  },
  {
    path: "/opportunities",
    name: "Opportunities",
    component: Opportunities,
    id: "opportunities",
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    id: "projects",
  },
  {
    path: "/proposals",
    name: "Proposals",
    component: Proposals,
    id: "proposals",
  },
  {
    path: "/createProblem",
    name: "Add new problem",
    component: CreateProblem,
    id: "createProblem",
  },
  {
    path: "/createProposal",
    name: "Add new proposal",
    component: CreateProposal,
    id: "createProposal",
  },
  {
    path: "/detailedProposal",
    name: "Detailed proposal",
    component: DetailedProposal,
    id: "detailedProposal",
  },
  {
    path: "/news",
    name: "News",
    component: News,
    id: "news",
  },
  {
    path: "/login",
    name: "Login",
    component: Auth,
    id: "login",
  },
];
export default routes;

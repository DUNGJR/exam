import HomePage from "../pages/homepage/HomePage";
import AdminPage from "../pages/userpage/AdminPage";
import ExamPage from "../pages/exampage/ExamPage";
import PracticePage from "../pages/practicepage/PracticePage";
import CoursePage from "../pages/coursepage/CoursePage";

export const routes = [
    {
        path: '/',
        page: HomePage
    },
    {
        path: '/exam',
        page: ExamPage
    },
    {
        path: '/course',
        page: CoursePage
    },
    {
        path: '/practice',
        page: PracticePage
    },
    {
        path: '/admin',
        page: AdminPage
    }
]

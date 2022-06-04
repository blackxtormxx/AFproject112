import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/home/index';
import StudentReg from './components/student/student_reg';
import Login from './components/home/login';
import TeamDashboard from './components/student/teamDashboard';
import RegDashboard from './components/home/reg_dashboard';
import StaffTReg from './components/staff/staff_reg';
import AdminDashboard from './components/admin/admin_dashboard';
import AdminViewStaff from './components/admin/admin_view_staff';
import AdminViewOneStaff from './components/admin/staff_one_view';
import ViewMarkingschemes from './components/admin/admin_view_marking_schemes';
import Staff_one_markingSchema from './components/admin/staff_one_markingSchema';
import AdminViewDeadLines from './components/admin/admin_view_deadline';
import OneDeadline from './components/admin/one_deadline';
import StudentGroupManage from './components/admin/studentGroupManage';
import SupervisorDashboard from './components/supervisor/supervisor_dashboard';
import SupervisorGroup from './components/supervisor/supervisor_groups';
import SupervisorViewTeam from './components/supervisor/supervisor_view_team';
import AdminViewTeam from './components/admin/AdminViewTeam';
import PanelDashboard from './components/member_panel/panel_dashboard';
import PanelStudentGroup from './components/member_panel/panel_groups';
import PanelViewTeam from './components/member_panel/panel_view_team';
import PresentationEvolution from './components/member_panel/presentation_evalution';
import PanelViewMarkingSchema from './components/member_panel/panel_view_marking_schemes';
import PanelViewOneMarkingSchema from './components/member_panel/panel_one_schema';
import PanelMarksAdd from './components/member_panel/marks_add';
import StudentSubmitDocs from './components/student/submit_docs';
import SupervisorViewMarkingSchema from './components/supervisor/supervisor_view_marking_schemes';
import SupervisorViewOneMarkingSchema from './components/supervisor/supervisor_one_schema';
import Supervisor_eveluvate_doc from './components/supervisor/supervisor_eveluvate_docs';
import SupervisorViewDocs from './components/supervisor/supervisor_view_docs';
import SupervisorAddMarks from './components/supervisor/marks_add';
import SupervisorGroupChat from './components/supervisor/group_chat';

function App() {
  return (
  <div>
       <Router>
            <Switch>
                <Route exact path="/"><Index/></Route>
                <Route exact path="/student/Reg"><StudentReg/></Route>
                <Route exact path="/Login"><Login/></Route>
                <Route exact path="/RegDashboard"><RegDashboard/></Route>
                <Route exact path="/student/TeamDashboard"><TeamDashboard/></Route>
                <Route exact path="/staff/StaffTReg"><StaffTReg/></Route>
                <Route exact path="/admin/AdminDashboard"><AdminDashboard/></Route>
                <Route exact path="/admin/AdminViewStaff"><AdminViewStaff/></Route>
                <Route exact path="/admin/AdminViewOneStaff"><AdminViewOneStaff/></Route>
                <Route exact path="/admin/ViewMarkingschemes"><ViewMarkingschemes/></Route>
                <Route exact path="/admin/OneMarkingSchemaView"><Staff_one_markingSchema/></Route>
                <Route exact path="/admin/AdminViewDeadLines"><AdminViewDeadLines/></Route>
                <Route exact path="/admin/OneDeadline"><OneDeadline/></Route>
                <Route exact path="/admin/StudentGroupManage"><StudentGroupManage/></Route>
                <Route exact path="/admin/SupervisorDashboard"><SupervisorDashboard/></Route>
                <Route exact path="/Supervisor/SupervisorGroup"><SupervisorGroup/></Route>
                <Route exact path="/Supervisor/SupervisorViewMarkingSchema"><SupervisorViewMarkingSchema/></Route>
                <Route exact path="/Supervisor/SupervisorViewTeam"><SupervisorViewTeam/></Route>
                <Route exact path="/admin/AdminViewTeam"><AdminViewTeam/></Route>
                <Route exact path="/panel/PanelDashboard"><PanelDashboard/></Route>
                <Route exact path="/panel/PanelStudentGroup"><PanelStudentGroup/></Route>
                <Route exact path="/panel/PanelViewTeam"><PanelViewTeam/></Route>
                <Route exact path="/panel/PresentationEvolution"><PresentationEvolution/></Route>
                <Route exact path="/panel/PanelViewMarkingSchema"><PanelViewMarkingSchema/></Route>
                <Route exact path="/panel/PanelViewOneMarkingSchema"><PanelViewOneMarkingSchema/></Route>
                <Route exact path="/panel/PanelMarksAdd"><PanelMarksAdd/></Route>
                <Route exact path="/student/StudentSubmitDocs"><StudentSubmitDocs/></Route>
                <Route exact path="/Supervisor/SupervisorViewOneMarkingSchema"><SupervisorViewOneMarkingSchema/></Route>
                <Route exact path="/Supervisor/Supervisor_eveluvate_doc"><Supervisor_eveluvate_doc/></Route>
                <Route exact path="/Supervisor/SupervisorViewDocs"><SupervisorViewDocs/></Route>
                <Route exact path="/Supervisor/SupervisorAddMarks"><SupervisorAddMarks/></Route>
                <Route exact path="/Supervisor/SupervisorGroupChat"><SupervisorGroupChat/></Route>
            </Switch>
      </Router>

  </div>
    );
}

export default App;



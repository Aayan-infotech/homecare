

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Home from "./components/Home/Home";
import WelcomeScreen from "./components/WelcomeScreen/Welcome";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Otp from "./components/Otp/Otp";
import Profile from "./components/Profile/Profile";
import Completed1 from "./components/CompletedScreen1/Completed1";
import Completed2 from "./components/CompletedScreen2/Completed2";
import AssessmentScreen from "./components/AssessmentScreen/AssessmentScreen";
import ConsumerDetailsScreen from "./components/ConsumerDetailsScreen/ConsumerDetailsScreen";
import DigitalForm from "./components/DigitalForm/DigitalForm";
import Faccident from "./components/Faccident/F-accident";
import ClientSatisfactionForm from "./components/ClientSatisfactionForm/Client";
import ClientRight from "./components/ClientRight/ClientRight";
import SVisit1 from "./components/SVisit1/SVisit1";
import NursingVisit from "./components/NursingVisit/Nursing";
import VerbalForm from "./components/VerbalForm/Verbal";
import SubmissionConfirmation from "./components/SubmissionConfirmation/SubmissionConfirmation";
import ScrollToTop from "./ScrollToTop";
// eslint-disable-next-line react/prop-types


function Layout({ children }) {
  return (
    <div>
      {/* <ScrollToTop/> */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
function Routing() {
  return (
    <div>
      <Router>
      <ScrollToTop /> 
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path='/submission-confirmation' element={<SubmissionConfirmation/>}/>

          <Route
            index="/home"
            element={
              <Layout>                
                <Home/>
              </Layout>
            }
          />
          <Route
            index="/"
            element={
              <Layout>
                <Home/>
              </Layout>
            }
          />

          <Route
            path="/welcome"
            element={
              <Layout>
                <WelcomeScreen />
              </Layout>
            }
          />

          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />

          <Route
            path="/completed1"
            element={
              <Layout>
                <Completed1 />
              </Layout>
            }
          />

          <Route
            path="/completed2"
            element={
              <Layout>
                <Completed2 />
              </Layout>
            }
          />
          <Route
            path="/assessment-screen"
            element={
              <Layout>
                <AssessmentScreen />
              </Layout>
            }
          />

          <Route
            path="/consumer-details-screen"
            element={
              <Layout>
                <ConsumerDetailsScreen />
              </Layout>
            }
          />

          <Route
            path="/digital-form"
            element={
              <Layout>
                <DigitalForm />
              </Layout>
            }
          />
          <Route
            path="/f-accident"
            element={
              <Layout>
                <Faccident />
              </Layout>
            }
          />
          <Route
            path="/client-satisfaction"
            element={
              <Layout>
                <ClientSatisfactionForm />
              </Layout>
            }
          />
          <Route
            path="/client-right"
            element={
              <Layout>
                <ClientRight />
              </Layout>
            }
          />
          <Route
            path="/nursing"
            element={
              <Layout>
                < NursingVisit/>
              </Layout>
            }
          />
          <Route
            path="/service-visit"
            element={
              <Layout>
                < SVisit1/>
              </Layout>
            }
          />
          <Route
            path="/verbal-form"
            element={
              <Layout>
                < VerbalForm/>
              </Layout>
            }
          />
          
          {/* <Route
            path="/submission-confirmation"
            element={
              <Layout>
                <SubmissionConfirmation />
              </Layout>
            }
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
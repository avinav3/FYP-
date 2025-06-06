import React from "react";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {
  LoginPage,
  ProtectedRoute,
  FeedPage,
  SharedLayout,
  YourWorkPage,
  JobDetail,
  PostEditPage,
  SharedLayout2,
  ExplorePage,
  MessagePage,
  SharedLayout3,
  AddJobPage,
  PaymentPage,
  ApplicantPage,
  ProfilePage,
  ResetPage,
  IsLoggedin,
  EditJobPage,
  UserPaymentPage,
  ViewCardPage,
  ChangePassword,
} from "./pages";
import EditProfilePage from "./pages/EditProfile/EditProfilePage";
import ChatProvider from "./context/ChatProvider";
import ChatPage from "./pages/ChatPage";
import StripeContainer from "./component/StripeContainer";
import ReportPage from "./pages/ReportPage"; // Import ReportPage

function App() {
  return (
    <ChatProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={
              <IsLoggedin>
                <LoginPage />
              </IsLoggedin>
            }
          />
          <Route
            path="resetpassword"
            element={
              <IsLoggedin>
                <ResetPage />
              </IsLoggedin>
            }
          />
          <Route
            path="resetpassword/:id/:token"
            element={
              <IsLoggedin>
                <ResetPage />
              </IsLoggedin>
            }
          />

          <Route
            path="/"
            element={
              <IsLoggedin>
                <LoginPage />
              </IsLoggedin>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route path="work" element={<YourWorkPage />} />
            <Route path="feeds" element={<FeedPage />} />
            <Route path="explore" element={<ExplorePage />} />
          </Route>
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <SharedLayout3 />
              </ProtectedRoute>
            }
          >
            <Route path="add/job" element={<AddJobPage />} />
            <Route path="edit/job/:id" element={<EditJobPage />} />
            <Route path="edit" element={<EditProfilePage />} />
            <Route path="message" element={<MessagePage />} />
            <Route path="applicants/:id" element={<ApplicantPage />} />
            <Route path="payments" element={<UserPaymentPage />} />
            <Route path="card" element={<ViewCardPage />} />
            <Route path="profile/:id" element={<ProfilePage />} />
          </Route>

          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <SharedLayout2 />
              </ProtectedRoute>
            }
          >
            <Route path="changepassword" element={<ChangePassword />} />
          </Route>

          <Route
            path="/job"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route path="jobDetail/:id" element={<JobDetail />} />
          </Route>
          <Route path="/chats" element={<ChatPage />} />
          <Route path="/payment" element={<StripeContainer />} />

          <Route
            path="/Next Skill"
            element={
              <ProtectedRoute>
                <SharedLayout2 />
              </ProtectedRoute>
            }
          >
            <Route path="postedit/:id" element={<PostEditPage />} />
          </Route>

          {/* Add the route for the ReportPage */}
          <Route
            path="/user/report"
            element={
              <ProtectedRoute>
                <ReportPage /> {/* Render the ReportPage here */}
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<h2>error</h2>}></Route>
        </Routes>
      </BrowserRouter>
    </ChatProvider>
  );
}

export default App;

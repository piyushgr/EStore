import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Layout from "./components/layouts/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/user/Dashboard";
import Private from "./components/routes/Private";
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Products from "./pages/admin/Products";
import ManageCategory from "./pages/admin/ManageCategory";
import Users from "./pages/admin/Users";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
import ProductDetails from "./pages/user/ProductDetails";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/product/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/policy" element={<Policy></Policy>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<Private></Private>}>
          <Route path="user" element={<Dashboard></Dashboard>}></Route>
          <Route path="user/profile" element={<Profile></Profile>}></Route>
          <Route path="user/orders" element={<Orders></Orders>}></Route>
        </Route>
        <Route path="/dashboard" element={<AdminRoute></AdminRoute>}>
          <Route path="admin/products" element={<Products></Products>}></Route>
          <Route
            path="admin"
            element={<AdminDashboard></AdminDashboard>}
          ></Route>
          <Route
            path="admin/create-category"
            element={<ManageCategory></ManageCategory>}
          ></Route>
          <Route path="admin/users" element={<Users></Users>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </Layout>
  );
};

export default App;

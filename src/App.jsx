import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Account from "./pages/Account";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import EditForm from "./pages/EditForm";
import Notifications from './pages/Notifications'

import Layout from "./Layout/Layout";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";
import Terms from "./pages/Terms";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-center" />
      <CartProvider>
        <Routes>

          {/* LOGIN + REGISTER MUST BE OUTSIDE LAYOUT */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ALL OTHER ROUTES INSIDE LAYOUT */}
          <Route element={<Layout />}>

            {/* PROTECTED ROUTES */}
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/place-order" element={<PlaceOrder />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/account" element={<Account />} />
              <Route path="/edit-profile" element={<EditForm />} />
            </Route>

            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Product />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/term-policy" element={<Terms />} />
            <Route path="/category/:categoryId" element={<CategoryProductsPage />} />
            <Route path="/notifications" element={<Notifications />} />
            


          </Route>

        </Routes>

      </CartProvider>
    </AuthProvider>
  );
}

export default App;

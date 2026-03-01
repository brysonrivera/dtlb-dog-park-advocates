import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp.tsx";
import ShareStory from "./pages/ShareStory";
import Resources from "./pages/Resources";
import Events from "./pages/events/Events.tsx";
import Event from "./pages/events/Event.tsx";
import Contact from "./pages/Contact";
import AllStories from "./pages/AllStories";
import StoryPage from "./pages/StoryPage";
import CreateEvent from "./pages/events/CreateEvent.tsx";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/share" element={<ShareStory />} />
        <Route path="/resources/*" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<Event />} />
        <Route path="/resources/contact" element={<Contact />} />
        <Route path="/stories" element={<AllStories />} />
        <Route path="/story/:id" element={<StoryPage />} />
        <Route path="/events/create" element={<CreateEvent />} />
      </Routes>
    </Router>
  );
}

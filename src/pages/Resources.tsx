import { Routes, Route } from "react-router-dom";

export default function Resources() {
  return (
    <Routes>
      <Route path="/" element={<h2>Resources</h2>} />
      <Route path="/groups" element={<div>Join a Local Advocacy Group</div>} />
      <Route path="/contact" element={<div>Contact Your DTLB Representatives</div>} />
      <Route path="/how-to-help" element={<div>How You Can Help</div>} />
    </Routes>
  );
}
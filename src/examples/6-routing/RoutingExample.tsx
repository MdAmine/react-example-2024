import { Link, Navigate, Route, Routes } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const RoutingExample = () => {
  return (
    <>
      {/* <ul>
        <li>
          <a href="/page1">Page 1</a>
        </li>
        <li>
          <a href="/page2">Page 2</a>
        </li>
      </ul> */}

      <ul>
        <li>
          <Link to="/page1">Page 1</Link>
        </li>
        <li>
          <Link to="/page2">Page 2</Link>
        </li>
        <li>
          <Link to="/page3/10">Page 3</Link> <Link to="/page3/20">Page 3</Link>{" "}
          <Link to="/page3/30">Page 3</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3/:id" element={<Page3 />} />
        <Route path="*" element={<Navigate replace to="/page1" />} />
      </Routes>
    </>
  );
};

export default RoutingExample;

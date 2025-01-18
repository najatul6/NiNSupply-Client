import Container from "@/components/common/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <div>
            <h4>About</h4>
            <ul>
              <li>
                <Link>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li>
                <Link>Facebook</Link>
              </li>
              <li>
                <Link>Twitter</Link>
              </li>
              <li>
                <Link>Instagram</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Over 1,000 5-star reviews</h4>
            <div className="flex -space-x-1 overflow-hidden">
              <img
                className="inline-block size-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block size-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block size-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block size-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
      <p></p>
    </footer>
  );
};

export default Footer;

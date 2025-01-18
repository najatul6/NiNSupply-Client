import Container from "@/components/common/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background2 mt-5">
      <Container>
        <div>
          {/* 1st Column */}
          <div>
            <h4 className="text-baseColor uppercase font-bold tracking-wide">About</h4>
            <ul>
              <li>
                <Link>Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* 2nd Column */}
          <div>
            <h4 className="text-baseColor uppercase font-bold tracking-wide">Support</h4>
            <ul>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* 3rd Column */}
          <div>
            <h4 className="text-baseColor uppercase font-bold tracking-wide">Follow</h4>
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
          {/* 4th Column */}
          <div>
            <h4 className="text-baseColor uppercase font-bold tracking-wide">Over 1,000 5-star reviews</h4>
            {/* Avatars */}
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

            {/* Rating */}
            <div className="flex items-center">
              <svg
                className="shrink-0 size-5 text-yellow-400 dark:text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
              <svg
                className="shrink-0 size-5 text-yellow-400 dark:text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
              <svg
                className="shrink-0 size-5 text-yellow-400 dark:text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
              <svg
                className="shrink-0 size-5 text-yellow-400 dark:text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
              <svg
                className="shrink-0 size-5 text-yellow-400 dark:text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
            </div>
            <p>
              <span>&quot;Buy less, choose well.&quot;</span> - Vivienne
              Westwood
            </p>
          </div>
        </div>
      </Container>
      <p className="bg-background mt-5 py-2 text-center">
        &copy; All Right Reserved by -{" "}
        <Link to="https://nin-supply.vercel.app/" target="_blank" className="text-baseColor hover:underline">
          NiN Supply
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

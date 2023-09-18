import "../styles/globals.css";

import Nav from "/components/Nav";
// import Provider from "../components/Provider";
import SubscriptionForm from "./notice/Newsletter";

export const metadata = {
  title: "Notice Board",
  description: "Bugema University Online Notice Board",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      {/* <Provider> */}
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
          <SubscriptionForm />
        </main>
      {/* </Provider> */}
    </body>
  </html>
);

export default RootLayout;

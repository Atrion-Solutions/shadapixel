import { Link } from "react-router-dom";
import { Container } from "../components";
function TermsOfUse() {
  return (
    <Container>
      <h1 className="text-center  font-bold text-3xl sm:text-5xl text-white">
        Terms and Conditions
      </h1>
      <h2 className="text-center  font-bold text-xl sm:text-2xl text-white">
        Last Updated: September 9, 2024
      </h2>
      <div className="text-white font-text mt-5">
        <p>
          Welcome to Shada Pixel - by Atrion BD. By accessing and using our
          website{" "}
          <Link
            className="font-medium text-primary underline"
            to={"https://www.shadapixel.com"}
          >
            (https://www.shadapixel.com)
          </Link>{" "}
          and our services, you agree to comply with the following Terms and
          Conditions. Please read them carefully. If you do not agree to these
          terms, you must refrain from using our website and services.
        </p>
      </div>

      <div className="text-white font-text mt-5">
        <h2 className=" font-semibold text-2xl">1. Definitions</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>
            &quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot; refers to Shada Pixel - by Atrion BD, LLC.
          </li>
          <li>
            &quot;You&quot; or &quot;Client&quot; refers to the user or viewer
            of our website and services.
          </li>
          <li>
            &quot;Services&quot; refers to all services provided by Shada Pixel
            - by Atrion BD, including but not limited to business analysis, web
            development, and digital marketing.
          </li>
        </ul>
      </div>

      <div className="text-white font-text mt-5">
        <h2 className=" font-semibold text-2xl">2. Use of Services</h2>
        <p className="mt-2">By using our services, you agree to:</p>
        <ul className="list-disc pl-5">
          <li>Provide accurate and complete information where required.</li>
          <li>
            Not use our services for any illegal or unauthorized purposes.
          </li>
          <li>
            Refrain from attempting to interfere with or compromise our website
            or services.
          </li>
        </ul>
      </div>

      <div className="text-white font-text mt-5">
        <h2 className=" font-semibold text-2xl">3. Intellectual Property</h2>
        <p className="mt-2">
          All content, including text, graphics, logos, and software, is the
          property of Shada Pixel - by Atrion BD or our licensors and is
          protected by intellectual property laws. You are not permitted to
          copy, distribute, or reproduce any content from our website without
          prior written permission from Shada Pixel - by Atrion BD.
        </p>
      </div>

      <div className="text-white font-text mt-5">
        <h2 className=" font-semibold text-2xl">4. Service Terms</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Our services are delivered based on the scope and terms outlined in
            individual contracts or proposals. Any additional services outside
            the agreed scope may incur additional charges.
          </li>
          <li>
            Shada Pixel - by Atrion BD reserves the right to refuse or
            discontinue services if there is a breach of these terms.
          </li>
        </ul>
      </div>

      <div className="text-white font-text mt-5">
        <h2 className=" font-semibold text-2xl">5. Payment and Fees</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Fees for our services are outlined in our contracts or proposals.
            Payments must be made in accordance with the payment terms agreed
            upon.
          </li>
          <li>
            Late payments may incur interest or late fees as outlined in your
            contract.
          </li>
        </ul>
      </div>

      <div className="text-white font-text mt-5">
        <h2 className=" font-semibold text-2xl">6. Confidentiality</h2>
        <p className="mt-2">
          We respect the confidentiality of our clients. Shada Pixel - by Atrion
          BD agrees not to disclose or share any confidential information
          obtained from clients without prior consent, except as required by
          law.
        </p>
      </div>

      <div className="text-white font-text mt-5">
        <h2 className=" font-semibold text-2xl">7. Limitation of Liability</h2>
        <p className="mt-2">
          Shada Pixel - by Atrion BD will not be liable for any direct,
          indirect, incidental, or consequential damages arising from the use or
          inability to use our website or services. This includes but is not
          limited to loss of data, profits, or business interruptions.
        </p>
      </div>

      <div className="text-white font-text mt-5">
        <h2 className=" font-semibold text-2xl">8. Indemnification</h2>
        <p className="mt-2">
          You agree to indemnify and hold harmless Shada Pixel - by Atrion BD,
          its employees, and affiliates from any claims, damages, losses, or
          legal fees resulting from your breach of these terms or misuse of our
          services.
        </p>
      </div>

      <div className="text-white font-text mt-5">
        <h2 className=" font-semibold text-2xl">9. Third-Party Links</h2>
        <p className="mt-2">
          Our website may contain links to third-party websites or services.
          Shada Pixel - by Atrion BD is not responsible for the content, privacy
          policies, or practices of any third-party sites.
        </p>
      </div>

      <div className="text-white font-text mt-5">
        <h2 className=" font-semibold text-2xl">10. Termination</h2>
        <p className="mt-2">
          Shada Pixel - by Atrion BD reserves the right to terminate or suspend
          access to our website and services for any reason, including breach of
          these terms.
        </p>
      </div>

      <div className="text-white font-text mt-5">
        <h2 className=" font-semibold text-2xl">11. Governing Law</h2>
        <p className="mt-2">
          These terms shall be governed and construed in accordance with the
          laws of the United States, without regard to its conflict of law
          provisions.
        </p>
      </div>

      <div className="text-white font-text mt-5">
        <h2 className=" font-semibold text-2xl">12. Changes to Terms</h2>
        <p className="mt-2">
          We may update these Terms and Conditions from time to time. Changes
          will be posted on this page, and your continued use of our services
          constitutes acceptance of the updated terms.
        </p>
      </div>

      <div className="text-white font-text mt-5 mb-24">
        <h2 className=" font-semibold text-2xl">13. Contact Us</h2>
        <p className="mt-2">
          If you have any questions about these Terms and Conditions, please
          contact us at{" "}
          <Link
            className="font-medium text-primary underline"
            to={"mailto:shadapixel@gmail.com"}
          >
            {" "}
            shadapixel@gmail.com
          </Link>
        </p>
      </div>
    </Container>
  );
}

export default TermsOfUse;

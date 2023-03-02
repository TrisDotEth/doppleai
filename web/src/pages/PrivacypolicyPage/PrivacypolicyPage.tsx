import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PrivacypolicyPage = () => {
  return (
    <>
      <MetaTags title="Privacypolicy" description="Privacypolicy page" />

      <h1>PrivacypolicyPage</h1>
      <h2>Data we collect:</h2>
      <p>
        We collect various types of data from our customers, including but not
        limited to:
      </p>
      <ol>
        <li>
          Personal information: name, email address, phone number, and other
          contact information.
        </li>
        <li>
          Payment information: credit card number, billing address, and other
          payment-related information.
        </li>
        <li>
          Order information: information about the products you purchase from
          us, including order history and delivery information.
        </li>
        <li>
          Device information: information about the device you use to access our
          services, including the type of device, operating system, and browser.
        </li>
        <li>
          Usage information: information about how you use our services,
          including browsing behavior, page views, and search queries.
        </li>
      </ol>

      <h2>Use of data:</h2>
      <p>We use the data we collect for various purposes, including:</p>
      <ol>
        <li>
          Providing and improving our services: we use your data to provide our
          services to you, and to improve our services over time.
        </li>
        <li>
          Personalizing your experience: we use your data to personalize your
          experience on our website and make recommendations based on your
          preferences.
        </li>
        <li>
          Marketing: we use your data to send you promotional emails,
          newsletters, and other marketing communications.
        </li>
        <li>
          Fraud prevention: we use your data to prevent fraud and other illegal
          activities.
        </li>
      </ol>

      <h2>Disclosure of data:</h2>
      <p>
        We may disclose your data to third parties in the following
        circumstances:
      </p>
      <ol>
        <li>
          Service providers: we may share your data with third-party service
          providers who help us provide our services, such as payment processors
          and shipping providers.
        </li>
        <li>
          Legal compliance: we may disclose your data to comply with legal
          obligations, such as responding to subpoenas or other legal requests.
        </li>
        <li>
          Business transactions: we may disclose your data in connection with a
          merger, acquisition, or sale of our company or its assets.
        </li>
        <li>
          Consent: we may disclose your data with your consent or at your
          direction.
        </li>
      </ol>

      <h2>Security of data:</h2>
      <p>
        We take reasonable measures to protect your data from unauthorized
        access, disclosure, and destruction. However, no method of data
        transmission or storage is completely secure, and we cannot guarantee
        the security of your data.
      </p>

      <h2>Updates to this policy:</h2>
      <p>
        We may update this privacy policy from time to time, and any changes
        will be posted on our website. By continuing to use our services after
        any changes to this policy, you acknowledge and agree to the updated
        terms.
      </p>

      <h2>Contact us:</h2>
      <p>
        If you have any questions or concerns about this privacy policy or our
        data practices, please contact us at tris@hivemind.me
      </p>
    </>
  )
}

export default PrivacypolicyPage

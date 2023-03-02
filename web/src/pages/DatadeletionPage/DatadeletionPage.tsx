import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DatadeletionPage = () => {
  return (
    <>
      <MetaTags title="Datadeletion" description="Datadeletion page" />

      <h1>DatadeletionPage</h1>
      <h2>Types of data that can be deleted:</h2>
      <p>You can request the deletion of the following types of data:</p>
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

      <h2>How to request deletion:</h2>
      <p>
        To request deletion of your data, please contact us at tris@hivemind.me.
        We will verify your identity before proceeding with your request.
      </p>

      <h2>Timing of deletion:</h2>
      <p>
        We will aim to delete your data as soon as possible after receiving your
        request. However, please note that some data may need to be retained for
        legal or regulatory reasons.
      </p>

      <h2>Confirmation of deletion:</h2>
      <p>
        We will provide confirmation that your data has been deleted within a
        reasonable period of time after completing the deletion process.
      </p>

      <h2>Contact us:</h2>
      <p>
        If you have any questions or concerns about this data deletion policy or
        our data practices, please contact us at tris@hivemind.me.
      </p>
    </>
  )
}

export default DatadeletionPage

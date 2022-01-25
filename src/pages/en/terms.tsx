import Head from 'next/head';

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen h-full bg-primary">
      <Head>
        <title>Cobogo - Terms of Use</title>
      </Head>
      <div className="flex flex-1 flex-col mx-5 md:mx-20 pb-20">
        <h1 className="bold-36 mb-5">Notes</h1>
        <p className="regular-18 break-normal mb-5">
          For All Users
          <br />
          Rude, annoying or unethical behavior towards other users is not
          allowed. Cobogo is intended for contributors of the YouTube ecosystem.
          Unauthorized YouTube accounts or deleting repositories after
          onboarding will be punished as fraud. Please use the dApp with good
          manners.
        </p>
        <h1 className="bold-36 mb-5">Terms of Use</h1>

        <h2 className="bold-30 mb-2">Article 1 (Application)</h2>
        <p className="regular-18 break-normal mb-5">
          These Terms and Conditions shall apply to all relations between Cobogo
          (the Company) and the User.
          <br />
          By onboarding Cobogo, the User agrees to be bound by these Terms and
          Conditions. If you do not agree to these Terms and Conditions, you
          will not be able to use Cobogo.
          <br />
          The Company may change the contents of the Service at its discretion.
          If the Company makes modifications to the terms of this Agreement, the
          Company shall notify the Users or post such modifications on the
          Company&apos;s Website. Users who use the Service thereafter or who do
          not take necessary procedures for de-registration within the
          designated period of time shall be deemed to have agreed to the
          modified terms of the Agreement.
        </p>
        <h2 className="bold-30 mb-2">Article 2 (Prohibited Matters)</h2>
        <p className="regular-18 break-normal mb-5">
          Users shall not engage in the following acts
        </p>
        <ul className="regular-16 list-decimal pl-20 mb-3">
          <li>Violating of Cobogo&apos;s CoC (https://cobogo.social/code)</li>
          <li>Making the channel private or deleting it after onboarding</li>
          <li>
            Committing a criminal act or an act against public order and morals
          </li>
          <li>Being an antisocial force or related party</li>
          <li>Using the Service inappropriately, or interfering with it.</li>
          <li>Falling under any of the following articles</li>
        </ul>

        <h2 className="bold-30 mb-2">Article 3 (Deletion of Account)</h2>
        <p className="regular-18 break-normal mb-5">
          The Company may immediately suspend or delete the User&apos;s account
          on Cobogo if the User is found to have committed any of the prohibited
          acts described in Article 2.
        </p>

        <h2 className="bold-30 mb-2">Article 4 (Suspension of the Service)</h2>
        <p className="regular-18 break-normal mb-5">
          Cobogo reserves the right to suspend or discontinue all or part of the
          Service without prior notice to the User in the event that Cobogo
          deems that any of the following reasons exist
        </p>
        <ul className="regular-16 list-decimal pl-20 mb-3">
          <li>
            When it becomes extremely difficult to continue the Service due to
            natural disasters such as earthquakes, typhoons, and fires,
            infectious diseases, terrorism, instructions or orders from third
            parties, or other force majeure.
          </li>
          <li>
            In the event that the computer system or communication lines are
            shut down due to an accident.
          </li>
          <li>
            In any other cases where the Company deems it difficult to provide
            the Service.
          </li>
        </ul>
        <p className="regular-18 break-normal mb-5">
          The Company shall not be liable for any disadvantage or damage
          suffered by the User or any third party due to the suspension or
          interruption of the provision of the Service, regardless of the
          reason.
        </p>

        <h2 className="bold-30 mb-2">
          Article 5 (Disclaimer of Warranty and Disclaimer of Liability)
        </h2>
        <p className="regular-18 break-normal mb-5">
          The Company shall not provide any warranty to the Users beyond what is
          stipulated in these Terms of Use.
          <br />
          The User shall investigate whether or not the use of the Service
          violates laws and regulations applicable to the User at its own
          responsibility and expense, and the Company shall not guarantee that
          the use of the Service by the User complies with laws and regulations
          applicable to the User.
        </p>

        <h2 className="bold-30 mb-2">
          Article 6 (Governing Law and Exclusive Jurisdiction)
        </h2>
        <p className="regular-18 break-normal mb-10">
          This Agreement shall be governed by and construed in accordance with
          the laws of Brazil, and all disputes arising out of this Agreement
          shall be subject to the exclusive jurisdiction of the Rio de Janeiro
          District Court as the court of first instance.
        </p>

        <p className="regular-16 break-normal mb-20">
          Effective date: October 5, 2021
        </p>
      </div>
    </div>
  );
}

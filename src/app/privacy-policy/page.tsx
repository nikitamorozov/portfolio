'use client';

import Data from '@/data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import data from '@/data';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div className="container mx-auto">
        <div className="inner">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Privacy policy</h1>
          <div className="text-base leading-7 text-gray-700">
            <p className="text-base mt-2"><b>Locus</b> built and provide Applications (or, <b>APPS</b>) as is.</p>

            <p className="text-base mt-2">This page is used to inform website visitors regarding our policies with the collection, use, and
              disclosure of Personal Information if anyone decided to use our APPS.</p>

            <p className="text-base mt-2">If you choose to use our APPS, then you agree to the collection and use of information in relation to
              this policy. The Personal Information that we collect is used for providing and improving the our APPS.
              We will not use or share your information with anyone except as described in this Privacy Policy.</p>


            <h3 className="text-xl font-bold mt-8">Information Collection and Use</h3>

            <p className="text-base mt-2">For a better experience, while using our APPS, we may require you to provide us with certain personally
              identifiable information. The information that we request are retained on your device and is not
              collected by us in any way.</p>

            <p className="text-base mt-2">The app does use third party services that may collect information used to identify you.</p>

            <p className="text-base mt-2">Link to privacy policy of third party service providers may used by the APPS:</p>


            <p className="text-base mt-2">- Google Play Services - <a href="https://www.google.com/policies/privacy/" rel="nofollow"
                                           target="_blank">Privacy Policy</a>
              <br />- Apple Game Center- <a href="https://www.apple.com/privacy/" rel="nofollow" target="_blank">Privacy
                Policy</a>
              <br />- Google AdMob - <a href="https://support.google.com/admob/answer/6128543?hl=en" rel="nofollow"
                                        target="_blank">Privacy Policy</a>
              <br />- Firebase Analytics - <a href="https://firebase.google.com/policies/analytics" rel="nofollow"
                                              target="_blank">Privacy Policy</a>
              <br />- Unity Analytics - <a href="https://unity3d.com/legal/privacy-policy" rel="nofollow"
                                           target="_blank">Privacy Policy</a>
              <br />- Appodeal, Inc - <a href="https://www.appodeal.com/privacy-policy" rel="nofollow"
                                         target="_blank">Privacy Policy</a>
              <br />- Amazon Services International, Inc - <a
                href="https://developer.amazon.com/support/legal/mobileads/terms-and-agreements" rel="nofollow"
                target="_blank">Privacy Policy </a>
            </p>
            <h3 className="text-xl font-bold mt-8">Log Data</h3>

            <p className="mt-2">We want to inform you that whenever you use our APPS, in a case of an error in the app we collect data
              and information (through third party products) on your phone called Log Data. This Log Data may include
              information such as your device Internet Protocol (“IP”) address, device name, operating system version,
              the configuration of the app when utilizing our Service, the time and date of your use of the Service,
              and other statistics.
            </p>
            <h3 className="text-xl font-bold mt-8">Cookies</h3>

            <p className="text-base mt-2">Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers.
              These are sent to your browser from the websites that you visit and are stored on your device&#39;s internal
              memory.
            </p>
            <p className="text-base mt-2">This APPS does not use these “cookies” explicitly. However, the app may use third party code and
              libraries that use “cookies” to collect information and improve their services. You have the option to
              either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose
              to refuse our cookies, you may not be able to use some portions of this APPS.
            </p>
            <h3 className="text-xl font-bold mt-8">Service Providers</h3>

            <p className="text-base mt-2">We may employ third-party companies and individuals due to the following reasons:</p>

            <p className="text-base mt-2">- To facilitate our APPS;
              <br />- To provide the APPS on our behalf;
              <br />- To perform APPS-related services; or
              <br />- To assist us in analyzing how our APPS is used.</p>

            <p className="text-base mt-2">We want to inform users of this APPS that these third parties have access to your Personal Information.
              The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to
              disclose or use the information for any other purpose.</p>

            <h3 className="text-xl font-bold mt-8">Security</h3>

            <p className="text-base mt-2">We value your trust in providing us your Personal Information, thus we are striving to use commercially
              acceptable means of protecting it. But remember that no method of transmission over the internet, or
              method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
            </p>
            <h3 className="text-xl font-bold mt-8">Links to Other Sites</h3>

            <p className="text-base mt-2">This APPS may contain links to other sites. If you click on a third-party link, you will be directed to
              that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to
              review the Privacy Policy of these websites. We have no control over and assume no responsibility for
              the content, privacy policies, or practices of any third-party sites or services.
            </p>
            <h3 className="text-xl font-bold mt-8">Children’s Privacy</h3>

            <p className="text-base mt-2">These APPS do not address anyone under the age of 13. We do not knowingly collect personally
              identifiable information from children under 13. In the case we discover that a child under 13 has
              provided me with personal information, we immediately delete this from our servers. If you are a parent
              or guardian and you are aware that your child has provided us with personal information, please contact
              me so that we will be able to do necessary actions.
            </p>
            <h3 className="text-xl font-bold mt-8">Changes to This Privacy Policy</h3>

            <p className="text-base mt-2">We may update our Privacy Policy from time to time. Thus, you are advised to review this page
              periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on
              this page. These changes are effective immediately after they are posted on this page.
            </p>
            <h3 className="text-xl font-bold mt-8">Contact Us</h3>

            <p className="text-base mt-2">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at
              info[at]locus.services. </p>

            <br />

            <p className="text-base mt-2">Current edition: <b>May 05, 2024</b></p>

          </div>

        </div>
        <footer className="footer">
          <div className="footer__row footer__row--bottom">
            <p className="copyright">&copy; 2018-{new Date().getFullYear()} &mdash; Locus, Georgia, Tbilisi.</p>
            <p className="contacts">
              <a href="#" title="Drop me a line">info[at]locus.services</a>
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}

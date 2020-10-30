import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from 'components/common/ActionButton/ActionButton';
import { H1, Card, ScrollableTermsCardSection } from 'assets/styles';
import UnauthenticatedPage from 'components/common/Page/UnauthenticatedPage';
import { Link } from 'react-router-dom';
import { ROUTES } from 'app/constants';

export function FunnelTOSAgreement(props) {
    const base = (
        <>
            <H1>Nestio Terms of Service</H1>
            <br />
            <Card>
                <ScrollableTermsCardSection>
                    <div className="tos-container">
                        <em>Last Updated: March 19, 2020</em>
                        <p>
                            Welcome, and thank you for your interest in Nestio, Inc. (“<b>Nestio</b>,” “<b>we</b>,” or “
                            <b>us</b>”) and our website at{' '}
                            <a target="_blank" rel="noopener noreferrer" href="https://www.nestio.com/">
                                https://www.nestio.com/
                            </a>
                            , and other services provided by us (collectively, the “Service”). These Terms of Service
                            are a legally binding contract between you and Nestio regarding your use of the Service.
                        </p>
                        <b>PLEASE READ THE FOLLOWING TERMS CAREFULLY.</b>
                        <p>
                            <b>BY CLICKING “I ACCEPT,” OR BY ACCESSING OR USING THE SERVICE</b>, YOU AGREE THAT YOU HAVE
                            READ AND UNDERSTOOD, AND AGREE TO BE BOUND, BY THE FOLLOWING TERMS AND CONDITIONS, INCLUDING
                            NESTIO’S APPLICABLE PRIVACY STATEMENTS AND POLICIES, INCLUDING WITHOUT LIMITATION THE ONLINE
                            LEASING PLATFORM PRIVACY STATEMENT AND PRIVACY POLICY (TOGETHER, THE “<b>TERMS</b>”). IF YOU
                            ARE NOT ELIGIBLE, OR DO NOT AGREE TO THE TERMS, THEN YOU DO NOT HAVE OUR PERMISSION TO USE
                            THE SERVICE.{' '}
                            <small>
                                REFERENCES TO “YOU” IN THIS AGREEMENT REFER TO ALL INDIVIDUALS AND LEGAL ENTITIES WHO
                                ACCESS OR USE THE SERVICE.
                            </small>
                        </p>
                        <p>
                            Your use of the Service is also subject to any additional terms, conditions and policies
                            that we separately post on the Service and any agreements that you have separately executed
                            with Nestio (“Supplemental Terms”) which are incorporated by reference into these Terms. To
                            the extent there is any conflict between these Terms and the Supplemental Terms, the
                            Supplemental Terms will control with respect to the subject matter of such agreement. For
                            example, if you are a Leasing Professional (as defined below) who has executed an agreement
                            or order form with Nestio (“Customer Agreement”), the terms of that Customer Agreement will
                            control and supersede these Terms with respect to the subject matter of such Customer
                            Agreement.
                        </p>
                        <ol>
                            <li>
                                <b>Agreement Overview</b>. As provided in greater detail in these Terms (and without
                                limiting the express language of the Terms below), you agree and acknowledge that these
                                Terms include the following provisions:
                                <ol>
                                    <li>
                                        <b>ARBITRATION</b> — Disputes arising hereunder will be resolved by binding
                                        arbitration, and BY ACCEPTING THESE TERMS, YOU AND NESTIO ARE EACH WAIVING THE
                                        RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION. YOU AGREE TO GIVE
                                        UP YOUR RIGHT TO GO TO COURT to assert or defend your rights under this contract
                                        (except for matters that may be taken to small claims court). Your rights will
                                        be determined by a NEUTRAL ARBITRATOR and NOT a judge or jury. (These terms are
                                        set forth in Section 16);
                                    </li>
                                    <li>
                                        <b>LICENSE</b> — The Service is licensed, not sold to you, and you may use the
                                        Service only as set forth in these Terms. (These terms are set forth in Section
                                        7);
                                    </li>
                                    <li>
                                        <b>PRIVACY</b> — Nestio will collect, use, share and otherwise process personal
                                        information as set out in the applicable privacy statements and policies,
                                        including without limitation the{' '}
                                        <a href="#privacy-practices">Online Leasing Platform Privacy Statement</a> and{' '}
                                        <Link target="_blank" to={ROUTES.PRIVACY_POLICY}>
                                            Privacy Policy
                                        </Link>
                                        . (These terms are set forth in Section 17.2);
                                    </li>
                                    <li>
                                        <b>NO WARRANTY</b> — The Service is provided “AS IS” and “AS AVAILABLE” without
                                        warranties of any kind and Nestio’s liability to you is limited. (These terms
                                        are set forth in Sections 14 and 15);
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <b>Nestio Service Overview</b>. Nestio’s Service includes a website that connects owners
                                and managers of residential real estate (“<b>Leasing Professionals</b>”) with
                                individuals seeking residential rental spaces (“<b>Applicants</b>”). The Service
                                facilitates the application process for available real estate in the United States of
                                America. The Service shall include any required, usual, appropriate or acceptable
                                activities relating to the Service, such as to (i) carry out the Service or the business
                                of which the Service are a part; (ii) carry out any benefits, rights and obligations
                                relating to the Service; (iii) maintain records relating to the Service; or (iv) comply
                                with any legal or self-regulatory obligations relating to the Service.
                            </li>
                            <li>
                                <b>Eligibility</b>. In addition to any eligibility requirements set forth in the
                                Customer Agreement for Leasing Professionals, you must be a U.S. resident or applying
                                for/managing a U.S. residence and at least 18 years old to use the Service. By agreeing
                                to these Terms, you represent and warrant to us that: (i) you are at least 18 years old;
                                (ii) you have not previously been suspended or removed from the Service; and (iii) your
                                registration and your use of the Service is in compliance with any and all applicable
                                laws and regulations. If you are an entity, organization, or company, the individual
                                accepting these Terms on your behalf represents and warrants that they have authority to
                                bind you to these Terms and you agree to be bound by these Terms.
                            </li>
                            <li>
                                <b>Accounts and Registration</b>. To access the features of the Service, you must
                                register for an account. When you register for an account, you will be required to
                                provide us with some information about yourself, such as your name, email address, or
                                other contact information. You agree that the information you provide to us is accurate
                                and that you will keep it accurate and up-to-date at all times. You will also be asked
                                to provide a password. You are solely responsible for maintaining the confidentiality of
                                your account and password, and you accept responsibility for all activities that occur
                                under your account. If you believe that your account is no longer secure, then you must
                                immediately notify us at <a href="mailto:support@nestio.com">support@nestio.com</a>.
                            </li>
                            <li>
                                <b>Location Based Services</b>. Some of the features of the Service may enable Nestio to
                                access your location in order to tailor your experience with the Service based on your
                                location (“<b>Location-based Services</b>”). If you choose to disable any Location-based
                                Services on your device, you will not be able to utilize certain features of the
                                Service. By enabling Location-based Services, you agree and acknowledge that: (i) device
                                data we collect from you is directly relevant to your use of the Service; (ii) Nestio
                                may provide Location-based Services related to and based on your then-current location;
                                and (iii) Nestio may use any such information collected in connection with provision of
                                the Service.
                            </li>
                            <li>
                                <b>Fees.</b>
                                <ol>
                                    <li>
                                        <b>For Leasing Professionals</b>. Please refer to your Customer Agreement for
                                        information on any fees as negotiated separately by Nestio and Leasing
                                        Professional.
                                    </li>
                                    <li>
                                        <b>For Applicants</b>. The Service is not currently fee based for Applicants,
                                        however Nestio retains the right to enforce a fee structure in the future.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <b>Licenses</b>
                                <ol>
                                    <li>
                                        <b>Limited License Grant to You</b>. Subject to your complete and ongoing
                                        compliance with all the Terms, Nestio grants you permission to access and use
                                        the Service for your personal use.
                                    </li>
                                    <li>
                                        <b>Limited License Grant to Nestio</b>. Certain features of our Service may
                                        require Applicants to transmit documentation via our Services, including but not
                                        limited to financial and credit information, personal identification and contact
                                        information, social security number, vehicle information, proof of income,
                                        references, and other documents (“<b>Applicant Documents</b>”). By providing
                                        Applicant Documents to or via our Service, you grant Nestio a worldwide,
                                        non-exclusive, royalty-free, fully paid right and license (with the right to
                                        sublicense) to host, store, transfer, display, reproduce, modify for the purpose
                                        of formatting for display, and distribute your Applicant Documents, in whole or
                                        in part, as applicable to third parties that process Applicant Documents as
                                        required by the Service. You hereby authorize Nestio to export or otherwise
                                        share Applicant Documents to these third parties as required by the Service.
                                    </li>
                                    <li>
                                        <b>License Restrictions</b>. Except and solely to the extent such a restriction
                                        is impermissible under applicable law, you may not: (i) reproduce, distribute,
                                        publicly display, or publicly perform the Service; (ii) make modifications to
                                        the Service; or (iii) interfere with or circumvent any feature of the Service,
                                        including any security or access control mechanism. If you are prohibited under
                                        applicable law from using the Service, you may not use it.
                                    </li>
                                    <li>
                                        <b>Feedback</b>. If you choose to provide input and suggestions regarding
                                        problems with or proposed modifications or improvements to the Service (“
                                        <b>Feedback</b>”), then you hereby grant Nestio an unrestricted, perpetual,
                                        irrevocable, non-exclusive, fully-paid, royalty-free right to exploit the
                                        Feedback in any manner and for any purpose, including to improve the Service and
                                        create other products and services.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <b>Ownership; Proprietary Rights</b>. The Service is owned and operated by Nestio. The
                                visual interfaces, graphics, design, compilation, information, data, computer code
                                (including source code or object code), products, software, services, and all other
                                elements of the Service (“<b>Materials</b>”) provided by Nestio are protected by
                                intellectual property and other laws. All Materials included in the Service are the
                                property of Nestio or our third-party licensors. Except as expressly authorized by
                                Nestio, you may not make use of the Materials. Nestio reserves all rights to the
                                Materials not granted expressly in these Terms.
                            </li>
                            <li>
                                <b>Third-Party Terms</b>
                                <ol>
                                    <li>
                                        <b>Carrier Service</b>. Your access to use the Service may be subject to
                                        separate third party terms of service and fees, including your internet network
                                        operator’s terms of service and fees, which are your sole responsibility.
                                    </li>
                                    <li>
                                        <b>Third Party Services and Linked Websites</b>. Nestio may provide tools
                                        through the Service that enable you to export information, including Applicant
                                        Documents, to third party services, such as credit reporting agencies and
                                        financial service providers. By using any of these tools, you agree that we may
                                        transfer that information to the applicable third-party service. By using one
                                        such tool, Finicity, you agree to the additional terms{' '}
                                        <a href="#finicity-terms">available here</a>. Third party services are not under
                                        our control, and we are not responsible for any third party service’s use of
                                        your exported information. The Service may also contain links to third-party
                                        websites. Linked websites are not under our control, and we are not responsible
                                        for their content. You access this content at your own risk.
                                    </li>
                                    <li>
                                        <b>Third-Party Payment Processing</b>. We currently use the third-party payment
                                        processor Stripe to process online credit or debit card payments (including
                                        payments for our customers or third parties). If you wish to make a payment
                                        through the Service, your personal information may be collected by Stripe, and
                                        will be subject to Stripe’s privacy policy (
                                        <a target="_blank" rel="noopener noreferrer" href="https://stripe.com/privacy">
                                            available here
                                        </a>
                                        ). We have no control over, and are not responsible for, third-party collection,
                                        use and sharing of your personal information.
                                    </li>
                                    <li>
                                        <b>Open Source Software</b>. The Service may include or incorporate third- party
                                        software components that are generally available free of charge under licenses
                                        granting recipients broad rights to copy, modify, and distribute such components
                                        (“<b>Open Source Components</b>”). Although the Service is provided to you
                                        subject to these Terms, nothing in these Terms prevents, restricts, or is
                                        intended to prevent or restrict you from obtaining such Open Source Components
                                        under the applicable third-party licenses or to limit your use of such Open
                                        Source Components thereunder.
                                    </li>
                                    <li>
                                        <b>Third Party Disputes</b>. NESTIO IS NOT AFFILIATED WITH ANY CARRIER,
                                        FINANCIAL INSTITUTION, CREDIT UNION, BANK, OR THIRD PARTY SERVICE, AND ANY
                                        DISPUTE YOU MAY HAVE WITH ANY CARRIER, FINANCIAL INSTITUTION, CREDIT UNION,
                                        BANK, OR THIRD PARTY SERVICE OR OTHER THIRD PARTY ARISING FROM OR RELATING TO
                                        OUR SERVICE IS DIRECTLY BETWEEN YOU AND SUCH THIRD PARTY. YOU IRREVOCABLY
                                        RELEASE NESTIO (AND NESTIO’S OFFICERS, DIRECTORS, AGENTS, SUBSIDIARIES, JOINT
                                        VENTURES, AND EMPLOYEES) FROM ANY AND ALL CLAIMS, DEMANDS AND DAMAGES (ACTUAL
                                        AND CONSEQUENTIAL) OF EVERY KIND AND NATURE, KNOWN AND UNKNOWN, ARISING OUT OF
                                        OR IN ANY WAY CONNECTED WITH SUCH DISPUTES.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <b>Prohibited Conduct</b>. BY USING THE SERVICE YOU AGREE NOT TO:
                                <ol type="a">
                                    <li>
                                        use the Service for any illegal purpose or in violation of any local, state,
                                        national, or international law;
                                    </li>
                                    <li>
                                        violate, or encourage others to violate, any right of a third party, including
                                        by infringing or misappropriating any third party intellectual property right;
                                    </li>
                                    <li>
                                        interfere with security-related features of the Service, including by: (a)
                                        disabling or circumventing features that prevent or limit use or copying of any
                                        content; or (b) reverse engineering or otherwise attempting to discover the
                                        source code of any portion of the Service except to the extent that the activity
                                        is expressly permitted by applicable law;
                                    </li>
                                    <li>
                                        interfere with the operation of the Service, including by: (a) uploading or
                                        otherwise disseminating any virus, adware, spyware, worm, or other malicious
                                        code, or (b) interfering with or disrupting any network, equipment, or server
                                        connected to or used to provide the Service;
                                    </li>
                                    <li>
                                        perform any fraudulent activity including impersonating any person or entity,
                                        claiming a false affiliation, accessing any other Service account without
                                        permission, or falsifying your age or date of birth;
                                    </li>
                                    <li>
                                        sell or otherwise transfer the access granted under these Terms or any Materials
                                        (as defined in Section 8) or any right or ability to view, access, or use any
                                        Materials; or{' '}
                                    </li>
                                    <li>
                                        attempt to do any of the acts described in this Section 10 or assist or permit
                                        any person in engaging in any of the acts described in this Section 10.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <b>Modification of these Terms</b>. We reserve the right, at our discretion, to change
                                these Terms on a going-forward basis at any time. Please check these Terms periodically
                                for changes. If a change to these Terms materially modifies your rights or obligations,
                                you may be required to accept the modified Terms in order to continue to use the
                                Service. Otherwise, your continued use of the Service constitutes your acceptance of
                                such changes. Material modifications are effective upon your acceptance of the modified
                                Terms. Immaterial modifications are effective upon publication. Except as expressly
                                permitted in this Section 11, these Terms may be amended only by a written agreement
                                signed by authorized representatives of the parties to these Terms. Disputes arising
                                under these Terms will be resolved in accordance with the version of these Terms that
                                was in effect at the time the dispute arose.
                            </li>
                            <li>
                                <b>Term, Termination and Modification of the Service</b>
                                <ol>
                                    <li>
                                        <b>Term</b>. These Terms are effective beginning when you accept the Terms or
                                        use the Service, and ending when terminated as set for in Section 12.2.
                                    </li>
                                    <li>
                                        <b>Termination.</b>
                                        <ol type="a">
                                            <li>
                                                <u>
                                                    <b>For Applicants</b>
                                                </u>
                                                . If you violate any provision of these Terms, your account and these
                                                Terms automatically terminate. In addition, Nestio may, at its sole
                                                discretion, terminate these Terms, your account on the Service or
                                                suspend or terminate your access to the Service at any time for any
                                                reason or no reason, with or without notice. You may terminate your
                                                account and your agreement to these Terms at any time by contacting
                                                customer service at{' '}
                                                <a href="mailto:support@nestio.com">support@nestio.com</a>, and
                                                providing notice of your intent to cancel your account.
                                            </li>
                                            <li>
                                                <u>
                                                    <b>For Leasing Professionals</b>
                                                </u>
                                                . Please refer to your Customer Agreement for the conditions under which
                                                termination may occur.
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <b>Effect of Termination</b>. Upon any termination of these Terms: (i) your
                                        license rights will terminate and you must immediately cease all use of the
                                        Service; (ii) you will no longer have access to your account; and (iii) Sections
                                        7, 8, 12.3, 13, 14, 15, 16 and 17 will survive.
                                    </li>
                                    <li>
                                        <b>Modification of the Service</b>. Nestio reserves the right to modify or
                                        discontinue the Service at any time (including by limiting or discontinuing
                                        certain features of the Service), temporarily or permanently, without notice to
                                        you. We will have no liability whatsoever on account of any change to the
                                        Service or any suspension or termination of your access to or use of the
                                        Service.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <b>Indemnity</b>. In addition to any eligibility requirements set forth in the Customer
                                Agreement for Leasing Professionals, you are responsible for your use of the Service,
                                and, to the fullest extent permitted by law, you will defend and indemnify Nestio and
                                its officers, directors, employees, consultants, affiliates, subsidiaries and agents
                                (together, the “<b>Nestio Entities</b>”) from and against every claim, liability,
                                damage, loss, and expense, including reasonable attorneys’ fees and costs (“
                                <b>Claims</b>”) brought by a third party arising out of or connected with: (a) your use
                                of, or misuse of, the Service not in compliance with these Terms; (b) your violation of
                                any portion of these Terms, any representation, warranty, or agreement referenced in
                                these Terms, or any applicable law or regulation; (c) your violation of any third-party
                                right, including any intellectual property right or publicity, confidentiality, other
                                property, or privacy right; or (d) any dispute or issue between you and any third party.
                                We reserve the right, at our own expense, to assume the exclusive defense and control of
                                any matter otherwise subject to indemnification by you (without limiting your
                                indemnification obligations with respect to that matter), and in that case, you agree to
                                cooperate with our defense of those Claims.
                            </li>
                            <li>
                                <b>Disclaimers; No Warranties</b>
                                <p>
                                    TO THE FULLEST EXTENT PERMITTED BY LAW, THE SERVICE AND ALL MATERIALS AVAILABLE
                                    THROUGH THE SERVICE ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS. TO THE
                                    FULLEST EXTENT PERMITTED BY LAW, NESTIO DISCLAIMS ALL WARRANTIES OF ANY KIND,
                                    WHETHER EXPRESS OR IMPLIED, RELATING TO THE SERVICE AND ALL MATERIALS AVAILABLE
                                    THROUGH THE SERVICE, INCLUDING: (A) ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS
                                    FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, OR NON-INFRINGEMENT; AND (B) ANY
                                    WARRANTY ARISING OUT OF COURSE OF DEALING, USAGE, OR TRADE. TO THE FULLEST EXTENT
                                    PERMITTED BY LAW, NESTIO DOES NOT WARRANT THAT THE SERVICE OR ANY PORTION OF OR THE
                                    SERVICE, OR ANY MATERIALS OFFERED THROUGH THE SERVICE, WILL BE UNINTERRUPTED,
                                    SECURE, OR FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL COMPONENTS, AND DOES NOT
                                    WARRANT THAT ANY OF THOSE ISSUES WILL BE CORRECTED.
                                </p>
                                <p>
                                    NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE SERVICE
                                    OR NESTIO ENTITIES OR ANY MATERIALS AVAILABLE THROUGH THE SERVICE WILL CREATE ANY
                                    WARRANTY REGARDING ANY OF THE NESTIO ENTITIES OR THE SERVICE THAT IS NOT EXPRESSLY
                                    STATED IN THESE TERMS. TO THE FULLEST EXTENT PERMITTED BY LAW, WE ARE NOT
                                    RESPONSIBLE FOR ANY DAMAGE THAT MAY RESULT FROM YOUR USE OF OR ACCESS TO THE
                                    SERVICE. YOU UNDERSTAND AND AGREE THAT YOU USE THE SERVICE, AND ACCESS OR OTHERWISE
                                    OBTAIN MATERIALS THROUGH THE SERVICE AND ANY ASSOCIATED SITES OR SERVICES, AT YOUR
                                    OWN DISCRETION AND RISK, AND THAT, TO THE FULLEST EXTENT PERMITTED BY LAW, WE ARE
                                    NOT RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY (INCLUDING YOUR COMPUTER SYSTEM USED
                                    IN CONNECTION WITH THE SERVICE), OR THE LOSS OF DATA THAT RESULTS FROM THE USE OF
                                    THE SERVICE OR THE DOWNLOAD OR USE OF THE MATERIALS.
                                </p>
                            </li>
                            <li>
                                <b>Limitation of Liability</b>
                                <p>
                                    TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE NESTIO ENTITIES BE
                                    LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE
                                    DAMAGES (INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, OR ANY OTHER INTANGIBLE
                                    LOSS) ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR YOUR INABILITY TO
                                    ACCESS OR USE, THE SERVICE OR ANY MATERIALS ON THE SERVICE, WHETHER BASED ON
                                    WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY,
                                    AND WHETHER OR NOT ANY NESTIO ENTITY HAS BEEN INFORMED OF THE POSSIBILITY OF DAMAGE.
                                </p>
                                <p>
                                    EXCEPT AS PROVIDED IN SECTION 16.4 AND TO THE FULLEST EXTENT PERMITTED BY LAW, THE
                                    AGGREGATE LIABILITY OF THE NESTIO ENTITIES TO YOU FOR ALL CLAIMS ARISING OUT OF OR
                                    RELATING TO THE USE OF OR ANY INABILITY TO USE ANY PORTION OF THE SERVICE OR
                                    OTHERWISE UNDER THESE TERMS, WHETHER IN CONTRACT, TORT, OR OTHERWISE, IS LIMITED TO
                                    THE GREATER OF: (A) THE AMOUNT YOU HAVE PAID TO NESTIO FOR ACCESS TO AND USE OF THE
                                    SERVICE IN THE 12 MONTHS PRIOR TO THE EVENT(S) GIVING RISE TO CLAIM; OR (B) $100.
                                </p>
                                <p>
                                    EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A LIMITATION OF LIABILITY,
                                    DISCLAIMER OF WARRANTIES, OR EXCLUSION OF DAMAGES IS INTENDED TO AND DOES ALLOCATE
                                    THE RISKS BETWEEN THE PARTIES UNDER THESE TERMS. THIS ALLOCATION IS AN ESSENTIAL
                                    ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN THE PARTIES. EACH OF THESE PROVISIONS IS
                                    SEVERABLE AND INDEPENDENT OF ALL OTHER PROVISIONS OF THESE TERMS. THE LIMITATIONS IN
                                    THIS SECTION 15 WILL APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL
                                    PURPOSE.
                                </p>
                            </li>
                            <li>
                                <b>Dispute Resolution and Arbitration</b>
                                <ol>
                                    <li>
                                        <b>Generally</b>. In the interest of resolving disputes between you and Nestio
                                        in the most expedient and cost effective manner, you and Nestio agree that every
                                        dispute arising in connection with these Terms will be resolved by binding
                                        arbitration. Arbitration is less formal than a lawsuit in court. Arbitration
                                        uses a neutral arbitrator instead of a judge or jury, may allow for more limited
                                        discovery than in court, and can be subject to very limited review by courts.
                                        Arbitrators can award the same damages and relief that a court can award. This
                                        agreement to arbitrate disputes includes all claims arising out of or relating
                                        to any aspect of these Terms, whether based in contract, tort, statute, fraud,
                                        misrepresentation, or any other legal theory, and regardless of whether a claim
                                        arises during or after the termination of these Terms. YOU UNDERSTAND AND AGREE
                                        THAT, BY ENTERING INTO THESE TERMS, YOU AND NESTIO ARE EACH WAIVING THE RIGHT TO
                                        A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION, AND THAT THIS AGREEMENT
                                        WILL BE SUBJECT TO AND GOVERNED BY THE FEDERAL ARBITRATION ACT.
                                    </li>
                                    <li>
                                        <b>Exceptions</b>. Despite the provisions of Section 16.1, nothing in these
                                        Terms will be deemed to waive, preclude, or otherwise limit the right of either
                                        party to: (a) bring an individual action in small claims court; (b) pursue an
                                        enforcement action through the applicable federal, state, or local agency if
                                        that action is available; (c) seek injunctive relief in aid of arbitration from
                                        a court of competent jurisdiction; or (d) to file suit in a court of law to
                                        address an intellectual property infringement claim.
                                    </li>
                                    <li>
                                        <b>Arbitrator</b>. Any arbitration between you and Nestio will be settled under
                                        the Federal Arbitration Act, and governed by the Commercial Dispute Resolution
                                        Procedures and the Supplementary Procedures for Consumer Related Disputes
                                        (collectively, “<b>AAA Rules</b>”) of the American Arbitration Association (“
                                        <b>AAA</b>”), as modified by these Terms, and will be administered by the AAA.
                                        The AAA Rules and filing forms are available online at www.adr.org, by calling
                                        the AAA at 1-800-778-7879, or by contacting Nestio. The arbitrator has exclusive
                                        authority to resolve any dispute relating to the interpretation, applicability,
                                        or enforceability of this binding arbitration agreement.
                                    </li>
                                    <li>
                                        <b>Notice; Process</b>. A party who intends to seek arbitration must first send
                                        a written notice of the dispute to the other party by certified U.S. Mail or
                                        electronic mail (“<b>Notice</b>”). Nestio’s address for Notice is: Nestio, Inc.,
                                        150 West 22nd Street, Floor 8, New York, NY 10011 or legal@nestio.com. The
                                        Notice must: (a) describe the nature and basis of the claim or dispute; and (b)
                                        set forth the specific relief sought (“<b>Demand</b>”). The parties will make
                                        good faith efforts to resolve the claim directly, but if the parties do not
                                        reach an agreement to do so within 30 days after the Notice is received, you or
                                        Nestio may commence an arbitration proceeding. During the arbitration, the
                                        amount of any settlement offer made by you or Nestio must not be disclosed to
                                        the arbitrator until after the arbitrator makes a final decision and award, if
                                        any. If the dispute is finally resolved through arbitration in your favor,
                                        Nestio will pay you the highest of the following: (i) the amount awarded by the
                                        arbitrator, if any; (ii) the last written settlement amount offered by Nestio in
                                        settlement of the dispute prior to the arbitrator’s award; or (iii) $15,000.
                                    </li>
                                    <li>
                                        <b>Fees</b>. If you commence arbitration in accordance with these Terms, Nestio
                                        will reimburse you for your payment of the filing fee, unless your claim is for
                                        more than $10,000 or as set forth below, in which case the payment of any fees
                                        will be decided by the AAA Rules. Any arbitration hearing will take place at a
                                        location to be agreed upon in New York, NY but if the claim is for $10,000 or
                                        less, you may choose whether the arbitration will be conducted: (a) solely on
                                        the basis of documents submitted to the arbitrator; (b) through a non-appearance
                                        based telephone hearing; or (c) by an in-person hearing as established by the
                                        AAA Rules in the county (or parish) of your billing address. If the arbitrator
                                        finds that either the substance of your claim or the relief sought in the Demand
                                        is frivolous or brought for an improper purpose (as measured by the standards
                                        set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all
                                        fees will be governed by the AAA Rules. In that case, you agree to reimburse
                                        Nestio for all monies previously disbursed by it that are otherwise your
                                        obligation to pay under the AAA Rules. Regardless of the manner in which the
                                        arbitration is conducted, the arbitrator must issue a reasoned written decision
                                        sufficient to explain the essential findings and conclusions on which the
                                        decision and award, if any, are based. Each party agrees that such written
                                        decision, and information exchanged during arbitration, will be kept
                                        confidential except to the extent necessary to enforce or permit limited
                                        judicial review of the award. The arbitrator may make rulings and resolve
                                        disputes as to the payment and reimbursement of fees or expenses at any time
                                        during the proceeding and upon request from either party made within 14 days of
                                        the arbitrator’s ruling on the merits.
                                    </li>
                                    <li>
                                        <b>No Class Actions</b>. YOU AND NESTIO AGREE THAT EACH MAY BRING CLAIMS AGAINST
                                        THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR
                                        CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further,
                                        unless both you and Nestio agree otherwise, the arbitrator may not consolidate
                                        more than one person’s claims, and may not otherwise preside over any form of a
                                        representative or class proceeding.
                                    </li>
                                    <li>
                                        <b>Modifications to this Arbitration Provision</b>. If Nestio makes any future
                                        change to this arbitration provision, other than a change to Nestio’s address
                                        for Notice, you may reject the change by sending us written notice within 30
                                        days of the change to Nestio’s address for Notice, in which case your account
                                        with Nestio will be immediately terminated and this arbitration provision, as in
                                        effect immediately prior to the changes you rejected will survive.
                                    </li>
                                    <li>
                                        <b>Enforceability</b>. If Section 16.6 is found to be unenforceable or if the
                                        entirety of this Section 16 is found to be unenforceable, then the entirety of
                                        this Section 16 will be null and void.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <b>General Terms</b>. These Terms of Service, together with the Online Leasing Platform
                                Privacy Statement (if you are a user of the Online Leasing Platform) and the Privacy
                                Policy and any other agreements expressly incorporated by reference into these Terms,
                                are the entire and exclusive understanding and agreement between you and Nestio
                                regarding your use of the Service. You may not assign or transfer these Terms or your
                                rights under these Terms, in whole or in part, by operation of law or otherwise, without
                                our prior written consent. We may assign these Terms at any time without notice or
                                consent. The failure to require performance of any provision will not affect our right
                                to require performance at any other time after that, nor will a waiver by us of any
                                breach or default of these Terms, or any provision of these Terms, be a waiver of any
                                subsequent breach or default or a waiver of the provision itself. Use of section headers
                                in these Terms is for convenience only and will not have any impact on the
                                interpretation of any provision. Throughout these Terms the use of the word “including”
                                means “including but not limited to”. If any part of these Terms is held to be invalid
                                or unenforceable, the unenforceable part will be given effect to the greatest extent
                                possible, and the remaining parts will remain in full force and effect.
                                <ol>
                                    <li>
                                        <b>Governing Law</b>. These Terms are governed by the laws of the State of New
                                        York without regard to conflict of law principles. You and Nestio submit to the
                                        personal and exclusive jurisdiction of the state courts and federal courts
                                        located within the Southern District of New York for resolution of any lawsuit
                                        or court proceeding permitted under these Terms.
                                    </li>
                                    {/* eslint-disable-next-line */}
                                    <li>
                                        <a name="privacy-practices">
                                            <b>Privacy Practices.</b>
                                        </a>
                                        <ol type="a">
                                            <li>
                                                Nestio shall collect, use, share and otherwise process personal
                                                information only for purposes of performing the Services, as set out in
                                                the Terms and Nestio’s relevant privacy statements and policies. Nestio
                                                may create and derive from processing personal information related to
                                                the Service anonymized and/or aggregated data that does not identify any
                                                Leasing Professional or Applicant, and use, publicize or share with
                                                third parties such data for Nestio’s legitimate business purposes.
                                            </li>
                                            <li>
                                                Nestio will provide reasonable assistance to the Leasing Professional to
                                                assist the Leasing Professional in responding to individuals’ requests
                                                to exercise their privacy rights under applicable law (e.g., rights of
                                                access, deletion, etc.).
                                            </li>
                                            <li>
                                                Nestio will delete personal information of inactive Applicants and
                                                Leasing Professionals after no less than 24 months of inactivity or
                                                within 3 months of the end of the termination of these Terms, at
                                                Nestio’s sole discretion. Nestio shall delete personal information by
                                                erasing the personal information from Nestio’s production systems and
                                                data warehouse(s); however, historic backups may still contain personal
                                                information. Nestio may retain personal information for up to 24 months
                                                after the end of the termination of these Terms, or as otherwise
                                                required by applicable law.
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <b>ESIGN Act Consent to Use Electronic Records</b>. By using the Service, you
                                        consent and agree to receiving electronically, via the Service, all disclosures
                                        that the Fair Credit Reporting Act (“FCRA”) requires us to provide in writing.
                                        Please email support@nestio.com for a paper copy of the information that the
                                        FCRA requires us to provide to you in writing. Your consent covers all
                                        disclosures that the FCRA requires Nestio to make in writing. You agree that any
                                        notices, agreements, disclosures or other communications that we send to you
                                        electronically will satisfy any legal communication requirements, including that
                                        those communications be in writing. Your consent remains in effect until you
                                        give us notice that you are withdrawing it. You have the right to withdraw your
                                        consent at any time. Please be aware, however, that withdrawal of consent may
                                        result in the termination of your Service account. To withdraw your consent to
                                        receive disclosures electronically, email support@nestio.com with the subject
                                        line “WITHDRAWAL OF CONSENT TO ELECTRONIC COMMUNICATIONS.” Please read our
                                        Online Leasing Platform Privacy Statement (if applicable) and Privacy Policy to
                                        learn more about our electronic communications practices.
                                    </li>
                                    <li>
                                        <b>SMS Communications</b>. If you are an Applicant and provide your phone
                                        number, Nestio, at Leasing Professional’s direction, may send you notifications
                                        by SMS, such as to alert you of a problem with your account. You may opt out of
                                        SMS communications at any time by replying “STOP” to the originating number.
                                        After you send the SMS message “STOP” to us, we may send you an SMS to confirm
                                        that you have been unsubscribed. If you want to join again, just sign up as you
                                        did the first time and we will start sending SMS messages again.
                                    </li>
                                    <li>
                                        <b>Contact Information</b>. The Service is offered by Nestio, Inc., located at
                                        150 West 22nd Street, Floor 8, New York, NY 10011 Attn: Legal. You may contact
                                        us by sending correspondence to that address or by emailing us at{' '}
                                        <a href="mailto:support@nestio.com">support@nestio.com</a>. You can access a
                                        copy of these Terms by clicking here:{' '}
                                        <Link
                                            target="_blank"
                                            to={ROUTES.TERMS}
                                        >{`${window.location.origin}/${props.leaseSettingsId}${ROUTES.TERMS}`}</Link>
                                        .
                                    </li>
                                    <li>
                                        <b>Notice to California Residents</b>. If you are a California resident, under
                                        California Civil Code Section 1789.3, you may contact the Complaint Assistance
                                        Unit of the Division of Consumer Services of the California Department of
                                        Consumer Affairs in writing at 1625 N. Market Blvd., Suite S¬202, Sacramento,
                                        California 95834, or by telephone at (800) 952-5210 in order to resolve a
                                        complaint regarding the Service or to receive further information regarding use
                                        of the Service.
                                    </li>
                                </ol>
                            </li>
                        </ol>
                        <div className="center">
                            {/* eslint-disable-next-line */}
                            <a name="finicity-terms">
                                <u>
                                    <b>Finicity Terms – Linked from Section 9.2</b>
                                </u>
                            </a>
                        </div>

                        <p>
                            1. LICENSEE ACCESS INFORMATION AND ACCOUNT DATA. You are solely responsible for (a)
                            maintaining the confidentiality and security of your access number(s), password(s), security
                            question(s) and answer(s), account number(s), login information, and any other security or
                            access information, used by you, or anyone you authorize on your behalf, to access the
                            Finicity Services and Nestio accounts (collectively, “Licensee Access Information”), and (b)
                            preventing unauthorized access to or use of the information, files or data that you store or
                            use in or with the Finicity Services (collectively, “Account Data”). You will be responsible
                            for all electronic communications, including account registration and other account holder
                            information, email and financial, accounting and other data (“Communications”) entered using
                            the Licensee Access Information. It is assumed that any Communications received through use
                            of the Licensee Access Information were sent or authorized by you. You agree to immediately
                            notify Finicity if you become aware of any loss, theft or unauthorized use of any Licensee
                            Access Information. We reserve the right to deny you access to the Finicity Services (or any
                            part thereof) if we reasonably believe that any loss, theft or unauthorized use of Licensee
                            Access Information has occurred. You must inform Finicity of, and hereby grant to Finicity
                            and Finicity’s third party vendors permission to use, Licensee Access Information to the
                            extent we deem necessary to enable Finicity to provide the Finicity Services to you,
                            including updating and maintaining Account Data, addressing errors or service interruptions,
                            and to enhance the types of data and services we may provide to you in the future.
                        </p>
                        <p>
                            Notwithstanding any provision of Finicity’s Privacy Policy to the contrary, compiled,
                            anonymized data concerning your financial transactions, or other available data that is
                            collected through your use of the Finicity Services, may be used by Finicity’s third party
                            vendors to conduct certain analytical research, performance tracking and benchmarking.
                            Finicity’s third party vendors may publish summary or aggregate results relating to metrics
                            comprised of research data, from time to time, and distribute, sell or license such
                            compiled, anonymized data for any purpose, including but not limited to, helping to improve
                            products and services and assisting in troubleshooting and technical support or any other
                            purpose permitted by applicable law. To the extent such information is shared or disclosed,
                            it will not contain any of your personally identifiable information.
                        </p>
                        <p>2. PROVIDER SERVICES.</p>
                        <p>
                            2.1 General. In connection with your use of the Finicity Services and as part of the
                            functionality of the Finicity Services, you may have access to certain online services or
                            information that may be made available by Nestio(s) (“Nestio Services”), including online
                            banking, online payment, online investment account download, online bill pay, online
                            trading, and other account information available from Nestio(s). The Finicity Services are
                            designed to allow you to access Nestio Services (if and to the extent provided by Nestio(s))
                            to set up banking and other information, schedule the Finicity Services to access your
                            account(s), download transactions into the Finicity Services and otherwise aggregate
                            information from your account(s) with Nestio(s). You acknowledge and agree that we have no
                            control over the provision of Nestio Services or provision of access to the Nestio Services
                            by Nestio(s), do not guarantee that you will be able to use the Finicity Services with the
                            Nestio Services, and will have no liability whatsoever for any actions or inactions on the
                            part of the provider(s) resulting in your inability to use the Finicity Services to access
                            your accounts, obtain data, download transactions, or otherwise use or access the Nestio
                            Services.
                        </p>
                        <p>
                            2.2 Collection of Nestio Account Information. You acknowledge that in accessing your data
                            and information through the Finicity Services, Nestio account access number(s), password(s),
                            security question(s) and answer(s), account number(s), login information, and any other
                            security or access information, and the actual data in your account(s) with such provider(s)
                            such as bank and other account balances, credit card charges, debits and deposits
                            (collectively, “Nestio Account Data”), may be collected and stored in the Finicity Services.
                            You authorize Finicity and Finicity’s third party vendors, in conjunction with the operation
                            and hosting of the Finicity Services, to use certain Nestio Account Data to (a) collect your
                            Nestio Account Data, (b) reformat and manipulate such Nestio Account Data, (c) create and
                            provide hypertext links to Nestio(s), (d) access the providers’ websites using your Nestio
                            Account Data, (e) update and maintain your account information, (f) address errors or
                            service interruptions, (g) enhance the type of data and services we can provide to you in
                            the future, and (h) take such other actions as are reasonably necessary to perform the
                            actions described in (a) through (g) above. You hereby represent that you are the legal
                            owner of your Nestio Account Data and that you have the authority to appoint, and hereby
                            expressly do appoint, Finicity or Finicity’s third party vendors as your agent with a
                            limited power of attorney, and appoint Finicity or Finicity’s third party vendors as your
                            attorney-in-fact and agent, to access third party sites and/or retrieve and use your Nestio
                            Account Data through whatever lawful means with the full power and authority to do and
                            perform each thing necessary in connection with such activities, as you could do in person,
                            including, without limitation, accepting any new and/or updated terms and conditions from
                            Nestio on your behalf, in providing Finicity Services to you. You also expressly authorize
                            Nestio to share and disclose your Nestio Account Data to Finicity on your behalf to
                            facilitate your use of your Nestio Account Data for products and services agreed to by you.
                            You further acknowledge that we do not, nor does Finicity’s third party vendor review your
                            Nestio Account Data and agree that we are not responsible for its completeness or accuracy.
                            Any transactions or informational activities performed at any provider’s website are not
                            made through the Finicity Services and we assume no responsibility for such transactions or
                            activities. You are solely responsible for any charges associated with Nestio(s). The
                            permissions, uses and access rights granted to Finicity’s third party vendors hereunder
                            shall continue until such parties are notified by Finicity or you that the Finicity Services
                            have been terminated.
                        </p>

                        <p>
                            2.3 Information from Nestio’s Websites. You acknowledge and agree that (a) some providers
                            may not allow the Finicity Services to access the Nestio Services, (b) providers may make
                            changes to their websites, with or without notice to us, that may prevent or delay
                            aggregation of information from such websites, and (c) the Finicity Services may “refresh”
                            the Nestio Account Data by collecting the Nestio Account Data nightly, so your most recent
                            transactions may not be reflected in any account balances or other account information
                            presented to you in the Finicity Services. If you see a discrepancy in the Nestio Account
                            Data, and in any case before making any transactions or decisions based on such account
                            information presented in the Finicity Services, you should check the last refresh date for
                            the account and confirm Nestio Account Data is correct by following the link back to the
                            applicable provider or otherwise confirm that Nestio Account Data is up to date and
                            accurate.
                        </p>
                        <p>
                            3. SOFTWARE USE, STORAGE AND ACCESS. We shall have the right, in Finicity’s sole discretion
                            and with reasonable notice, to establish or change limits concerning use of the Finicity
                            Services, temporarily or permanently, including but not limited to (a) the amount of storage
                            space you have on the Finicity Services at any time, and (b) the number of times (and the
                            maximum duration for which) you may access the Finicity Services in a given period of time.
                            We reserve the right to make any such changes effective immediately to maintain the security
                            of the system or Licensee Access Information or to comply with any laws or regulations, and
                            to provide you with electronic or written notice within thirty (30) days after such change.
                            You may reject changes by discontinuing use of the Finicity Services to which such changes
                            relate. Your continued use of the Finicity Services will constitute your acceptance of and
                            agreement with such changes. Maintenance upon the Finicity Services may be performed from
                            time-to-time resulting in interrupted service, delays or errors in the Finicity Services.
                            Attempts to provide prior notice of scheduled maintenance will be made, but provider cannot
                            guarantee that such notice will be provided.
                        </p>
                        <p>
                            4. EXPORT RESTRICTIONS. You acknowledge that the Finicity Services and any software
                            underlying such Finicity Services are subject to the U.S. Export Administration Regulations
                            (15 CFR, Chapter VII) and that you will comply with these regulations. You will not export
                            or re-export the software or Finicity Services, directly or indirectly, to: (a) any
                            countries that are subject to U.S. export restrictions; (b) any end user who has been
                            prohibited from participating in U.S. export transactions by any federal agency of the U.S.
                            government; or (c) any end user who you know or have reason to know will utilize them in the
                            design, development or production of nuclear, chemical or biological weapons. You further
                            acknowledge that this product may include technical data subject to export and re-export
                            restrictions imposed by U.S. law.
                        </p>
                        <p>
                            5. DISCLAIMER. YOU ACKNOWLEDGE AND AGREE THAT THE FINICITY SERVICES AND ANY THIRD PARTY
                            SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” THE THIRD PARTY VENDOR AND ITS LICENSORS
                            MAKE NO WARRANTY, EXPRESS, IMPLIED, OR STATUTORY, AND DISCLAIM ANY AND ALL WARRANTIES WITH
                            RESPECT TO THE SERVICES OR ANY THIRD PARTY SERVICES; IN WHOLE OR IN PART, INCLUDING WITHOUT
                            LIMITATION ANY IMPLIED WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, TITLE,
                            OR NON-INFRINGEMENT. YOU UNDERSTAND AND EXPRESSLY AGREE THAT ANY USE OF THE SERVICES OR
                            THIRD PARTY SERVICES WILL BE AT YOUR SOLE RISK. VENDOR AND ITS (a) LICENSORS AND (b) THIRD
                            PARTY VENDORS DO NOT WARRANT THE COMPREHENSIVENESS, COMPLETENESS, CORRECTNESS, LEGALITY, OR
                            ACCURACY OF THE SERVICES OR THIRD PARTY SERVICES, IN WHOLE OR IN PART, OR THAT THE SERVICES
                            WILL BE SECURE, UNINTERRUPTED OR ERROR FREE. YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO
                            YOUR COMPUTER SYSTEM OR OTHER DEVICE OR LOSS OF DATA THAT RESULTS FROM YOUR USE OF THE
                            SERVICES OR THIRD PARTY SERVICES.
                        </p>
                        <p>6. COMPLIANCE WITH FAIR CREDIT REPORTING ACT</p>
                        <p>
                            6.1 You acknowledge that applications that use consumer data to generate scores or other
                            reports or that otherwise will be utilized by application users in connection with making a
                            decision as to whether to enter into the following types of transactions or on what terms
                            the transaction will be offered (“Financial Apps”) may be subject to the provisions of the
                            Federal Fair Credit Reporting Act (“FCRA”) and equivalent state laws:
                        </p>
                        <ul>
                            <li>Extend credit to an applicant.</li>
                            <li>Issue an insurance policy to an applicant.</li>
                            <li>Employ a job applicant.</li>
                            <li>Rent an apartment to a prospective tenant.</li>
                            <li>
                                Sell a product to, provide a service to or otherwise enter into a transaction initiated
                                by a prospective customer.
                            </li>
                            <li>Accept a check or credit card as payment for a sale.</li>
                            <li>
                                Other activities set forth in Section 604 of the FCRA (15 U.S.C. §1681b) and in
                                interpretations of Section 604 by the Federal Trade Commission and the Bureau of
                                Consumer Financial Protection.
                            </li>
                        </ul>
                        <p>
                            6.2 You acknowledge and agree that, in connection with Finicity Corporation’s (“Finicity”)
                            products and services as a third party vendor of ours, data will be transmitted or made
                            available in a mechanical manner by Finicity, and that to the extent Finicity is involved,
                            Finicity will not alter the substance of the data unless authorized by you. You hereby
                            authorize Finicity to access Nestio to obtain Nestio Account Data and other Nestio Services
                            on your behalf and at your authorization. Finicity is providing the service of data delivery
                            only as requested by you, the ultimate end-user, as requested and authorized by you, the
                            owner of such information. You acknowledge that Finicity is not a reseller of data (other
                            than in the manner described in paragraph 1 with respect to anonymized data) but simply
                            provides the service of transferring data as requested and you from one party to the party
                            directed and authorized by you to receive the data.
                        </p>
                        <p>
                            7. THIRD PARTY BENEFICIARY; INDEMNIFICATION. You agree that Finicity is a third party
                            beneficiary of the above provisions, with all rights to enforce such provisions as if
                            Finicity were a party to this Agreement. You agree to protect Finicity and its affiliates
                            from any and all third party claims, liability, damages, expenses and costs caused by or
                            arising from your use of the Finicity Services, your violation of these terms or your
                            infringement, or infringement by any other user of your account, of any intellectual
                            property or other right of anyone.
                        </p>
                        <p>
                            8. LIMITATION OF LIABILITY. YOU AGREE THAT NEITHER FINICITY NOR ANY OF ITS AFFILIATES,
                            ACCOUNT PROVIDERS OR ANY OF THEIR AFFILIATES WILL BE LIABLE FOR ANY HARMS, WHICH LAWYERS AND
                            COURTS OFTEN CALL DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES,
                            INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER
                            INTANGIBLE LOSSES, EVEN IF FINICITY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES,
                            RESULTING FROM: (i) THE USE OR THE INABILITY TO USE THE SERVICE; (ii) THE COST OF GETTING
                            SUBSTITUTE GOODS AND SERVICES, (iii) ANY PRODUCTS, DATA, INFORMATION OR SERVICES PURCHASED
                            OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO, THROUGH OR FROM THE SERVICE;
                            (iv) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (v) STATEMENTS OR
                            CONDUCT OF ANYONE ON THE SERVICE; (vi) THE USE, INABILITY TO USE, UNAUTHORIZED USE,
                            PERFORMANCE OR NON-PERFORMANCE OF ANY THIRD PARTY ACCOUNT PROVIDER SITE, EVEN IF THE
                            PROVIDER HAS BEEN ADVISED PREVIOUSLY OF THE POSSIBILITY OF SUCH DAMAGES; OR (vii) ANY OTHER
                            MATTER RELATING TO THE SERVICE.
                        </p>
                    </div>
                </ScrollableTermsCardSection>
            </Card>
        </>
    );
    if (props.isSignedIn) {
        return base;
    } else {
        return (
            <UnauthenticatedPage>
                {base}
                <ActionButton onClick={props.onAgree}>Agree and Continue</ActionButton>
            </UnauthenticatedPage>
        );
    }
}

FunnelTOSAgreement.propTypes = {
    isSignedIn: PropTypes.bool.isRequired,
    onAgree: PropTypes.func.isRequired,
};

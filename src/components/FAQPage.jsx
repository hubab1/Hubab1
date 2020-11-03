import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import captureRoute from 'app/captureRoute';
import { ROUTES } from 'app/constants';
import { useEffect } from 'react';
import { useState } from 'react';
import API from 'app/api';

import { ScrollableTermsCardSection, Card, H1 } from 'assets/styles';
import UnauthenticatedPage from 'components/common/Page/UnauthenticatedPage';
import { sessionIsValidForCommunityId } from 'utils/misc';

const Section = styled.div`
  font-size: 14px;
  margin-top: 26px;
  
  h1 {
    font-size: 20px;
    text-align: center;
  }
  
  h2 {
    font-size: 16px;
  }
`

const LIST_TYPES = {
    NUMBER: '1',
    ALPHABETICALLY_LOWER_CASE: 'a',
    ROMAN_NUMBERS_LOWER_CASE: 'i'
}
export function FAQPage() {
    return (
        <>
            <H1>Frequently Asked Questions</H1>
            <br/>
            <Card>
                <ScrollableTermsCardSection>
                    <ol type={LIST_TYPES.NUMBER}>
                        <li>
                            Web site
                            <ol type={LIST_TYPES.ALPHABETICALLY_LOWER_CASE}>
                                <li>
                                    Funnel contact information, processes
                                    <ol type={LIST_TYPES.ROMAN_NUMBERS_LOWER_CASE}>
                                        <li>Who fulfills these inquiries?</li>
                                        <li>What does client want?</li>
                                        <li>What agreement language, if any, do we need?</li>
                                        <li>What scripts do we need for consumer response?</li>
                                        <li>What forms do we need for consumer queries?</li>
                                    </ol>
                                </li>
                                <li>
                                    Consumer FAQs
                                    <ol type={LIST_TYPES.ROMAN_NUMBERS_LOWER_CASE}>
                                        <li>Covers tenant screening</li>
                                        <li>Covers other lease questions - lease completion, payment disputes, offline fulfillment</li>
                                    </ol>
                                </li>
                                <li>
                                    User FAQs
                                    <ol type={LIST_TYPES.ROMAN_NUMBERS_LOWER_CASE}>
                                        <li>Where do I get this report? How do I adjust the score? Can I re-use a report from 2 weeks ago? What do I do when Applicant wants to appeal decision? Where do I find an old report?</li>
                                        <li>Registered users access only</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>

                        <br />

                        <li>
                            Internal Process - Tenant Screening
                            <ol type={LIST_TYPES.ALPHABETICALLY_LOWER_CASE}>
                                <li>
                                    Request disclosure of Funnel transaction
                                    <ol type={LIST_TYPES.ROMAN_NUMBERS_LOWER_CASE}>
                                        <li>Verify prior transaction vs. consumer ID</li>
                                        <li>Send report to verified email/address</li>
                                    </ol>
                                </li>
                                <li>
                                    Reseller CR dispute
                                    <ol type={LIST_TYPES.ROMAN_NUMBERS_LOWER_CASE}>
                                        <li>
                                            Process for TU, Finicity
                                            <ol type={LIST_TYPES.NUMBER}>
                                                <li>When it’s clearly about the credit report, score</li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    App Questions, Disputes about Client’s tenant screening decision
                                    <ol type={LIST_TYPES.ROMAN_NUMBERS_LOWER_CASE}>
                                        <li>
                                            Define Client Process
                                            <ol type={LIST_TYPES.NUMBER}>
                                                <li>
                                                    Questions from App
                                                    <ol type={LIST_TYPES.ALPHABETICALLY_LOWER_CASE}>
                                                        <li>Why was I declined? How close was I? Could I get in elsewhere? Was it bec. of my subsidy?</li>
                                                        <li>What does this trade line, crim history mean (on the CR)?</li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    Request for reconsideration after credit/criminal adverse action
                                                    <ol type={LIST_TYPES.ALPHABETICALLY_LOWER_CASE}>
                                                        <li>WhyApp presents guarantor, mitigating evidence for Client review</li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    Reporting
                                    <ol type={LIST_TYPES.ROMAN_NUMBERS_LOWER_CASE}>
                                        <li>Dispute tracker - all of the above</li>
                                        <li>Periodic trends review</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ol>

                    <br />

                    <Section>
                        <h1>Funnel - Consumer Assistance - Frequently Asked Questions</h1>

                        <h2>How do I find out if my apartment application has been received or when I can expect a decision?</h2>
                        <p>Funnel provides data to property management clients for them to determine whether you qualify to lease with their company. Unfortunately, we are unable to provide the application status. You will need to speak with [the property] to determine if they’ve received your application and when they expect to provide a decision.</p>

                        <h2>Will you be able to tell me why my application was denied?</h2>
                        <p>The criteria to accept or decline an applicant are established by the property and/or its corporate headquarters, not Funnel. Funnel provides our clients with consumer reports from consumer reporting agencies (CRAs) that clients use as a tool in making their decisions to accept or decline applicants.</p>
                        <p>The client may decline a rental application for one or more reasons, including the applicant’s credit history, credit score, criminal records history, and/or a reference check to an applicant’s prior landlord.</p>
                        <p>Some properties use a scoring model and will receive a TransUnion score for rental screening. This score is unique to each individual or lease. A score which results in a decline at one property may generate an approval at another property. Please note, this score, while incorporating credit as a factor, is not the same as a FICO™ score. It is generally much lower than a credit bureau score. The Adverse Action Notice you receive will indicate what factors, if improved, would also most improve your score.</p>

                        <h2>What are my rights under the Fair Credit Reporting Act? What if I suspect I have been a victim of identity theft?</h2>
                        <p>For a detailed description of your rights as a consumer under the FCRA, and steps you can take to remedy the effects of suspected identity theft, the federal Consumer Financial Protection Bureau (CFPB) has provided detailed disclosures in Spanish and English at: <a href="https://www.consumerfinance.gov/policy-compliance/guidance/other-applicable-requirements/fair-credit-reporting-act/model-forms-and-disclosures" target="_blank">https://www.consumerfinance.gov/policy-compliance/guidance/other-applicable-requirements/fair-credit-reporting-act/model-forms-and-disclosures</a></p>

                        <h2>Who is Funnel and why do they have information about me?</h2>
                        <p>Funnel is a reseller of consumer reports and scores generated by consumer reporting agencies (CRAs), such as TransUnion® and Finicity. Funnel provides information to rental housing providers to assist them in making leasing decisions. It is important to understand that information from these CRAs is not maintained by Funnel. As a reseller of credit reports, Funnel only resells consumer reports to its customers, as permitted under the Fair Credit Reporting Act and other applicable law.</p>

                        <h2>What is a consumer report?</h2>
                        <p>A consumer report may contain information from public record sources, creditors, and other data furnishers, which prospective housing providers and employers use to evaluate an applicant. A consumer report may also show whether or not a person has been sued, filed for bankruptcy, or has a criminal or civil court record.</p>

                        <h2>How do I obtain a copy of my Consumer File?</h2>
                        <p>Under the Fair Credit Reporting Act, you are entitled to receive one free copy of your consumer file in any twelve month period from a consumer reporting agency (CRA). You are also entitled to a free copy of your consumer file if you meet the following criteria:</p>
                        <ul>
                            <li>You have been notified of an adverse action or been denied housing or employment based on information in your consumer file within the past 60 days</li>
                            <li>You reside in a state where you are entitled to more than one free copy in any twelve month period</li>
                            <li>You suspect that your file may contain fraudulent information, or you are a victim of identity theft</li>
                            <li>You are unemployed or you currently receive public assistance</li>
                        </ul>
                        <p>A centralized service is available to eligible consumers to request free annual credit file disclosures from nationwide credit bureaus. The three major nationwide credit bureaus (Equifax®, Experian®, and TransUnion®) established access for consumers to this centralized service using one of the following options:</p>
                        <p>
                            Internet: <a href="www.annualcreditreport.com">www.annualcreditreport.com</a>
                            <br/>
                            Phone: <a href="tel:877-322-8228">(877) 322-8228</a> (toll-free)
                            <br/>
                            Mail: Annual Credit Report Request Service
                            <br/>
                            PO Box 105281
                            <br/>
                            Atlanta, GA 30348-5281
                        </p>

                        <h2>How do I obtain a copy of the consumer report generated for my rental application through Funnel?</h2>
                        <p>You may obtain a copy of the report generated from our CRA vendor for your rental application through Funnel in one of these ways:</p>
                        <ol type={LIST_TYPES.NUMBER}>
                            <li>Call our toll-free number <a href="tel:833-979-3074">(833) 979-3074</a> OR</li>
                            <li>Complete Online form (<a href="https://forms.gle/aSk9vRXCecfFYckb9" target="_blank">https://forms.gle/aSk9vRXCecfFYckb9</a>)</li>
                        </ol>

                        <h2>The information in my file is not correct, how do I dispute it?</h2>
                        <p>You may dispute information on your consumer report by contacting the consumer reporting agency directly. Their details are below: Alternatively, you may log a dispute directly with us by calling our toll-free number: [833-979-3074] or by sending email/completing form at <a href="www.funnel.com/consumer" target="_blank">www.funnel.com/consumer</a></p>
                        <p>A reinvestigation will be completed within 30 days from the date we receive your request and you will be notified in writing with the results of your consumer dispute. If you are disputing information appearing on a consumer report obtained by a Funnel client in conjunction with your application for housing, we will notify the appropriate credit bureau of your dispute.</p>
                        <p>Alternately, you may wish to contact the consumer reporting agency directly to initiate your credit dispute:</p>
                        <p>
                            <strong>TransUnion Rental Screening Solutions</strong>
                            <br/>
                            Attn: Consumer Dispute Team
                            <br/>
                            Box 800
                            <br/>
                            Woodlyn, PA 19094
                            <br/>
                            <a href="tel:800-230-9376">(800) 230-9376</a>
                            <br/>
                            <a href="mailto:TURSSDispute@transunion.com">TURSSDispute@transunion.com</a>
                            <br/>
                            <a href="https://www.transunion.com/client-support/rental-screening-disputes" target="_blank">https://www.transunion.com/client-support/rental-screening-disputes</a>
                        </p>
                        <p>
                            <strong>Finicity Corporation</strong>
                            <br/>
                            Attn: Information Dispute Services
                            <br/>
                            53rd Center
                            <br/>
                            434 Ascension Way, Suite 200
                            <br/>
                            Murray, UT 84123
                            <br/>
                            <a href="tel:+1-855-263-3072">+1 (855) 263-3072</a>
                        </p>

                        <h2>What is the Fair Credit Reporting Act?</h2>
                        <p>The Fair Credit Reporting Act (FCRA) is a federal law that gives you the right to know what Consumer Reporting Agencies (CRAs) have on file about you, as well as outlining your right to dispute errors contained in your consumer file. It sets tight restrictions for CRAs about the circumstances under which a consumer report may be obtained and disclosed. The FCRA gives you the right to receive a free copy of your consumer file if you are denied credit, housing, employment or had any other adverse action as a result of information obtained from a CRA. For additional information on the FCRA, visit the Federal Trade Commission's Web site at: <a href="www.ftc.gov" target="_blank">www.ftc.gov</a>.</p>

                        <h2>Someone else has been using my identity, what do I do?</h2>
                        <p>If you believe you are the victim of identity theft, you should contact the credit bureau[s] for information on how to place a fraud alert or file block on your consumer credit file. Additional information on identity fraud may be found on the Federal Trade Commission's Identity Theft Data Clearinghouse Web site at <a href="www.consumer.gov/idtheft" target="_blank">www.consumer.gov/idtheft</a>.</p>

                        <p>If you suspect that you have been or are about to become a victim of fraud or a related crime, including identity theft, you may contact the national consumer reporting agencies to request a fraud alert or other alerts permitted under the Fair Credit Reporting Act be placed in the files such companies maintain on you. The addresses, phone numbers and websites are as follows:</p>
                        <p>
                            EQUIFAX
                            <br/>
                            P.O. Box 740256
                            <br/>
                            Atlanta, GA 30374
                            <br/>
                            <a href="tel:800-525-6285">(800) 525-6285</a>
                            <br/>
                            <a href="www.equifax.com" target="_blank">www.equifax.com</a>
                        </p>
                        <p>
                            EXPERIAN
                            <br/>
                            P.O. Box 9556
                            <br/>
                            Allen, TX 75013
                            <br/>
                            <a href="tel:888-397-3742">(888) 397-3742</a>
                            <br/>
                            <a href="www.experian.com" target="_blank">www.experian.com</a>
                        </p>
                        <p>
                            TRANSUNION
                            <br/>
                            P.O. Box 6790
                            <br/>
                            Fullerton, CA 92834-6790
                            <br/>
                            <a href="tel:800-680-7289">(800) 680-7289</a>
                            <br/>
                            <a href="www.transunion.com">www.transunion.com</a>
                        </p>

                        <p>If you are a victim of identity theft, you should contact the Federal Trade Commission’s Identity Theft Hotline to obtain more detailed information about how to protect yourself and recover from identity theft and to file an identity theft complaint.</p>
                        <p>By sharing your identity theft complaint with the FTC, you will provide important information that can help law enforcement officials across the nation track down identity thieves and stop them. The FTC can refer victims' complaints to other government agencies and companies for further action, as well as investigate companies for violations of laws the agency enforces.</p>
                        <p>You can file a complaint online at www.ftc.gov/idtheft by phone through the FTC's Identity Theft Hotline, toll-free: 1-877-IDTHEFT (438-4338); TTY: 1-866-653- 4261; or write: Identity Theft Clearinghouse, Federal Trade Commission, 600 Pennsylvania Avenue, NW, Washington, DC 20580.</p>
                    </Section>

                    <Section>
                        <h2>Contact Us</h2>
                        <p>If you have additional questions or concerns, our Consumer Relations Specialists can assist you.</p>
                        <p>
                            Phone: <a href="tel:+1-888-333-2413">+1 (888) 333-2413</a>
                            <br/>
                            Mail: <a href="mailto:consumer@funnelleasing.com">consumer@funnelleasing.com</a>
                            <br/>
                            Funnel Leasing
                            <br/>
                            150 west 22nd Street
                            <br/>
                            NY, NY 10011
                        </p>
                    </Section>
                </ScrollableTermsCardSection>
            </Card>
        </>
    )
}

export default FAQPage

import React, { Component } from "react";
import HeroSection from "../../../components/Hero/Hero";
import "../../../components/Hero/Hero.scss";
import BackgroundImage from '../../../assets/bluebg.jpg';
import "./style.scss";
import App from "../../../App";

export default class PrivacyPolicy extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        App.Current.SetPageName("Privacy Policy");
    }

    componentWillUnmount(){
        App.Current.SetPageName(null);
    }
    
    render() {
        return (
            <>
                {/* 01. hero */}
                <HeroSection backgroundImage={BackgroundImage} title="Privacy Policy" />
                {/* 02. body */}
                <section className="body__bg">
                    <div className="container-maxwidth body__container">
                        {/* article */}
                        <article className="body__article body__article--padding privacy-policy">

                            <ol>

                                <li><h6>Introduction</h6>

                                    <ol type="i">
                                        <li>WhiteCollarBlue (the “Company”) respects your privacy and we acknowledge that you have certain rights related to any personal data we collect from you and we have certain obligations in respect of the same. The Company supports the various international and local privacy laws and has procedures in place to meet the requirements of those laws.</li>
                                        <li>This privacy policy (“Privacy Policy”) discloses our privacy principles and/or our practices for gathering, collecting, storing, using and/or disclosing your personal data. We encourage you to review this Privacy Policy so that you may understand how we may collect, use, disclose, process and share your personal data.</li>
                                        <li>For the avoidance of doubt, “personal data” means data, whether true or not, about an individual who can be identified (a) from that data; or (b) from that data and other information to which the organisation has or is likely to have access. References to “us” or “we” shall refer to the Company.</li>
                                    </ol>

                                </li>

                                <br />

                                <li><h6>Information we collect, use or disclose</h6>

                                    <ol type="i">
                                        <li>In order for us to provide our services and for the operation of our business, provide services of recruiting and placing individuals for potential work assignments (and related services) with our customers and/or directly at the Company, act as employer or hirer of record for individuals employed or engaged by the Company, or provide human resources related services to our customers, we must collect certain personal data from and about individuals who are candidates, employees, contractors, and former employees.</li>

                                        <li>The types of personal data collected, used, processed, disclosed and stored by us depends on the circumstances and/or the purposes for which we may need to process your personal data. Hence, subject to the aforesaid, such personal data may include:
                                            <ul>
                                                <li>Name;</li>
                                                <li>Contact information (address, phone number, e-mail address);</li>
                                                <li>Passport or identification details;</li>
                                                <li>Employee identification number;</li>
                                                <li>Date of birth;</li>
                                                <li>Contents of any other identification provided to the Company for application or employment purposes;</li>
                                                <li>Education and employment history;</li>
                                                <li>Work-related skills and experience;</li>
                                                <li>Professional credentials or licenses;</li>
                                                <li>Membership in professional organizations;</li>
                                                <li>Any other information contained on an individual’s Curriculum Vitae (CV);</li>
                                                <li>Citizenship and work authorization status;</li>
                                                <li>Disability and health-related information;</li>
                                                <li>Next-of-kin or emergency contact information;</li>
                                                <li>Information from and related to publicly published profiles you’ve created on job-related social media platforms and job boards (such as LinkedIn, Monster, or Indeed);</li>
                                                <li>Information provided by references; and</li>
                                                <li>Information regarding your career interests, preferences, and qualifications.</li>
                                            </ul>
                                        </li>

                                        <li>In addition, under certain circumstances and consistent with prevailing laws, we may     request types of personal data that are viewed by some countries as “sensitive”:
                                            <ul>
                                                <li>National identification, tax identification, passport number or social security number(s);</li>
                                                <li>Financial or bank account information;</li>
                                                <li>Results of drug, criminal, and/or background screenings;</li>
                                                <li>Benefits selections, potentially including health insurance and retirement planning information;</li>
                                                <li>Biometric data;</li>
                                                <li>Information contained within your personnel file with the Company, such as performance reviews, disciplinary action, and other payroll related information; and</li>
                                                <li>Health information, including that related to a work-related claim (e.g.  workers’ compensation claim).</li>
                                            </ul>
                                        </li>

                                        <li>In some jurisdictions, in order to comply with statutes, rules, and regulations pertaining to equal employment opportunities or to assist the Company or its related corporations in compiling data for its equal opportunities practices and reporting, we may also ask you to provide gender, race/ethnicity or disability information. The provision of this type of information will be voluntary, unless it is required by law, and failure to provide this information will not hinder your employment or project opportunities.</li>

                                        <li>Your interactions with our websites and mobile applications may also result in the collection, processing, and storage of the following types of information from you:
                                            <ul>
                                                <li>Geolocation data;</li>
                                                <li>Other information you may provide to us, such as through surveys, interactions with our Social Media, or other mediums used to contact the Company.</li>
                                            </ul>
                                        </li>
                                        <li>Some of our websites require you to provide your personal data, such as when you create a profile and log-in credentials. Instead of having to type in your personal data, some of these functionalities may allow you to use third-party authentication tools such as Facebook, Twitter, and Google to populate certain fields. By authenticating through one of the social media options, you allow us to receive your personal data and other information that is accessible through these tools. This information may be incorporated into your profile. For any such tool you choose to use, we encourage you to also review the tool provider’s privacy policy and any terms and conditions.</li>
                                        <li>We may use your personal data to permit you to participate in live social media feeds. If you choose to participate, your public username may be displayed on the sites along with your post, including, but not limited to, comments, images, and video.</li>
                                        <li>We may provide you with access to third-party functionality that allows you to post content to your social media account(s). Any information that you provide to your social media account(s) through use of such third-party functionality is governed by the applicable third party's privacy policy, and not by this Privacy Policy. For the avoidance of doubt, we are not responsible for any personal data that you provide to such third party.</li>
                                    </ol>
                                </li>

                                <br />

                                <li><h6>The purpose for which we collect, use and disclose your personal data</h6>

                                    <ol type="i">
                                        <li>We will/may collect, use, disclose and/or process your personal data for one or more of the following purposes:
                                            <ol type="a">
                                                <li>administering, processing and/or dealing with any transactions between you and the Company and/or any of its related corporations including but not limited to any application by you for employment or work with the Company;</li>
                                                <li>recruiting, assessing and/or matching you with/for potential positions or assignments with third party organisations (or our customers), and/or dealing with matters related thereto such as offering you a placement of work or job with such third party organisations (or our customers) or referring you for employment to a third party organisation (or our customer);</li>
                                                <li>administering, managing and/or dealing with the provision of work or job placement services to you. This includes us sharing your personal data with our customers or third party organisations, for your potential placement or employment opportunities with those customers/third party organisations who are seeking employees or workers, or to the organisation to which you have been assigned to work;</li>
                                                <li>carrying out your instructions or responding to any enquiry given by (or purported to be given by) you or on your behalf;</li>
                                                <li>administering, facilitating, processing and/or dealing in any matters relating to your use of any of the Company’s or its related corporations’ websites, any functionalities on the websites or any transactions or activities carried out by you on or through any of the Company’s or its related corporations’ websites, such as but not limited to live social media feeds;</li>
                                                <li>monitoring, processing and/or tracking your use of any of the Company’s or its related corporations’ websites in order to provide you with a seamless experience, facilitating or administering your use of any of the Company’s or its related corporations’ websites, and/or to assist us in improving your experience in using any of the Company’s or its related corporations’ websites;</li>
                                                <li>contacting you or communicating with you via phone/voice call, text message and/or fax message, email and/or postal mail for the purposes of administering your use of any of the Company’s or its related corporations’ website or any transactions you have with us, or for the provision of our services to you. You acknowledge and agree that such communication by us could be by way of the mailing of correspondence, documents or notices to you, which could involve disclosure of certain personal data about you to bring about delivery of the same as well as on the external cover of envelopes/mail packages;</li>
                                                <li>carrying out due diligence or other screening activities (including background checks) in accordance with legal or regulatory obligations applicable to us, the requirements or guidelines of governmental authorities which we determine are applicable to us, and/or our risk management procedures that may be required by law or that may have been put in place by us;</li>
                                                <li>to prevent or investigate any fraud, unlawful activity or omission or misconduct, whether or not there is any suspicion of the aforementioned; dealing with conflict of interests; or dealing with and/or investigating complaints;</li>
                                                <li>creating reports with respect to our transactions with you, and/or producing statistics and research of such transactions for internal and/or statutory reporting and/or record-keeping requirements for us or our related corporation(s);</li>
                                                <li>complying with or as required by any applicable law, governmental or regulatory requirements of any jurisdiction applicable to us or our related corporations, including meeting the requirements to make disclosure under the requirements of any law binding on us or our related corporations, and/or for the purposes of any guidelines issued by regulatory or other authorities, with which we or our related corporations are expected to comply;</li>
                                                <li>complying with or as required by any request or direction of any governmental authority which we are expected to comply with; or responding to requests for information from public agencies, ministries, statutory boards or other similar authorities. For the avoidance of doubt, this means that we may/will disclose your personal data to the parties upon their request or direction;</li>
                                                <li>storing, hosting, backing up (whether for disaster recovery or otherwise) of your personal data, whether within or outside Australia;</li>
                                                <li>facilitating, dealing with and/or administering external audit(s) or internal audit(s) of the business of the Company and/or its related corporations;</li>
                                                <li>
                                                    dealing with and/or facilitating a business asset transaction or a potential business asset transaction, where such transaction involves any the Company and/or its affiliate(s) as a participant, and there may be other third-party organisations who are participants in such transaction. The term “business asset transaction” means the purchase, sale, lease, merger or amalgamation or any other acquisition, disposal or financing of an organisation or a portion of an organisation or of any of the business or assets of an organisation,
                                                     (the purposes set out above shall be collectively referred to as the “Purposes”).
                                                </li>
                                            </ol>
                                        </li>

                                        <li>The Company may/will need to disclose your personal data to third parties, whether located within or outside Australia, for one or more of the above Purposes, as such third parties, would be processing your personal data for one or more of the above Purposes. In this regard, you hereby acknowledge, agree and consent that we may/are permitted to disclose your personal data to such third parties (whether located within or outside Australia,) for one or more of the above Purposes and for the said third parties to subsequently collect, use, disclose and/or process your personal data for one or more of the above Purposes. Without limiting the generality of the foregoing or of the immediately preceding paragraph setting out the Purposes, such third parties include:
                                            <ol type="a">
                                                <li>our associated or affiliated organisations or related corporations;</li>
                                                <li>any of our agents, contractors or third-party service providers that process or will be processing your personal data on our behalf including but not limited to those which provide administrative or other services to us such as mailing houses, telecommunication companies, information technology companies and data centres;</li>
                                                <li>our customers or third-party organisations, who may be your potential employers or hirers or organisations which engage you for your services; and</li>
                                                <li>third parties to whom disclosure by the Company is for one or more of the Purposes and such third parties would in turn be collecting and processing your personal data for one or more of the Purposes.</li>
                                            </ol>
                                        </li>

                                        <li>Your consent pursuant to this Privacy Policy is additional to and does not supercede any other consents that you had provided to the Company about processing of your personal data.</li>
                                        <li>Data that has been anonymized does not personally identify you and is not covered by this Privacy Policy.</li>
                                        <li>We hold our employees, agents, and suppliers accountable for maintaining the trust that you place in us with your personal data. Your personal data will not be used or shared except as in accordance with applicable law relating to personal data.</li>
                                        <li>Your personal data may be shared with third party service providers as set out at paragraph 3.2 above.</li>
                                        <li>
                                            Consistent with paragraph 3.2 above, as a result of the scope of the Company’s operation, the sharing of your personal data with our other group entities, service providers, and customers may result in your personal data being sent to countries outside of your country of residence, which may have data protection laws that differ from those in your country of residence. Regardless of the source or destination location of your information, we will always protect your personal
                                             data as described in this Privacy Policy, and in accordance with applicable data protection laws when transferring your personal data.
                                        </li>
                                    </ol>
                                </li>

                                <br />

                                <li><h6>Your rights and choices</h6>
                                    <ol type="i">
                                        <li>The amount of personal data you are required to supply when requesting our services will be limited to that which is relevant to and reasonable for the supply of such services or for the purposes for which such personal data is being collected.</li>
                                        <li>Where you have asked us to do the following, or have otherwise given us your consent to do the following, we may periodically use your contact information to send you updates via e-mail in order to alert you to promotional opportunities or services relevant to your interactions with us, such as jobs in our database that match your selected criteria. Each notification will provide instructions on how to opt out of receiving similar e-mails from the registered service or resource. At the point where we request personal data about you, our site also gives you the opportunity to decide which communications you wish to receive.  The database is automatically updated with your preferences when you opt out. When your interactions with the Company have resulted in your registration for multiple services or resources it may be necessary to opt out from each service separately.</li>
                                        <li>Additionally, you have the right to request access to, to withdraw your consent to the use and processing of, and request the correction of inaccuracies of, personal data that the Company maintains about you, or that is in the Company’s possession or under its control. We may limit or deny requests for access or charge reasonable fees for access, in accordance with applicable law data protection law.</li>

                                        <li>Where you seek access to and/or seek to correct the personal data currently in our possession or control, we will need enough information from you in order to ascertain your identity as well as the nature of your request, to be able to deal with your request.</li>
                                        <li>We will process your request to withdraw your consent within a reasonable time from such a request being made, and will thereafter not collect, use and/or disclose your personal data in the manner stated in your request. However, your withdrawal of consent could result in certain legal consequences arising from such withdrawal. In this regard, depending on the extent of your withdrawal of consent for us to process your personal data, it may mean that we will not be able to continue providing our services such as recruitment, placement, or employment, as the case may be.</li>
                                    </ol>
                                </li>

                                <br />

                                <li><h6>Administration, Management, Protecting and retaining your information</h6>
                                    <ol type="i">
                                        <li>We will take reasonable efforts to ensure that your personal data is accurate and complete, if your personal data is likely to be used by the Company to make a decision that affects you or disclosed to another organisation. However, this means that you must also update us of any changes in your personal data that you had initially provided us with. We will not be responsible for relying on inaccurate or incomplete personal data arising from your not updating us of any changes in your personal data that you had initially provided us with.</li>
                                        <li>We will also put in place reasonable security arrangements to ensure that your personal data is adequately protected and secured. Appropriate security arrangements will be taken to prevent any unauthorized access, collection, use, disclosure, copying, modification, leakage, loss, damage and/or alteration of your personal data. However, we cannot assume responsibility for any unauthorized use of your personal data by third parties which are wholly attributable to factors beyond our control.</li>
                                        <li>We will also put in place measures such that your personal data in our possession or under our control is destroyed and/or anonymized as soon as it is reasonable to assume that (i) the purpose for which that personal data was collected is no longer being served by the retention of such personal data; and (ii) retention is no longer necessary for any other legal or business purposes.</li>
                                    </ol>
                                </li>
                            </ol>

                            <br /><br />

                            <div className="last-paragraph">
                                <p>We may update this Privacy Policy from time to time. If we change our Privacy Policy, we will post the revised version here, with an updated revision date.</p>
                                <p>If you have any questions, grievances or complaints, or comments about this Privacy Policy and/or the handling of your personal data by us, please contact us at:</p>
                                <p>Address: 20 – 22 Wentworth Street Parramatta NSW 2150<br/>
                                Email: reception@whitecollarblue.com.au</p>
                            </div>

                        </article>
                    </div>
                </section>
            </>
        )
    }
}
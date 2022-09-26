import BasePage from "components/BasePage";
import React from "react";

export default function Privacy() {
  return (<>

    <BasePage>

      <section className="lg:relative bg-white">

        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-16 lg:text-left px-8">

          <div>
            <h2 className="text-4xl tracking-tight font-extrabold text-indigo-600 mb-16">
              Data Compliance &amp; Security
            </h2>
            <p className="mx-auto text-center mb-10 w-2/3">
              We go above and beyond the legal
              requirements to protect your data. This document outlines the additional precautions we take to keep your
              customers’ data safe.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                ISO 27001 compliant data centres
              </strong>
            </p>
            <p>
              Our technical
              infrastructure is provided by Amazon Web Services, which maintains a number of globally recognized
              compliance certifications, to include Cloud Security Alliance, ISO 27001, PCI Level 1, SOC 2 and SOC 1.
              All
              of our services are cloud-based. We do not run our own infrastructure.
            </p>
            <p>
              Our data services are hosted on
              Amazon Web Services (AWS) facilities across the EU and the US. We do not have control over where our
              third-party services are hosted, for example, Google Analytics. All of our clients’ data is hosted and
              processed using AWS.
            </p>
            <p>
              Our infrastructure is spread across 3 AWS data centres (also known as
              availability zones).This adds redundancy to our system, as should one of the data centres fail
              unexpectedly,
              our services will continue to work.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Network Design
              </strong>
            </p>
            <p>
              Our network design
              is based on a 3-tier structure, where the internal network is separated from the DMZ, and the DMZ is
              separated from the external network. Detailed information is available upon further request.</p><p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Firewalls
              </strong>
            </p>
            <p>We use Amazon EC2 Security Groups which act as a virtual firewall that
              controls the traffic for our server instances. In addition, we use Amazon GuardDuty to perform threat
              detection. GuardDuty continuously monitors for malicious or unauthorized behaviour on our AWS accounts and
              workloads. It monitors for activity such as unusual API calls or potentially unauthorized deployments that
              indicate a possible account compromise. Additionally, it is used to detect potentially compromised
              instances
              or reconnaissance by attackers.
            </p>
            <p>Firewall rules are reviewed on a daily basis, to detect rules that
              could create vulnerabilities and remove unused rules. We are also automatically notified when a new
              firewall
              rule is added and this is reviewed. Only senior engineers may update firewall rules.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Data storage and access
              </strong>
            </p>
            <p>
              Client data is stored in multi-tenant data stores. This means that we do
              not have individual data stores for each client. Should you wish to have your own dedicated datastore,
              please contact us and we can discuss your requirements.
            </p>
            <p>
              In order to prevent one client from accessing
              another client’s data, we have a number of low-level code checks that fail upon not being provided with
              the
              logged-in customer identifier. We employ automated testing prior to every code change being deployed on
              our
              production services. Additionally, we periodically perform code audits to prevent this from happening.
            </p>
            <p>
              Internally, all database entity types have a client identifier field. All queries are required to provide
              a client identifier. This check has been implemented at a low-level. It ensures that one client cannot
              access another client’s data.
            </p>
            <p>
              We run in a virtual private cloud (VPC). Our database services live
              inside our private subnet. This means that only servers in the public subnet can communicate with our
              database servers. All ports (besides HTTP (80) and HTTPS (443)) on servers living inside our public subnet
              have been restricted to whitelisted IPs defined in a security group. The whitelisted IPs are the addresses
              that we use internally and are inaccessible from sources outside our network. We only permit server access
              to public keys whitelisted on our servers. This prevents SSH server access from computer devices outside
              of our organisation.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Encryption
              </strong>
            </p>
            <p>Your data is encrypted at rest in AWS
              S3 buckets, AWS RDS instances and our internally-managed databases. AES256 encryption is used by default
              via AWS’ encryption services. Key management is handled by AWS KMS. This ensures the content is preserved
              and safe from prying eyes and manipulation.
            </p>
            <p>
              All data sent to and from Traitly is encrypted in
              transit using state-of-the-art 256-bit encryption.
            </p>
            <p>
              Our platform and API are SSL-only.
            </p>
            <p>
              All communication between you and Traitly - that includes your data - traverses the Internet via encrypted
              HTTPS traffic using TLS v1.2. This encryption during communication ensures information cannot be read or
              manipulated by unauthorized third parties.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Code reviews and secure development lifecycle
              </strong>
            </p>
            <p>We implement the “secure by design” philosophy, whereby security features are
              embedded in the product and our overall architectural design. This ensures that new and existing
              functionalities are free of vulnerabilities. In addition, we conduct code reviews through the
              implementation of a Secure Software Development Life Cycle (SSDLC) framework, where the code is reviewed
              by peers prior to being merged into our testing, staging and production environments. In addition, perform
              weekly team-level code reviews.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Personnel
              </strong>
            </p>
            <p>
              Our engineering team includes
              people who have played significant roles in both startups and large organisations. They have experience
              building Internet-facing applications that house highly confidential and mission-critical data.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Incident response
              </strong>
            </p>
            <p>
              In the event of a data security incident, all key personnel are
              requested to respond immediately. Those in charge of affected parts of our application and infrastructure
              are notified and assembled to address the incident quickly. Upon notification, incident resolution time is
              typically on the order of minutes.
            </p>
            <p>
              Following a data security incident, a post-mortem analysis is
              performed. The outcome of our analysis is discussed internally and shared among the relevant personnel.
              The analysis includes actionable items to help make it easier to detect and prevent the occurrence of
              similar incidents in future.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Backup and redundancy
              </strong>
            </p>
            <p>
              All mission critical systems are redundant. Our infrastructure components are deployed in at least three
              availability zones on AWS, minimizing disruptions caused by any failure and keeping your data available.
              Elastic Load Balancers are used to automatically split the load and segregate traffic from the Internet to
              all nodes of our frontend layer. Amazon Aurora is our backup manager. A complete client data backup is
              taken once every 6 hours. The backed up data is then stored on Amazon S3 in encrypted, where it is
              available for up to 7 days. You are free to download all your data to back it up off-site by fetching data
              via our API.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Access to client data
              </strong>
            </p>
            <p>
              Access to client data is very restricted. We hand-pick and train engineers and support staff who,
              after your explicit permission, are permitted to
              help fix problems by accessing data that you authorize. These actions are recorded, audited and monitored
              using internal monitoring. Support staff may also require access to your data during the setup and
              onboarding process. This access is only granted following your explicit permission.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Data retention
              </strong>
            </p>
            <p>
              All client data is retained only for as long as is necessary. At the end of the
              engagement, a client may choose to export data via our API. All sensitive data is then destroyed.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Distributed denial of service (DDoS) protection
              </strong>
            </p>
            <p>
              Our APIs and web application are
              protected in multiple ways against denial of service attacks. AWS provides volumetric denial of service
              protection through AWS Shield and Elastic Load Balancing to ensure high availability. Amazon comes with a
              built-in network and security monitoring systems designed to provide increased protection against threats
              like Distributed Denial of Service (DDoS), Man in the Middle (MITM) attacks, password brute-force
              detection, and packet sniffing.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Build Automation
              </strong>
            </p>
            <p>
              We deploy code on our
              production server tens, and in some cases, hundreds, of times per day. This enables us to respond to data
              security incidents with code changes within minutes. We have a semi-automated deployment system, which
              requires us to peer-review all code changes before being deployed to our production servers. Code changes
              are reflected across all of our production servers within minutes. We use GitHub and AWS to help automate
              this process.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Authentication
              </strong>
            </p>
            <p>
              Traitly is served 100% over HTTPS. We
              use two-factor authentication (2FA) and stringent password policies across our own and third-party
              services we use. These include GitHub, AWS, Google, and Traitly.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Monitoring and Reporting
              </strong>
            </p>
            <p>
              We use CloudTrail to log and monitor all events performed on our infrastructure.
              CloudTrail provides details regarding changes that are made, when they are made, and by whom. This data is
              periodically exported to S3. This data is also retained for 90 days.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Application
              </strong>
            </p>
            <p>
              We use our own internal audit trail and logging system to log the actions of our own staff made on
              the Traitly platform. This includes data about when a staff member accessed a client account, the
              information they viewed, and any changes that were made. This is accompanied by a staff member identifier
              and the device used to access the data.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Vulnerability Management
              </strong>
            </p>
            <p>
              We have a complete list of all security controls in place, e.g., security groups, firewalls, and IDses
              (AWS
              GuardDuty), and CloudFormation Templates (used for secure environment configuration). This list is used
              should we need to respond to a vulnerability alert.
            </p>
            <p>‍</p>
            <p>
              We use a third-party to receive
              vulnerability alerts. We compare reported vulnerabilities with those listed in our inventory and control
              list. In the event that a vulnerability is identified, it is assigned a score, using the CVSS scoring
              system, and an owner. We have an internal SLA that stipulates deadlines for fixing vulnerabilities, while
              progress is tracked by tools and, if necessary, a post-mortem is arranged as a learning exercise for our
              engineers to improve code security. We share this responsibility among our in-house engineering team.
            </p>
            <p>
              We apply the relevant patches. In addition, we take note of patches applied and update our inventory of
              systems and controls, where necessary. We seek to deploy patches without disrupting uptime or
              production.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Quality Assurance (QA)
              </strong>
            </p>
            <p>We make use of Git, a version-control
              system for tracking changes to our code base. We use GitHub to review and share code commits among the
              engineering team. This is used as part of our code security review. All code changes are reviewed by at
              least two engineers. Code is not shipped to production until it has been successfully run and passes unit
              and integration tests on our development and staging environments, after which it must be reviewed.
              Following a successful review, source code is merged with our main production branch.
            </p>
            <p>‍</p>
            <p>
              <strong className="text-indigo-500">
                Multi-factor authentication and SSO
              </strong>
            </p>
            <p>
              Two-factor authentication and SSO, based on the
              SAML 2.0 standard, is available for clients. We encourage the use of two-factor authentication.
            </p>
            <p>‍</p>
            <h4 className="text-2xl tracking-tight font-extrabold text-indigo-600 mb-4">
              Integrations
            </h4>
            <p>
              <strong className="text-indigo-500">
                Gmail
              </strong>
            </p>
            <p>
              Traitly's use of information received from Google APIs will adhere to the{' '}
              <a className="underline text-indigo-400"
                 href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes">
                Google API Services User Data Policy</a>,{' '}including the Limited Use requirements.
            </p>

          </div>

        </div>

      </section>

    </BasePage>

  </>);
};
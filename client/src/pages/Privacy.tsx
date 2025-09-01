export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-12">
          <h1 className="text-5xl font-bold text-center mb-8">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <p className="text-xl leading-relaxed text-center text-gray-600 mb-12">
              Last updated: September 1, 2025
            </p>
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p>
                At G-Tech, we collect information you provide directly to us, such as when you create an account, 
                use our AI platforms, contact us, or participate in surveys. This includes personal information 
                like your name, email address, phone number, and professional details.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our AI-powered services (Medi-sense, QMS AI, LearnBot)</li>
                <li>Communicate with you about products, services, and company updates</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Ensure the security and integrity of our platforms</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Protection & Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information. 
                All data is encrypted in transit and at rest, and we maintain strict access controls. 
                Our medical diagnostics platform (Medi-sense) is HIPAA compliant and follows healthcare 
                data protection standards.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p>
                We do not sell, rent, or share your personal information with third parties except 
                as described in this policy. We may share information with service providers who 
                assist us in operating our business, and we may disclose information when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information. You may also 
                opt out of certain communications from us. For Canadian residents, we comply with PIPEDA. 
                For questions about your data rights, please contact us at privacy@g-tech.ca.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-blue-50 p-6 rounded-xl mt-4">
                <p><strong>G-Tech Privacy Team</strong></p>
                <p>Email: gtech.service@outlook.com</p>
                <p>Address: Victoria, British Columbia, Canada</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
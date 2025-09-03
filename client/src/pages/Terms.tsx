export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-12">
          <h1 className="text-5xl font-bold text-center mb-8">
            <span className="gradient-text">Terms of Service</span>
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <p className="text-xl leading-relaxed text-center text-gray-600 mb-12">
              Last updated: September 1, 2025
            </p>
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using Astrovoltra's AI platforms (Medi-sense, QMS AI, and LearnBot), 
                you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Description of Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Medi-sense:</strong> AI-powered medical diagnostics platform for healthcare professionals</li>
                <li><strong>QMS AI:</strong> Educational management system with intelligent analytics</li>
                <li><strong>LearnBot:</strong> Interactive AI tutoring system for personalized learning</li>
              </ul>
              <p className="mt-4">
                Our services are provided on an "as is" basis and are intended for professional use 
                in their respective domains.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information when using our services</li>
                <li>Use our platforms in compliance with applicable laws and regulations</li>
                <li>Not misuse or attempt to hack our systems</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain the confidentiality of your account credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical Disclaimer</h2>
              <p className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <strong>Important:</strong> Medi-sense is designed to assist healthcare professionals 
                and is not a substitute for professional medical judgment. Always consult with qualified 
                healthcare providers for medical decisions. G-Tech is not responsible for medical outcomes 
                based on the use of our diagnostic assistance tools. Astrovoltra is not responsible for medical outcomes based on the use of our diagnostic assistance tools.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p>
                All content, features, and functionality of our platforms are owned by Astrovoltra and 
                are protected by international copyright, trademark, patent, trade secret, and other 
                intellectual property laws. You may not reproduce, distribute, or create derivative 
                works without express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p>
                Astrovoltra shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, 
                goodwill, or other intangible losses resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p>
                These terms are governed by the laws of British Columbia, Canada, without regard 
                to its conflict of law principles. Any disputes will be resolved in the courts 
                of British Columbia.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="bg-blue-50 p-6 rounded-xl">
                <p><strong>Astrovoltra Legal Team</strong></p>
                <p>Email: <a href="mailto:gtech.service@outlook.com" className="text-blue-600 hover:text-blue-800 underline">gtech.service@outlook.com</a></p>
                <p>Address: Victoria, British Columbia, Canada</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
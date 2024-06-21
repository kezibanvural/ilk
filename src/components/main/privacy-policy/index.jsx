import React from 'react'
import "./style.scss"
import Link from 'next/link'

const PrivacyPolicyCard = () => {
  return (
    <div className='privacy-policy-card'>
        <h1>Privacy Policy</h1>
    <p>Last updated: June 21, 2024</p>
    <p>Welcome! We, Learning Matrix AI, place great importance on the privacy of our customers and users. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
    
    <h2>1. Information We Collect</h2>
    <p>a. <strong>Personal Information:</strong> We may collect directly identifiable information such as name, email address, phone number, etc., from you.</p>
    <p>b. <strong>Technical Information:</strong> We may automatically collect technical information such as IP address, browser type, visited pages, etc.</p>
    <p>c. <strong>Usage Information:</strong> We may collect information about how you use our services (e.g., which features you use).</p>
    
    <h2>2. Use of Information</h2>
    <p>a. We may use your personal information to provide services to you, provide customer support, ensure your security, improve our services, and for marketing purposes.</p>
    <p>b. We may use technical and usage information to enhance our services, debug issues, and conduct analytics.</p>
    
    <h2>3. Sharing of Information</h2>
    <p>a. We share your personal information only with your explicit consent or as required by law.</p>
    <p>b. We may share technical and usage information with our partners or service providers, but this may be in an anonymized or aggregated form.</p>
    
    <h2>4. Cookies and Similar Technologies</h2>
    <p>We may use cookies and similar technologies on our website. You have the option to refuse cookies, but this may result in some features not functioning properly.</p>
    
    <h2>5. Data Security</h2>
    <p>We employ commercially acceptable methods and security standards to protect your data. However, complete security of information transmitted over the internet cannot be guaranteed.</p>
    
    <h2>6. Children's Privacy</h2>
    <p>Our services are not directed to children under 13, and we do not knowingly collect such information.</p>
    
    <h2>7. Changes to Privacy Policy</h2>
    <p>This Privacy Policy may be updated periodically. We will use appropriate means to inform you of any changes.</p>
    
    <h2>8. Contact Us</h2>
    <p>If you have any questions regarding this Privacy Policy, please feel free to contact us at <a href="mailto:info@lmxai.com">info@lmxai.com</a>.</p>
    
    <p>This Privacy Policy constitutes the agreement between Learning Matrix AI and you regarding privacy matters. It is important to periodically review the current version.</p>
    </div>
  )
}

export default PrivacyPolicyCard
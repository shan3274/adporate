import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full bg-[#6A0DAD] text-white py-16">
      <div className="w-full max-w-6xl mx-auto px-5">
        {/* Logo and Branding Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-10">
          <div className="flex items-center">
            <Image
              src="/logo.png" 
              alt="Logo"
              width={120}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="text-sm mt-5 sm:mt-0 sm:text-right">
            © 2024 Your Company Name. All Rights Reserved.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-10">
          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul>
              <li>
                <a href="/solutions" className="text-sm hover:underline">
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="/live-conversation-platform"
                  className="text-sm hover:underline"
                >
                  Live Conversation Platform
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-sm hover:underline">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul>
              <li>
                <a href="/about-us" className="text-sm hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-sm hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul>
              <li>
                <a href="/blog" className="text-sm hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="/support" className="text-sm hover:underline">
                  Support
                </a>
              </li>
              <li>
                <a href="/documentation" className="text-sm hover:underline">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul>
              <li>
                <a href="/privacy-policy" className="text-sm hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-sm hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center sm:justify-start gap-6 mb-10">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" color="#fff" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#fff" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#fff" />
          </a>
        </div>

        {/* Footer Legal and Privacy Text */}
        <div className="text-center text-sm">
          <p>
            By using our services, you agree to our{" "}
            <a href="/terms-of-service" className="text-sm underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" className="text-sm underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Link from 'next/link';
import React from 'react'

function Footer({}) {
  return (
    <div className="text-center w-full mt-16">
      <p className="text-gray-600 mb-2">
        Nikita Morozov, {new Date().getFullYear()}
      </p>
      <p className="text-gray-600 mb-4">
        <Link className="no-underline hover:underline" href="/privacy-policy">Privacy Policy</Link>
      </p>
    </div>
)
}

export default Footer

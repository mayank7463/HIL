import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    

<footer class=" bg-[#1b1b1b] mt-10 mb-0 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between text-white ">
            <a href="https://hil.in/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse ">
                <img src="./Navbar/hil_logo.png" class="h-17" alt="hil-logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6  font-medium gap-4 sm:mb-0 hil-footer ">
                <li>
                    <a target='_blank' href="https://hil.in/copyright/" class="hover:underline me-4 md:me-6">Intellectual Property</a>
                </li>
                <li>
                    <a target='_blank' href="https://hil.in/wp-content/themes/hil/Privacy-Policy.pdf" class="hover:underline">Privacy policy</a>
                </li>
                <li>
                    <a target='_blank' href="https://hil.in/sitemap/" class="hover:underline">Sitemap</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block  text-white sm:text-center ">©<a href="https://hil.in/" class="hover:underline"></a>.2024 hil.in. All rights Reserved.
        </span>
    </div>
</footer>


  )
}

export default Footer

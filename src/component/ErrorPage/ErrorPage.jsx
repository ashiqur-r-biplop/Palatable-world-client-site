import { FaceFrownIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import './ErrorPage.css'

import errorImage from './../../assets/error_img.png'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className=''>
      <div className='container'>
        <div className='text-center error-img' style={{backgroundImage: `url(${errorImage})`}}>
          <p className='text-2xl font-semibold md:text-3xl text-[#910000] mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='text-title btn-primary'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
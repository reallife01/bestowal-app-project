import { Link } from 'react-router-dom'
import {daysRemaining } from '../store'

const ProjectCardAccount = ({projectNew}) => {

  const expired = new Date().getTime() > Number(projectNew?.expiresAt + '000')

  return (
    <div className="rounded-lg shadow-lg bg-white w-64 mx-auto mb-5">
      <Link to={'/projectDetailsAccount/'}>
        <img
          src={projectNew?.imageURL}
          alt={projectNew?.title}
          className="rounded-xl h-64 w-full object-cover"
        />

        <div className="p-4">
          <h5>{projectNew?.title}</h5>

          <div className="flex flex-col">
            <div className="flex justify-start space-x-2 items-center mb-3">
              <small className="text-gray-700">
                {projectNew?.accountName}
              </small>
              <small className="text-gray-500">
              {expired ? 'Expired' : daysRemaining(projectNew?.expiresAt) + ' left'}
            </small>
            </div>
            <div className="flex justify-start space-x-2 items-center mb-3">
              <small className="text-gray-700">
                {projectNew?.accountNumber}
              </small>
            </div>
            <div className="flex justify-start space-x-2 items-center mb-3">
              <small className="text-gray-700">
                {projectNew?.bankName}
              </small>
            </div>

            <small className="text-gray-500">
              {projectNew?.date}
            </small>
          </div>

          <div className="mb-3 w-full bg-gray-300 overflow-hidden">
            <div
              className="bg-green-600 text-xs font-medium
            text-blue-100 text-center p-0.5 leading-none
            rounded-l-full"
              style={{ width: `${(projectNew?.raised / projectNew?.cost) * 100}%` }}
            ></div>
          </div>

          <div
            className="flex justify-between items-center 
        font-bold mt-1 mb-2 text-gray-700"
          >
            <small>{} NAIRA Raised</small> {/* raised */}

            <small className="flex justify-start items-center">
              <span>{projectNew?.cost} NAIRA</span>
            </small>
          </div>
          <div
            className="flex justify-between items-center flex-wrap
            mt-4 mb-2 text-gray-500 font-bold"
          >
            {/* <small>
              {backers} Backer{backers == 1 ? '' : 's'}
            </small> */}
            <small>
              {} Backer{}
            </small>
            <div>
              {expired ? (
                <small className="text-red-500">Expired</small>
              ) : projectNew?.status == 0 ? (
                <small className="text-gray-500">Open</small>
              ) : projectNew?.status == 1 ? (
                <small className="text-green-500">Accepted</small>
              ) : projectNew?.status == 2 ? (
                <small className="text-gray-500">Reverted</small>
              ) : projectNew?.status == 3 ? (
                <small className="text-red-500">Deleted</small>
              ) : (
                <small className="text-orange-500">Open</small>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCardAccount
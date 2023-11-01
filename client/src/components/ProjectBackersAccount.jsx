import Moment from 'react-moment'
import { useState } from 'react'

const ProjectBackersAccount = ({ }) => {
  const tempState = {
    backers: 0,
    contribution: 0,
  }

  const [backers, setBackers] = useState(tempState)



  return (
    <div className="flex flex-col justify-center items-start md:w-2/3 px-6 mx-auto">
      <div
        className="max-h-[calc(100vh_-_25rem)] overflow-y-auto
        shadow-md rounded-md w-full mb-10"
      >
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="text-white font-medium
                px-6 py-4 text-left"
              >
                Backer
              </th>
              <th
                scope="col"
                className="text-white font-medium
                px-6 py-4 text-left"
              >
                Donations
              </th>
              <th
                scope="col"
                className="text-white font-medium
                px-6 py-4 text-left"
              >
                Refunded
              </th>
              <th
                scope="col"
                className="text-white font-medium
                px-6 py-4 text-left"
              >
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {backers.map((backer, i) => (
              <Backer key={i} backer={backer} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const Backer = ({ backer }) => (
  <tr className="text-white border-b border-gray-200">
    <td
      className="text-sm font-light
      px-6 py-4 whitespace-nowrap"
    >
      <div className="flex justify-start items-center space-x-2">
        <Identicon
          className="h-10 w-10 object-contain rounded-full shadow-md"
          string={backer.owner}
          size={25}
        />
        <span>{backer.owner}</span>
      </div>
    </td>
    <td
      className="text-sm font-light
                  px-6 py-4 whitespace-nowrap"
    >
      <small className=" text-orange-500 flex justify-start items-center space-x-1">
        <span className="text-orange-700 font-medium">
          {backer.contribution} NAIRA
        </span>
      </small>
    </td>
    <td
      className="text-sm font-light
      px-6 py-4 whitespace-nowrap"
    >
      {backer.refunded ? 'Yes' : 'No'}
    </td>
    <td
      className="text-sm font-light
      px-6 py-4 whitespace-nowrap"
    >
      <Moment fromNow>{backer.timestamp}</Moment>
    </td>
  </tr>
)

export default ProjectBackersAccount




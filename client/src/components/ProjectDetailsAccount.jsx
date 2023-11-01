const ProjectDetailsAccount = (imageURL, title, expiresAt, backers, raised, description, cost, accountName, data) => {
  const expired = new Date().getTime() > Number(expiresAt + '000')

  return (
    <div className="pt-24 mb-5 px-6 flex justify-center">
      <div className="flex justify-center flex-col md:w-2/3">
        <div
          className="flex justify-start items-start
        sm:space-x-4 flex-wrap"
        >
          <img
            src={imageURL}
            alt={title}
            className="rounded-xl h-64 object-cover sm:w-1/3 w-full"
          />

          <div className="flex-1 sm:py-0 py-4">
            <div className="flex flex-col justify-start flex-wrap">
              <h5 className="text-white text-xl font-medium mb-2">
                {title}
              </h5>
              <small className="text-white">
                {expired
                  ? 'Expired'
                  : daysRemaining(expiresAt) + ' left'}
              </small>
              <small className="text-blue-500 font-bold">
                  {backers} Backer{backers == 1 ? '' : 's'}
                </small>
            </div>
            <div className="flex justify-between items-center w-full pt-1">
              <div className="font-bold">
                {expired ? (
                  <small className="text-red-500">Expired</small>
                ) : data?.status == 0 ? (
                  <small className="text-white">Open</small>
                ) : data?.status == 1 ? (
                  <small className="text-green-500">Accepted</small>
                ) : data?.status == 2 ? (
                  <small className="text-gray-500">Reverted</small>
                ) : data?.status == 3 ? (
                  <small className="text-red-500">Deleted</small>
                ) : (
                  <small className="text-orange-500">Paid</small>
                )}
              </div>
            </div>
            <div>
              <p className="text-orange-700 font-light mt-2">{description}</p>
              <div className="w-full overflow-hidden bg-gray-300 mt-4">
                <div
                  className="bg-blue-600 text-xs font-medium
              text-blue-100 text-center p-0.5 leading-none
              rounded-l-full h-1 overflow-hidden max-w-full"
                  style={{
                    width: `${(raised / cost) * 100}%`,
                  }}
                ></div>
              </div>

              <div className="text-orange-600 flex justify-between items-center font-bold mt-2">
                <small>{raised} NAIRA Raised</small>
                <small className="flex justify-start items-center">
                  <span>{cost} NAIRA</span>
                </small>
              </div>

              <div className="flex justify-start items-center space-x-2 mt-4">
                {data == 0 ? (
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600
              text-white font-medium text-xs leading-tight uppercase
              rounded-full shadow-md hover:bg-blue-700"
                  >
                    Back Project
                  </button>
                ) : null}

                {accountName ? (
                  data != 3 ? (
                    data == 1 ? (
                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-orange-600
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md hover:bg-orange-700"
                      >
                        Payout
                      </button>
                    ) : data != 4 ? (
                      <>
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-gray-600
                          text-white font-medium text-xs leading-tight uppercase
                          rounded-full shadow-md hover:bg-gray-700"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-red-600
                          text-white font-medium text-xs leading-tight uppercase
                          rounded-full shadow-md hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-gray-600
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md hover:bg-gray-700"
                      >
                        Project Closed
                      </button>
                    )
                  ) : null
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsAccount


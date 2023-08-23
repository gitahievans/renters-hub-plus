import Image from 'next/image'
import React from 'react'
import house from '@/public/images/house.jpg'

const TableRow = () => {
  return (
      <tr className="bg-gray-200 border-b border-b-gray-400 group hover:bg-gray-300 overflow-x-auto">
          <td className="w-4 p-4">
              <div className="flex items-center">
                  <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                      checkbox
                  </label>
              </div>
          </td>
          <th scope="row" className="px-6 py-4">
              <div className="text-base font-semibold text-gray-500 group-hover:text-gray-950">89898</div>
          </th>
          <td className="px-6 py-4 text-gray-900 group-hover:text-gray-950">
              Three Bedroom near Oloibon
          </td>
          <td className="px-6 py-4 text-gray-900 group-hover:text-gray-950">
              <div className="flex items-center">09/23/2023</div>
          </td>
          <td className="px-6 py-4">
              <div className=" bg-green-700 py-2 rounded-lg flex justify-center">
                  <p className='font-medium text-gray-100'>Approved</p>
              </div>
          </td>
      </tr>
  )
}

export default TableRow
import Image from 'next/image'
import React from 'react'
import house from '@/public/images/house.jpg'

const TableRow = () => {
  return (
      <tr className="bg-white border-b overflow-x-auto">
          <td className="w-4 p-4">
              <div className="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" className="checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
              </div>
          </td>
          <th scope="row" className="px-6 py-4">
                  <div className="text-base font-semibold">89898</div>
          </th>
          <td className="px-6 py-4">
              Three Bedroom near Oloibon
          </td>
          <td className="px-6 py-4">
              <div className="flex items-center">
                 09/23/2023
              </div>
          </td>
          <td className="px-6 py-4">
              <a href="#" className="font-medium text-green-600  hover:underline">Approved</a>
          </td>
      </tr>
  )
}

export default TableRow
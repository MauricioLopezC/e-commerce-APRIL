'use client'
import { Select } from "@headlessui/react"

function CantidadSelect({ setValue }) {
  return (
    <Select className="w-full py-1.5 bg-white focus:bg-gray-200"
      name="status"
      aria-label="Project status"
      onChange={(e) => {
        setValue(e.target.value)
      }}
    >
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
    </Select >
  )
}

export default CantidadSelect

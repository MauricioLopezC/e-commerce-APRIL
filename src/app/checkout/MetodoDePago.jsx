const radios = ["Tarjeta Visa/Mastercard", "Apple pay", "Paypal"]

function MetodoDePago() {
  return (
    <div>
      <ul className="space-y-1">
        {/* Radio groups */}
        {
          radios.map((item, idx) => (
            <li key={idx} className="flex items-center gap-x-2">
              <input type="radio" name="role" id={idx} className="form-radio border-gray-400 focus:ring-gray-600 duration-150" />
              <label htmlFor={idx} className="text-sm  font-medium">
                {item}
              </label>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default MetodoDePago

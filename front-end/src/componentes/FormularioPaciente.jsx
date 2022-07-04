

const FormularioPaciente = () => {
  return (
    <form className="bg-white py-10 px-5 md:w-1/2 rounded-lg">
        <div>
            <label 
                className="text-gray-700 uppercase font-bold text-sm"
                htmlFor="nombre"
                >Nombre del paciente</label>

            <input id="nombre" type="text" className="border w-full p-2 placeholder-gray-400" placeholder="Nombre del paciente" />

        </div>

    </form>
  )
}

export default FormularioPaciente
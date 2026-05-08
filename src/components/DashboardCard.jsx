function DashboardCards({title, count}) {
      return (

        <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold">
                {title}
            </h2>

            <h1 className="text-4xl font-bold text-blue-600 mt-2">
                {count}
            </h1>

        </div>
    )
}

export default DashboardCards;
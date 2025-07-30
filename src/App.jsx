import './App.css'

function App() {
  const medicines = [
    { name: 'Paracetamol', price: '₹5.99', stock: 100 },
    { name: 'Amoxicillin', price: '₹12.50', stock: 50 },
    { name: 'Ibuprofen', price: '₹7.25', stock: 75 },
    { name: 'Aspirin', price: '₹4.99', stock: 120 },
    { name: 'Omeprazole', price: '₹15.75', stock: 30 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Jahim Medical Shop</h1>
        <p className="text-gray-600">Your trusted neighborhood pharmacy</p>
      </header>
      
      <main>
        <h2 className="text-2xl font-semibold mb-4">Available Medicines</h2>
        <ul className="bg-white shadow-md rounded-lg overflow-hidden">
          {medicines.map((medicine, index) => (
            <li key={index} className="border-b last:border-b-0 p-4 hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <span className="font-medium">{medicine.name}</span>
                <div>
                  <span className="text-green-600 mr-4">{medicine.price}</span>
                  <span className="text-gray-500">Stock: {medicine.stock}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
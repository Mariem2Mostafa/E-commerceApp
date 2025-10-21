import React ,{ useState ,useEffect, act} from 'react'
import { NavLink } from "react-router-dom";
import "./Store.css"
import axios from 'axios'

export default function Store() {
  const [products, setProducts] = useState([]);
  const [filterPro, setFilterPro] = useState([]);
  const [active, setActive] = useState('All');
  const handleFilter = (category) => {
    if (category === 'All') {
      setFilterPro(products);
    } else {
      
      filteredProducts(category);
    }
    setActive(category);
    
  }

  const categories = [
    'All',
    'Clothes',
    'Electronics',
    'Furniture',
    'Shoes',
    'Miscellaneous'
  ];


  useEffect(() => { 
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://api.escuelajs.co/api/v1/products')
        setProducts(res.data)
        console.log(res.data);
        setFilterPro(res.data)
        
        
      } catch (error) {
        console.error("Error fetching products:", error);
        
      }
    }
    fetchProducts()
  }, [])
  const filteredProducts = ((category) => {
    const updatedList = products.filter((product) => product.category.name === category)
    setFilterPro(updatedList)
  })
  console.log(filterPro);
  

  return (
    <div className='store my-4'>
      <div className='container text-center'>
        <h1 className='fw-bold '>Latest Products</h1>
        < hr />
         <div className="buttonss d-flex justify-content-center pb-5">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn btn-outline-dark me-2 mt-2 ${
                active === category ? 'active' : ''
              }`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="row g-4">
          {filterPro.map((product) => {
            
            return(
              
  
               <div className="col-md-3">
              <div className="card h-100 text-center p-4  border-3">
                  <img src={product.images[0]} className="card-img-top" alt={product.title} />
                  <div className="card-body">
                      <NavLink to={`/store/product/${product.id}`} className="btn btn-outline-light">
                        Buy Now
                      </NavLink>
                    </div>
                   <div className="card-detail mt-3">
                    <h5 className="card-title">
                      {product.title}
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                  </div>
            </div>
  
            </div>
            )
          }
        
          )}
         
        </div>

      </div>

      
    </div>
  )
}

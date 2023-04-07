import styles from "./SearchBar.module.css"
import { useState } from "react"

export default function SearchBar(props) {

   const [id, setId] = useState("")

   const handleChange = e => {
      setId(e.target.value)
   }

   return (
      <div>
         <input type='search' name="search" id="" onChange={handleChange} />
         <button className={styles.buttonAgregar} onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}

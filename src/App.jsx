
import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';
import { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';

const App = () => {
const [colors,setColors]=useState(new Values('#f15025').all(10))
// toast.error('error')
// toast.success('success')

const addColor=(color)=>{
  try {
    const newColor= new Values(color).all(10)
    setColors(newColor)
  } catch (error) {
toast.error(error.message)
  }
}
  return <main>
    <Form addColor={addColor} />
    <ColorList colors={colors} />
    <ToastContainer position='top-center' />
  </main>;
};
export default App;
